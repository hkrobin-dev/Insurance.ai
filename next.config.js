/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // add allowed remote image domains here (e.g. S3/Cloudinary bucket) once file storage is chosen
    ],
  },
};

module.exports = nextConfig;
