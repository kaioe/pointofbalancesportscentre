# Point of Balance Sports Centre

A React + Vite application for Point of Balance Sports Centre.

## Features

- **Main Menu**: Navigation bar with logo and menu items (Home, About, Services, Contact)
- **Footer**: Footer section with copyright information and legal links
- **Home Page**: Welcome page with placeholder content
- **Legal Pages**: Privacy Policy, Terms of Service, and Cookie Policy pages
- **Routing**: React Router integration for navigation between pages
- **Responsive Design**: Mobile-friendly layout

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── MainMenu.jsx      # Main navigation menu component
│   │   ├── MainMenu.css      # Styles for main menu
│   │   ├── Footer.jsx        # Footer component with legal links
│   │   └── Footer.css        # Styles for footer
│   ├── pages/
│   │   ├── Home.jsx          # Home page component
│   │   ├── Home.css          # Styles for home page
│   │   ├── PrivacyPolicy.jsx # Privacy Policy page
│   │   ├── TermsOfService.jsx # Terms of Service page
│   │   ├── CookiePolicy.jsx  # Cookie Policy page
│   │   └── LegalPage.css     # Shared styles for legal pages
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # App-level styles
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
└── package.json              # Project dependencies

```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Components

### MainMenu
- Displays the site logo and navigation links
- Uses React Router for navigation
- Responsive design that stacks vertically on mobile devices
- Hover effects on menu items

### Footer
- Displays copyright information with current year
- Contains legal links: Privacy Policy, Terms of Service, Cookie Policy
- Responsive layout that stacks on mobile devices

## Pages

### Home
- Welcome page with placeholder content
- Accessible at the root route (`/`)

### Legal Pages
- **Privacy Policy** (`/privacy-policy`): Information about data collection and privacy practices
- **Terms of Service** (`/terms-of-service`): Terms and conditions for using the website
- **Cookie Policy** (`/cookie-policy`): Information about cookie usage

All legal pages include:
- Last updated date
- Structured sections with clear headings
- Responsive design
- Consistent styling

## Routing

The application uses React Router for client-side routing. Available routes:
- `/` - Home page
- `/privacy-policy` - Privacy Policy page
- `/terms-of-service` - Terms of Service page
- `/cookie-policy` - Cookie Policy page

## Technologies

- **React 18**: UI library
- **React Router DOM**: Client-side routing
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing tool

## Last Updated

2026-01-13
