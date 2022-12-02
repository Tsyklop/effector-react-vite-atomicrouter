const { layersLib } = require('@feature-sliced/eslint-config/utils');

const FS_SEGMENTS_EXTENDED = [
  ...layersLib.FS_SEGMENTS,
  "assets", // новый сегмент assets
];

const FS_SLICED_LAYERS_REG = layersLib.getUpperLayers("shared").join("|");
const FS_SEGMENTS_REG = [
  ...FS_SEGMENTS_EXTENDED,
  ...FS_SEGMENTS_EXTENDED.map((seg) => `${seg}.*`),
].join('|');

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    '@feature-sliced/eslint-config/rules/layers-slices', // правила для layers-slices
    '@feature-sliced/eslint-config/rules/import-order', // правила для import-order
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      "eslint-import-resolver-custom-alias": {
        "alias": {
          "@": "./src"
        },
        "extensions": ['.js', '.jsx', '.ts', '.tsx'],
      }
    },
  },
  rules: {
    "import/no-internal-modules": [
      "error", {
        "allow": [
          /**
           * Allow not segments import from slices
           * @example
           * 'entities/form/ui' // Fail
           * 'entities/form' // Pass
           */
          `**/*(${FS_SLICED_LAYERS_REG})/!(${FS_SEGMENTS_REG})`,

          /**
           * Allow slices with structure grouping
           * @example
           * 'features/auth/form' // Pass
           */
          `**/*(${FS_SLICED_LAYERS_REG})/!(${FS_SEGMENTS_REG})/!(${FS_SEGMENTS_REG})`,

          /**
           * Allow not segments import in shared segments
           * @example
           * 'shared/ui/button' // Pass
           */
          `**/*shared/*(${FS_SEGMENTS_REG})/!(${FS_SEGMENTS_REG})`,

          /**
           * Allow import from segments in shared
           * @example
           * 'shared/ui' // Pass
           */
          `**/*shared/*(${FS_SEGMENTS_REG})`,

          /** allow global modules */
          `**/node_modules/**`,

          /**
           * allow custom shared segments with _prefix
           */
          `**/*shared/_*`,
          `**/*shared/_*/*`,

          /**
           *  Used for allow import local modules
           * @example
           * './model/something' // Pass
           */
          `./**`

        ],
      }]
  },
}
