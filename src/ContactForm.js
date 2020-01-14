import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',

    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  submitHandler = (event) => {
    event.preventDefault();

    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state,
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm();
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.");
      }
    })
  }
  resetForm(){
    this.setState({name: '', email: '', message: ''});
 }

  render() {
    return (
      <form className="contact--form" method="post" action="/" name="getintouch" onSubmit={this.submitHandler}>
        <input type="hidden" name="form-name" value="getintouch" />
        <input type="hidden" name="bot-field" />
        <input type="text" name="name" className="contact--form-input" placeholder="Name" required value={this.state.name} onChange={this.changeHandler} />
        <input type="email" name="email" className="contact--form-input" placeholder="E-mail" required value={this.state.email} onChange={this.changeHandler} />
        <textarea name="message" className="contact--form-input" placeholder="Message" value={this.state.message} onChange={this.changeHandler} />
        <button type="submit" className="link-button dark wide">Send</button>
      </form>
    );
  }
}

export default ContactForm;