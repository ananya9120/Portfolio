# 3D Portfolio - Ananya

A modern, high-performance 3D portfolio website built with React, Three.js, and Tailwind CSS. This project features a futuristic Dyson Sphere in the contact section and a responsive, interactive starfield background.

## 🚀 Features

- **3D Interactive Models:** Powered by @react-three/fiber and @react-three/drei.
- **Dyson Sphere Contact Section:** A custom-transformed GLTF model with integrated rotation and lighting.
- **Smooth Navigation:** In-page anchor scrolling using a custom Higher Order Component (HOC) and react-router-dom.
- **Contact Form:** Integrated with EmailJS for direct email delivery.
- **Responsive Design:** Fully mobile-optimized layout using Tailwind CSS.
- **Dynamic Background:** Interactive starfield using maath for random point generation.

## 🛠️ Tech Stack

- Frontend: React.js
- 3D Graphics: Three.js, React Three Fiber, React Three Drei
- Styling: Tailwind CSS, Framer Motion
- Email Service: EmailJS
- Build Tool: Vite

## 📁 Project Structure

- src/components/canvas: Contains all 3D components (DysonSphere, Stars, etc.)
- src/hoc: Includes SectionWrapper.jsx for handling IDs and animations.
- public/: Store your .glb 3D models here.
- src/constants: Manage your navLinks and project data.

## 🔑 Key Fixes Implemented

- Navbar Scrolling: Fixed by ensuring '#' hash-prefix in <a> tags and syncing IDs with SectionWrapper.
- EmailJS 400 Errors: Resolved by matching React state keys exactly with EmailJS template variables.
- 3D Layout: Adjusted Dyson Sphere scale and camera position to prevent overlapping UI elements.

## 🤝 Acknowledgments

- Dyson Sphere Model Author: Rafiozo (https://sketchfab.com/Rafiozo)

---
Built with 💙 by Ananya
