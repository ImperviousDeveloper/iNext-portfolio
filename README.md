This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


- Gh-Pages setup

- ✅ 1. Update next.config.js
````
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Needed for next export
  images: {
    unoptimized: true, // Optional: if using images (next/image), because GitHub Pages doesn't support optimized images
  },
  basePath: '/<REPO_NAME>',
  assetPrefix: '/<REPO_NAME>/',
};

module.exports = nextConfig;
````

- ✅ 2. Add homepage to package.json
````
{
  "homepage": "https://<USERNAME>.github.io/<REPO_NAME>"
}
````

- ✅ 3. Install gh-pages
````
npm install gh-pages --save-dev
````

- ✅ 4. Add Deployment Scripts in package.json
````
// for next < 14
{
  "scripts": {
    "build": "next build",
    "export": "next export",
    "deploy": "npm run build && npm run export && gh-pages -d out"
  }
}

// for next 14+
{
  "scripts": {
    "build": "next build",
    "deploy": "next build && gh-pages -d out"
  }
}
````

- ✅ 5. Build and Deploy

````
// V1
npm run deploy

// V2
// Build and Export:
npm run build
npx next export

// Deploy:
npx gh-pages -d out
````


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
