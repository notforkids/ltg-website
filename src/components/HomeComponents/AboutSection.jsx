import React from 'react';
import './AboutSection.css';
import Logo from '../../img/logo.png';
import Container from 'react-bootstrap/Container';

function AboutSection() {
    return(
        <Container>
        <div className="divshortaboutus">
         
        <div className='divltglogo'>
        <img className = "ltglogo" src={Logo} alt="ltglogo" />
        </div>

        <div className='divshortbackground'>
            <p className="shortbackground">The <span className='ltgred'>LT</span><span className='ltggrey'>&</span><span className='ltgred'>G Credit Line</span> provides loans for micro-entrepreneurs to fund their business growth. Borrowers enjoy the customized credit with friendlier terms, efficient risk-handling insurance, and other value-added services needed by small businesses. </p>
        </div>
        <div className="divbetterloan">
            <h3 className="betterloan">"Better Loans, Better Lives"</h3>
        </div>
        <div className="divbetterloanpg">
            <p className="betterloanpg"> At <span className='ltgred'>LT</span><span className='ltggrey'>&</span><span className='ltgred'>G </span>, we believe that 'better loans, better lives' is more than just a statement—it’s our mission and guiding principle. We are dedicated to providing fair, reliable, and accessible financial solutions that empower small business and support families, fostering growth and future success. Through responsible and supportive lending, we contribute to financial stability, improved livelihoods, and community development, ensuring every loan serves as a step toward a prosperous life.</p>
            
        </div>
        <div className='divlearnmore'>
        <button className="learnmore-btn" href="#Home">
              Learn More 
        </button>
        </div>
    </div>
    
    </Container>
    )
}

export default AboutSection;