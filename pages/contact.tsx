import React, { useState, useEffect } from 'react';
import styles from '../styles/ContactPage.module.css';
import { IoPaperPlane } from 'react-icons/io5';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Basic client-side validation for required fields
    const { fullname, email, message } = formData;
    const isValid = fullname.trim() !== '' && email.trim() !== '' && message.trim() !== '';
    setIsFormValid(isValid);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Handle form submission logic here (e.g., send to API)
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      // Optionally reset form
      setFormData({ fullname: '', email: '', message: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    // As a Next.js page, it's implicitly "active" when routed to.
    <article className="page-article active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className={styles.mapbox} data-mapbox>
        <figure>
          {/* Ensure your Google Maps embed URL is valid.
              The original URL "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd" is not standard.
              A typical embed URL looks like the one below, replacing coordinates for your location. */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11545.98670876127!2d-5.836886474149959!3d34.25828230559772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0a3424177d33d9%3A0x67a3a0e63d3d6e5d!2sKenitra!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
            width="400"
            height="300"
            loading="lazy"
            title="Google Map of Kenitra"
          ></iframe>
        </figure>
      </section>

      <section className={styles.contactForm}>
        <h3 className="h3 form-title">Contact Form</h3>

        <form className={styles.form} onSubmit={handleSubmit} data-form>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="fullname"
              className={styles.formInput}
              placeholder="Full name"
              required
              data-form-input
              value={formData.fullname}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              className={styles.formInput}
              placeholder="Email address"
              required
              data-form-input
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            name="message"
            className={styles.formInput}
            placeholder="Your Message"
            required
            data-form-input
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>

            <IoPaperPlane />
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default ContactPage;