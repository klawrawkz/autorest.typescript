import rollup from "rollup";
import nodeResolve from "rollup-plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";

/**
 * @type {rollup.RollupFileOptions}
 */
const config = {
  input: "./esm/index.js",
  external: [
    "@azure/core-http",
    "@azure/ms-rest-azure-js"
  ],
  output: {
    file: "./dist/multiapi-test.js",
    format: "umd",
    name: "Azure.MultiapiTest",
    sourcemap: true,
    globals: {
      "@azure/core-http": "coreHttp",
      "@azure/ms-rest-azure-js": "msRestAzure"
    },
    banner: `/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */`
  },
  plugins: [
    nodeResolve({ module: true }),
    sourcemaps()
  ]
};

export default config;
