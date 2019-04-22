import React,{Component} from 'react';
import {connect} from 'react-redux';

import {startEditConfig} from '../actions/config';
import SettingItem from './AtomicComponents/SettingsItem';

class Settings extends Component{
    constructor(props){
        super(props);
        this.state = this.props.config;
    };

    onChangeVal = (setting,config) => {
        if(!config && typeof config !== "boolean")
            config=0;
        if(/^[0-9]*$/.test(config) || config === true || config===false){
            this.setState((state) => ({...state,[setting]:config}));
            this.props.dispatch(startEditConfig({setting, config}));
        }
    };

    render(){
        return (
            <div className='settings'>
                <div className='settings__list tasks__list'>
                    <SettingItem label='Focus Duration' val={this.state.focusDuration} tag={'focusDuration'} onChange={this.onChangeVal}/>
                    <SettingItem label='Short-break Duration' val={this.state.shortBreakDuration} tag={'shortBreakDuration'} onChange={this.onChangeVal}/>
                    <SettingItem label='Long-break Duration' val={this.state.longBreakDuration} tag={'longBreakDuration'} onChange={this.onChangeVal}/>
                    <SettingItem label='Sessions Before Long-break' val={this.state.sessionBeforeLongBreak} tag={'sessionBeforeLongBreak'} onChange={this.onChangeVal}/>
                    <SettingItem label='Notifications' toggle={true} check={this.state.notification} tag={'notification'} onChange={this.onChangeVal}/>
                    <SettingItem label='Silent' toggle={true} check={this.state.silent} tag={'silent'} onChange={this.onChangeVal}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        config: store.config
    }
};

const connectedSettings = connect(mapStateToProps)(Settings)
export default connectedSettings;