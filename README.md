# 📸 Storyblok Portfolio Starter Template

[![Netlify Status](https://api.netlify.com/api/v1/badges/4b8f1a1f-2a42-4a8c-9c9a-3b8b5c6c9d3e/deploy-status)](https://app.netlify.com/sites/storyblok-portfolio-starter-template/deploys)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A modern portfolio starter project built with **React (ES6)**, powered by the **Storyblok CMS** and styled with **CSS Grid**. This template fetches content, assets, and components dynamically from Storyblok and is ideal for developers looking to quickly bootstrap a portfolio or personal site.

🌐 **Live Demo:** [Marcel's Story](https://storyblok-portfolio-starter-template.netlify.app/)

---

## ⚙️ Tech Stack

- ⚛️ React (Client-side)
- 📦 ES6 Modules
- 🧠 Storyblok CMS + Storyblok JS Client
- 🎨 CSS with Grid Layout System
- ⚡ Vite (Lightning-fast dev/build tool)
- 🔒 HTTPS via `mkcert` for local development (Storyblok preview requires HTTPS)
- 🌍 Deployed on Netlify

---

## 🚀 Quick Start

Follow these steps to get the project running locally:

### 1. **Fork and Clone the Repo**

```bash
git clone https://github.com/oketchmarcellus/storyblok-portfolio-starter.git
cd storyblok-portfolio-starter

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Configure Environment
Create a .env file in the root directory and insert your Storyblok Preview API Token:

```bash

VITE_STORYBLOK_DELIVERY_API_TOKEN=your-storyblok-preview-token

```

### 4. Run Locally with HTTPS

```bash
npm run dev

```
✅ The project will run on https://localhost:5173/ (or 5174 if the port is taken).

🔒 This project uses mkcert to enable HTTPS in development mode. Make sure to install and trust your local certificates.

### 🔧 Vite Configuration
This project uses custom Vite plugins to support HTTPS and other development features. Refer to the vite.config.js file for plugin setup and additional options.

### 🧱 Editing Content
1. Go to your [Storyblok Dashboard](https://app.storyblok.com/#/login).
2. Edit your content blocks, images, and other assets.
3. Save and preview changes directly in your local environment or on the live site.
🔄 Changes will reflect automatically if you're using the Preview API.

### 📁 Project Structure

```bash
project-root/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── storyblokService.js
│   └── App.jsx
├── vite.config.js
├── .env
├── package.json
└── README.md

```


