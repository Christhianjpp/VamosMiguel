/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"],
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    },
    experimental: {
        turbo: {
            resolveAlias: {
                canvas: './empty-module.ts',
            },
        },
    },

}

module.exports = nextConfig
