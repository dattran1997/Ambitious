import React from 'react';
import Logo from '../NASA_LOGO.gif';
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

export default function NavBar(props) {

  return (
    <Navbar style={{position:'fixed', zIndex:'3000', width:'100%'}} color="light" light expand="md">
        <NavbarBrand href="/">Ambitious</NavbarBrand>
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink onClick={props.toggleLogin}>Login</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={props.toggleRegister}>Register</NavLink>
            </NavItem>
        </Nav>

        <Modal className='login-modal' modalTransition={3000}  backdropTransition={5000} style={{maxWidth:'359px'}} zIndex={5000}  isOpen={props.LoginModalVisible} toggle={props.toggleLogin}>
            <ModalBody >
                <div className='row' style={{justifyContent:'center'}}>
                    <img className="img-responsive" style={{width:'46%'}} src={Logo} alt="Chania" />
                </div>
                <p style={{textAlign:'center'}}>Login and join us now!</p>
                <div className='row' style={{justifyContent:'center'}}>
                    <div className='col-lg-9 col-md-12'>
                        <Form className='login-form' onSubmit={props.loginSubmit} >
                            <Button className='form-control' color='primary'>Login with facebook</Button>  
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
                    <div className='row col-3 align-item-center' style={{alignItems:'flex-start'}}>
                        <p style={{textAlign:'center'}}>NASA</p>
                        <img className="img-responsive" style={{width:'20%'}} src={Logo} alt="Chania" /> 
                    </div>
                </div>
                <p style={{textAlign:'end'}}>Welcome to the NASA universe!</p>
                <div className='row'>
                    <div className='col-lg-7'>
                        <img className="img-responsive" style={{width:'100%'}} src={Logo} alt="Chania" /> 
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
                                <Input className='form-control' placeholder="password" />
                            </InputGroup>
                            <br />
                            <Button type='submit' className='form-control' color='primary'>Register</Button>
                            <p style={{textAlign:'center'}}>join us now to see fascinate thing!</p>
                        </Form>
                    </div>
                </div>
            </ModalBody> 
        </Modal>
    </Navbar>
  )
}
