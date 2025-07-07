import Button from './Button';
import { useEffect, useState } from 'react';


export default function ContactUs({ id, onClose }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxP1wM2ZekZQiJfiH7Hc-jQAYzMgGvfcJwOofnA6WnNUe98CQqLe1y3ayIQ-1wP9Zs/exec';
    const form = document.getElementById('contact-form');

    const closeButton = document.getElementById('close-button');
    const contactUsComponent = document.getElementById('contact-us-component');

    closeButton.addEventListener('click', () => {
        contactUsComponent.display = 'none';
    });

    if (!form) {
      console.error('Form not found');
      return;
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData(form);

      fetch(scriptURL, {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            setLoading(false);
            onClose();
            setTimeout(() => {
              alert('Thank you! One of our team will be in contact shortly');                                                            
            }, 10); 
          } else {           
            setLoading(false);               
            onClose();
            setTimeout(() => {
              alert('Thank you! One of our team will be in contact shortly');                                                            
            }, 10); 
          }
        })
        .catch((error) => {   
          setLoading(false);       
          onClose();
          setTimeout(() => {
            alert('Thank you! One of our team will be in contact shortly');                                                            
          }, 10); 
        })
        .finally(() => {
          setLoading(false); // ✅ stop loading after success or error
        });
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, [onClose]);


  return (
    <div className="section-container">
      <section id={id} className="section contact-modal">        
        <div className="modal-haze"></div> 
        <div className="modal-form">
          <img id="close-button" className="contact-us-close-button" src='/close.svg' onClick={onClose}></img>
          <h2> Try Reviewboat </h2>
          <p> Fill in your details and our team will get in touch to organise a demo </p>
          <form id="contact-form">
              <p className="input-label"> First Name </p> 
              <input name="first_name"  autoComplete="given-name" required />
              <p className="input-label"> Second Name </p> 
              <input name="second_name" autoComplete="family-name"  />
              <p className="input-label"> Company Name </p> 
              <input name="company_name" autoComplete="organization" required />
              <p className="input-label"> Company Email </p> 
              <input name="company_email" type="email" autoComplete="email" required />
              <p className="input-label"> Phone Number</p> 
              <input name="phone_number" autoComplete="tel" required />
              <button
                id="request-a-demo-button"
                type="submit"
              >
                {loading ? <span className="spinner"></span> : 'Request a demo'}
                <img id="arrow-right" className="leader-subheading-icon" src='/arrow-right.svg'></img>
              </button>
        </form>
        </div>
      </section>
    </div>
  );
}
