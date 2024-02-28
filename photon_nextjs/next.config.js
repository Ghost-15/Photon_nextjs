/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode : false,
    // webpack5 : true,
    // webpack: (config) =>{
    //     config.resolve.fallback = { fs : false }
    //     return config;
    // }
    // output: 'export',
    // images: {
    //     loader: 'custom',
    //     loaderFile: './my-loader.js',
    // },
}

// const isProd = process.env.NODE_ENV === 'production'
// module.exports = {
//     // Use the CDN in production and localhost for development.
//     assetPrefix: isProd ? 'http://localhost:3000' : undefined,
// }

module.exports = nextConfig