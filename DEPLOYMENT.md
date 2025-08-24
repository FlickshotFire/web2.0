
# Deployment Guide

This application can be deployed on both Replit and Netlify.

## Replit Deployment

Your application is already configured for Replit deployment:

1. Click the "Deploy" button in the Replit interface
2. Choose "Autoscale" deployment
3. The build and run commands are already configured:
   - Build command: `npm run build`
   - Run command: `npm run start`
4. Deploy your application

## Netlify Deployment

For Netlify deployment:

### Option 1: Git Integration (Recommended)
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Netlify will automatically detect the `netlify.toml` configuration
4. Deploy automatically

### Option 2: Manual Deploy
1. Run `npm run build` locally
2. Upload the `dist/public` folder to Netlify
3. Configure redirects for SPA routing

## Environment Variables

Make sure to set up any required environment variables in your deployment platform:
- Database connection strings
- API keys
- Other sensitive configuration

## Features

Both deployments support:
- Client-side routing with Wouter
- API endpoints
- Static asset serving
- Production optimizations
