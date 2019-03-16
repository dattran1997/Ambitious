import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';
import Social from './components/Social';
import BodyCard from './components/BodyCard';
import DetailBody from './components/DetailBody';

class App extends Component {
  state = {
    LoginModalVisible: false,
    RegisterModalVisible: false,
    CreateTargetModalVisible: false,
    stepModalVisible:false,
    createTarget:{
      target: "",
      description: "",
      progress: 0,
      startDate: new Date(),
      endDate: new Date(),
      userId: "",
    },
    step:{
      content:"",
      finish:false,
      targetId:"",
    },
    login:{
      username: "",
      password: ""
    },
    register:{
      username:"",
      password:"",
      email:"",
    },
    TargetList:[],
    TodoList:[],
  }

  toggleLogin = () =>{
    this.setState({
      LoginModalVisible: !this.state.LoginModalVisible,
    });
  }

  toggleRegister = () =>{
    this.setState({
      RegisterModalVisible: !this.state.RegisterModalVisible,
    });
  }

  toggleCreateTarget = () =>{
    this.setState({
      CreateTargetModalVisible: !this.state.CreateTargetModalVisible,
    });
  }

  toggleStepModal = () =>{
    this.setState({
      stepModalVisible: !this.state.stepModalVisible,
    });
  }

  loginInfoChange = (newLoginInfo) =>{
    this.setState({
      login:{
        ...this.state.login,
        ...newLoginInfo,      
      }
    });
  }


  registerInfoChange = (newRegisterInfo) =>{
    this.setState({
      register:{
        ...this.state.register,
        ...newRegisterInfo
      }
    });
  }

  createTargetInfoChange = (newCreateTargetInfo)=>{
    this.setState({
      createTarget:{
        ...this.state.createTarget,
        ...newCreateTargetInfo
      }
    });
  }

  startDateInfoChange = (newStartDate)=>{
    this.setState({
      createTarget:{
        ...this.state.createTarget,
        startDate: newStartDate,
      },
    });
  }
  endDateInfoChange = (newEndDate)=>{
    this.setState({
      createTarget:{
        ...this.state.createTarget,
        endDate: newEndDate,
      },
    });
  }

  stepInfoChange = (newStep)=>{
    this.setState({
      step:{
        ...this.state.step,
        ...newStep,
      }
    });
  }

  loginSubmit = async (event) =>{
    event.preventDefault();
    // login info return
    console.log(this.state.login);
  }

  registerSubmit = async(event) =>{
    event.preventDefault();
    // register info return
    console.log(this.state.register);
  }

  createTargetSubmit = async(event) =>{
    event.preventDefault();
    console.log(this.state.createTarget);
  }

  stepSubmit = async(event)=>{
    event.preventDefault();
    console.log(this.state.step);
  }


  render() {
    return (
      <div className="App">
          <NavBar 
            LoginModalVisible = {this.state.LoginModalVisible} 
            RegisterModalVisible = {this.state.RegisterModalVisible}
            toggleLogin={this.toggleLogin}
            toggleRegister={this.toggleRegister}
            loginInfoChange ={this.loginInfoChange}
            loginSubmit={this.loginSubmit}
            registerInfoChange={this.registerInfoChange}
            registerSubmit={this.registerSubmit}
          />
          <BodyCard 
            target={this.state.createTarget.target}
            description={this.state.createTarget.description}
            startDate={this.state.createTarget.startDate} 
            endDate={this.state.createTarget.endDate}
            startDateInfoChange={this.startDateInfoChange}
            endDateInfoChange={this.endDateInfoChange} 
            createTargetInfoChange={this.createTargetInfoChange}
            createTargetSubmit={this.createTargetSubmit}
            CreateTargetModalVisible={this.state.CreateTargetModalVisible} 
            toggleCreateTarget={this.toggleCreateTarget} 
            TargetList={this.TargetList}
          />
          <DetailBody 
            stepInfoChange={this.stepInfoChange}  
            stepSubmit={this.stepSubmit}  
            toggleStepModal={this.toggleStepModal}
            stepModalVisible={this.state.stepModalVisible}
          />
          <Footer />
      </div>
    );
  }
}

export default App;
