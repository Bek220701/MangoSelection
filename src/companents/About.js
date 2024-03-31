import React from 'react';
import Block from './Block';
import images from '../img/logotip.jpeg'
import pass from '../img/kg.jpeg'
import email from '../img/tall.jpeg'
const About = () => {
    return (
        <div id='about'>
        <div className="container">
         <h1>About</h1> 
         <div className='about'>
            <Block  bg={"red"} title={"Bishkek"} subTitle={"City" } btn={"Follow"}/>
            <Block  bg={"blue"} title={"Osh"} subTitle={"City" } btn={"Follow"}/>
            <Block  bg={"gray"} title={"Batken"} subTitle={"City" } btn={"Follow"}/>
            <Block  bg={email} title={"Naryn"} subTitle={"City" } btn={"Follow"}/>
            <Block  bg={pass} title={"Yssyk-Kol"} subTitle={"City" } btn={"Follow"}/>
            <Block  bg={images} title={"Djalal-Abad"} subTitle={"City" } btn={"Follow"}/>
           
         </div>
         </div> 
        </div>
    );
};

export default About;