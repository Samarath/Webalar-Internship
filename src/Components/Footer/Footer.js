import './Footer.css';
import {FaTwitter, FaInstagram, FaFacebookF} from 'react-icons/fa'

const Footer = () => {
    let iconStyles = { 
        fontSize: "1.5em",
        borderRadius: '20px' ,
        padding: '5px',
        cursor: 'pointer',
        backgroundColor: '#FFFFFF',
        margin: '10px'

      };
    return(
           <div className="footer">

            <div className='f_detail'>

                <div className='f_head'>
                    <h3>Let’s work together</h3>
                </div>
                <div className='f_name'>
                   <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.
                    </p>
                    <a href='/'>Let's Talk</a>
                </div>
            </div>

            <div className='f_other_detail'>

                <div className='f_social'>
                    <p>Logo</p>
                    <FaInstagram style={iconStyles}/>
                    <FaTwitter style={iconStyles}/>
                    <FaFacebookF style={iconStyles}/>
                </div>

                <div className='f_contact_info'>
                    <div>
                        <h5>Address</h5>
                        <p>0199 Taylor Park,<br /> North Dakota, USA</p>
                    </div>
                    <div>
                        <h5>Call us on</h5>
                        <p>+1 98723 42023 <br /> info@logoipsum.com</p>
                    </div>
                    <div>
                        <h5>Our Policies</h5>
                        <p>Privacy Policy <br />
                            Terms of Use<br />
                           Refund Policy</p>
                    </div>
                </div>

            </div>

            <div className='f_copyright'>
                <p>Copyright © Webalar. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;