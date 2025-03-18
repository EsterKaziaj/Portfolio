// Testimonials.jsx
import React, { useState } from 'react';
import styles from '../styles/Testimonials.module.css';
import emily from '../assets/customers/emily.png';
import linda from '../assets/customers/linda.png';
import jes from '../assets/customers/jes.png';
import left from '../assets/customers/left.png';
import right from '../assets/customers/right.png';

const Testimonials = () => {
  const allTestimonials = [
    {
      id: 1,
      name: 'Emily R.',
      image: emily,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.',
      rating: 5
    },
    {
      id: 2,
      name: 'Linda T.',
      image: linda,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.',
      rating: 5
    },
    {
      id: 3,
      name: 'Jessica M.',
      image: jes,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.',
      rating: 5
    }
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? allTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === allTestimonials.length - 1 ? 0 : prev + 1));
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % allTestimonials.length;
      result.push(allTestimonials[index]);
    }
    return result;
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating);
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2>Join our happy customers!</h2>
        
        <div className={styles.testimonialGrid}>
          {getVisibleTestimonials().map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={styles.testimonialCard}
            >
              <div className={styles.cardContent}>
                <div className={styles.imageWrapper}>
                  <img src={testimonial.image} alt="" className={styles.customerImage} />
                </div>
                <p>{testimonial.text}</p>
                <div className={styles.customerInfo}>
                  <span className={styles.name}>— {testimonial.name}</span>
                  <span className={styles.rating}>{renderStars(testimonial.rating)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.navigation}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progress} 
              style={{ width: `${((startIndex + 1) / allTestimonials.length) * 100}%` }}
            />
          </div>
          <div className={styles.arrows}>
            <button onClick={handlePrev} className={styles.arrowButton}>
              <img src={left} alt="Previous" />
            </button>
            <button onClick={handleNext} className={styles.arrowButton}>
              <img src={right} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;