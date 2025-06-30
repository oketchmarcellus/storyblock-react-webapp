import { storyblokEditable } from '@storyblok/react';

export default function Scrollybtn({ blok }) {
 return (
    <div className="scrolly" {...storyblokEditable(blok)}>
        {blok.scrollybtntext}
    </div>
 );
}