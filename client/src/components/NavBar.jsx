import React from 'react';
import Logo from '../Logo1.png';
import '../css/NavBar.css'
import{
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Modal,
    ModalBody,
    Form,
    Button,
    InputGroup,
    Input
    } from 'reactstrap';
import {Link} from 'react-router-dom';   

export default function NavBar(props) {

  return (
    <Navbar className={`nav-bar ${props.scrollDrown}`} style={{position:'fixed', zIndex:'3000', width:'100%' }} color='' light expand="md">
        <div className='container'>
            <NavbarBrand style={{fontFamily: 'Expletus Sans , cursive',fontSize:'230%',color:'#07DBC5'}} className={`nav-brand ${props.brandScroll}`} href="/">Ambitious</NavbarBrand>
            {props.authUser.username ? (
                <Nav navbar>Welcome {props.authUser.username}!</Nav>
            ):(
                <Nav  navbar>
                    <NavItem>
                        <NavLink className={`button type2 ${props.scrollDrown}`} style={{padding:'1em 1.051rem'}} onClick={props.toggleLogin}>Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={`button type2 ${props.scrollDrown}`} onClick={props.toggleRegister}>Register</NavLink>
                    </NavItem>
                </Nav>
            )}
        </div>
        
        <Modal className='login-modal' modalTransition={3000}  backdropTransition={5000} style={{maxWidth:'359px'}} zIndex={5000}  isOpen={props.LoginModalVisible} toggle={props.toggleLogin}>
            <ModalBody >
                <div className='row' style={{justifyContent:'center'}}>
                    <img className="img-responsive" style={{width:'46%'}} src={Logo} alt="Chania" />
                </div>
                <p style={{textAlign:'center'}}>Login and join us now!</p>
                <div className='row' style={{justifyContent:'center'}}>
                    <div className='col-lg-9 col-md-12'>
                        <Form className='login-form' onSubmit={props.loginSubmit} >
                        <Link to='/target'>
                            <Button onClick={props.loginWithFacebook} className='form-control' color='primary'>Login with facebook</Button>  
                        </Link>
                            <p style={{textAlign:'center'}}>OR</p>
                            <InputGroup>
                                <Input className='form-control' placeholder=" Username" onChange={(e) => props.loginInfoChange({username: e.target.value})}/>
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <Input className='form-control' placeholder=" Password" onChange={(e) => props.loginInfoChange({password: e.target.value})}/>
                            </InputGroup>
                            <br />
                            <Button type='submit' className='form-control' color='primary'>Login</Button>
                        </Form>
                    </div>
                </div>
                <br/>
            </ModalBody> 
        </Modal>

        <Modal className='register-modal' style={{maxWidth:'800px'}} zIndex={5000} isOpen={props.RegisterModalVisible} toggle={props.toggleRegister}>
            <ModalBody >
                <div className='row' style={{justifyContent:'space-between'}}>
                    <div className='col-3'>
                        <Button onClick={props.toggleLogin}>Login</Button>
                    </div>
                    <div className='row col-3 align-item-center ml-lg-2' style={{alignItems:'flex-start'}}>
                        <h5 className='register-brand mt-lg-1 mr-lg-1' style={{textAlign:'center'}}>Ambitious </h5>
                        <img className="img-responsive" style={{width:'22%'}} src={Logo} alt="Chania" /> 
                    </div>
                </div>
                <p style={{textAlign:'end'}}></p>
                <div className='row'>
                    <div className='col-lg-7'>
                        <iframe src="https://giphy.com/embed/xUOxf8sb4pizGFkBJm"  width="450" height="450" frameBorder="0" className="giphy-embed img-responsive" allowFullScreen></iframe>
                    </div>
                    <div className='col-lg-5'> 
                        <Form className='register-form' onSubmit={props.registerSubmit}>
                            <Button className='form-control' color='primary'>Login with facebook</Button>  
                            <p style={{textAlign:'center'}}>OR</p>
                            <InputGroup>
                                <Input className='form-control' placeholder="username" onChange={(e) => props.registerInfoChange({username: e.target.value})} />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <Input className='form-control' placeholder="password" onChange={(e) => props.registerInfoChange({password: e.target.value})} />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <Input type='email' className='form-control' placeholder="email" onChange={(e) => props.registerInfoChange({email: e.target.value})} />
                            </InputGroup>
                            <br />
                            <Button type='submit' className='form-control' color='primary'>Register</Button>
                            <p style={{textAlign:'center'}}>join us to start your target now!</p>
                        </Form>
                    </div>
                </div>
            </ModalBody> 
        </Modal>
    </Navbar>
  )
}
