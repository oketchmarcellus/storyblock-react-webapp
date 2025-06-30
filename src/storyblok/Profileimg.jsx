// Hero.jsx
import React from 'react';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';


export default function Profileimg({ blok }) {
 return (
    <span className="ppic image fit" {...storyblokEditable(blok)}>
        <img 
            src={blok.grid.profileimg.filename} 
            alt={blok.grid.profileimg.alt || 'Hero Image'} 
            title={blok.grid.profileimg.title || 'Hero Image'}
         />    
    </span>
 );
}
