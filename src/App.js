import React from 'react';
import ContactForm from './ContactForm'
import FormPopUp from './FormPopUp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRequestSent: false,
    };
    this.handlerRequestSent = this.handlerRequestSent.bind(this)
  }

  handlerRequestSent(value) {
    this.setState({
      isRequestSent: value,
    });
  }

  render() {
    return (
      <div className="App">
        <section className="contacts-page">
          <div className="contacts-page--content container">
            <div className="contacts-page--head section--head">
              <h1 className="section--title">Get in touch</h1>
              <div className="section--subtitle">Let us know <br />
                how we can help
              </div>
            </div>
            <div className="contacts-page--body">
              <div className="contact--form-wrapper">
                <ContactForm changeRequestSentState={this.handlerRequestSent} />
              </div>
            </div>
          </div>
          <FormPopUp isRequestSent={this.state.isRequestSent} changeRequestSentState={this.handlerRequestSent} />
        </section>
      </div>
    );
  }
}

export default App;
