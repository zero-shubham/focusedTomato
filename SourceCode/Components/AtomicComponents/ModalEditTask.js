import React from 'react';
import Modal from 'react-modal';

const ModalEditTask = (props) => {
    Modal.setAppElement('#root');
    let target;
    return (
        <Modal
            isOpen={props.active}
            onRequestClose={props.close}
            contentLabel="Edit Task or Add a new one"
            closeTimeoutMS={200}
            className="modal edit"
        >
            <span className={'modal__close'} onClick={props.close}>&#735;</span>

            <span className='modal__label'>Edit targets or remove the task:</span>
            <span className='modal__label-task'>{props.displayTask}</span>
            <input
                    placeholder={props.oldTarget}
                    className='modal__input'
                    onChange={(e) =>{
                        if(/^[0-9]*$/.test(e.target.value))
                            target = parseInt(e.target.value,10);
                        else
                            e.target.value = '';
                    }}
            />
            <div className='modal__btn-container'>
                <button className='modal__btn' onClick={()=>{
                    let task = props.displayTask.toLowerCase();
                    if(target)
                        props.editTask(task,target);
                    props.close();
                }}>
                    EDIT
                </button>

                <button className='modal__btn' onClick={()=>{
                    let task = props.displayTask.toLowerCase();
                    props.removeTask(task);
                    props.close();
                }}>
                    REMOVE
                </button>
            
            </div>
        </Modal>
    );
}

export default ModalEditTask;