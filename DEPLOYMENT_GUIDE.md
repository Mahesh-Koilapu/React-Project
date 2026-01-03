# 🚀 Deployment Guide - StoreHub E-Commerce

Complete guide to deploy your StoreHub application to Netlify and push code to GitHub.

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ GitHub account (https://github.com)
- ✅ Netlify account (https://netlify.com)
- ✅ Project built locally (`npm run build` successful)
- ✅ Git installed and configured

## Step 1: Initialize Git Repository

### 1.1 Initialize Git (if not already done)

Open terminal in project directory and run:

```bash
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
git add .
git commit -m "Initial commit: StoreHub e-commerce application"
```

### 1.2 Check Git Status

Verify everything is committed:
```bash
git status
```

Should output: `On branch master/main ... nothing to commit, working tree clean`

## Step 2: Push to GitHub

### 2.1 Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `storehub-ecommerce`
3. Description: "E-commerce store with Next.js, React, and Fake Store API"
4. Choose **Public** (required for Netlify free tier)
5. Click **Create repository**

### 2.2 Connect Local Repository to GitHub

GitHub will show you commands. Run these in your terminal:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/storehub-ecommerce.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 2.3 Verify Push

Check that code is on GitHub:
```bash
git remote -v
```

Should show:
```
origin  https://github.com/YOUR_USERNAME/storehub-ecommerce.git (fetch)
origin  https://github.com/YOUR_USERNAME/storehub-ecommerce.git (push)
```

## Step 3: Deploy to Netlify

### Method A: Via GitHub (Recommended)

#### 3.1 Connect Netlify to GitHub

1. Go to https://app.netlify.com
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub**
4. Authorize Netlify to access your GitHub account
5. Select your `storehub-ecommerce` repository

#### 3.2 Configure Build Settings

Netlify will auto-detect Next.js. Confirm:

| Setting | Value |
|---------|-------|
| **Build command** | `npm run build` |
| **Publish directory** | `.next` |
| **Runtime** | Node.js 18+ |

![Build Settings](https://docs.netlify.com/images/configure-builds.jpg)

#### 3.3 Deploy

1. Click **Deploy site**
2. Wait for build to complete (2-3 minutes)
3. Your site will be live at `https://random-name-12345.netlify.app`

#### 3.4 Custom Domain (Optional)

1. Go to **Domain settings**
2. Click **Add custom domain**
3. Enter your domain name
4. Follow DNS configuration steps

### Method B: Manual Deployment via Netlify CLI

#### 3.1 Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### 3.2 Build Project

```bash
npm run build
```

#### 3.3 Deploy

```bash
netlify deploy --prod --dir=.next
```

Follow prompts to authorize and select site.

### Method C: Drag & Drop (Quick Demo)

For quick testing (without GitHub integration):

1. Build project: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `.next` folder
4. Your site deploys instantly

**Note:** This method doesn't auto-redeploy on git push.

## Step 4: Post-Deployment Configuration

### 4.1 Verify Deployment

After site goes live:
- ✅ Visit your Netlify URL
- ✅ Check all products load
- ✅ Test responsive design
- ✅ Verify images load
- ✅ Test navigation links

### 4.2 Set Environment Variables (if needed)

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click **Edit variables**
3. Add any required env vars:
   - `NEXT_PUBLIC_API_URL=https://fakestoreapi.com`
4. Trigger redeploy

### 4.3 Enable Analytics (Optional)

1. Go to **Analytics** tab
2. Click **Enable analytics**
3. View visitor stats and performance metrics

### 4.4 Configure Headers

Headers are already configured in `netlify.toml` for:
- ✅ Static asset caching (1 year)
- ✅ API response caching (1 hour)
- ✅ Security headers

## Step 5: Continuous Deployment

### Automatic Deployments

Every time you push to GitHub:
1. Netlify detects the push
2. Automatically builds the project
3. Deploys to production

No manual action needed!

### Deploy Preview URLs

For every pull request, Netlify creates a preview deployment:
- Test changes before merging
- Get unique preview URL for each PR
- Share with team for review

### Rollback Previous Versions

In Netlify dashboard:
1. Go to **Deploys**
2. Click on previous deployment
3. Click **Publish deploy**

## Step 6: Monitor Performance

### Check Core Web Vitals

```bash
# Google PageSpeed Insights
https://pagespeed.web.dev/?url=YOUR_NETLIFY_URL
```

### Monitor Errors

1. Go to **Logs** → **Deploy log** to see build logs
2. Check **Function logs** for any errors
3. Review **Application logs** for runtime issues

## Step 7: Custom Domain & SSL

### Add Custom Domain

1. In Netlify: **Site settings** → **Domain management** → **Add domain**
2. Update DNS records (provider-specific)
3. Netlify auto-provisions SSL certificate

SSL certificate is **free and automatic** on Netlify!

## Troubleshooting

### Build Fails with "Module not found"

```bash
# Solution: Add to netlify.toml
[build]
  environment = { NODE_VERSION = "18" }
```

### Site Shows 404

Check that `.next` folder exists:
```bash
npm run build
```

### Images Don't Load

Verify `next.config.js` has:
```javascript
images: {
  domains: ['fakestoreapi.com'],
}
```

### Environment Variables Not Working

1. Verify variables in Netlify dashboard
2. Trigger manual redeploy
3. Use `NEXT_PUBLIC_` prefix for client-side vars

## Performance Optimization

After deployment:

1. **Minify CSS** ✅ (Next.js does automatically)
2. **Optimize Images** ✅ (Using Next.js Image component)
3. **Enable Gzip** ✅ (Netlify default)
4. **Cache Static Assets** ✅ (netlify.toml configured)

## Security Checklist

- ✅ HTTPS enabled
- ✅ CSP headers configured
- ✅ No API keys exposed
- ✅ Secure API calls only
- ✅ Input validation ready

## Useful Commands

```bash
# View deployment logs
netlify logs --tail

# Check build cache
netlify cache:list

# Clear build cache
netlify cache:clear

# View site info
netlify sites:list

# Link site to account
netlify link

# Deploy current build
netlify deploy --dir=.next --prod
```

## Support & Resources

- **Netlify Docs:** https://docs.netlify.com
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **GitHub Pages:** https://pages.github.com
- **Netlify Status:** https://status.netlify.com

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Deploy to Netlify
3. ✅ Configure custom domain
4. ✅ Monitor performance
5. 🎉 Share your live site!

---

**Your site is now live and ready for the world!** 🚀

Share your deployment link in the assignment submission form.
