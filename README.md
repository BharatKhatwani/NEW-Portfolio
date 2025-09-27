# Bharat Khatwani - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing my skills, projects, and professional experience. The website features a sleek design with dark/light mode toggle, smooth animations, and interactive components.

## 🚀 Live Demo

[View Live Portfolio](https://www.bharatkhatwani.dev) 

## ✨ Features

### 🎨 Design & UI
- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations and custom CSS transitions
- **Interactive Components**: 3D cards, animated text, and hover effects

### 📱 Sections
- **Hero Section**: Animated introduction with typewriter effect and social links
- **About**: Personal information and achievements
- **Skills**: Technology stack with animated icons
- **Projects**: Portfolio showcase with filtering and 3D card effects
- **Experience**: Professional experience timeline
- **Contact**: Working contact form with Web3Forms integration

### 🛠️ Technical Features
- **Next.js 15**: Latest Next.js with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Smooth animations and transitions
- **Radix UI**: Accessible component primitives
- **Vercel Analytics**: Performance monitoring

## 🏗️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Icons** - Additional icon sets

### UI Components
- **3D Cards** - Interactive project cards
- **Animated Text** - Typewriter and blur effects
- **Shiny Buttons** - Custom button components
- **Spotlight Effects** - Background lighting effects
- **Icon Cloud** - Animated technology icons

### Backend & Services
- **Web3Forms** - Contact form handling
- **Vercel Analytics** - Performance monitoring


## 📁 Project Structure

```
NEW-Portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with fonts and metadata
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── experience/        # Experience page
│   │   └── globals.css        # Global styles and theme
│   ├── components/            # React components
│   │   ├── Home.tsx           # Hero section
│   │   ├── Navbar.tsx         # Navigation with theme toggle
│   │   ├── Skills.tsx         # Skills showcase
│   │   ├── Projects.tsx       # Project portfolio
│   │   ├── Contact.tsx        # Contact form
│   │   ├── Experience.tsx     # Experience timeline
│   │   ├── magicui/           # Custom UI components
│   │   ├── ui/                # Reusable UI components
│   │   └── shared/            # Shared components
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
│   ├── *.png                  # Project images
│   └── favicon.ico            # Site favicon
├── package.json               # Dependencies and scripts
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── tailwind.config.js         # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BharatKhatwani/NEW-Portfolio.git
   cd NEW-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

- **`src/app/layout.tsx`**: Change metadata (title, description)
- **`src/components/Home.tsx`**: Update name, title, and social links
- **`src/components/Contact.tsx`**: Update Web3Forms access key
- **`src/components/Projects.tsx`**: Add your projects
- **`src/components/Skills.tsx`**: Update skills and technologies
- **`src/app/about/page.tsx`**: Update personal information
- **`src/app/experience/page.tsx`**: Update work experience

### Styling
- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Animations**: Customize Framer Motion animations in components

### Contact Form
1. Get a free access key from [Web3Forms](https://web3forms.com)
2. Replace the access key in `src/components/Contact.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🌙 Theme System

The website supports both light and dark themes:
- **Automatic detection** of system preference
- **Manual toggle** via navbar button
- **Persistent storage** of user preference
- **Smooth transitions** between themes

## 🎯 Performance Features

- **Next.js 15** with App Router for optimal performance
- **Image optimization** with Next.js Image component
- **Code splitting** and lazy loading
- **Vercel Analytics** for performance monitoring
- **Smooth scrolling** and scroll behavior optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Compatible with Next.js static export
- **AWS**: Use AWS Amplify or EC2
- **DigitalOcean**: Deploy on App Platform

## 📊 Analytics

The website includes Vercel Analytics for:
- Page views and user interactions
- Performance metrics
- Core Web Vitals monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Bharat Khatwani**


### Connect with me:
- **Email**: bharatkhatwani796@gmail.com
- **LinkedIn**: [Bharat Khatwani](https://www.linkedin.com/in/bharat-khatwani-864616257/)
- **GitHub**: [BharatKhatwani](https://github.com/BharatKhatwani)
- **LeetCode**: [bharatkhatwani](https://leetcode.com/u/bharatkhatwani/)
- **Twitter**: [@BharatKhatwan13](https://x.com/BharatKhatwan13)

## 🙏 Acknowledgments



---

⭐ **Star this repository if you found it helpful!**