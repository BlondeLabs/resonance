import React from 'react';

class LoginForm extends React.Component {
  constructor(props){
    super(props);

    // state
    this.state = {value: ''};

    // callbacks
    this.handleSubmit = props.onAuthSubmit;
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){

    // control input value
    this.setState({value: event.target.value});
  }

  handleFormSubmit(event){

    // stop automatic page refresh
    event.preventDefault();

    // send input value up
    this.handleSubmit(this.state.value);
  }

  render(){
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          className="input-field"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default LoginForm;
