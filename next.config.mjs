/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.externals.push("@prisma/client");
        }
        return config;
    },
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
    },
};

export default nextConfig;