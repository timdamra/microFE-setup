const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            // "name" here, should not match an "id" attribute in the html
            // this will cause a naming conflict
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap'
            },
            shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
