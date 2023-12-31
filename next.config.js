/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  reactStrictMode: true,
  publicRuntimeConfig: {
    NEXT_PUBLIC_AppDomain:    process.env.NEXT_PUBLIC_AppDomain,
    staticFolder: '/static',
    basePath: process.env.NEXT_PUBLIC_AppDomain
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    
  },
}

module.exports = nextConfig
