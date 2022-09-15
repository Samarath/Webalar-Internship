import './ContactForm.css';
import {FaTwitter, FaInstagram, FaFacebookF} from 'react-icons/fa'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const ContactForm = () => {
    let iconStyles = { 
        fontSize: "1.5em",
        borderRadius: '20px' ,
        padding: '5px',
        cursor: 'pointer',
        backgroundColor: '#43DDE6',
        margin: '10px'

      };

    return(
        <>
        <Navbar />
        <div className='contactform'>
            <h4>Connect with us</h4>

            <div className='c_form'>
                <div className='under_c_form'>
                    <form>
                        <h5>Tell us about your project</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum lobortis mi vulputate potenti orci.</p>

                        <label htmlFor='name'>
                            Your Name 
                        </label><br />
                        <input type='text' name='name' id='name'/>
                        <br />

                        <label htmlFor='email'>
                            Your Email
                            
                        </label><br />
                        <input type='email' name='email' id='email'/>
                        <br />


                        <label htmlFor='number'>
                            Your Phone Number
                        </label><br />
                        <input type='text' name='phone_number' id='number' className='phone'/>
                        <br />

                        <label htmlFor='message'>
                            Your Message 
                            
                        </label> <br/>
                        <textarea id='message' name='your_message'></textarea>
                        <br />
                        <button type='submit'>Submit</button>
                    </form> 
                </div>
                 <div className='address_detail'>
                    <div className='address_info'>
                        <h5>Address</h5>
                        <p>0199 Taylor Park, North Dakota, USA</p>
                    </div>

                    <div className='address_info'>
                        <h5>Call us on</h5>
                        <p>+1 98723 42023 <br />
                            info@logoipsum.com</p>
                    </div>

                    <div className='address_info'>
                        <h5>Social Media</h5>
                        <FaInstagram style={iconStyles}/>
                        <FaTwitter style={iconStyles}/>
                        <FaFacebookF style={iconStyles}/>
                    </div>
                  </div>  
            </div>
            

        </div>
        <Footer />
     </>
    )
}

export default ContactForm;