module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['viral-hub'],
    },
  };
  return nextConfig;
};
