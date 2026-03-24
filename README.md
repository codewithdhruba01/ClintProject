# Clint Studio - Creative Photography Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)

Clint Studio is a modern, high-performance photography portfolio website designed to showcase creative works with a sleek and interactive user experience. Built with **React 19**, **Vite**, and **Framer Motion**, it features smooth animations, a responsive design, and dynamic layout management.

## Features

- **Modern UI/UX**: A visually stunning design with custom cursors, smooth scroll animations, and a neo-brutalist/minimalist aesthetic.
- **Dark Mode Support**: Seamless transition between light and dark themes, persisting across sessions.
- **Interactive Gallery**: A unique "Glitch Gallery" and featured works section to showcase photography in style.
- **Responsive & Mobile-First**: Fully optimized for all devices, from large monitors to mobile screens.
- **Custom Routing**: Efficient view management using **Zustand** for state-driven navigation without page reloads.
- **WhatsApp Integration**: A dedicated button for instant client communication.
- **Scroll Reveals**: Intersection Observer API implementation for element reveal animations on scroll.

## Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS with modern CSS variables.

## Project Structure

```text
src/
├── components/      # UI Components (Hero, Gallery, Navbar, etc.)
├── store/           # Global state management with Zustand
├── App.tsx          # Main application logic and routing
├── index.css        # Global styles and design tokens
└── main.tsx         # Application entry point
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ClintProject
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```


## 📄 License

This project is open-source and available under the [MIT License](LICENSE).