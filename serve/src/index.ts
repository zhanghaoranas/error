
import * as Hapi from '@hapi/hapi';
import * as fs from 'fs';
import { connectionConfig } from './config/index'

const init = async () => {

    const server = Hapi.server({
        port: connectionConfig.port,
        host: connectionConfig.host,
    });

    server.route({
        method: 'GET',
        path: '/error',
        handler: (request) => {
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