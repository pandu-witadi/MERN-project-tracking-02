module.exports = {
    apps : [
        {
            name   : "pm2_example_node",
            script : "src_node/server.js",
            env_production: {
                ENV: "production",
                PORT: 5154
            },
            env_development: {
                ENV: "development",
                POST: 5153
            }
        }
    ]
}
