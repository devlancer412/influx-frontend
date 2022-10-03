module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        'viral-hub',
        's.gravatar.com',
        'lh3.googleusercontent.com',
        'logo',
      ],
    },
  };
  return nextConfig;
};
