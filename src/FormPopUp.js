import React from 'react';

function FormPopUp(props) {
  const isRequestSent = props.isRequestSent;
  let popUpClass = '';
  if(isRequestSent) {
    popUpClass = 'popup--wrapper'
  } else {
    popUpClass = 'hidden'
  }

  function okButonClicked() {
    return props.changeRequestSentState(false)
  }

  return (
    <div className={popUpClass}>
      <div className="popup--content popup--content-result">
        <h3>Thanks for filling out our form!</h3>
        <p>We will look over your message and Tatiana will get back to you in 24 hours. In the meantime, you can check the <a href="/foundation">Foundation</a> section, look over our <a href="/experience">projects collection</a> or browse through our latest <a href="/blog">blog posts</a>.</p>
        <p>Your mate at MadAppGang, Jack Rudenko.</p>
        <div className="link-button dark wide popup-content--ok" onClick={okButonClicked}>OK</div>
      </div>
    </div>
  )
}

export default FormPopUp;