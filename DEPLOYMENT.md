# Deployment Guide for ShopV1

## Vercel Deployment

### Prerequisites
- Vercel account
- GitHub repository connected to Vercel

### Steps

1. **Connect Repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js framework

2. **Build Settings**
   - Build Command: `bun run build`
   - Output Directory: `.next`
   - Install Command: `bun install`
   - Node.js Version: 18.x or higher

3. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - Use the format: `NEXT_PUBLIC_VARIABLE_NAME=value`

4. **Deploy**
   - Click "Deploy" button
   - Vercel will build and deploy automatically

### Build Status
✅ TypeScript compilation: PASSED
✅ ESLint checks: PASSED (warnings only)
✅ Production build: SUCCESS
✅ Static optimization: ENABLED

### Performance Optimizations
- Image optimization enabled
- Package imports optimized
- Console logs removed in production
- Static generation for pages

### Font Assets
- Thai fonts are properly configured
- Font files located in `/public/Font/IBM_Plex_Sans_Thai/`
- CSS @font-face declarations working

### Known Warnings (Non-blocking)
- Some unused variables in magicui components
- Image optimization suggestions for external images
- React hooks dependency warnings

These warnings don't affect deployment and can be addressed in future updates.
