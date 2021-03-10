import React, { Component } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';

class AboutPage extends Component{
    render(){
        return(
            <div>
        <h1>AboutPage</h1>
        <Header/>
        <About/>
        <Footer/>
        
        
        </div>
        )
    }
}
export default AboutPage ;