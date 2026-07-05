import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ uname: '', mailid: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ uname: '', mailid: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000); // Clear success message after 5 seconds
        }, 1200);
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-text">
                <h1>Contact Me</h1>
            </div>

            <div className="contact-container">
                <div className="contact-details">
                    <h2>Get in Touch</h2>
                    <p className="contact-desc">
                        Have a question, want to collaborate, or just want to say hello? Drop a message in the form, or reach out directly on social media!
                    </p>
                    <div className="social-icons">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=saivijay.rs@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/gmail.png" alt="gmail" />
                        </a>
                        <a
                            href="https://github.com/vijayI6"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/github.png" alt="github" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rs-vijay"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/linkedin.png" alt="linkedin" />
                        </a>
                        <a
                            href="https://www.instagram.com/ig__vijayyy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/instagram.png" alt="instagram" />
                        </a>
                    </div>
                </div>

                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="uname"
                            placeholder="Your Name"
                            id="uname"
                            value={formData.uname}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="mailid"
                            placeholder="Your Email (abc@gmail.com)"
                            id="email"
                            value={formData.mailid}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <div className="form-footer">
                            <button type="submit" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Sending...' : 'Submit'}
                            </button>
                            {status === 'success' && (
                                <span className="success-message">Message sent successfully!</span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
