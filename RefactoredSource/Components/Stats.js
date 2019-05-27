import React,{Component} from 'react';
import {connect} from 'react-redux';

import moment from 'moment';

import TaskList from './AtomicComponents/TaskList';
import Chart from './AtomicComponents/Chart';

import database from '../firebase/firebase';


class Stats extends Component{
    constructor(props){
        super(props);

        /*the state contains value for the dropdown lists as those change,
         what is rendered in the component should also change*/
        this.state = {
            dashboard: {
                displayBy: 'tasks',
                rangeOfData: 'today',
                task: ''
            },
            data: {},
            type: '',
            rotateClass : 'stats__chartboard'
        };
        this.fetchedData = undefined;
        this.filteredData = {};

        this.dateLabelList = [];
    };

    filterFetchedDataByDays = (days) => {
        let beginDate;
        if(days === 'month')
            beginDate = moment().subtract(1, 'month').calendar().split('/');
        else if(days === '6months')
            beginDate = moment().subtract(6, 'month').calendar().split('/');
        else if(typeof(days) === 'number')
            beginDate = moment().subtract(days, 'days').calendar().split('/');
        
        
        //logic for extrating datelist
        /*this logic is flawed and the whole logic should be implemented in a backend 
        since all lot of extracting needs to be done which will
         spoil the user experience */
        beginDate = beginDate[2]+beginDate[0]+beginDate[1]
        let dateList;
        const allDatesInDB = Object.keys(this.fetchedData).sort().reverse();
        
        if(allDatesInDB.indexOf(beginDate) === -1){
            let diff=10000,indx;

            allDatesInDB.every((date) => {
                
                if(parseInt(date) - parseInt(beginDate) < 0)
                    return false
                if(parseInt(date) - parseInt(beginDate) < diff){
                    diff = parseInt(date) - parseInt(beginDate)
                    indx = allDatesInDB.indexOf(date)
                }
                return true
            })
            dateList = allDatesInDB.slice(allDatesInDB.indexOf(this.props.date),allDatesInDB.indexOf(indx));
        }else
            dateList = allDatesInDB.slice(allDatesInDB.indexOf(this.props.date),allDatesInDB.indexOf(beginDate));    

        dateList.forEach((date) => {
            this.filteredData[date] = this.fetchedData[date];
        });
    }

    filterDataByTasks = () => {
        if(this.fetchedData[this.state.dashboard.task])
            this.filteredData = this.fetchedData[this.state.dashboard.task]
    }

    formatDates = (list) => {
        this.dateLabelList = [];
        list.forEach((date) => {
            this.dateLabelList.push(
                date.split('').slice(6,8).join('')+':'+
                date.split('').slice(4,6).join('')+':'+
                date.split('').slice(0,4).join(''));
        });
    }
    //fetching data from firebase
    fetchData = () => {
        this.fetchedData = undefined;
        this.filteredData = {};
        //Logic when data to be fetched is of today
        if(this.state.dashboard.rangeOfData === 'today'){
            database.ref(`users/${this.props.uid}/data/${this.props.date}`).once("value", (snapshot) => {
                if(snapshot.val()){
                    this.fetchedData = snapshot.val();
                }
            }).then(() => {
                //******LOGIC TO FILTER DATA*******

                //if data is to be filtered for a specific task for today
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

                    //if data is to be filtered for all tasks for today
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


            //below is logic when data to be fetched is for some certain no of past days 
        }else{
            let fetchDays;
            if(this.state.dashboard.rangeOfData === 'week')
                fetchDays = 7;
            else if(this.state.dashboard.rangeOfData === 'month')
                fetchDays = 'month'
            else if(this.state.dashboard.rangeOfData === '6months')
                fetchDays = '6months'

            
                //so get all the data at once and then filter that locally rather than fetching data for each day 
            database.ref(`users/${this.props.uid}/data`).once("value", (snapshot) => {
                if(snapshot.val()){
                    if(snapshot.val())
                        this.fetchedData = snapshot.val();
                }
            }).then(() => {
                
                /*filtering data for a specified number of days */
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
                    
                    //this function formats the labels as dates
                    this.formatDates(labels)


                    //setting state to map data
                    this.setState((state) => ({
                        ...state,
                        type: 'line',
                        data: {
                            labels: this.dateLabelList,
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


    /*
    when some options are changed by the user this function will be trigger which will
     update the state of the component, it first makes a copy of the current state then updates copy with 
     passed value. Further sets-state with this new "wanna be" state.
     Although the actual change i.e. the map will not be rendered as data for this current state is not fetched
     which is triggered with the "fetchData()"
    */
    handleOnChange = (identifier,value) => {
        const Dash = this.state.dashboard;
        Dash[identifier] = value;
        this.setState((state) => ({...state, dashboard:Dash}));

        this.fetchData();
    };

    componentDidMount(){
        this.setState((state) => ({
            ...state,
            dashboard: {
                displayBy: 'tasks',
                rangeOfData: 'today',
                task: this.props.intialTask
            }
        }));
    }

    /*As you will notice below on every change to the dropdown list "handleOnChange()" is called*/
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

                
                <div className={this.state.rotateClass}>
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