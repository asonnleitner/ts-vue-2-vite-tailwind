import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
const viteConfig = defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`
    }
  },

  plugins: [
    createVuePlugin(),
    Components({
      dts: './typings/components.d.ts',
      extensions: ['vue', 'ts'],
      include: [
        /\.vue$/,
        /\.vue\?vue/,
        /\.ts$/,
        /\.ts\?ts/,
        /\.tsx$/,
        /\.tsx\?tsx/
      ],
      deep: true,
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView']
        }
      ]
    }),
    AutoImport({
      dts: './typings/auto-imports.d.ts',
      imports: [
        {
          vue: [['default', 'Vue']],
          vuex: [['default', 'Vuex']],
          'vue-router': [['default', 'VueRouter']]
        }
      ],
      eslintrc: {
        enabled: true,
        filepath: './typings/.eslintrc-auto-import.json',
        globalsPropValue: 'readonly'
      }
    })
  ]
})

export default viteConfig
