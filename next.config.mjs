/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for better DigitalOcean compatibility
  output: 'standalone',
  
  // Optimize for production
  swcMinify: true,
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Disable server-side features for static export
  trailingSlash: true,
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  },
};

export default nextConfig;
