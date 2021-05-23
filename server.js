const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 8080,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path:'/hello',
        handler: (request, h) => {
    
          return 'Hello World!';
        }
    });

    await server.start();
    console.log('Server running on port 8080');
};



init();