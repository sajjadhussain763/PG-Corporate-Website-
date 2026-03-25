/** @type {import('next').NextConfig} */
// Only apply basePath if we're in production AND it's NOT Vercel (assuming GitHub Pages)
const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1' || !!process.env.NEXT_PUBLIC_VERCEL_URL;

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use basePath for GitHub Pages, but NOT for Vercel or Local
  basePath: (isProd && !isVercel) ? '/pgi-corporate-website' : '',
  assetPrefix: (isProd && !isVercel) ? '/pgi-corporate-website/' : '',
};

export default nextConfig;



