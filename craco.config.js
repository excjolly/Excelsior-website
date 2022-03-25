const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#F35D5D",
                            "@font-family": "'Nunito Sans', sans-serif",
                            "@card-shadow":
                                "0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)",
                            "@card-radius": "10px",
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
