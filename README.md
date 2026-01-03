# StoreHub - E-Commerce Store

A modern, responsive e-commerce platform built with **Next.js 15**, **React 19**, and pure **CSS** for styling. The application features Server-Side Rendering (SSR) for optimal SEO and performance.

## 🎯 Features

- ✅ **Server-Side Rendering (SSR)** - Next.js App Router for fast page loads and SEO
- ✅ **Responsive Design** - Mobile-first approach for all devices
- ✅ **Fake Store API Integration** - Real product data from fakestoreapi.com
- ✅ **Pure CSS Styling** - No heavy CSS frameworks, optimized for performance
- ✅ **SEO Optimized** - Meta tags, schema markup, proper H1/H2 tags
- ✅ **Minimal Dependencies** - Only React, React-DOM, and Next.js
- ✅ **Fast Performance** - Optimized DOM, lazy loading images, efficient caching

## 📋 Project Structure

```
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Main products page
│   └── api/            # API routes (if needed)
├── components/          # React Components
│   ├── Header.tsx      # Navigation header
│   └── ProductCard.tsx # Product card component
├── styles/             # CSS modules
│   ├── globals.css     # Global styles
│   ├── header.module.css
│   ├── productcard.module.css
│   └── page.module.css
├── public/             # Static assets
├── next.config.js      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies
└── .eslintrc.json      # ESLint configuration
```

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** and **npm/yarn** installed

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

The design is optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🎨 Design Features

### Hero Section
- Gradient background with CTA buttons
- Responsive typography
- Mobile-optimized layout

### Product Grid
- Dynamic grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Lazy loading for images
- Smooth hover effects

### Product Cards
- Product image with fallback
- Category badge
- Title and description
- Star rating with count
- Original and discounted price
- "Add to Cart" button

### Header
- Sticky navigation
- Logo branding
- Navigation links
- Shopping cart icon with badge
- Responsive for all devices

## 🔍 SEO Optimization

✅ **Page Title & Meta Description** - Set in layout metadata
✅ **Semantic HTML** - Proper use of H1, H2, H3 tags
✅ **Schema Markup** - JSON-LD structured data
✅ **Image Optimization** - Alt text for all images
✅ **Open Graph Tags** - Social media sharing
✅ **Robots Meta** - Proper indexing directives
✅ **Canonical URLs** - Duplicate content prevention

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with SSR |
| **React 19** | UI library |
| **TypeScript** | Type safety |
| **CSS Modules** | Scoped styling |
| **Fake Store API** | Mock product data |
| **ESLint** | Code quality |

## 📊 Performance Metrics

- **Minimal Dependencies**: Only 3 main packages
- **Optimized CSS**: ~15KB total stylesheet
- **Server-Side Rendering**: Faster initial page load
- **Image Lazy Loading**: Improved Core Web Vitals
- **CSS Modules**: No CSS conflicts, smaller payload

## 🔐 Security Features

- ✅ CSP-ready headers
- ✅ No inline scripts
- ✅ Secure API calls
- ✅ Input validation ready
- ✅ HTTPS recommended deployment

## 🌐 Deployment

### Deploy to Netlify

1. **Connect GitHub Repository:**
   - Push code to GitHub
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Select your repository

2. **Configure Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Runtime: Node.js 18+

3. **Deploy:**
   - Click deploy and wait for build to complete
   - Your site will be live!

### Environment Variables
No environment variables required for the demo. (Add as needed for production)

## 📝 Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [CSS Modules Guide](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
- [Web Standards & SEO](https://developer.mozilla.org/en-US/)

## 📄 License

MIT License - Feel free to use this project as a template!

## 👨‍💻 Author

Created as a demonstration of modern React/Next.js best practices with SSR and responsive design.

---

**Ready to customize?** Fork this repository and start building! 🚀
