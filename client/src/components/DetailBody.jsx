import React from 'react';
import {
    Modal,
    ModalBody,
} from 'reactstrap';

export default function DetailBody(props) {
  return (
    <section className='detail-body'>
      <div className='target-container'>
        <h1>Target</h1>
      </div>
      <button className='add-step-button btn btn-primary'  onClick={props.toggleStepModal}>add detail</button>
      <Modal className='create-step-modal' isOpen={props.stepModalVisible} toggle={props.toggleStepModal}>
        <ModalBody>
            <form onSubmit={props.stepSubmit}>
                <input className='form-control' onChange={(e) => props.stepInfoChange({content: e.target.value})} />
                <button type='submit' className='btn btn-primary'>add step</button>
            </form>
        </ModalBody>
      </Modal>
      <div className='step-container'>

      </div>
    </section>
  )
}
