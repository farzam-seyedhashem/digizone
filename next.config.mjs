/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        taint: false,
    },
    env: {
        "ProductionURL":"https://digizoneshop.com",
"DevURL": "http://localhost:3000",
        "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY":"pk_test_ZXRlcm5hbC10ZXJtaXRlLTk1LmNsZXJrLmFjY291bnRzLmRldiQ",
        "CLERK_SECRET_KEY":"sk_test_nZKpfnvNslu1nisecmXaRNRYmEL3bFWSjLZA1CMF6b"
    },
};

export default nextConfig;
