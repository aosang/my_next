/** @type {import('next').NextConfig} */
const nextConfig = {
  // 优化 CSS 加载，减少样式闪烁
  experimental: {
    optimizeCss: true,
  },
  
  // 确保 antd 被正确处理
  transpilePackages: ['antd'],
  
  // 优化字体加载
  optimizeFonts: true,
  
  // 配置样式导入
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
