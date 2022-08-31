import './contact.styles.css';

const Contact = () => {
    return (
        <section className='contact-section'>
            <h1 className='contact-heading section-heading'>Contact Me</h1>
            <form action='' className='contact-form center'>
                <input type='text' placeholder='Name..' />
                <input type='email' placeholder='Email..' />
                <textarea placeholder='Message'></textarea>
                <input
                    type='submit'
                    value={'Submit'}
                    className='contact-form-btn'
                />
            </form>
        </section>
    );
};

export default Contact;
