/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { images: { allowFutureImage: true } },
    env: {
        SITE_URL: "chainstats.",
        APP_API: "https://chainstate.atulitventures.com/api/v1",
        APP_PAYPAL_CLIENT_ID: "AeXK8XuBKsXl5HXJ0b3cyW8LSrT9d3kUbA-a65ElkfvTt9XdF-fimJf82SyGGdg1IQrbt_yCLib7GED3",
        PAYPAL_CLIENT_SECRET: "ENZ_exZKBqjtbnD49vZ8B_4rGh3ucPVW5UlHQEYl-fuFwX8o3QIsCiofulp8T_ws5bW7JqGHqlNzvgM",
        APP_TWITTER_API_KEY: "dz6UHYLQWwmyUxubsoYdaAopH",
        APP_TWITTER_SECRET_CODE: "EuEtLxIgm5yHR1MLt3z9nBhecxA9JI7QjgKhJhjtLgMjV3OpRd",
        APP_TWITTER_BAREAR_TOKEN: "AAAAAAAAAAAAAAAAAAAAAGrMsgEAAAAAW3E%2FF7GQTy4vsCTKO8n7JLGKvvU%3D6E8LkZ1NBPnUp7PmMzsoIW2XDC7f1lmkWjCfbeRl4IEy112A2y",
        APP_TWITTER_ACCESS_TOKEN: "1765966955742363648-lZUZBYWr25aAT2aRj7tHwjqTXR4Dcx",
        APP_TWITTER_ACCESS_TOKEN_SECRET: "E9GZbPkOKJSFrawbwTYziAE4f71vyfEYKAhvzaBRiBFf3",
        SOCIAL_FACEBOOK: "https://facebook.com",
        SOCIAL_INSTAGRAM: "https://instagram.com",
        SOCIAL_LINKEDIN: "https://linkedin.com",
        SOCIAL_TWITTER: "https://twitter.com/ChainStatsWeb",
        SOCIAL_DRIBBBLE: "https://dribbble.com",
    },
    images: {
        domains: ['*.startupwebsite.net', 'chainstate.atulitventures.com','atulitventures.com',"assets.coincap.io"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            }
        ],
    },
}

module.exports = nextConfig