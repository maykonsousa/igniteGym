module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
    [
      'module-resolver',
    {
      root: ['./src'],
      alias: {
        "@dtos": "./src/dtos",
        "@models": "./src/models",
        "@services": "./src/services",
        "@utils": "./src/utils",
        "@screens": "./src/screens",
        "@components": "./src/components",
        "@navigation": "./src/navigation",
        "@hooks": "./src/hooks",
        "@contexts": "./src/contexts",
        "@assets": "./src/assets",
        "@routes": "./src/routes",

      }
    }
    ]
    ],
  };
};
