/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        taint: false,
    },
    env: {
        "ProductionURL":"https://digizoneshop.com",
"DevURL": "http://localhost:3000",
    },
};

export default nextConfig;
