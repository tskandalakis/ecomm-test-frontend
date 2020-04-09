import React from 'react';
import { connect } from "react-redux";
import { Container, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import { withRouter, Redirect } from 'react-router-dom';

import { updateSession } from "../../store/system/actions";
import { SystemState } from '../../store/system/types';
import { AppState } from '../../store';

import "./index.css";

interface LoginProps {
  updateSession: typeof updateSession;
  system: SystemState;
}

type LoginState = {
  email: string,
  password: string
};

class Login extends React.Component<LoginProps,LoginState> {
  state = {
    email: "",
    password: "",
  };

  setEmail = (newEmail: string) => {
    this.setState({email: newEmail});
  }

  setPassword = (newPassword: string) => {
    this.setState({password: newPassword});
  }

  onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    this.setEmail(e.currentTarget.value);
  }

  onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    this.setPassword(e.currentTarget.value);
  }

  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // const { data } = await nodeApi.post(`/auth/login`, {
      //   email: this.state.email,
      //   password: this.state.password
      // });

      this.props.updateSession({
        loggedIn: true,
        session: "2ghv1jh2gv12",
        user: {
          id: "",
          username: "John Doe",
          email: "john.doe@foo.com",
          profile_pic: "test"
        }
      });
    } catch (e) {
      alert(e.message);
    }
  }
  
  render() {
    if(this.props.system.loggedIn){
      return (< Redirect to={{ pathname: "/" }} />)
    } else {
      return (
        <Container>
          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email">
                <FormLabel >Email</FormLabel >
                <FormControl
                  autoFocus
                  type="email"
                  name="email"
                  onChange={this.onChangeEmail}
                />
              </FormGroup>
              <FormGroup controlId="password">
                <FormLabel >Password</FormLabel >
                <FormControl
                  type="password"
                  name="password"
                  onChange={this.onChangePassword}
                />
              </FormGroup>
              <Button block disabled={!this.validateForm()} type="submit">
                Login
              </Button>
            </form>
          </div>
        </Container>
      );
    }
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.system
});

export default withRouter(connect(
  mapStateToProps,
  { updateSession }
)(Login));
