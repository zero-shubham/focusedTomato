import React,{Component} from 'react';
import {connect} from 'react-redux';

import moment from 'moment';

import TaskList from './AtomicComponents/TaskList';
import Chart from './AtomicComponents/Chart';

import database from '../firebase/firebase';

class Stats extends Component{
    constructor(props){
        super(props);

        this.state = {
            dashboard: {
                displayBy: 'tasks',
                rangeOfData: 'today',
                task: ''
            },
            data: {},
            type: ''
        };
        this.fetchedData = undefined;
        this.filteredData = {};
    };

    filterFetchedDataByDays = (days) => {
        let lastWeek;
        if(days === 'month')
            lastWeek = moment().subtract(1, 'month').calendar().split('/');
        else if(days === '6months')
            lastWeek = moment().subtract(6, 'month').calendar().split('/');
        else if(typeof(days) === 'number')
            lastWeek = moment().subtract(days, 'days').calendar().split('/');
        
        
        //logic for extrating datelist
        const beginDate = lastWeek[1]+ ':' + lastWeek[0] + ':' + lastWeek[2];
        let dateList;
        if(Object.keys(this.fetchedData).indexOf(beginDate) === -1)
            dateList = Object.keys(this.fetchedData).slice(0,Object.keys(this.fetchedData).indexOf(this.props.date)+1);
        else
            dateList = Object.keys(this.fetchedData).slice(Object.keys(this.fetchedData).indexOf(beginDate),Object.keys(this.fetchedData).indexOf(this.props.date)+1);

        dateList.forEach((date) => {
            this.filteredData[date] = this.fetchedData[date];
        });
    }

    filterDataByTasks = () => {
        if(this.fetchedData[this.state.dashboard.task])
            this.filteredData = this.fetchedData[this.state.dashboard.task]
    }

    //fetching data from firebase
    fetchData = () => {
        //Logic when data to be fetched is of one day
        if(this.state.dashboard.rangeOfData === 'today'){
            database.ref(`users/${this.props.uid}/data/${this.props.date}`).once("value", (snapshot) => {
                if(snapshot.val()){
                    if(snapshot.val()){
                        this.fetchedData = snapshot.val();
                    }
                }
            }).then(() => {
                //******LOGIC TO FILTER DATA*******
                if(this.state.dashboard.displayBy === 'tasks'){
                    this.filterDataByTasks()
                    //setting state to map data
                    this.setState((state) => ({
                        ...state,
                        type: 'bar',
                        data: {
                            labels: Object.keys(this.filteredData),
                            datasets: [
                                {
                                label:'Sessions',
                                data:Object.values(this.filteredData).concat(0),
                                backgroundColor:[
                                    'rgba(31, 221, 114, 0.6)',
                                    'rgba(255, 75, 30, 0.6)',
                                ]
                                }
                            ]
                            
                        }
                    }));
                }else if(this.state.dashboard.displayBy === 'all'){
                    const labels = Object.keys(this.fetchedData);

                    let completed = [], incomplete = [];

                    labels.forEach((label) => {
                        completed.push((this.fetchedData[label]).completed);
                        incomplete.push((this.fetchedData[label]).incomplete);
                    });

                    this.setState((state) => ({
                        ...state,
                        type: 'doughnut',
                        data: {
                            labels: labels,
                            datasets: [
                                {
                                label:'completed',
                                data:completed.concat(0),
                                backgroundColor:'rgba(31, 221, 114, 0.6)'
                                },
                                {
                                    label:'incomplete',
                                    data:incomplete.concat(0),
                                    backgroundColor:'rgba(255, 75, 30, 0.6)'
                                }
                            ]
                            
                        }
                    }));
                    
                }
 
            });


        }else{
            let fetchDays;
            if(this.state.dashboard.rangeOfData === 'week')
                fetchDays = 1;
            else if(this.state.dashboard.rangeOfData === 'month')
                fetchDays = 'month'
            else if(this.state.dashboard.rangeOfData === '6months')
                fetchDays = '6months'

            
            database.ref(`users/${this.props.uid}/data`).once("value", (snapshot) => {
                if(snapshot.val()){
                    if(snapshot.val())
                        this.fetchedData = snapshot.val();
                }
            }).then(() => {
                
                this.filterFetchedDataByDays(fetchDays);

                if(this.state.dashboard.displayBy === 'tasks'){
                    //getting the labels and filtering them according to availability of the task on that date
                    //================***********================
                    let labels = Object.keys(this.filteredData);

                    labels = labels.filter((key) => {
                        if(Object.keys(this.filteredData[key]).includes(
                            !this.state.dashboard.task? this.props.intialTask : this.state.dashboard.task))
                            return true
                    });
                    //=================***********================


                    let completed = [], incomplete = [];
                    //fetching completed and incomplete session for the available date for the sellected task
                    labels.forEach((date) => {
                        completed.push((this.filteredData[date][!this.state.dashboard.task? this.props.intialTask :this.state.dashboard.task]).completed);
                        incomplete.push((this.filteredData[date][!this.state.dashboard.task? this.props.intialTask :this.state.dashboard.task]).incomplete);
                    });
                    
                    //setting state to map data
                    this.setState((state) => ({
                        ...state,
                        type: 'line',
                        data: {
                            labels: labels,
                            datasets: [
                                {
                                label:'Completed',
                                data: completed.concat(0),
                                borderColor: 'rgba(31, 221, 114, 0.6)',
                                pointHoverBackgroundColor:'rgba(31, 221, 114, 0.6)',
                                fill: false
                                },
                                {
                                    label:'Incomplete',
                                    data: incomplete.concat(0),
                                    borderColor: 'rgba(255, 75, 30, 0.6)',
                                    pointHoverBackgroundColor: 'rgba(255, 75, 30, 0.6)',
                                    fill: false
                                }
                            ]
                            
                        }
                    }));
                }else if(this.state.dashboard.displayBy === 'all'){
                    //got the date list
                    let dateList = Object.keys(this.filteredData);
                    let labels = [];

                    //fetching the tasks for labels
                    dateList.forEach((date) => {
                        Object.keys(this.filteredData[date]).forEach((label) => {
                            if(!labels.includes(label))
                                labels.push(label)
                        })
                    });

                    let completed = [],tempPushcompleted = [], incomplete=[],tempPushincomplete = [];
                    
                    //summing up total complete and incomplete sessions for each task
                    labels.forEach((label) => {
                        tempPushcompleted = [], tempPushincomplete = [];
                        dateList.forEach((date) => { 
                            if(this.filteredData[date][label]){
                                tempPushcompleted.push(this.filteredData[date][label].completed);
                                tempPushincomplete.push(this.filteredData[date][label].incomplete);
                            }
                        });
                        if(tempPushcompleted.length){
                            let sum = tempPushcompleted.reduce((accumulator, a) => accumulator + a);
                            completed.push(sum)
                        }
                        if(tempPushincomplete.length){
                            let sum = tempPushincomplete.reduce((accumulator, a) => accumulator + a);
                            incomplete.push(sum)
                        }
                    });


                    this.setState((state) => ({
                        ...state,
                        type: 'doughnut',
                        data: {
                            labels: labels,
                            datasets: [
                                {
                                label:'completed',
                                data:completed.concat(0),
                                backgroundColor:'rgba(31, 221, 114, 0.6)'
                                },
                                {
                                    label:'incomplete',
                                    data:incomplete.concat(0),
                                    backgroundColor:'rgba(255, 75, 30, 0.6)'
                                }
                            ]
                            
                        }
                    }));

                }
            })
        }
        
    };


    /*when some options are changed by the user this function will be trigger which will make
     the necessary changes for the chart component*/
    handleOnChange = (identifier,value) => {
        const Dash = this.state.dashboard;
        Dash[identifier] = value;
        this.setState((state) => ({...state, dashboard:Dash}));

        this.fetchData();
    };

    render(){

        return (
            <div className='stats'>
                <div className='stats__dashboard' >
                    <select
                    name='displayBy'
                    className='focus__btnPanel-tasks'
                    onChange={(e) => {
                        this.handleOnChange('displayBy',e.target.value);
                    }}
                    >
                        <option value='tasks'>By Tasks</option>
                        <option value='all'>All</option>
                    </select>
        
                    <select
                    name='rangeOfData'
                    className='focus__btnPanel-tasks'
                    onChange={(e) => {
                        this.handleOnChange('rangeOfData',e.target.value);
                    }}
                    >
                        <option value='today'>Today</option>
                        <option value='week'>Last week</option>
                        <option value='month'>Last month</option>
                        <option value='6months'>Last 6 months</option>
                    </select>
        
                    {
                        this.state.dashboard.displayBy==='tasks' &&
                        <TaskList
                        onTaskChange= {
                            (task) => {
                                this.handleOnChange('task',task);
                            }
                        }/>
                    }
                </div>

                <div className='stats__chartboard'>
                    {this.state.type && <Chart data={this.state.data} title={(this.state.dashboard.task).toUpperCase()} type={this.state.type}/>}
                </div>
            </div>
        );
    };
};

const mapStateToProps = (store) => {
    return {
        uid: store.auth.cred.uid,
        date: Object.keys(store.data)[0],
        intialTask: Object.keys(store.tasks)[0]
    }
};

export default connect(mapStateToProps)(Stats);