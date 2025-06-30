import React from 'react';
import { StoryblokComponent, storyblokEditable, StoryblokRichText } from '@storyblok/react';
import { useParams } from 'react-router';

//Markup for nested blok "worksection"
export default function Worksection({ blok }) {
	return (
		<article id="work" className="wrapper style2" {...storyblokEditable(blok)}>
			<div className='container'>
				{/*Render components that are unested directly into html*/}
				<header>
					<h2>{blok.teaser}</h2>
					<p>{blok.workintro}</p>
				</header>
				<div className='service-items'>
					{/*if nested grid section exists render nested blok components*/}
					{blok.servicesgrid?.map((nestedBlok) => (
						<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />    
					))}
				</div>
				<footer>
					{/*if nested grid exists render nested blok components*/}
					{blok.workscrolly?.map((nestedBlok) => (
						<a href="#portfolio" className="button large scrolly">
							<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
						</a>    
					))}
				</footer>
			</div>
		</article>
	);
}