import React from 'react';
import { StoryblokComponent, storyblokEditable, StoryblokRichText } from '@storyblok/react';
import { useParams } from 'react-router';

export default function Portfoliosection({ blok }) {
	return (
        <article id='portfolio' className="wrapper style3" {...storyblokEditable(blok)}>
            <div className='container'>
                {/*Render components that are unested directly into html*/}
                <header>
                    <h2>{blok.teaser}</h2>
                    <p>{blok.portfoliointro}</p>
                </header>
                <div className='portfolio-items'>
                {/*if nested grid section exists render nested blok components*/}
                    {blok.portfolioitems?.map((nestedBlok) => (
                        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />    
                    ))}
                </div>
                <footer>
                    <p>{blok.portfolioending}</p>
                    {/*if nested grid exists render nested blok components*/}
                    {blok.portfolioscrolly?.map((nestedBlok) => (
                        <a href="#contact" className="button large scrolly">
                            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                        </a>    
                    ))}
                </footer>
            </div>
		</article>
	);
}