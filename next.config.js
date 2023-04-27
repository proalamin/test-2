/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const prod = process.env.NODE_ENV === 'production'
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})
module.exports = withBundleAnalyzer(withPWA({
    pwa: {
        disable: prod ? false : true,
        dest: 'public',
        runtimeCaching: prod ? runtimeCaching : undefined,
    },
    webpack: (config, {isServer}) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config;
    }
}))
