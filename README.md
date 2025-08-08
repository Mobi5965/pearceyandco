# Pearcey & Co - Real Estate Website

A modern, professional one-page website for Pearcey & Co, an independent real estate agency in Dubai specializing in villas, townhouses, and off-plan investments.

## ✨ Recent Updates

- **Component-Based Architecture**: Modular components for easy maintenance
- **Improved Color Scheme**: Professional blue and gray color palette
- **Calendly Modal**: Popup booking system with placeholder for integration
- **Smaller Buttons**: More refined button sizing
- **Image Assets**: Organized image folder structure with placeholders
- **Better Organization**: Cleaner file structure for easy customization

## Features

- 🏠 **Professional Design**: Clean, modern, and responsive design
- 📱 **Mobile-First**: Fully responsive across all devices
- ⚡ **Fast Performance**: Optimized for speed and user experience
- 🎯 **Clear CTAs**: Prominent call-to-action buttons for booking calls and viewing listings
- 📞 **Contact Integration**: Direct phone, email, and WhatsApp links
- 🎨 **Smooth Animations**: Subtle animations for enhanced user experience
- 🔧 **Modular Components**: Easy to modify individual sections
- 📅 **Calendly Ready**: Modal popup ready for Calendly integration

## Tech Stack

- **Backend**: Node.js with Express
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Custom CSS with responsive design
- **Icons**: Lucide (modern, clean icon family)
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel

## Project Structure

```
pearceyandco_com/
├── public/
│   ├── components/           # Modular HTML components
│   │   ├── header.html
│   │   ├── hero.html
│   │   ├── about.html
│   │   ├── kevin.html
│   │   ├── services.html
│   │   ├── featured-links.html
│   │   ├── contact.html
│   │   ├── footer.html
│   │   └── calendly-modal.html
│   ├── assets/
│   │   └── images/          # Image assets
│   │       ├── kevin-pearcey.jpg
│   │       ├── kevin-portrait.jpg
│   │       ├── hero-background.jpg
│   │       ├── placeholder-profile.jpg
│   │       └── placeholder-portrait.jpg
│   ├── index.html           # Main HTML file
│   ├── styles.css           # CSS styles
│   └── script.js            # JavaScript functionality
├── server.js                # Express server
├── package.json             # Dependencies and scripts
├── vercel.json             # Vercel configuration
└── README.md               # This file
```

## Local Development

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd pearceyandco_com
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm run build` - Build command (placeholder for static site)

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to configure your project

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push

### Option 3: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Deploy

## Customization

### Component-Based Editing

Each section is now a separate component in the `public/components/` folder:

- **Header**: `components/header.html` - Navigation and logo
- **Hero**: `components/hero.html` - Main banner section
- **About**: `components/about.html` - Company information
- **Kevin**: `components/kevin.html` - Personal introduction
- **Services**: `components/services.html` - Service offerings
- **Featured Links**: `components/featured-links.html` - Call-to-action cards
- **Contact**: `components/contact.html` - Contact information
- **Footer**: `components/footer.html` - Footer links
- **Calendly Modal**: `components/calendly-modal.html` - Booking popup

### Adding Images

1. **Profile Images**: Add Kevin's photos to `public/assets/images/`
   - `kevin-pearcey.jpg` - For the about section
   - `kevin-portrait.jpg` - For the Kevin section
   - `hero-background.jpg` - For hero background (optional)

2. **Image Specifications**:
   - Profile: 400x400px or larger
   - Portrait: 600x800px or larger
   - Hero background: 1920x1080px or larger
   - Formats: JPG, PNG, or WebP

### Calendly Integration

1. **Get Your Calendly Embed Code**:
   - Go to [calendly.com](https://calendly.com)
   - Create your booking page
   - Get the embed code

2. **Replace Placeholder**:
   - Open `public/components/calendly-modal.html`
   - Replace the placeholder div with your Calendly embed code:

```html
<!-- Replace this section -->
<div class="calendly-placeholder">
    <!-- Your Calendly embed code goes here -->
    <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
    <div class="calendly-inline-widget" data-url="https://calendly.com/your-link"></div>
</div>
```

### Property Finder Integration

Update the listing buttons in `public/script.js`:

```javascript
// Replace this in script.js
window.open('https://propertyfinder.ae/your-listings', '_blank');
```

### Color Customization

The main color scheme is defined in `public/styles.css`:

- **Primary Teal**: `#244855` (professional teal)
- **Accent Red**: `#E64833` (vibrant red for highlights and hover states)
- **Dark Gray**: `#1a202c`
- **Medium Gray**: `#4a5568`
- **Light Gray**: `#f7fafc`

## SEO Optimization

The website includes:

- Meta tags for search engines
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design
- Clear content hierarchy

## Performance

- Optimized images (placeholder for now)
- Minified CSS and JS (can be added)
- CDN for external resources
- Efficient loading strategies
- Component-based loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contact Information

For website support or updates, contact:
- **Phone**: +971 52 112 6430
- **Email**: kevin@pearceyandco.com
- **Website**: www.pearceyandco.com

## License

This project is proprietary to Pearcey & Co.

---

**Built with ❤️ for Pearcey & Co**
