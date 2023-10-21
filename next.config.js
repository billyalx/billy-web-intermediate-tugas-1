/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  onDemandEntries: {
    maxInactiveAge: 25 * 1000, // cache halaman web akan bertahan selama 25 detk
    pagesBufferLength: 2, // max cahce halaman sebanyak 2
  },
  experimental: {
    optimizePackageImports: ['react-bootstrap'], // akan mengoptimalkan import react-bootstrap
  },
};
