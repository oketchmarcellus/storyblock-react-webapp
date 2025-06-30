//import modules
import React from "react";
import { useState } from 'react';
import { useParams } from 'react-router';
import { StoryblokComponent, useStoryblok, StoryblokRichText } from '@storyblok/react';
import 'font-awesome/css/font-awesome.min.css';

//import template parts
import './App.css';
import Header from './templateparts/Navigation';


export default function App() {
   const params = useParams();
   const slug = params['*']
   const story = useStoryblok(slug || 'home', {
    version: 'draft',
  });
  // Log the story object to the console
  console.log('Story:', story);

 if (!story?.content) {
   return (
    <div className="loader">
      <img src="./src/assets/loading.gif" alt="Loading..." width="40px"/>
    </div>
  )
 }
  return (
    <>
      <Header />
      
      {/* Render components based on the story content */}
      {story.content.body.map((block) => {
        return <StoryblokComponent key={block._uid} blok={block} />;
      })}
      {/*Uncomment to Display the story object on the page to for debug 
      <div>
        <h2>Story Data</h2>
        <pre>{JSON.stringify(story, null, 2)}</pre>
      </div>*/}
    </>
  );
}

//export default App