const Hapi = require('@hapi/hapi');
const fs = require('fs');
const init = async () => {

    const server = Hapi.server({
        port: 3001,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/error',
        handler: (request, h) => {
            const errorInfo = request.query.info;
            fs.appendFile('./log.json', errorInfo, function (err) {
                if (err) {
                    console.log(err);
                }
            })
            return 'Hello World!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();