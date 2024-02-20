module.exports = {
    apps: [
        {
            name: "crypto-next",
            script: "npm",
            args: "start",
            instances: "max",
            exec_mode: "cluster",
            env: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};