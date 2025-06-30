import React from 'react';
import { StoryblokComponent, storyblokEditable, StoryblokRichText } from '@storyblok/react';
import { useParams } from 'react-router';

export default function Introtext({ blok }) {
	return (
		<div className="introtext" {...storyblokEditable(blok)}>
            <StoryblokRichText doc={blok.richtext} />
        </div>
	);
}

