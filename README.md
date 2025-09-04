# ERP90 Corporate Website - نظام إرب ٩٠

A modern, professional Arabic/English ERP90 corporate website built with React 18, TypeScript, and optimized for Vercel deployment with comprehensive SEO and PWA capabilities.

## 🚀 Live Demo

**Production URL**: Deploy to Vercel using the configuration below

## ✨ Features

- **Comprehensive SEO**: Professional SEO optimization with Schema.org structured data, Open Graph, and Twitter Cards
- **PWA Ready**: Service Worker implementation for offline functionality and app-like experience
- **Arabic RTL Support**: Full Arabic language support with RTL layout and professional Arabic typography
- **Vercel Optimized**: Complete Vercel deployment configuration with serverless functions and edge optimization
- **Modern UI**: Beautiful responsive design built with Tailwind CSS and shadcn/ui components
- **Contact Forms**: Integrated contact form with serverless backend API
- **Performance**: Optimized for Core Web Vitals with advanced caching and compression

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui Components
- **Deployment**: Vercel with Serverless Functions
- **SEO**: Dynamic meta tags, Schema.org structured data, sitemap generation
- **PWA**: Service Worker, offline functionality, app manifest
- **API**: Vercel serverless functions for contact forms and analytics
- **Performance**: Edge caching, compression, Core Web Vitals optimization

## 📋 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Git
- Vercel CLI (optional, for deployment)

### Development Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd erp90-corporate-ar-main
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Visit `http://localhost:5173` to see the application

## 🚀 Vercel Deployment

### Automatic Deployment

1. **Connect to Vercel**
```bash
npm i -g vercel
vercel login
vercel
```

2. **Configure Environment Variables** (Optional)
```bash
# Add any environment variables in Vercel dashboard
VITE_SITE_URL=https://your-domain.vercel.app
```

### Manual Build and Deploy

1. **Build the project**
```bash
chmod +x build.sh
./build.sh
```

2. **Deploy to Vercel**
```bash
vercel --prod
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── SEO.tsx          # SEO component for meta tags
│   ├── Hero.tsx         # Landing page hero section
│   ├── Navbar.tsx       # Navigation component
│   └── ...              # Other components
├── pages/               # Page components
│   ├── Index.tsx        # Home page
│   ├── Services.tsx     # Services page
│   ├── Contact.tsx      # Contact page
│   └── ...              # Other pages
├── lib/                 # Utility libraries
│   ├── seo.ts           # SEO configuration
│   ├── utils.ts         # General utilities
│   └── vercel-utils.ts  # Vercel-specific utilities
├── hooks/               # Custom React hooks
│   ├── useServiceWorker.ts  # PWA service worker hook
│   └── use-toast.ts     # Toast notifications
└── api/                 # Vercel serverless functions
    ├── contact.ts       # Contact form API
    ├── sitemap.ts       # Dynamic sitemap generation
    ├── robots.ts        # Robots.txt generation
    └── analytics.ts     # Analytics tracking
```

## 🔧 Configuration Files

- **vercel.json**: Vercel deployment configuration with headers, redirects, and caching
- **vite.config.ts**: Vite build configuration optimized for Vercel
- **tailwind.config.ts**: Tailwind CSS configuration with Arabic RTL support
- **public/manifest.json**: PWA manifest for app-like experience
- **public/sw.js**: Service Worker for offline functionality

## 📊 SEO Features

### Dynamic SEO
- Page-specific meta tags and descriptions
- Open Graph and Twitter Card integration
- Canonical URLs and language alternates
- Schema.org structured data for better search visibility

### Technical SEO
- Automatic sitemap generation (`/api/sitemap`)
- Robots.txt configuration (`/api/robots`)
- Performance optimization for Core Web Vitals
- Mobile-first responsive design

## 🌐 API Endpoints

- **POST /api/contact**: Contact form submission
- **GET /api/sitemap**: Dynamic XML sitemap
- **GET /api/robots**: Robots.txt file
- **POST /api/analytics**: Custom analytics tracking

## 🎨 Customization

### Adding New Pages
1. Create component in `src/pages/`
2. Add SEO configuration in `src/lib/seo.ts`
3. Include `<SEO>` component in page
4. Update navigation in `src/components/Navbar.tsx`

### Modifying Styles
- Edit Tailwind classes directly in components
- Customize theme in `tailwind.config.ts`
- Add custom CSS in component files or `src/index.css`

### API Integration
- Add new serverless functions in `api/` directory
- Configure endpoints in `vercel.json`
- Use in frontend components with fetch/axios

## 📱 PWA Features

- **Offline Support**: Service Worker caches essential resources
- **App-like Experience**: Install prompt and standalone mode
- **Background Sync**: Form submissions work offline
- **Push Notifications**: Ready for future implementation

## 🌍 Internationalization

Currently supports:
- **Arabic (ar)**: RTL layout, Arabic typography, cultural design patterns
- **English (en)**: LTR layout, international design standards

## 🔒 Security & Performance

- **Security Headers**: CSP, HSTS, X-Frame-Options in Vercel configuration
- **Caching Strategy**: Optimized cache headers for static assets
- **Compression**: Gzip/Brotli compression enabled
- **Edge Optimization**: Vercel Edge Network for global performance

## 📈 Analytics & Monitoring

- Custom analytics API endpoint for tracking
- Core Web Vitals monitoring
- Contact form submission tracking
- Performance monitoring ready

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
```bash
npm run type-check  # Check TypeScript errors
npm run lint        # Check ESLint errors
```

2. **Deployment Issues**
```bash
vercel logs         # Check deployment logs
vercel env ls       # Check environment variables
```

3. **SEO Validation**
- Use Google Search Console
- Test with Facebook Sharing Debugger
- Validate structured data with Google's tool

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:
- Check the documentation above
- Review the code comments
- Create an issue in the repository

---

**Built with ❤️ for ERP90 Corporate - نظام إرب ٩٠**

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/8bd5a617-3e6c-4a3e-aa6f-46729e187179) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
