/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host", value: "designaffairs.getvout.com" }],
          destination: "/design-affairs",
        },
      ],
    };
  },
};

export default nextConfig;
