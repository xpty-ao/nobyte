import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // Cloudflare's build target does not support the default Next.js image
    // optimizer, so it is disabled here. See DEPLOYMENT.md.
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
