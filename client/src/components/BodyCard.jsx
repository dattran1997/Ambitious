import React from 'react';
import {
    Modal,
    ModalBody,
    Form,
    Input,
    Button,

} from 'reactstrap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function BodyCard(props) {

  return (
    <section className='container h-100' style={{paddingTop:'100px'}}>
      <button onClick={props.toggleCreateTarget} className='btn btn-lg btn-primary'>Add new Target</button>
      <Modal isOpen={props.CreateTargetModalVisible} toggle={props.toggleCreateTarget}>
        <ModalBody>
            <div className='row justify-content-center'>
                <div className="create-target-form col-lg-9 col-md-12">
                    <Form onSubmit={props.createTargetSubmit}>
                        <Input className='form-control' type='text' placeholder='Your Target' onChange={(e) => props.createTargetInfoChange({target: e.target.value})} />
                        <br/>
                        <Input className='form-control' type='text' placeholder='Target Description' onChange={(e) => props.createTargetInfoChange({description: e.target.value})}/>
                        <br/>
                        <DatePicker className='form-control' selected={props.startDate} onChange={props.startDateInfoChange} />
                        <br/>
                        <br/>
                        <DatePicker className='form-control' selected={props.endDate} onChange={props.endDateInfoChange} />
                        <br/>
                        <br/>
                        <Button type='submit' className='form-control' color='primary'>Create</Button>
                    </Form>
                </div>
            </div>
        </ModalBody>
      </Modal>
      <div className='target-container card-columns pt-5 text-left justify-content-center' style={{paddingLeft:'5%',minHeight:'100vh',}}>
        <div className='card col-lg-10' >
            <div className='card-body'>
                <h3>Target</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Created At: <time>1st january</time></p>
                <p>Time left: <time>10h</time></p>
            </div>
        </div>
        
      </div>  
    </section>
  )
}
