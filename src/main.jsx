//import modules
import { createBrowserRouter, RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { storyblokInit, apiPlugin } from '@storyblok/react';

//Add application files
import './index.css';
import App from './App';
//import components
import Page from './storyblok/Page';
import Teaser from './storyblok/Teaser';
import Feature from './storyblok/Feature';
import Grid from './storyblok/Grid';
import Profileimg from './storyblok/Profileimg';
import Topgrid from './storyblok/Topgrid';
import Introtext from './storyblok/Introtext';
import Scrollybtn from  './storyblok/Scrollybtn';
import Worksection from './storyblok/Worksection';
import Serviceitem from './storyblok/Serviceitem';
import Portfoliosection from './storyblok/Portfoliosection';
import Portfolioitem from './storyblok/Portfolioitem';
import Richtext from './storyblok/Richtext';
import Contactsection from './storyblok/Contactsection';


storyblokInit({
 accessToken: import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN,
 use: [apiPlugin],
 components: {
   page: Page,
   teaser: Teaser,
   feature: Feature,
   grid: Grid,
   topgrid: Topgrid,
   introtext: Introtext,
   richtext: Richtext,
   profileimg: Profileimg,
   worksection: Worksection,
   portfoliosection: Portfoliosection,
   portfolioitem: Portfolioitem,
   serviceitem: Serviceitem,
   scrollybtn: Scrollybtn,
   contactsection: Contactsection,
 },
 apiOptions: {
   region: 'eu',
   /** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
		endpoint: import.meta.env.STORYBLOK_API_BASE_URL
			? `${new URL(import.meta.env.STORYBLOK_API_BASE_URL).origin}/v2`
			: undefined,
 },
});

const router = createBrowserRouter([
 {
    path: '/*',
    Component: App,
  }
]);

const root = document.getElementById('root');

createRoot(root).render(
 <StrictMode>
    <RouterProvider router={router} />
 </StrictMode>
);