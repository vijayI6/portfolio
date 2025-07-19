import './Contact.css';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="contact-text">
                <h1>Contact Me</h1>
            </div>

            <div className="contact-container">
                <div className="contact-details">
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
                        href="https://www.instagram.com/vizai_43"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/instagram.png" alt="instagram" />
                    </a>
                </div>


                <div className="contact-form">
                    <form>
                        <input type="text" name="uname" placeholder="Your Name" id="uname" required />
                        <input type="email" name="mailid" placeholder="abc@gmail.com" id="email" required />
                        <textarea rows="6" placeholder="Your Message" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
