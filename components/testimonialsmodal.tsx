import React, { useEffect, useRef } from 'react';
import styles from '../styles/TestimonialsModal.module.css';

type Testimonial = {
  avatar: string;
  title: string;
  text: string;
};

type TestimonialsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  testimonial?: Testimonial;
};

const TestimonialsModal: React.FC<TestimonialsModalProps> = ({ isOpen, onClose, testimonial }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event: { key: string; }) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = ''; // Restore scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = ''; // Ensure overflow is reset on unmount
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null; // Don't render if not open

  const { avatar, title, text } = testimonial || {}; // Destructure testimonial data

  return (
    <div className={`${styles.modalContainer} ${isOpen ? styles.active : ''}`} data-modal-container>
      <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`} data-overlay onClick={onClose}></div>
      <div className={styles.testimonialsModal} data-testimonials-modal ref={modalRef}>
        <button className={styles.modalCloseBtn} data-modal-close-btn onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className={styles.modalImgWrapper}>
          <figure className={styles.modalAvatarBox}>
            <img src={avatar} alt="Client Avatar" width="80" data-modal-img />
          </figure>
          {/* This is the quote icon, ensure its path is correct */}
          <img src="/assets/images/icon-quote.svg" alt="quote icon" />
        </div>
        <div className={styles.modalContent}>
          <h4 className={`h4 ${styles.modalTitle}`} data-modal-title>{title}</h4>
          <time dateTime="2024-06-10">June 10, 2024</time> {/* You might want to make this date dynamic */}
          <p data-modal-text>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsModal;