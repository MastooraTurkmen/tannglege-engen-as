# 🚀 DigitalOcean Deployment Guide

This guide will help you deploy your Tannlege Ann-Kristin Engen AS website to DigitalOcean App Platform.

## ⚠️ Common DigitalOcean Deployment Issues & Solutions

### 1. **Environment Variables Not Set**
**Problem**: Google Maps not working, API errors
**Solution**: 
- Go to your DigitalOcean App → Settings → Environment Variables
- Add: `NEXT_PUBLIC_GOOGLE_MAP_API_KEY=your_actual_key`
- Redeploy after adding

### 2. **Build Failures**
**Problem**: Build process fails during deployment
**Solution**:
- Use Node.js 18+ runtime
- Check build logs for specific errors
- Ensure all dependencies are in `package.json`

### 3. **Static Export Issues**
**Problem**: App doesn't work after deployment
**Solution**: Use the updated `next.config.mjs` with `output: 'standalone'`

## 🛠️ Step-by-Step Deployment

### Step 1: Prepare Your Code
1. **Commit all changes** to your repository
2. **Push to GitHub/GitLab** (DigitalOcean needs access to your repo)

### Step 2: Create DigitalOcean App
1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click **"Create App"**
3. **Connect your repository** (GitHub/GitLab)
4. Select your `tannglege-engen-as` repository

### Step 3: Configure Build Settings
Use these exact settings:

```yaml
# Build Command
npm run build

# Run Command
npm start

# Source Directory
/ (root)

# Environment
Node.js 18.x
```

### Step 4: Set Environment Variables
In your DigitalOcean App settings, add:

```bash
NEXT_PUBLIC_GOOGLE_MAP_API_KEY=your_actual_google_maps_api_key
NODE_ENV=production
```

### Step 5: Configure Resources
- **Plan**: Basic ($5/month) or Pro ($12/month)
- **Container Size**: Small (1GB RAM, 1 vCPU)
- **Region**: Choose closest to your users (e.g., Amsterdam for Europe)

### Step 6: Deploy
1. Click **"Create Resources"**
2. Wait for build to complete (usually 5-10 minutes)
3. Check build logs for any errors

## 🔧 Troubleshooting

### Build Errors
```bash
# Check build logs in DigitalOcean dashboard
# Common issues:
- Node version mismatch
- Missing dependencies
- Environment variable issues
```

### Runtime Errors
```bash
# Check runtime logs
# Common issues:
- Port conflicts
- Memory limits
- API key not accessible
```

### Google Maps Not Working
1. **Verify API key** is set in environment variables
2. **Check API key restrictions** in Google Cloud Console
3. **Enable billing** for Google Maps API
4. **Check domain restrictions** on your API key

## 📱 Alternative Deployment Options

### Option 1: DigitalOcean Droplet (VPS)
- More control but requires server management
- Use Docker or direct Node.js installation
- Manual SSL certificate setup

### Option 2: DigitalOcean Spaces (Static Hosting)
- For static exports only
- Cheaper but limited functionality
- Good for brochure websites

### Option 3: Vercel (Recommended for Next.js)
- Built for Next.js applications
- Automatic deployments
- Better performance
- Free tier available

## 🚨 Critical Configuration

### Environment Variables
```bash
# Required for Google Maps
NEXT_PUBLIC_GOOGLE_MAP_API_KEY=your_key_here

# Production settings
NODE_ENV=production
```

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## 📞 Support

If you're still having issues:

1. **Check DigitalOcean build logs** for specific error messages
2. **Verify environment variables** are set correctly
3. **Ensure Google Maps API key** is valid and has proper permissions
4. **Contact DigitalOcean support** with specific error details

## 🎯 Success Checklist

- [ ] Repository connected to DigitalOcean
- [ ] Environment variables set
- [ ] Build completes successfully
- [ ] App deploys without errors
- [ ] Google Maps loads correctly
- [ ] All pages accessible
- [ ] SSL certificate active

---

**Need more help?** Check the DigitalOcean documentation or contact their support team with your specific error messages. 