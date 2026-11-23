/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/is218-portfolio/site',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
