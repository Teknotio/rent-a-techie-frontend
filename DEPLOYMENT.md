# Deployment Guide - Azure Static Web Apps

This guide will help you deploy the Rent a Techie frontend to Azure Static Web Apps.

## Prerequisites

1. **Azure Account**: You need an active Azure subscription. [Create one for free](https://azure.microsoft.com/free/)
2. **Azure CLI** (Optional - for manual deployment): Install from [here](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
3. **GitHub Account**: For automated CI/CD deployment

## Deployment Options

### Option 1: Deploy via Azure Portal (Recommended for First Time)

1. **Sign in to Azure Portal**
   - Go to [portal.azure.com](https://portal.azure.com)
   - Sign in with your Azure account

2. **Create a Static Web App**
   - Click "Create a resource"
   - Search for "Static Web App"
   - Click "Create"

3. **Configure Basic Settings**
   - **Subscription**: Select your Azure subscription
   - **Resource Group**: Create new or select existing
   - **Name**: `rent-a-techie-frontend` (or your preferred name)
   - **Plan type**: Free (or Standard for production)
   - **Region**: Choose closest to your users (e.g., West Europe, East US)
   - **Source**: GitHub

4. **Configure GitHub Integration**
   - Click "Sign in with GitHub"
   - Authorize Azure Static Web Apps
   - **Organization**: Select your GitHub organization
   - **Repository**: Select your repository
   - **Branch**: `main`

5. **Build Configuration**
   - **Build Presets**: Next.js
   - **App location**: `/`
   - **Api location**: (leave empty)
   - **Output location**: `.next`

6. **Review + Create**
   - Click "Review + create"
   - Click "Create"

7. **GitHub Actions Workflow**
   - Azure automatically creates a GitHub Actions workflow in your repository
   - The workflow will automatically deploy your app on every push to main

8. **Get Your URL**
   - After deployment completes (2-5 minutes), go to your Static Web App resource
   - Find your app URL (e.g., `https://wonderful-island-12345.azurestaticapps.net`)

---

### Option 2: Deploy via Azure CLI

1. **Install Azure CLI** (if not already installed)
   ```bash
   # macOS
   brew install azure-cli

   # Windows
   # Download from https://aka.ms/installazurecliwindows
   ```

2. **Login to Azure**
   ```bash
   az login
   ```

3. **Install Static Web Apps Extension**
   ```bash
   az extension add --name staticwebapp
   ```

4. **Create Resource Group**
   ```bash
   az group create \
     --name rent-a-techie-rg \
     --location westeurope
   ```

5. **Create Static Web App**
   ```bash
   az staticwebapp create \
     --name rent-a-techie-frontend \
     --resource-group rent-a-techie-rg \
     --source https://github.com/YOUR_USERNAME/YOUR_REPO \
     --location westeurope \
     --branch main \
     --app-location "/" \
     --output-location ".next" \
     --login-with-github
   ```

6. **Get Deployment Token** (if using GitHub Actions manually)
   ```bash
   az staticwebapp secrets list \
     --name rent-a-techie-frontend \
     --resource-group rent-a-techie-rg \
     --query "properties.apiKey" -o tsv
   ```

---

### Option 3: Manual Deployment with SWA CLI

1. **Install SWA CLI**
   ```bash
   npm install -g @azure/static-web-apps-cli
   ```

2. **Build Your App**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   swa deploy .next \
     --deployment-token <YOUR_DEPLOYMENT_TOKEN> \
     --app-location / \
     --output-location .next
   ```

---

## Post-Deployment Configuration

### 1. Custom Domain (Optional)

1. Go to your Static Web App in Azure Portal
2. Click "Custom domains" in the left menu
3. Click "+ Add"
4. Follow instructions to:
   - Add a CNAME record to your DNS
   - Validate domain ownership
   - Enable custom domain

### 2. Environment Variables

If you need to add environment variables:

1. Go to your Static Web App in Azure Portal
2. Click "Configuration" in the left menu
3. Click "+ Add" under Application settings
4. Add your environment variables (they must start with `NEXT_PUBLIC_` to be accessible in the browser)

### 3. Configure Routing (Already Set Up)

The `staticwebapp.config.json` file handles:
- Client-side routing for Next.js
- 404 fallback to index.html
- Cache headers for static assets
- MIME types

---

## Troubleshooting

### Build Fails

1. Check the GitHub Actions logs in your repository
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility

### Site Not Loading

1. Check if deployment succeeded in Azure Portal
2. Verify the output location is `.next`
3. Check browser console for errors

### Translation Not Working

1. Ensure translation files are in `/translations/` folder
2. Check browser localStorage for saved language preference
3. Clear browser cache and reload

---

## Monitoring

### View Deployment History

```bash
az staticwebapp show \
  --name rent-a-techie-frontend \
  --resource-group rent-a-techie-rg
```

### View Logs

1. Go to Azure Portal
2. Navigate to your Static Web App
3. Click "Application Insights" or "Logs"

---

## Cost

- **Free Tier**: 100 GB bandwidth/month, 0.5 GB storage
- **Standard Tier**: $9/month, 100 GB bandwidth/month, custom domains, SLA

For most small to medium sites, the **Free tier** is sufficient.

---

## Next Steps

1. ✅ Deploy to Azure Static Web Apps
2. Configure custom domain (rentatechie.com)
3. Set up SSL certificate (automatic with Azure)
4. Configure CDN for better performance (optional)
5. Set up monitoring and analytics

---

## Resources

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps/)
- [Next.js on Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/deploy-nextjs)
- [GitHub Actions for Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/github-actions-workflow)
