import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve('.', './node_modules'),
      web: resolve('.', '.'),
    },
  },
  plugins: [
    UnoCSS(),
    react(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'svg-icon-[dir]-[name]',
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        // 全局引入插件
        'react',
        {
          axios: [
            ['default', 'axios'],
          ],
          dayjs: [['default', 'dayjs']],
          '@/api': [
            ['default', 'API'],
          ],
          THREE: [
            ['default', 'three'],
          ],
        },
      ],
      dts: true,
      eslintrc: {
        enabled: true,
        filepath: './auto-imports.json',
        globalsPropValue: true,
      },
    }),
  ],
})
