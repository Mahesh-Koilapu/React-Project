# 🚀 Installation & Setup Guide

Follow these step-by-step instructions to set up and run the StoreHub E-Commerce Project.

## Prerequisites

Before starting, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (for version control) - [Download](https://git-scm.com/)

To check if you have them installed, run:
```bash
node --version
npm --version
git --version
```

## Installation Steps

### Step 1: Open Terminal/Command Prompt

Navigate to the project directory. You can do this by:

**Option A: Using Command Prompt**
```cmd
cd "c:\Users\mahes\New folder (3)\React Project"
```

**Option B: Using PowerShell**
```powershell
cd 'c:\Users\mahes\New folder (3)\React Project'
```

**Option C: Right-Click Method**
- Navigate to the project folder in Windows Explorer
- Right-click inside the folder
- Select "Open in Terminal" or "Open PowerShell window here"

### Step 2: Install Dependencies

Once in the project directory, run:
```bash
npm install
```

This will install all required packages:
- `next@^15.0.0`
- `react@^19.0.0`
- `react-dom@^19.0.0`

**Installation time:** 2-5 minutes (depending on internet speed)

### Step 3: Run Development Server

After installation completes, start the development server:
```bash
npm run dev
```

You should see output like:
```
> ecommerce-store@1.0.0 dev
> next dev

  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 1234ms
```

### Step 4: Open in Browser

Open your web browser and navigate to:
```
http://localhost:3000
```

You should see the StoreHub e-commerce page with products loaded from the Fake Store API!

## Available Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Run ESLint to check code quality
npm run lint
```

## Build for Production

When ready to deploy, create an optimized production build:

```bash
npm run build
```

Then start the production server:
```bash
npm start
```

The application will be running at `http://localhost:3000`

## Troubleshooting

### Issue: "Command not found: npm"
**Solution:** Node.js and npm are not installed. Download and install from https://nodejs.org/

### Issue: Port 3000 already in use
**Solution:** The port is occupied by another application. You can use a different port:
```bash
npm run dev -- -p 3001
```

### Issue: Module not found errors
**Solution:** Delete `node_modules` folder and run `npm install` again:
```bash
rmdir /s node_modules    # Windows
npm install
```

### Issue: Build fails with TypeScript errors
**Solution:** Ensure you're using Node.js v18+:
```bash
node --version
```

### Issue: API not loading products
**Solution:** Check internet connection. The app fetches from `https://fakestoreapi.com/products`. Verify with:
```bash
curl https://fakestoreapi.com/products
```

## Project Structure After Installation

```
React Project/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx             # Main products page
│   └── api/                 # API routes
├── components/              # React Components
│   ├── Header.tsx          # Navigation header
│   └── ProductCard.tsx     # Product card
├── styles/                 # CSS Modules
│   ├── globals.css         # Global styles
│   ├── header.module.css   # Header styles
│   ├── productcard.module.css  # Card styles
│   └── page.module.css     # Page styles
├── public/                 # Static files
├── node_modules/          # Dependencies (created after npm install)
├── .next/                 # Build output (created after npm run build)
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript config
├── next.config.js         # Next.js config
└── README.md             # Project documentation
```

## Environment Variables

No environment variables are required for this demo. The application uses the public Fake Store API.

## Next Steps

1. ✅ Install dependencies
2. ✅ Run `npm run dev`
3. ✅ Open http://localhost:3000
4. 📝 Customize the design in `styles/` folder
5. 🛠️ Modify components in `components/` folder
6. 🚀 Deploy to Netlify (see deployment guide)

## Performance Tips

- The app uses **CSS Modules** for scoped styling with no bloat
- **Server-Side Rendering (SSR)** ensures fast initial page loads
- **Lazy loading** for product images improves performance
- **Minimal dependencies** keeps bundle size small

## Further Help

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev
- **Fake Store API:** https://fakestoreapi.com
- **MDN Web Docs:** https://developer.mozilla.org

---

**Stuck?** Make sure:
- Node.js v18+ is installed
- You're in the correct project directory
- Port 3000 is not in use
- Your internet connection is working
