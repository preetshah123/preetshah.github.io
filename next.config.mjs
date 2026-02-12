/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for GitHub Pages static export
  images: {
    unoptimized: true  // GitHub Pages doesn't support Next.js Image Optimization
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: '',  // Replace with your actual repo name if different
}

export default nextConfig