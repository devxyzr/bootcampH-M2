module.exports = {
  entry: "./browser/app.js", // Punto de arranqe de nuestro programa
  output: {
    path: __dirname + "/browser",
    filename: "bundle.js",
  },
};
