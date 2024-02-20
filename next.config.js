/** @type {import('next').NextConfig} */
const nextConfig = {
    target: 'server',
    env: {
        SITE_URL: "http://localhost:3000",
        APP_API_KEY: "OGFjN2E0Y2E4NjRjZDAxZjAxODY0ZmEyOGFkOTAzYjh8ZW1RbU1mNk1RNA==",
        APP_API: "https://backend.startupwebsite.net/public/api",
        SOCIAL_FACEBOOK: "https://facebook.com",
        SOCIAL_INSTAGRAM: "https://instagram.com",
        SOCIAL_LINKEDIN: "https://linkedin.com",
        SOCIAL_TWITTER: "https://twitter.com",
        SOCIAL_DRIBBBLE: "https://dribbble.com",
    },
    images: {
        domains: ['*.startupwebsite.net', '18.138.220.106'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            }
        ],
    },
}

module.exports = nextConfig
