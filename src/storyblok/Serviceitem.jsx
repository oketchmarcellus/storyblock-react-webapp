import React from 'react';
import { StoryblokComponent, storyblokEditable, StoryblokRichText } from '@storyblok/react';
import { useParams } from 'react-router';

export default function Serviceitem({ blok }) {
	return (
		<div className="service" {...storyblokEditable(blok)}>
            <section className="box style1">
                <span className={`icon featured fa ${blok.icofamily}`}></span>
                <h3>{blok.servicetitle}</h3>
                <p>{blok.servicedescription}</p>
            </section>
		</div>
	);
}