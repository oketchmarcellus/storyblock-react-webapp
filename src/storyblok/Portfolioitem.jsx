import React from 'react';
import { StoryblokComponent, storyblokEditable, StoryblokRichText } from '@storyblok/react';
import { useParams } from 'react-router';

export default function Portfolioitem({ blok }) {
	return (
		<div className="box style2" {...storyblokEditable(blok)}>
            <a href="#" className="featured"><img src={blok.portfolioitemimage.filename} alt="" /></a>
            <h3><a href="#">{blok.portfolioitemheading}</a></h3>
            <p>{blok.portfolioitemdetails}</p>
        </div>
	);
}