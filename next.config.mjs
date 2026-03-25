/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use correct basePath for GitHub Pages, but empty for local dev
  basePath: isProd ? '/pgi-corporate-website' : '',
  assetPrefix: isProd ? '/pgi-corporate-website/' : '',
};

export default nextConfig;


