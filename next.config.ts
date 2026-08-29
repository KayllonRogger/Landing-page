/** @type {import('next').NextConfig} */
const nextConfig = {
  // Isso silencia o erro e ativa o Turbopack corretamente
  turbopack: {}, 
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
