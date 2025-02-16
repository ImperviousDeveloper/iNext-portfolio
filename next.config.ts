import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
    basePath: isProd ? "/inext-portfolio" : '',
    output: 'export',
    // output: 'standalone', // Optional if you may move to hosting platforms later
    // reactStrictMode: true,
    typescript :{
        ignoreBuildErrors : true,
    },
    images: {
        unoptimized: true, // Optional: if using images (next/image), because GitHub Pages doesn't support optimized images
    },
    // assetPrefix: '/iNext-portfolio',
    assetPrefix: isProd ? '/inext-portfolio' : '',
    trailingSlash: true, // Optional, improves routing on GH Pages
};

export default nextConfig;
