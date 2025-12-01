/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['res.cloudinary.com'],
        unoptimized:false,
        formats:['image/avif','image/webp'],
    },
    eslint:{
        ignoreDuringBuilds:true,
    }
};

export default nextConfig;
