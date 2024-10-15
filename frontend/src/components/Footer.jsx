import React from 'react';
import '../styles/Footer.css';
import { Twitter, Github, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__content'>
                <div className='footer__section'>
                    <h3 className="footer__heading">Quick Links</h3>
                    <ul className="footer__list">
                        <li><a target='_blank' href="https://f1tv.formula1.com/" className="footer__link">F1 TV</a></li>
                        <li><a target='_blank' href="https://fantasy.formula1.com/" className="footer__link">Fantasy F1</a></li>
                        <li><a target='_blank' href="https://f1store.formula1.com/en/" className="footer__link">F1 Store</a></li>
                        <li><a target='_blank' href="https://f1experiences.com/" className="footer__link">F1 Experiences</a></li>
                        <li><a target='_blank' href="https://tickets.formula1.com/en" className="footer__link">Tickets</a></li>
                    </ul>
                </div>
                <div className='footer__section'>
                    <h3 className="footer__heading">F1 Info</h3>
                    <ul className="footer__list">
                        <li><a target='_blank' href="https://www.formula1.com/" className="footer__link">F1 Website</a></li>
                        <li><a target='_blank' href="https://www.formula1.com/en/teams" className="footer__link">Teams</a></li>
                        <li><a target='_blank' href="https://www.formula1.com/en/drivers" className="footer__link">Drivers</a></li>
                        <li><a target='_blank' href="https://www.formula1.com/en/results/2024/team" className="footer__link">Constructor Standings</a></li>
                        <li><a target='_blank' href="https://www.formula1.com/en/results/2024/drivers" className="footer__link">Driver Standings</a></li>
                        <li><a target='_blank' href="https://www.formula1.com/en/latest/all" className="footer__link">News</a></li>
                    </ul>
                </div>
                <div className='footer__section'>
                    <h3 className="footer__heading">Follow F1</h3>
                    <div className="footer__social-icons">
                        <a target='_blank' href="https://x.com/f1" className="footer__social-link"><Twitter size={24} /></a>
                        <a target='_blank' href="https://www.facebook.com/Formula1" className="footer__social-link"><Facebook size={24} /></a>
                        <a target='_blank' href="https://www.instagram.com/f1/" className="footer__social-link"><Instagram size={24} /></a>
                        <a target='_blank' href="https://www.youtube.com/F1" className="footer__social-link"><Youtube size={24} /></a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='personal'>
                <h3>Developed by Hitakrit Goplani</h3>
                <div className="footer__social-icons">
                    <a target='_blank' href="https://www.linkedin.com/in/hitakrit-goplani-057308247/" className="footer__social-link"><Linkedin size={24} /></a>
                    <a target='_blank' href="https://github.com/hitakritgoplani/" className="footer__social-link"><Github size={24} /></a>
                    <a target='_blank' href="https://www.instagram.com/hitakrit.goplani/" className="footer__social-link"><Instagram size={24} /></a>
                    <a target='_blank' href="https://x.com/hitakritgoplani" className="footer__social-link"><Twitter size={24} /></a>
                </div>
            </div>
        </footer>
    );
}