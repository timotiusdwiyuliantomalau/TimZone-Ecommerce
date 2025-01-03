// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Menonaktifkan linting selama build
    ignoreDuringBuilds: true,
  },
  images: {
    // Mengonfigurasi domains yang diperbolehkan untuk gambar
    domains: ['example.com'],
  },
  // Anda dapat menambahkan pengaturan lain sesuai kebutuhan
};

export default nextConfig;
