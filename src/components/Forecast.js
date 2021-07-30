import React, { useState } from "react";
import Forecastinterior from './Forecastinside';
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useSpring, animated } from "react-spring";
import sunny from '../media/day.svg';


export default function Forecast(props) {
  const [click, setClick] = useState(false);
  

  function handleClick() {
    setClick(!click);
  }

  const prop = useSpring({
    height: click ? "300px" : "1px",
    backgroundColor: click ? 'transparent' : 'transparent'
    
  });

  const style = {
      color:  "#57A0EE",
      fontSize: 40
  };
  const forecastStyle = useSpring({
    height: click ? "300px" : "224px",
    opacity: 0,
    backgroundColor: click ? 'transparent' : 'transparent',
    transition:"opacity 0.8s"
  });
  

  return (
    <div className="dropdownDiv">
      <animated.div className="dropdown" style={click ? prop : forecastStyle}>
         <div className={click ? 'fadeIn' : 'fadeOut'}>
            <Forecastinterior style={forecastStyle} image={props.imageA} image2={props.imageB} monTemp1={props.monTempA}
                                                                                                 tuesTemp1={props.tuesTempA}
                                                                                                 wedTemp1={props.wedTempA}
                                                                                                 thursTemp1={props.thursTempA}
                                                                                                 friTemp1={props.friTempA}
                                                                                                 satTemp1={props.satTempA}
                                                                                                 sunTemp1={props.sunTempA}
                                                                                                         monImg1={props.monImgA}
                                                                                                         tuesImg1={props.tuesImgA}
                                                                                                         wedImg1={props.wedImgA}
                                                                                                         thursImg1={props.thursImgA}
                                                                                                         friImg1={props.friImgA}
                                                                                                         satImg1={props.satImgA}
                                                                                                         sunImg1={props.sunImgA}



                                                                                                         newstitlea={props.newstitleA} newstitleb={props.newstitleB}
                                                                                                         newsalta={props.newsaltA} newsalta={props.newsaltB}
                                                                                                         newsdescriptiona={props.newsdescriptionA} newsdescriptionb={props.newsdescriptionB}
                                                                                                         newslinka={props.newslinkA} newslinkb={props.newslinkB}
                                                                                                         
                                                                                                  
          

            />
             
         </div>
        
        
      </animated.div>
      <AddBoxIcon className="button" style={style} onClick={handleClick} />
    </div>
  );
}
