import React from 'react';
import './ContactUsForm.css';

function ContactUsForm() {
  return (
    <div className='contact-us-form-container'>
      <form>
        <label htmlFor='name'>Name</label>
        <br />
        <input type='text' id='name' name='name'></input>
        <br />
        <br />
        <label htmlFor='email'>Email</label>
        <br />
        <input type='text' id='email' name='email'></input>
        <br />
        <br />
        <label htmlFor='phone'>Phone</label>
        <br />
        <input type='text' id='phone' name='phone'></input>
        <br />
        <br />
        <label htmlFor='email'>Message</label>
        <br />
        <input type='text' id='message' name='message'></input>
        <br />
        <br />
        <label htmlFor='uploadFile'>Upload File</label>
        <br />
        <input type='file' id='uploadFile' name='uploadFile'></input>
        <br />
        <br />
        <input type='submit' value='Send Message'></input>
        <br />
      </form>
    </div>
  );
}

export default ContactUsForm;
