import React from 'react';
import Modal from 'react-modal';

const ModalAddNewTask = (props) => {
    Modal.setAppElement('#root');

    let task, target;
    return (
        <Modal
            isOpen={props.active}
            onRequestClose={props.close}
            contentLabel="Edit Task or Add a new one"
            closeTimeoutMS={200}
            className="modal"
        >
            <span className={'modal__close'} onClick={props.close}>&#735;</span>

            <span className='modal__label'>Enter below details to add a new task:</span>
            <input
                    placeholder="Task"
                    className='modal__input'
                    onChange={(e) => {
                        task = e.target.value;
                    }}
            />

            <input
                    placeholder="Target sessions"
                    className='modal__input'
                    onChange={(e) => {
                        if(/^[0-9]*$/.test(e.target.value))
                            target = parseInt(e.target.value,10);
                        else
                            e.target.value = ''
                    }}
            />

            <button className='modal__btn' onClick={()=>{
                props.addTask(task.toLowerCase(),target);
                props.close();
            }}>
                ADD
            </button>
        </Modal>
    );
};

export default ModalAddNewTask;