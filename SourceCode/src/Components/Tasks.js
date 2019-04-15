import React,{Component} from 'react';
import {connect} from 'react-redux';

import Button from './AtomicComponents/Button';
import ModalAddNewTask from './AtomicComponents/ModalAddNewTask';
import ModalEditTask from './AtomicComponents/ModalEditTask';
import {startAddTask,startEditTask,startRemoveTask} from '../actions/tasks';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

class Tasks extends Component{

    constructor(props){
        super(props);
        this.state = {
            modalAddTaskActive: false,
            modalEditTaskActive: false,
            displayTask: '',
            target: '',
            searchedTask: ''
        };
    };

    toggleModalAddTask = () => {
        this.setState( (state) => ({...state, modalAddTaskActive: !state.modalAddTaskActive}));
    };

    toggleModalEditTask = (task) => {
        this.setState( (state) => ({...state, modalEditTaskActive: !state.modalEditTaskActive}));
    }
    
    addnewTask = (task, target) => {
        this.props.dispatch(startAddTask({task: task,target:target}));
    };

    //{ /*implemented search with conditions in generating span elements*/}
    taskslistToComponents = (tasksList) => {
        let indent = [];
        tasksList.forEach(prop => {
            //to ignore the empty property
            if(prop !== 'empty'){
                if(this.state.searchedTask!==''){
                    if(prop.slice(0, this.state.searchedTask.length) === this.state.searchedTask)
                        indent.push(
                            <span key={prop}
                                className='task'>
                                {capitalizeFirstLetter(prop)}
                                <Button icon={'cog'} task={capitalizeFirstLetter(prop)}
                                clicked={(task) => {
                                    this.setState( (state) => ({...state, displayTask:task, target: `${this.props.targets[task.toLowerCase()]}`}));
                                    this.toggleModalEditTask();
                                }
                                }/>
                            </span>
                        );
                }
                else{
                    indent.push(
                        <span key={prop}
                            className='task'>
                            {capitalizeFirstLetter(prop)}
                            <Button icon={'cog'} task={capitalizeFirstLetter(prop)}
                            clicked={(task) => {
                                this.setState( (state) => ({...state, displayTask:task, target: `${this.props.targets[task.toLowerCase()]}`}));
                                this.toggleModalEditTask();
                            }
                            }/>
                        </span>
                    );
                }
            }
        });

        return indent;
    }
    
    render(){

        return (
            <div className='tasks'>
                <input
                    placeholder="Search"
                    className='tasks__search'
                    onChange={(e) => {
                        let val = e.target.value
                        this.setState((state) => ({...state,searchedTask:val}))
                    }}
                />
                <Button cssClass={'buttonSecondary'} icon={'plus'} text={'Add new task'} clicked={this.toggleModalAddTask}/>

                <div className='tasks__list'>
                    {/*here calling a function to generte and return element was the best and only solution, other way 
                    was to generate a list in mapstatetoprops which i was doing earlier but it didn't sustain as that would run without any access to 
                    my class and it functions */}
                    {!!this.props.targets && this.taskslistToComponents(this.props.tasks)}
                    {!this.props.targets && <span className={'warn'}>No tasks found.</span>}
                </div>



                {/*=========================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++=================================*/}
                {/*modal displayed for adding new task*/}
                
                <ModalAddNewTask active={this.state.modalAddTaskActive} close={this.toggleModalAddTask} 
                addTask={this.addnewTask}/>
                
                {/*==================================================================================================================*/}
                {/*modal displayed for editing targets of a task or remove it */}
                <ModalEditTask active={this.state.modalEditTaskActive} close={this.toggleModalEditTask} 
                displayTask={this.state.displayTask}
                editTask={(task,target) => {
                    this.props.dispatch(startEditTask({task: task,target:target}));
                }}
                removeTask={(task) => {
                    this.props.dispatch(startRemoveTask(task));
                }}
                oldTarget={this.state.target}/>
            </div>
        )
    }
};

const mapsStateToProps = (store) => {
    //sending an array of all the tasks
    if(store.tasks){
        let listTask = Object.keys(store.tasks);
        return {
            tasks: listTask,
            targets: store.tasks
        }
    }else{
        return {
            tasks: false,
            targets: false
        }
    }
};

const ConnectedTask = connect(mapsStateToProps)(Tasks);
export default ConnectedTask;