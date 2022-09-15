import './Info.css';
import infoImage from '../../assets/info-image.png';

const Info = () => {
    return(
        <div className='info'>
            <div className='comp_info'>
                <h1>Let’s create something great together</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nec ultrices venenatis in. Sed elit aenean mattis vulputate aliquet vitae.</p>

                <a href='/'>Let's Talk</a>
            </div>
            <div className='comp_img'>
                <img src={infoImage} alt='infoimage'/>
            </div>
        </div>
    )
}

export default Info;