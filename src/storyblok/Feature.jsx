import { storyblokEditable } from '@storyblok/react';

export default function Feature({ blok }) {
 return (
  <div className="feature" {...storyblokEditable(blok)}>
    <span>{blok.name}</span>
   </div>
 );
}