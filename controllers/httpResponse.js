/**
* A method to set HTTP response header.
*
* @param    object   response
* @param    JSON     properties
* @return   mixed
*/
module.exports = function(params, properties)
{
    var logger = params.args.dependencies.modules('logs');
    var moment = require('moment');
    var url = require('url');
    // Set HTTP status code.
    params.response.statusCode = properties.status;

    // Set HTTP Content-type.
    params.response.setHeader('Content-type', 'application/json; charset=utf8');
    // Write to response.
    params.response.json({
        rc: properties.rc,
        message: properties.message,
        data: properties.data
    });
    // Finish the response.
    params.response.end();

    if(params.request.method == 'GET'){   
        var url_parts = url.parse(params.request.url, true);
        var json = url_parts.query;
    }else{
        var json = params.request.body;
    }


    // console.log(params.request.url);
    // console.log("======================");
    // console.log(json);
    // console.log("======================");
    // console.log(properties);
    // console.log("======================");
    // console.log(properties.data.rows);
    // console.log("======================");

    /* begin secondary log */
/*    const LogsMongo =  params.args.dependencies.models('LogsMongo')(params.args.mongoose);

    if(properties.data){
        if(properties.data.dataValues != undefined){
            properties.data = properties.data.dataValues;
            //console.log("dataaaaaaaa");
        }else if(properties.data.rows){
            var hasil= [];
            for(var i=0; i<properties.data.rows.length; i++){
                hasil.push(properties.data.rows[i].dataValues);
            }
            properties.data.rows = hasil;
        }
    }
     
    LogsMongo.create({
        endpoint   : params.request.url,
        request    : json, //JSON.stringify(json),
        response   : properties //JSON.stringify(properties)
    },function (err)
    {
        if(err){
            console.log("ERROR INSERT IN MONGO");
            console.log(err);
        }
    }); 
    */
    /* end secondary log */


    if(properties.rc == 0){
        logger.info('', { ip: params.request.headers['x-forwarded-for'] || params.request.connection.remoteAddress, 
                          endpoint: params.request.url , date : moment().format(), params : json, results : JSON.stringify(properties) });
    }else{
        logger.error('', { ip: params.request.headers['x-forwarded-for'] || params.request.connection.remoteAddress,
                           endpoint: params.request.url , date : moment().format(), params : json, results : JSON.stringify(properties) });
    }
};
