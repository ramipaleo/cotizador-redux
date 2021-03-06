import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from  'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import LoginForm from './../components/LoginForm';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActions from '../actions/index';

import {
  TextField,
} from 'redux-form-material-ui'

const style = {
  width: '400px'
}

function submit(values) {
  console.log(values);
}

class Login extends Component {  

  handleSubmit = (values) => {
    console.log(values);
  }

  render() {
    const {todos, actions, handleSubmit} = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <LoginForm onSubmit={this.handleSubmit} />
        </MuiThemeProvider>
      </div>
    );
  }
}

Login.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);