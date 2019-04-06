import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';
import Social from './components/Social';
import BodyCard from './components/BodyCard';
import DetailBody from './components/DetailBody';
import firebase from 'firebase';

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
    authUser:{
      userId: '',
      username:'',
    },
    TargetList:[],
    TodoList:[{
      _id: 1,
      content: 'Test content 1',
      finished: false,
    },{
      _id: 2,
      content: 'Test content 1',
      finished: false,
    },{
      _id: 3,
      content: 'Test content 1',
      finished: false,
    }],
  }

  getTargetList = async (userId) =>{
    if(userId){
      const result = await fetch(`http://localhost:3001/api/targets/${userId}`, {
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());
      if(!result.success){
        window.alert(result.message);
      }else{
        this.setState({
          TargetList: JSON.parse(result.targetList),
        });
      }
    }else{
      window.alert('Please login!');
      this.toggleLogin();
    }
  }

  componentDidMount = async () => {
    var config = {
      apiKey: "AIzaSyBJgw7hw4L_M49aENjyV9538tgWOAIjD8s",
      authDomain: "techkid-todolist.firebaseapp.com",
      databaseURL: "https://techkid-todolist.firebaseio.com",
      projectId: "techkid-todolist",
      storageBucket: "techkid-todolist.appspot.com",
      messagingSenderId: "713996286226"
    };
    firebase.initializeApp(config);
    
    const userId = window.localStorage.getItem('userId');
    const username = window.localStorage.getItem('username');
    this.setState({
      authUser: {
        userId: userId,
        username: username,
      },
    });
    await this.getTargetList(this.state.authUser.userId);
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

  toggleTargetModal = () => {
    console.log('hello' );
    this.toggleStepModal();
  }

  loginSubmit = async (event) =>{
    event.preventDefault();
    // login info return
    console.log(this.state.login);

    try {
      if(!this.state.login.username || this.state.login.password){
        window.alert('Please enter username or password !');
      }else{
        //fectch login info from server
        const result = await fetch(`http://localhost:3001/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state.login),
        }).then((res)=> res.json());

        if(!result.success){
          window.alert(result.message);
        }else{
          window.localStorage.setItem('userId', result.userId);
          window.localStorage.setItem('username', result.username);
          this.toggleLogin();
          this.setState({
            authUser: {
              userId: result.userId,
              username: result.username,
            }
          });
        }
      }
    } catch (error) {
      console.log(error);
      window.alert(error.message);
    }
  }

  registerSubmit = async(event) =>{
    event.preventDefault();
    // register info return
    console.log(this.state.register);
    try{
      
      if(!this.state.login.username || this.state.login.password){
      window.alert('Please enter username or password !');
      }else{
      //fectch login info from server
      const result = await fetch(`http://localhost:3001/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.login),
      }).then((res)=> res.json());

      if(!result.success){
        window.alert(result.message);
      }else{
        this.toggleRegister();
        this.toggleLogin();
      }
    }
  } catch (error) {
    console.log(error);
    window.alert(error.message);
  }
  }

  createTargetSubmit = async(event) =>{
    event.preventDefault();
    console.log(this.state.createTarget);
    try {
      if(!this.state.createTarget.target){
        window.alert("You need to give the target a title!");
      }else{
        const result = await fetch(`http;//localhost:3001/apt/targets`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state.createTarget),
        }).then((res)=> res.json());

        if(!result.success){
          window.alert(result.message);
        }else{
          this.toggleCreateTarget();
        }
      }
    } catch (error) {
      console.log(error);
      window.alert(error.message);
    }
  }

  loginWithFacebook = async () => {
    try {
      const facebookProvider = new firebase.auth.FacebookAuthProvider();
      const result = await firebase.auth().signInWithPopup(facebookProvider);

      const idToken = await result.user.getIdToken();

      const verifyTokenResult = await fetch(`http://localhost:3001/api/auth/facebookauth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idToken,
        }),
      }).then((res) => res.json());
      console.log(verifyTokenResult);
    } catch (error) {
      console.log(error);
    }
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
            loginWithFacebook={this.loginWithFacebook}
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
            TargetList={this.state.TargetList}
            toggleTargetModal={this.toggleTargetModal}
          />s
          <DetailBody 
            stepInfoChange={this.stepInfoChange}  
            stepSubmit={this.stepSubmit}  
            toggleStepModal={this.toggleStepModal}
            stepModalVisible={this.state.stepModalVisible}
            todoItems={this.state.TodoList}
          />
          <Footer />
      </div>
    );
  }
}

export default App;
