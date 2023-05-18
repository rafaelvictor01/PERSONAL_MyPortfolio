/** @type {import('next').NextConfig} */

const { parsed: env } = require("dotenv").config();

const nextConfig = {
  env,
  images: {
    domains: ["cdn.sanity.io", "pbs.twimg.com"],
  },
};

module.exports = nextConfig;
