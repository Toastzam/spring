import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from '../Button/Button';
import './footer.css';


function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/information'>Information</Link>
                        <Link to='/introduction'>Introduction</Link>
                        <Link to='/search'>Search IMG / TAG</Link>
                        <Link to='/board'>Board</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>References</h2>
                        <Link to='/'>연혁</Link>
                        <Link to='/'>참고서적 및 논문</Link>
                        <Link to='/'>사용 모델 / 출처</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Mongchi </h2>
                        <Link to='/'>Birth</Link>
                        <Link to='/'>Location</Link>
                        <Link to='/'>Hobby</Link>
                        <Link to='/'>Age</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/eunhye'>Eunhye Kang</Link>
                        <Link to='/junmo'>Junmo Park</Link>
                        <Link to='/seokran'>Seokran Bae</Link>
                        <Link to='/suhyun'>Suhyun Yoo</Link>
                        <Link to='/yejeong'>Yejeong Son</Link>
                        <Link to='/minji'>Minji Jin</Link>
                    </div>
                </div>
            </div>
            
            <section>
                <div>
                    <form>
                        <Button buttonStyle = 'btn--outline'>Join us</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Footer