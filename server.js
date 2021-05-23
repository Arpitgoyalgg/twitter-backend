const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 8080,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path:'/tweets',
        handler: (request, h) => {
    
          return 'Endpoint to retrieve all the existing tweets';
        }
    });

    server.route({
        method: ['POST'],
        path:'/tweet',
        handler: (request, h) => {
    
          return 'Endpoint to POST a new tweet to the backend database';
        }
    });

    await server.start();
    console.log('Server running on port 8080');
};



init();