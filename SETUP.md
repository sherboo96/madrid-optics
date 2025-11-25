# Madrid Optics - Angular Project Setup

## ✅ Project Conversion Complete!

The HTML website has been successfully converted to an Angular 17 project with standalone components.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation & Language Switcher
│   │   ├── hero/            # Hero Section
│   │   ├── about/           # About Us Section
│   │   ├── services/        # Services Section
│   │   ├── gallery/         # Gallery Section
│   │   ├── contact/         # Contact Form & Map
│   │   ├── footer/          # Footer
│   │   └── home/            # Main Home Component
│   ├── services/
│   │   └── language.service.ts  # Bilingual Language Service
│   ├── app.component.ts     # Root Component
│   ├── app.config.ts        # App Configuration
│   └── app.routes.ts        # Routing Configuration
├── assets/                  # Static Assets
├── index.html               # Main HTML
├── main.ts                  # Bootstrap File
└── styles.css               # Global Styles
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm start
```

The application will be available at `http://localhost:4200/`

### 3. Build for Production

```bash
npm run build
```

The production build will be in the `dist/madrid-optics/` directory.

## ✨ Features

- ✅ **Angular 17** with Standalone Components
- ✅ **TypeScript** - Fully typed
- ✅ **Bilingual Support** - Arabic (RTL) / English (LTR)
- ✅ **Language Service** - Centralized language management
- ✅ **Reactive Forms** - Form validation with Angular Forms
- ✅ **Smooth Scrolling** - Navigation between sections
- ✅ **Responsive Design** - Mobile-friendly
- ✅ **Google Maps Integration** - Embedded map with coordinates
- ✅ **Interactive Animations** - Scroll animations and transitions

## 🔧 Key Components

### Language Service
- Manages language switching (Arabic/English)
- Persists language preference in localStorage
- Updates document direction (RTL/LTR)
- Provides translation helper methods

### Components
All components are standalone and use:
- `*ngIf` for conditional rendering based on language
- `LanguageService` for language state management
- Angular Forms for contact form
- Smooth scroll functionality

## 📝 Notes

- The original HTML file (`madrid-optics.html`) is preserved
- All styles are in `src/styles.css`
- Components use inline templates and styles references
- The project uses Angular's new standalone component architecture

## 🐛 Troubleshooting

If you encounter issues:

1. **Node version**: Ensure you're using Node.js 18+
2. **Dependencies**: Run `npm install` again
3. **Port conflict**: Change port with `ng serve --port 4201`
4. **Build errors**: Check TypeScript version compatibility

## 📦 Next Steps

- Add real images to gallery
- Connect contact form to backend API
- Add unit tests
- Optimize bundle size
- Add PWA support

