/**
* Here all routes will be handled & registered.
*
* @param    object   express
* @param    object   app
* @param    JSON     args
* @return   mixed
*/
module.exports = function(express, app, args)
{
    

    var
    // Initialize route grouping variables.
    upload = express.Router(),

    // Global handler for route.
    handler = function(request, response, service)
    {
        return args.dependencies.controllers(service)(
        {
            request: request,
            response: response,
            args: args
        });
    };

    app.post('/pln/create', function(request, response) {return handler(request, response, 'services/PLN');});
    app.post('/pdam/create', function(request, response) {return handler(request, response, 'services/PDAM');});
    app.post('/bpjs/create', function(request, response) {return handler(request, response, 'services/BPJS');});

};
 