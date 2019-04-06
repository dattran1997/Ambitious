import React, { Component } from 'react';
import Background from '../callToAction.jpg';
import Avatar1 from '../avatar.jpg';
import Avatar2 from '../avtar2.jpg';
import Img1 from '../carosel1.jpg';
import Img2 from '../carosel2.jpg';
import Img3 from '../carosel3.jpg';
import Img4 from '../carosel4.jpg';
import '../css/slider-def.css';
import '../css/Body.css';




class Example extends Component {
  render() {
    
    
    return (
        <section className='body'>
            <div id="slider" style={{maxHeight:'100vh'}}>
                <div className='overlay'></div>
                <div className="slides">
                    
                    <div className="slider">
                        <div className="legend"></div>
                        <div className="content">
                            <div className="content-txt">
                                <h1 > MAKE THE TARGET </h1>
                                <h2 > IN YOUR OWN STYLE </h2>
                            </div>
                        </div>
                        <div className="images"> 
                            <img src={Img1} /> 
                        </div>
                    </div>
                    
                    <div className="slider">
                        <div className="legend"></div>
                        <div className="content">
                            <div className="content-txt">
                                <h1> REMIND YOUR EVERY SINGLE </h1>
                                <h2> TARGET YOU SET! </h2>
                            </div>
                        </div>
                        <div className="images"> 
                            <img src={Img2} /> 
                        </div>
                    </div>
                    
                    <div className="slider">
                        <div className="legend"></div>
                        <div className="content">
                            <div className="content-txt">
                                <h1> YOUR TARGET IS YOUR FUTURE </h1>
                                <h2> DONT MISS IT! </h2>
                            </div>
                        </div>
                        <div className="images"> 
                            <img src={Img3} /> 
                        </div>
                    </div>
                    
                    <div className="slider">
                        <div className="legend"></div>
                        <div className="content">
                            <div className="content-txt">
                                <h1></h1>
                                <h2></h2>
                            </div>
                        </div>
                        <div className="images"> 
                            <img src={Img4} /> 
                        </div>
                    </div>
                    
                </div>
            </div>
            <section className='features py-5'>
                <div className='container'>
                    <div className='row'> 
                        <div className='col-lg-4 text-left py-3'>
                         <i className='fas fa-bookmark fa-3x pb-2'></i>
                         <h4 className='title pb-2'>
                            <a>Easy To Make Your Target</a>
                         </h4>
                         <p className='description'>Everything so easy with friendly UI supported, just click and we will do the rest</p>
                        </div>
                        <div className='col-lg-4 text-left py-3'>
                         <i className='far fa-clock fa-3x pb-2'></i>
                         <h4 className='title pb-2'>
                            <a>Save Your Time</a>
                         </h4>
                         <p className='description'>When you are too busy we will remind you so that you cant forget your target</p>
                        </div>
                        <div className='col-lg-4 text-left py-3'>
                         <i className='fas fa-running fa-3x pb-2'></i>
                         <h4 className='title pb-2'>
                            <a>Speed Up Your Target</a>
                         </h4>
                         <p className='description'>We have smart email system to warn you when you are in danger zone of deadline</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='our-team text-center py-5'>
                <h1 className='our-team-heading pb-lg-5'>Core Team</h1>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-3 mr-lg-5 '>
                            <img className='img-fluid rounded-circle' src={Avatar1}  />
                            <p className='pt-lg-3'>Front-end</p>
                            <h2>Tran Dat</h2>
                        </div>
                        <div className='col-lg-3 ml-lg-5'>
                            <img className='img-fluid rounded-circle' src={Avatar2}  />
                            <p className='pt-lg-3'>Back-end</p>
                            <h2>Tran Tuan Anh</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className='call-to-action text-white text-center' style={{backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'center', backgroundPosition: 'center',  }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-10 mx-auto mb-4'>
                            <h2>Ready to get started? Sign up now!</h2>
                        </div>
                        <div className='col-lg-5 mx-auto'>
                            <button onClick={this.props.toggleRegister} className='btn btn-lg btn-primary'>Sign Up!</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-us'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='card py-4 h-100 bg-light social'>
                                <div className='card-body text-center'>
                                    <i className='fas fa-map-marked-alt text-primary mb-2 '></i>
                                    <h4>ADDRESS</h4>
                                    <hr className='my-4'/>
                                    <p className='small'>4923 Market Street, Orlando FL</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='card py-4 h-100 bg-light social'>
                                <div className='card-body text-center'>
                                    <i className='fas fa-envelope text-primary mb-2 '></i>
                                    <h4>EMAIL</h4>
                                    <hr className='my-4'/>
                                    <a className='small' href='#'>Ambitious@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='card py-4 h-100 bg-light social'>
                                <div className='card-body text-center'>
                                    <i className='fas fa-mobile-alt text-primary mb-2 '></i>
                                    <h4>PHONE</h4>
                                    <hr className='my-4'/>
                                    <p className='small'>+ 0123 456 789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
  }
}


export default Example;


