import React from 'react';
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';
import './contactScreen.css';

function ContactScreen() {
  return (
    <div className='contact-us-page'>
      <div className='contact-us-page-left'>
        <div className='google-map-button secondary-font'>
          <a
            href='https://goo.gl/maps/dHcmT7yUY4gAoNiJ6'
            target='_blank'
            rel='noreferrer'
          >
            look at google maps
          </a>
        </div>
        <div className='contact-us-title'>
          <div className='contact-us-title-heading heading-font'>
            Contact Us
          </div>
          <div className='contact-us-title-motto primary-font'>
            We&apos;d be more than happy to help you
          </div>
        </div>
      </div>
      <div className='contact-us-page-right'>
        <ContactUsForm />
      </div>
    </div>
  );
}

export default ContactScreen;
