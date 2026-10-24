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
        {
          source: "/",
          has: [{ type: "host", value: "houseofdesign.getvout.com" }],
          destination: "/house-of-design",
        },
      ],
    };
  },
};

export default nextConfig;
