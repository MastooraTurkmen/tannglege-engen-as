# Tannlege Ann-Kristin Engen AS - Dental Clinic Website

A modern, responsive website for Tannlege Ann-Kristin Engen AS, a professional dental clinic located in Oslo, Norway. This website showcases the clinic's services, team, pricing, and location with a beautiful, user-friendly interface.

## 🌟 Project Overview

**Tannlege Ann-Kristin Engen AS** is a comprehensive dental clinic website built with Next.js that provides patients with easy access to information about dental services, clinic location, opening hours, and team members.

### Key Features
- **Professional Design**: Modern, clean interface optimized for dental healthcare
- **Responsive Layout**: Fully responsive design that works on all devices
- **Service Showcase**: Detailed information about dental services offered
- **Team Introduction**: Meet the dental professionals at the clinic
- **Pricing Information**: Transparent pricing for various dental services
- **Location & Map**: Interactive Google Maps integration showing clinic location
- **Opening Hours**: Clear display of clinic operating hours
- **Patient Testimonials**: Reviews and feedback from satisfied patients
- **Contact Information**: Easy access to contact details and appointment booking

## 🏥 About the Clinic

**Tannlege Ann-Kristin Engen AS** is located at:
- **Address**: Waldemar Thranes gate 50, 171 Oslo, Norway
- **Location**: Second floor, entrance to the right of Coop Prix
- **Phone**: +47 22 46 10 24
- **Email**: post@tannengen.no

## 🛠️ Technology Stack

- **Frontend Framework**: [Next.js 14](https://nextjs.org/) - React-based full-stack framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [DaisyUI](https://daisyui.com/) - Component library for Tailwind CSS
- **Maps Integration**: [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api) - Google Maps React components
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library
- **Loading States**: [React Spinners](https://www.npmjs.com/package/react-spinners) - Loading animation components

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tannglege-engen-as
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```bash
   NEXT_PUBLIC_GOOGLE_MAP_API_KEY=your_google_maps_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
tannglege-engen-as/
├── app/                    # Next.js app directory
│   ├── page.js            # Home page
│   ├── Omoss/             # About us page
│   ├── Priser/            # Pricing page
│   └── layout.js          # Root layout
├── components/             # React components
│   ├── Hero.jsx           # Hero section
│   ├── Services.jsx       # Services showcase
│   ├── Location.jsx       # Google Maps integration
│   ├── Navbar.jsx         # Navigation bar
│   ├── Footer.jsx         # Footer component
│   └── ...                # Other UI components
├── contract/               # Data and content
│   ├── services.js        # Services data
│   ├── prices.js          # Pricing information
│   ├── about.js           # Team information
│   └── ...                # Other data files
├── public/                 # Static assets
│   ├── images/            # Clinic and team images
│   └── svg/               # SVG icons and logos
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🎨 Design Features

- **Color Scheme**: Professional blue (#00415A) and accent blue (#00B8FF) color palette
- **Typography**: Clean, readable fonts (Poppins, Inter) optimized for healthcare
- **Layout**: Card-based design with proper spacing and visual hierarchy
- **Animations**: Smooth transitions and hover effects for better user experience
- **Accessibility**: High contrast colors and readable text sizes

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile devices** (320px+)
- **Tablets** (768px+)
- **Desktop** (1024px+)
- **Large screens** (1280px+)

## 🗺️ Google Maps Integration

The website includes an interactive Google Maps component showing the clinic's exact location. To enable this feature:

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the "Maps JavaScript API"
3. Add the API key to your `.env.local` file
4. Restart the development server

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Other Platforms
- **Netlify**: Supports Next.js applications
- **AWS Amplify**: Full-stack deployment solution
- **Docker**: Containerized deployment

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

This project is developed and maintained by [Mastoora Turkmen](https://www.linkedin.com/in/mastoora-turkmen/).

## 📄 License

This project is private and proprietary to Tannlege Ann-Kristin Engen AS.

## 📞 Support

For technical support or questions about the website:
- **Developer**: [Mastoora Turkmen](https://www.linkedin.com/in/mastoora-turkmen/)
- **Clinic**: post@tannengen.no

---

**Built with ❤️ for Tannlege Ann-Kristin Engen AS by Mastoora Turkmen**
