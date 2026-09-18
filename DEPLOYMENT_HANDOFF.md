# Hostinger Deployment Handoff

## Project
UHM Technologies website

## Build status
The production build was verified successfully using the Webpack build path required for this Windows environment.

### Verified commands
```bash
npm install
npm run build
npm start
```

## Important note about build configuration
The default Next.js Turbopack build is blocked in this environment because the native SWC binary is blocked by Windows application control policy. To ensure successful production builds, the project uses:

```json
"build": "next build --webpack"
```

This is the configuration that should be used for deployment builds.

## Files included in deployment zip
The deployment package includes:
- .next
- public
- src
- package.json
- package-lock.json
- next.config.ts
- README.md

## Deployment instructions for developer
1. Extract the deployment zip to the target project directory.
2. Open the project root in the terminal.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the production build:
   ```bash
   npm run build
   ```
5. Start the app:
   ```bash
   npm start
   ```
6. Verify the site loads in the browser on the configured host port.

## Expected app URL
Default local URL:
```bash
http://localhost:3000
```

If Hostinger requires a custom port or runtime configuration, the developer should use the host’s required port and ensure the app is set to listen correctly.

## Critical areas to validate after deployment
- Homepage loads successfully
- Blog pages load
- Service and product pages render correctly
- Contact form API works
- Robots and sitemap routes are available
- No server errors in logs

## Contact form route to check
```text
src/app/api/contact/route.ts
```

## Notes
This is a Next.js production build intended for deployment to a Node-compatible hosting environment. If Hostinger requires PM2, reverse proxy, or a custom startup command, the developer should configure that in the hosting panel as needed.

## Build confirmation
The build was confirmed to complete successfully with the production command:
```bash
npm run build
```
