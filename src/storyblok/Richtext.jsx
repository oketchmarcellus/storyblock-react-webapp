import React from 'react';
import { StoryblokComponent, storyblokEditable, StoryblokRichText } from '@storyblok/react';
import { useParams } from 'react-router';

export default function Richtext({ blok }) {
	return (
		<div className="intro-text" {...storyblokEditable(blok)}>
            {blok.richtext?.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
		</div>
        
	);
}