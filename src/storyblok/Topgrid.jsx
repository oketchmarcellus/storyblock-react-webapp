import React from 'react';
import { StoryblokComponent, storyblokEditable, StoryblokRichText } from '@storyblok/react';
import { useParams } from 'react-router';

export default function Topgrid({ blok }) {
	return (
		<article id="top" className="portfolio-info wrapper style1" {...storyblokEditable(blok)}>
			<div className="container">
				<div className='image-container'>
					<img 
						className='image fit' 
						src={blok.profileimg.filename} 
						alt={blok.profileimg.alt || 'profile Iimage'} 
						title={blok.profileimg.title || 'profile image'}
					/>
				</div>
				<div className="profile-intro-container">
					{blok.rightcol?.map((nestedBlok) => (
						<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />    
					))}
					{blok.introscrolly?.map((nestedBlok) => (
					<a href="#work" className="button large scrolly">
						<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
					</a>
					))}
				</div>
			</div>
		</article>
	);
}