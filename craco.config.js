const CracoAlias = require('craco-alias')
const FontPreloadPlugin = require('webpack-font-preload-plugin')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
  webpack: {
    plugins: {
      add: [
        new FontPreloadPlugin({
          // 불필요한 ttf, woff 제외하고 2만
          extensions: ['woff2'],
        }),
      ],
    },
  },
}
