import Slides from "../Slides/Slides";
import { FaRegWindowRestore, FaLayerGroup, FaHockeyPuck } from 'react-icons/fa';
import "./Services.css";

const Services = () => {

  let iconStyles = { color: '#43DDE6', fontSize: "1.5em" };

  return (
    <div className="service">

      <div className="s_comp">
        <hr />
        <p>Trusted Companies</p>
        <hr />
      </div>

      <Slides />

      <div className="s_detail">
        <div>
            <h3>Our services that we provide</h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu. Laoreet orci nisl etiam risus ut nec. Facilisi ipsum viverra diam arcu massa amet non metus ornare.
          </p>
        
        </div>
      </div>
      
      <div className="s_provide">
        <div className="s_line">
          <FaLayerGroup style={iconStyles} size={125}/>
          <h4>Design</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.</p>
        </div>
        <div className="s_line">
          <FaRegWindowRestore style={iconStyles} size={125}/>
          <h4>Developement</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.</p>
        </div>
        <div>
          <FaHockeyPuck style={iconStyles} size={125}/>
          <h4>Marketing</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.</p>
        </div>
      </div>

    </div>        
  );
};

export default Services;

