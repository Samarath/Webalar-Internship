import './Works.css';
import {FaLevelUpAlt} from 'react-icons/fa';

const Works = () => {
    let iconStyles = { 
                  color: 'silver',
                  fontSize: "1.5em",
                  borderRadius: '20px' ,
                  border: '1px solid silver',
                  padding: '5px',
                  cursor: 'pointer'

                };

    return(
        <div className='works'>
            <h3>
                Our Works
            </h3>

            <div className='w_main'>

              <div className='w_projects'>

                <div>
                    <div className='w_projects_img'>
                    
                    </div>

                    <div className='w_projects_detail'>

                        <div className='w_project_name'>
                            <h4>Project 1</h4> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>  
                        </div>
                        <div>
                            <FaLevelUpAlt style={iconStyles}/>
                        </div>
                    
                    </div>
                    
                  </div>
                </div>

                <div className='w_projects'>

                <div>
                    <div className='w_projects_img'>
                    
                    </div>

                    <div className='w_projects_detail'>
                        <div className='w_project_name'>
                        <h4>Project 2</h4> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>  
                        </div>
                        <div>
                            <FaLevelUpAlt style={iconStyles}/>
                        </div>
                    
                    </div>
                    
                  </div>
                </div>

                <div className='w_projects'>

                <div>
                    <div className='w_projects_img'>
                    
                    </div>

                    <div className='w_projects_detail'>
                        <div className='w_project_name'>
                        <h4>Project 3</h4> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>  
                        </div>
                        <div>
                            <FaLevelUpAlt style={iconStyles}/>
                        </div>
                    
                    </div>
                    
                  </div>
                </div>

            </div>   

            <a href='/' className='view'>View More</a>

        </div>
    )
}

export default Works;