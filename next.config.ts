/** @type {import('next').NextConfig} */
const nextConfig = {
  // Isso silencia o erro e ativa o Turbopack corretamente
  turbopack: {}, 
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
