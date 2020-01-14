import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',

      isSubmited: false,
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({isSubmited: true});

    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state,
    }).then((response)=>{
      if (response.data.status === 'success'){
        this.setState({isSubmited: false});
        this.resetForm();
        this.props.changeRequestSentState(true); 
      }else if(response.data.status === 'fail'){
        this.setState({isSubmited: false});
        alert("Message failed to send.");
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''});
  }

  render() {
    const isSubmited = this.state.isSubmited;
    return (
      <form className="contact--form" method="post" action="/" name="getintouch" onSubmit={this.submitHandler}>
        <input type="hidden" name="form-name" value="getintouch" />
        <input type="hidden" name="bot-field" />
        <input type="text" name="name" className="contact--form-input" placeholder="Name" required value={this.state.name} onChange={this.changeHandler} />
        <input type="email" name="email" className="contact--form-input" placeholder="E-mail" required value={this.state.email} onChange={this.changeHandler} />
        <textarea name="message" className="contact--form-input" placeholder="Message" value={this.state.message} onChange={this.changeHandler} />
        <button type="submit" className="link-button dark wide">{isSubmited ? 'Sending...' : 'Send'}</button>
      </form>
    );
  }
}

export default ContactForm;