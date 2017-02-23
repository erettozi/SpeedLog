/*
* example-log-csv.js
*
* @Author: Erick Rettozi
*/

/*
* Import SpeedLog
*/
var SpeedLog = require('speedlog');
var log = new SpeedLog.Logger({
	Transports: {
		File: {
                	filename: './file.log', // Output
                        csv: true, // (Comma-Separated values)
                        datePattern: true // format name: file.log-YYYY-MM-DD
                },
		Console: {
			colorize: true // (info, error, warn)
		}
	}
});

// Variables
var email = 'jol2006@ig.com.br';
var code = '110196009';
var name = 'José de Oliveira';
var json = {
        "code_subscription" : "110196009_20151026142914",
        "code_customer" : 110196009,
        "code_plan" : "31",
        "createdAt" : "2015-11-26 15:20:33",
        "status" : "ACTIVE",
        "gateway" : "easypay",
        "login" : "jol2006",
        "domain" : "ig.com.br",
        "name" : "JOSE DE OLIVEIRA",
        "ip" : "186.222.7.152, 10.0.5.114",
        "cpfCnpj" : "22176413908",
        "payment_method" : {
                "code" : 1,
                "description" : "CREDITO",
                "info_additional" : {
                        "brand_bank" : {
                                "code" : 1,
                                "description" : "visa"
                        },
                        "last_four_digits" : "4021"
                }
        },
        "code_subscription_vulcano" : 11079,
        "firstPurchase" : false,
        "payment_authorized" : true
};

// Info log
log.info('MethodName',email,code,name,json);

// Error log
log.error('MethodName',email,code,name);

// Warning log
log.warn('MethodName',email,code,name);

/*
* Destroy object and free memory
*/
log.destroy();

