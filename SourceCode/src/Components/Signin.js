import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import { history } from '../Router/AppRouter';
import {startGoogleLogin, startFBLogin, startSignup, startEmailLogin, login} from '../actions/auth';

import {startInitSession} from '../actions/pomodoroSessions';
import {startSetTasks} from '../actions/tasks';
import {startInitConfig} from '../actions/config';
import {resetPrompt} from '../actions/prompt';

import Reset from './AtomicComponents/Reset';
import Login from './AtomicComponents/Login';
import Signup from './AtomicComponents/Signup';
import Processing from './AtomicComponents/Processing';
import Prompt from './AtomicComponents/Prompt';

import googleSvg from '../assets/google.svg';
import fbSvg from '../assets/facebook.svg';
import guestSvg from '../assets/guest.svg';
import guestImg from '../assets/guest.jpg';


class Signin extends Component{
    constructor(props){
        super(props);
        window.test = props.prompt
        console.log('debig',props.prompt)
        this.state = {
            display: 'signin',
            processing: false,
            prompt: props.prompt.prompt? true : props.promptRoute ||false,
            promptText: props.prompt.prompt ? props.prompt.promptText : props.promptMsg || '' ,
            resetSent: false
            /*since prompt can be activated by store state or props passed as jsx tags need to check*/
        }
    };


    handleSign = () => {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#pass').value;
        if(this.state.display === 'signup'){
            const name = document.querySelector('#name').value;
            const file = document.querySelector('#profilePic').files[0];
            this.props.signup({email,password,name,file});
        }else{
            this.props.signin({email,password});
        }
        
        this.setState((state) => ({...state, processing: true}));
    };

    changeDisplay = (disp) => {
        this.setState((state) => ({...state,display:disp}));
    };

    handleReset = () => {
        if(!this.state.resetSent)
            this.setState((state) => ({...state, resetSent: true}));
    };

    render(){
        return (
            <div className='signin'>
            
                {
                    //Checking whether to render processing component
                    this.state.processing && <Processing />
                }


                {
                    //conditional rendering of prompt component
                    this.state.prompt && 
                    <Prompt 
                    prompt={this.state.prompt} 
                    promptText={this.state.promptText || this.props.promptMsg}
                    icon={this.props.prompt.promptIcon || ''}
                    close ={() => {
                        this.setState((state) => ({...state,prompt:false}));
                        this.props.dispatch(resetPrompt());
                        history.push('/');
                    }}
                    />
                }

                <div className='signin__create'>
                   {
                       this.state.display==='reset' && <Reset changeDisplay={this.changeDisplay} resetSent={this.state.resetSent} handleReset={this.handleReset}/> ||

                       this.state.display==='signup' && <Signup changeDisplay={this.changeDisplay} handleSign={this.handleSign}/> ||

                       this.state.display==='signin' && <Login changeDisplay={this.changeDisplay} handleSign={this.handleSign}/>
                   }
                </div>



                <hr className='signin__hr' />
        



                <div className='signin__getin'>
                    <button className='signin__getin-google'
                        onClick={()=>{
                            this.props.googleLogin();
                            this.setState((state) => ({...state, processing: true}));
                        }}
                    >
                        <img id='googleSvg' src={`${googleSvg}`}/>
                        Google
                    </button>
        
                    <button
                        onClick={()=>{
                            this.props.fbLogin();
                            this.setState((state) => ({...state, processing: true}));
                        }}
                    >
                        <img id='fbSvg' src={`${fbSvg}`}/>
                        Facebook
                    </button>
        
                    <button
                        onClick={()=>{
                            /* ===================GUEST LOGIN=========================================
                            had to handle guest login this way cause using a middleware was not at all feasible
                            made no sense guest login didn't require async actions since uid or photo is not to be reteived
                            dispatching typical actions was the right way to do it
                            =======================================================================
                            */
                            this.setState((state) => ({...state, processing: true}));
                            let cred = {
                                name: 'Guest',
                                photoUrl: guestImg,
                                uid: 'guest'
                            };
                            this.props.dispatch(login('LOGIN',cred));
                            this.props.dispatch(startInitSession(moment().format('DD:MM:YYYY')));
                            this.props.dispatch( startSetTasks()).then(() => {
                                this.props.dispatch( startInitConfig()).then(() =>{
                                    if (history.location.pathname === '/') {
                                        history.push('/focus');
                                    };
                                });
                            });

                        }
                        }
                    >
                        <img id='guestSvg' src={`${guestSvg}`}/>
                        Guest Login
                    </button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        googleLogin: () => {dispatch(startGoogleLogin())},
        fbLogin: () => {dispatch(startFBLogin())},
        signup: (data) => {dispatch(startSignup(data))},
        signin: (data) => {dispatch(startEmailLogin(data))},
        dispatch //forwading dispatch to component
    }
};

const mapStateToProps = (store) => {
    if(Object.keys(store.prompt)){
        return {
            prompt:{
                ...store.prompt
            }
        }
    }else{
        return {
            prompt: false
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);