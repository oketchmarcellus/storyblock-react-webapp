import React from 'react';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

export default function Grid({ blok }) {
	return (
		<div className="grid" {...storyblokEditable(blok)}>
			{blok.rightcol?.map((nestedBlok) => (
				<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</div>
	);
}