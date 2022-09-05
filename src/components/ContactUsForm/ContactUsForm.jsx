import React from 'react';
import './ContactUsForm.css';
import { useState } from 'react';

function ContactUsForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const mailTo =
    'mailto:aasf.iiitmg@gmail.com?subject=' +
    name.split(' ').join('_') +
    '&body=' +
    message.split(' ').join('_');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='contact-us-form-container'>
      <form className='contact-us-form primary-font' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <br />
        <input
          type='text'
          id='name'
          name='name'
          onChange={(event) => setName(event.target.value)}
        ></input>
        <br />
        <br />
        {/* For future implementation of Email and Phone Number
				<label htmlFor='email'>Email</label>
        <br />
        <input type='text' id='email' name='email'></input>
        <br />
        <br />
        <label htmlFor='phone'>Phone</label>
        <br />
        <input type='text' id='phone' name='phone'></input>
        <br />
        <br /> */}
        <label htmlFor='email'>Message</label>
        <br />
        <textarea
          id='message'
          name='message'
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <br />
        <br />
        <div className='contact-form-footer'>
          {/* For future implemenation of upload file button
					<div>
            <label htmlFor='uploadFile'>
              <div className='upload-button'>
                <i className='fa fa-upload'></i>
                <span className='upload-button-text'>Upload File</span>
              </div>
            </label>
            <input type='file' id='uploadFile' name='uploadFile'></input>
          </div> */}
          <div className='contact-submit'>
            <label htmlFor='sendmsg'>
              <a href={mailTo}>
                <div className='send-message-button'>SEND MESSAGE</div>
              </a>
            </label>
            <input type='submit' id='sendmsg' value='SEND MESSAGE'></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
