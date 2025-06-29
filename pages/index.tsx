import React, { useState } from 'react';
import TestimonialsModal from '../components/testimonialsmodal'; // Import modal component

const testimonialsData = [
    {
        id: 1,
        avatar: '/assets/images/avatar-1.png', // Example image path
        title: 'Daniel Lewis',
        text: 'Richard was a great guy to work with. He is an excellent developer, communicator, and a true team player. Highly recommended!',
    },
    {
        id: 2,
        avatar: '/assets/images/avatar-2.png', // Example image path
        title: 'Jessica Miller',
        text: 'Richard delivered exactly what we needed. His attention to detail and ability to understand complex requirements made the project a success.',
    },
    // Add more testimonial objects here
];

const AboutPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonialsData[0] | undefined>(undefined);

    const openModal = (testimonial: typeof testimonialsData[0]) => {
        setSelectedTestimonial(testimonial);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTestimonial(undefined);
    };

    return (
        <article className="page-article active" data-page="about">
            <header>
                <h2 className="h2 article-title">About Me</h2>
            </header>
            <section className="about-text">
                <p>
                    I am a passionate web developer with a keen eye for detail and a love for creating beautiful and functional web experiences.
                    My journey in web development began with a curiosity for how websites work, which quickly turned into a passion for building them.
                </p>
                <p>
                    I specialize in front-end development, bringing designs to life with clean, efficient, and maintainable code.
                    I am constantly learning new technologies and improving my skills to deliver high-quality solutions.
                </p>
            </section>

            {/* Service Section Placeholder */}
            <section className="service">
                <h3 className="h3 service-title">What I do</h3>
                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src="/assets/images/icon-dev.svg" alt="web development icon" width="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web development</h4>
                            <p className="service-item-text">
                                High-quality development of sites at the professional level.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src="/assets/images/icon-design.svg" alt="design icon" width="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web design</h4>
                            <p className="service-item-text">
                                The most modern and high-quality design, at a professional level.
                            </p>
                        </div>
                    </li>
                    {/* Add more service items as needed */}
                </ul>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>
                <ul className="testimonials-list has-scrollbar">
                    {testimonialsData.map((testimonial) => (
                        <li
                            className="testimonials-item content-card"
                            key={testimonial.id}
                            onClick={() => openModal(testimonial)}
                        >
                            <div className="testimonials-avatar-box">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.title}
                                    width="60"
                                    data-testimonials-avatar
                                />

                            </div>
                            <h4
                                className="h4 testimonials-item-title"
                                data-testimonials-title
                            >
                                {testimonial.title}
                            </h4>
                            <div className="testimonials-text" data-testimonials-text>
                                <p>{testimonial.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Clients Section Placeholder */}
            <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>
                <ul className="clients-list has-scrollbar">
                    <li className="clients-item">
                        <a href="#">
                            <img src="/assets/images/client-1.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="/assets/images/client-2.png" alt="client logo" />
                        </a>
                    </li>
                    {/* Add more client items */}
                </ul>
            </section>

            <TestimonialsModal
                isOpen={isModalOpen}
                onClose={closeModal}
                testimonial={selectedTestimonial}
            />
        </article>
    );
};

export default AboutPage;
