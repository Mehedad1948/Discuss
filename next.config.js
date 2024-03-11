/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/dashboard',
                destination: '/api/auth/dashboard'
            }
        ]
    }
}

module.exports = nextConfig
