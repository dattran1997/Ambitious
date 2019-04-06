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
import '../css/BodyCard.css';

export default function BodyCard(props) {

  return (
    <section className='container h-100' style={{paddingTop:'139px'}}>
      <div className='overlay-bodycard'></div>
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
                        <h5>Start date</h5>
                        <DatePicker className='form-control' selected={props.startDate} onChange={props.startDateInfoChange} />
                        <br/>
                        <br/>
                        <h5>End date</h5>
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
        
            {props.TargetList.length > 0 ?(
                props.TargetList.map((item)=>{
                    return (
                        <div className='card col-lg-10' >
                            <div className='card-body'>
                                <div className="progress" data-percentage={item.progress}>
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <div className="progress-value">
                                        <div>
                                            {item.progress}%<br/>
                                            <span>completed</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='target-zone text-center text-white p-2 mt-4'>
                                    <h4>{item.target}</h4>
                                </div>
                                <p className='target-description mt-1 text-center'>{item.description}</p>

                            </div>
                        </div>
                    );
                })
            ):(
                <h3 className='text-center'>Create your target now</h3>
            )}
                
        
        
      </div>  
    </section>
  )
}
