import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import Clock from './AtomicComponents/Clock';
import Indicators from './IndicatorComponent/Indicators';
import Button from './AtomicComponents/Button';
import TaskList from '././AtomicComponents/TaskList';
import {startAddSession} from '../actions/pomodoroSessions';
import Notification from './AtomicComponents/Notification';
import Sound from './AtomicComponents/Sound';


class Focus extends Component{
    constructor(props){
        super(props);
        this.notification = new Notification()
//local state for the startwatch
        this.sounds = {
            ring: React.createRef(),
            ticking: React.createRef()
        };
        window.reftest = this.sounds.ring;
        this.config ={
            duration : 0,
            newSession: true,
            intId: -1,
            paused: false,
            break: false,
            local: {
                min: 0,
                sec: 0
            }
        };

        //=====================================================================
        /*different store that is not rendering had to do this as setState is async 
        and took time to update this data which is not rendering and
          as redux store is different occassionaly lagged behind */
        this.selectedTask= {
            task:'',
            completed: 0,
            incomplete: 0
        };

        this.state = {
            totalSessions:0,
            completed: 0,
            btnStatus: 'play3',
            pass: {
                min: '00',
                sec: '00',
                percentage: 0
            }
        };

        //updating redux store with completed and incomplete sessions
        this.updateRootStore = () => {
            this.props.dispatch( startAddSession({date:moment().format('DD:MM:YYYY') ,data: this.selectedTask}));
        };

        
        this.updateTask = (task) => {
            this.selectedTask.task = task;

            if(this.props.data){
                this.selectedTask.completed = this.props.data[this.selectedTask.task]? this.props.data[this.selectedTask.task].completed : 0;
                this.selectedTask.incomplete = this.props.data[this.selectedTask.task] ? this.props.data[this.selectedTask.task].incomplete : 0;
            }else{
                this.selectedTask.completed = 0;
                this.selectedTask.incomplete = 0;
            }
            //changed cause thought whatever is being rendered needs to be in state
            this.setState((state) => ({
                ...state,
                totalSessions: this.props.tasks[this.selectedTask.task],
                completed: this.selectedTask.completed
            }));
            this.stop();
        };


        this.increCompleted = () => {
            this.selectedTask.completed = this.selectedTask.completed + 1;
            this.updateRootStore();
            this.setState((state) => ({...state, completed: this.selectedTask.completed}));

            if(!this.props.settings.silent)
                this.sounds.ring.current.play()
            if(this.props.settings.notification)
                this.notification.sendNotification('Well Done! You completed your focused session!');
            this.config.storeUpdate = true;
        };
        this.increIncompleted = () => {
            this.selectedTask.incomplete = this.selectedTask.incomplete + 1;
            this.updateRootStore();
        };
        //=======================================================================

        this.startSession = (type='focusDuration') => {
            const intervalId = setInterval(()=>{

                //if 1 second is left decrement minutes by 1 and set seconds to 59
                if(this.config.local.sec===1 || this.config.local.sec===0){
                    this.config.local.min = this.config.local.min -1 ;
                    this.config.local.sec = 59;
                }else{
                    this.config.local.sec = this.config.local.sec - 1;
                }
                
                if(this.config.local.min < 0){
                    this.config.local.min = 0;
                    this.config.local.sec = 0;
                }

                this.setState((state) => ({
                    ...state,
                    pass: {
                        min: this.config.local.min>9?this.config.local.min.toString():`0${this.config.local.min.toString()}`,
                        sec: this.config.local.sec>9?this.config.local.sec.toString():`0${this.config.local.sec.toString()}`,
                        percentage: ((this.config.local.min * 60 + this.config.local.sec)/ (this.config.duration *60)) * 100
                    }
                }) );
                //if it was last minute and time's up it would have been set to -1 while checking sec ===1 above
                if(this.config.local.min===0 && this.config.local.sec===0){
                    if(type==='focusDuration'){
                        this.config.break = true;
                        this.increCompleted();
                        this.setState((state) => ({...state, btnStatus:'mug'}));
                    }else{
                        this.config.break = false;
                        this.setState((state) => ({...state, btnStatus:'play3'}));
                    }
                    this.config.newSession = true;
                    clearInterval(this.config.intId);
                    this.config.intId = -1;
                }
            },1000);

            this.config.intId = intervalId;
            this.config.newSession = false;
        }

        this.pause = () => {
            this.config.paused = true;
            clearInterval(this.config.intId);
            this.config.intId = -1;
        }

        this.stop = () => {
            if(this.config.intId !== -1 || this.config.paused){
                if(!this.config.break)
                    this.increIncompleted();
            }
            this.config.break = false;
            this.config.paused = false;
            this.config.newSession = true;

            this.config.local.min = 0;
            this.config.local.sec = 0;
            this.setState((state) => ({...state,btnStatus:'play3',pass:{min:'00',sec:'00',percentage:0}}));
            clearInterval(this.config.intId);
            this.config.intId = -1;
        }
        //function to control the clock
        this.watchControl = () => {
            if(this.state.totalSessions - this.state.completed === 0)
                return
            if(this.config.newSession && !this.config.break){
                //clock may be is being started after it was paused in that case no need to update clock state
                if(!this.config.paused){
                    this.config.duration = this.props.settings.focusDuration;
                    this.config.local.min = this.props.settings.focusDuration;
                    this.config.local.sec = 0;
                    this.setState((state) => ({
                        ...state,
                        btnStatus: 'pause2',
                        pass: {
                            min: this.props.settings.focusDuration<9?`0${this.props.settings.focusDuration}`:`${this.props.settings.focusDuration}`,
                            sec: `00`,
                            percentage: 100
                        }
                    }));
                }
                this.startSession();
            }else if(!this.config.newSession && !this.config.paused && !this.config.break){
                this.setState((state) => ({...state, btnStatus:'play3'}));
                this.pause();
            }else if(!this.config.newSession && this.config.paused && !this.config.break){
                this.config.paused = false;
                this.setState((state) => ({...state, btnStatus:'pause2'}));
                this.startSession();
            }else if(!this.config.newSession && this.config.break){
                this.stop();
            }else{
                this.sounds.ring.current.pause();
                if((this.state.completed%4) === 0 && (this.state.totalSessions - this.state.completed)>4){
                    //longbreak
                    this.config.duration = this.props.settings.longBreakDuration;
                    this.config.local.min = this.props.settings.longBreakDuration;
                    this.setState((state) => ({
                        ...state,
                        btnStatus: 'next2',
                        pass: {
                            min: `${this.props.settings.longBreakDuration}`,
                            sec: `00`,
                            percentage: 100
                        }
                    }));

                    this.startSession('');
                }else{
                    //shortbreak
                    this.config.duration = this.props.settings.shortBreakDuration;
                    this.config.local.min = this.props.settings.shortBreakDuration;
                    this.setState((state) => ({
                        ...state,
                        btnStatus: 'next2',
                        pass: {
                            min: `0${this.props.settings.shortBreakDuration}`,
                            sec: `00`,
                            percentage: 100
                        }
                    }));

                    this.startSession('');
                }
            }
        };


        this.addAminute = () => {
            this.config.local.min += 1;
            this.config.duration += 1;
        };

        this.deductAminute = () => {
            if(this.config.local.min>1){
                this.config.local.min -= 1;
            }else{
                this.config.local.min = 0;
                this.config.local.sec = 1;
            }
        };

        this.restart = () => {
            this.selectedTask.completed = this.selectedTask.completed - 1;
            this.updateRootStore();
            this.setState((state) => ({...state, completed: this.selectedTask.completed}));
            this.stop();
        };
    };

    //loads the initial task to the state
    componentDidMount(){
        
        if(this.props.tasks){
            let tasks = Object.keys(this.props.tasks);
            console.log(tasks,'bug hunting')
            this.updateTask(tasks[0]);
            this.updateRootStore();
        }
    }

    /*componentDidUpdate(){
        if(this.config.intId===-1 && this.config.storeUpdate){
            console.log("shit logic")
            this.updateRootStore();
        }
    }*/

    //function to handle when task is changed 
    onTaskChange = (selectedTask) => {
        this.setState((state) => ({...state,btnStatus:"play3"}));
        this.updateTask(selectedTask);
        this.updateRootStore();
    };

/*=====================================================================================================*/



    render(){
        return (
            <div className='focus'>
                <Indicators active={this.state.totalSessions - this.state.completed} inactive={this.state.completed}/>
                <div className='focus__btnPanel'>
                    {/*========================ADD 1MIN BUTTON=========================================== */}
                    <Button icon={'plus'} clicked={this.addAminute}/>


                    <TaskList onTaskChange={this.onTaskChange}/>

                    {/*========================Deduct 1MIN BUTTON=========================================== */}
                    <Button icon={'minus'} clicked={this.deductAminute}/>
                </div>
                <Clock {...this.state.pass}/>
                <div className='focus__btnPanel'>
                    <Button icon={this.state.btnStatus} clicked={this.watchControl}/>
                    <Button icon={'undo'} clicked={this.restart}/>
                    <Button icon={'stop2'} clicked={this.stop}/>
                </div>

                <Sound ref={this.sounds.ring}/>
            </div>
        )
    }
}

const mapsStateToProps = (state) => {
    if(state.tasks){
        return {
            data: state.data[moment().format('DD:MM:YYYY')],
            tasks: state.tasks,
            settings: state.config
        }
    }else{
        return {
            data: state.data[moment().format('DD:MM:YYYY')],
            tasks: false,
            settings: state.config
        }
    }
    
};

const ConnectedFocus = connect(mapsStateToProps)(Focus);
export default ConnectedFocus;