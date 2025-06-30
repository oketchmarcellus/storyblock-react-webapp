import React from 'react';
import { StoryblokComponent, storyblokEditable, StoryblokRichText } from '@storyblok/react';
import { useParams } from 'react-router';

export default function Contactsection({ blok }) {
	return (
        <article id="contact" className="wrapper style4" {...storyblokEditable(blok)}>
            <div className="container medium">
                <header>
                    <h2>{blok.teaser}</h2>
                    <p>{blok.contactintro}</p>
                </header>
                <div className="row">
                    <div className="full">
                        <form method="post" action="#">
                            <div className="row my-form">
                                <div className="halves">
                                    <div className="half-large full-small">
                                        <input type="text" name="name" id="name" placeholder="Name" />
                                    </div>
                                    <div className="half-large2 full-small">
                                        <input type="text" name="email" id="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="fulls">
                                    <div className="full">
                                        <input type="text" name="subject" id="subject" placeholder="Subject" />
                                    </div>
                                    <div className="full">
                                        <textarea name="message" id="message" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="full">
                                    <ul className="actions">
                                        <li><input type="submit" value="Send Message" /></li>
                                        <li><input type="reset" value="Clear Form" className="alt" /></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="full">
                        <hr />
                        <h3>{blok.contactending}</h3>
                        <ul className="social">
                            <li><a href="#" className="icon brands fa fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon brands fa fa-facebook-f"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon brands fa fa-dribbble"><span className="label">Dribbble</span></a></li>
                            <li><a href="#" className="icon brands fa fa-linkedin"><span className="label">LinkedIn</span></a></li>
                            <li><a href="#" className="icon brands fa fa-tumblr"><span className="label">Tumblr</span></a></li>
                            <li><a href="#" className="icon brands fa fa-google-plus"><span className="label">Google+</span></a></li>
                            <li><a href="#" className="icon brands fa fa-github"><span className="label">Github</span></a></li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <footer>
                    <ul id="copyright">
                        <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">REACT JS & STORYBLOK</a></li>
                    </ul>
                </footer>
            </div>
        </article>
	);
}