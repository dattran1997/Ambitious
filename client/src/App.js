import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';
import Social from './components/Social';

class App extends Component {
  state = {
    LoginModalVisible: false,
    RegisterModalVisible: false,
    login:{
      username: "",
      password: ""
    },
    register:{
      username:"",
      password:"",
    }
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

  loginInfoChange = (newLoginInfo) =>{
    this.setState({
      login:{
        ...this.state.login,
        ...newLoginInfo,      
      }
    });
  }

  loginSubmit = async (event) =>{
    event.preventDefault();
    // login info return
    console.log(this.state.login);
  }

  registerInfoChange = (newRegisterInfo) =>{
    this.setState({
      register:{
        ...this.state.register,
        ...newRegisterInfo
      }
    });
  }

  registerSubmit = async(event) =>{
    event.preventDefault();
    // register info return
    console.log(this.state.register);
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
          <Body />
          <Social />
          <Footer />
      </div>
    );
  }
}

export default App;
