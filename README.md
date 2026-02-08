<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1xTbRwBKL33ZqAWCtl9wGGXAIM1Lsac6-

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## 🚀 Deployment to Cloudflare Pages

This project is configured for deployment to Cloudflare Pages using Wrangler.

### Prerequisites

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

### Environment Variables

Before deploying, you need to set your Gemini API key:

1. In your Cloudflare Pages dashboard, go to Settings > Environment Variables
2. Add the following environment variable:
   - **Variable name**: `GEMINI_API_KEY`
   - **Value**: Your actual Gemini API key

### Deployment Steps

1. **Build the project:**
   ```bash
   pnpm build
   ```

2. **Deploy to Cloudflare Pages:**
   ```bash
   pnpm deploy
   ```

   Or directly with Wrangler:
   ```bash
   wrangler pages publish
   ```

### Configuration Files

- `wrangler.toml` - Cloudflare Pages configuration
- `package.json` - Includes deployment script
- `.env.local` - Local environment variables (not deployed)

### Build Configuration

The project uses:
- **Build command**: `pnpm build`
- **Build directory**: `dist`
- **Format**: Single Page Application (SPA)
- **Styling**: Tailwind CSS classes directly in components (no external CSS files)
- **Animations**: Custom CSS animations for smooth transitions
