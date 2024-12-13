// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require("next-pwa")({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 빌드 시 ESLint 무시
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://3.35.0.57:3000/:path*", // 실제 백엔드 서버 주소
      },
    ];
  },
};

// eslint-disable-next-line no-undef
module.exports = withPWA(nextConfig);
