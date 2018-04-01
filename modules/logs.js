(function () {
    'use strict';

    var winston = require('winston');
    var chalk   = require('chalk');
    var moment  = require('moment');
    var logger  = new winston.Logger({
        transports: [,
            // new (require('winston-daily-rotate-file'))({
            //   name:'info-file',
            //   filename: __dirname + '/../logs/info/info.log',
            //   prepend : true,
            //   level : 'info'
            // }),
            // new (require('winston-daily-rotate-file'))({
            //   name:'error-file',
            //   filename: __dirname + '/../logs/error/error.log',
            //   prepend : true,
            //   level : 'error'
            // }),
            new winston.transports.Console({
                level: 'info',
                name:'info',
                json: false,
                colorize: true,
                formatter: function(options) {
                     var log =  chalk.bold.blue('======================================================================')+'\n'+
                               'LEVEL     : '+(options.level.toUpperCase() == 'ERROR' ? chalk.bold.red(options.level.toUpperCase()) : chalk.bold.green(options.level.toUpperCase())) +'\n'+
                               'IP        : '+chalk.bold.yellow(options.meta.ip)+'\n'+
                               'ENDPOINT  : '+chalk.bold.yellow(options.meta.endpoint)+'\n'+
                               'DATE      : '+chalk.bold.yellow(moment().format())+'\n'+
                                chalk.cyan('============================= PARAMS =================================')+'\n'+
                                JSON.stringify(options.meta.params)+'\n'+
                                chalk.cyan('============================ MESSAGE =================================')+'\n'+
                                (JSON.stringify(options.meta.results).length > 10000 ? (JSON.stringify(options.meta.results).substr(0, 10000) + " ...(Selengkapnya di Log File)"): JSON.stringify(options.meta.results))+'\n'+
                               chalk.bold.blue('======================================================================');
                    return  log;
                }
            }),
        ],
        exitOnError: false
    });
    module.exports = logger;
    module.exports.stream = {
      write: function(message, encoding){
          logger.info(message);
      },
    };
})();