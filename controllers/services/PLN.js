"use strict";
/**
TextRow {
  id: 1,
  type: 'PLN',
  billing_id: '511463303266',
  cust_name: 'DRS ABDUL MALIK.',
  daya: 'R1/1300',
  amount: 0,
  admin: 3500,
  total_tagihan: 3500 }
TextRow {
  id: 2,
  type: 'PLN',
  billing_id: '511463685440',
  cust_name: 'ABD SYUKUR',
  daya: 'R1/1300',
  amount: 0,
  admin: 3500,
  total_tagihan: 3500 }
*/

module.exports = function(params)
{
    // Initialize async for manage functions schema.
    const async = require('async');
    const httpResponse = params.args.dependencies.controllers('httpResponse');
    const responseCodes = params.args.dependencies.controllers('responseCodes');
    const json = params.request.body;
    

    // Process async method.
    // Here the main service functions will be handled & called.
    async.waterfall([
        function getData(callback)
        {
            var default_query = "select id, type, billing_id, cust_name, daya, FORMAT(amount,0,\"de_DE\") as amount, FORMAT(admin,0,\"de_DE\") as admin, FORMAT((amount+admin),0,\"de_DE\") as total_tagihan from data where type = 'PLN';";
            params.args.sequelize.child.query(default_query).error(function(err)
            {
                callback(true, {
                    status: 400,
                    rc: 1,
                    message: responseCodes[1],
                    data: err
                });
                return;
            }).then(function(result)
            {
                //console.log(result)
                callback(null, result[0])
            }); 
        },

        function createPDF(data, callback)
        {
            var hasil =[];

            async.forEachOf(data, function (value, i, callback){ 
                var PDFDocument = require ('pdfkit'), fs = require('fs'), moment = require('moment');

                var filename = params.args.config.path+'PLN '+value.cust_name+'.pdf';

                // Create a document
                var doc = new PDFDocument({margins :{top: 10, left:100, right: 100, bottom:10}});

                // Pipe its output somewhere, like to a file or HTTP response
                // See below for browser usage
                doc.pipe(fs.createWriteStream(filename))

                // Embed a font, set the font size, and render some text
                doc.font('Helvetica-Bold').text('STRUK PEMBAYARAN TAGIHAN LISTRIK', {align : 'center'})
                doc.moveDown();

                doc.font('Times-Roman').fontSize(9.75)
                doc.text('ID PELANGGAN', { continued: true });doc.x += 25;
                doc.text(':', { continued: true });doc.x += 5;
                doc.text(value.billing_id)

                doc.text('NAMA', { continued: true });doc.x += 68;
                doc.text(':', { continued: true });doc.x += 5;
                doc.text(value.cust_name)

                doc.text('TARIF/DAYA', { continued: true });doc.x += 42;
                doc.text(':', { continued: true });doc.x += 5;
                doc.text(value.daya)
 
                doc.text('BL/TH', { continued: true });doc.x += 69;
                doc.text(':', { continued: true });doc.x += 5;
                doc.text(moment().format("MMMYY").toUpperCase())

                doc.text('RP TAG PLN', { continued: true });doc.x += 43;
                doc.text(':', { continued: true });doc.x += 5;
                doc.text('Rp. '+ value.amount)

                doc.text('NO REFF', { continued: true });doc.x += 57;
                doc.text(':', { continued: true });doc.x += 5;
                doc.text('PLN'+moment().format('YYYYMMDDHHmmssSSSS'))

                doc.moveDown();
                doc.text('PLN menyatakan struk ini sebagai bukti pembayaran yang sah.', {align : 'center', underline : true})
                doc.moveDown();
                
                doc.text('ADMIN', { continued: true });doc.x += 64;
                doc.text(':', { continued: true });doc.x += 5;
                doc.text('Rp. '+value.admin)

                doc.text('TOTAL BAYAR', { continued: true });doc.x += 32;
                doc.text(':', { continued: true });doc.x += 5;
                doc.text('Rp. '+value.total_tagihan)

                // Finalize PDF file
                doc.end() 
                //console.log(filename)
                callback(null, hasil.push(filename))
                //callback();
                
            }, function(err) {
                callback(null, hasil);
            }); 
        },
        function(data, callback){
            //console.log(data)
            callback(true, {
                status : 200,
                rc : 0,
                message : 'Sukses'
            })
        }

    ], function(err, result)
    {
        // If an error / trigger has occur.
        if(err)
        {
            return httpResponse(params, result);
        }
    });
};
