# Chef Portfolio Dashboard

A professional portfolio website for chefs built with React, Vite, and Tailwind CSS.

## Features

- 🏠 **Home** - Hero section with featured creations and services preview
- 🖼️ **Gallery** - Image gallery with modal view for showcasing culinary creations
- 🍽️ **Services** - Display of professional culinary services offered
- 👨‍🍳 **About Me** - Chef biography, experience, specialties, and achievements
- 💼 **Jobs** - Job opportunities and application system
- 📧 **Contact** - Contact form and information

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing with lazy loading
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Project Structure

```
src/
├── components/
│   └── Layout/
│       ├── Layout.jsx      # Main layout wrapper
│       ├── Navigation.jsx  # Navigation bar
│       └── Footer.jsx      # Footer component
├── pages/
│   ├── Home/
│   │   └── Home.jsx        # Home page
│   ├── Gallery/
│   │   └── Gallery.jsx     # Gallery page
│   ├── Services/
│   │   └── Services.jsx    # Services page
│   ├── About/
│   │   └── About.jsx       # About page
│   ├── Jobs/
│   │   └── Jobs.jsx        # Jobs page
│   └── Contact/
│       └── Contact.jsx     # Contact page
├── services/
│   └── api.js              # API service configuration
├── App.jsx                 # Main app component with routes
└── main.jsx                # Entry point
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

2. Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Replace `http://localhost:5000/api` with your backend API URL.

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build:
```bash
npm run preview
```

## API Configuration

The application expects a backend API with the following endpoints:

- `GET /api/gallery` - Get gallery images
- `GET /api/services` - Get services list
- `GET /api/about` - Get about information
- `GET /api/jobs` - Get job listings
- `POST /api/jobs/:jobId/apply` - Submit job application
- `POST /api/contact` - Send contact message

See `API_DOCUMENTATION.md` for detailed API specifications.

## Image Handling

All images are served from the backend. The frontend constructs image URLs as:
```
${API_BASE_URL}/images/${imagePath}
```

Make sure your backend serves images from the `/api/images/` endpoint.

## Features

- ✅ Lazy loading for all routes (better performance)
- ✅ Responsive design (mobile-friendly)
- ✅ Modern UI with Tailwind CSS
- ✅ API integration ready
- ✅ Error handling and loading states
- ✅ Image modal for gallery
- ✅ Contact and job application forms

## Customization

- Update colors in Tailwind classes (currently using orange theme)
- Modify components in `src/components/` and `src/pages/`
- Update API endpoints in `src/services/api.js`
- Change navigation links in `src/components/Layout/Navigation.jsx`

## License

This project is private and proprietary.
