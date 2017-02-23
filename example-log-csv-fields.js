/*
* example-log-csv-fields.js
*
* @Author: Erick Rettozi
*/

/*
* Import SpeedLog
*/
var SpeedLog = require('speedlog');
var log = new SpeedLog.Logger({
	Transports: {
		File: [
			{
				level: 'info',
	                	filename: './file-info.log', // Output
        	                csv: true, // (Comma-Separated values)
				fields:['code','name','email','json'], // Fields
                        	datePattern: true // format name: file.log-YYYY-MM-DD
			},
			{
				level: 'error',
	                	filename: './file-error.log', // Output
        	                csv: true, // (Comma-Separated values)
				fields:['email','name','code','json'], // Fields
                        	datePattern: true // format name: file.log-YYYY-MM-DD
			},
			{
				level: 'warn',
	                	filename: './file-warn.log', // Output
				colorize: true // (info, error, warn)
			}
		],
		Console: [ 
			   {
				level: 'info',
				colorize: true
			   },
			   {
				level: 'error',
				colorize: true
			   },
			   {
				level: 'warn',
				colorize: true
			   }
		]
	}
});

// Variables
var jsonData = {
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

var logLine = {
	email:'jol2006@ig.com.br',
	json:jsonData,
	code:'110196009',
	name:'José de Oliveira'
};


// Info log
log.info('MethodName',logLine);

// Error log
log.error('MethodName','Test ERROR [%j]',logLine);

// Warning log
log.warn('MethodName','Test WARNING - code[%s] - email[%s] - name[%s] - jsonData[%j]',logLine.code,logLine.email,logLine.name,jsonData);

/*
* Destroy object and free memory
*/
log.destroy();

