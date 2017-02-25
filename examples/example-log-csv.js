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
                        csv: true // (Comma-Separated values)
                },
		Console: {
			colorize: true // (info, error, warn)
		}
	}
});

var code = '110196009';
var login = 'login_test';
var domain = 'domaintest.com.br';

log.info('YourMethodName',code,login,domain,{dataInfo:'info message'});

log.error('YourMethodName',code,login,domain);

log.warn('YourMethodName',code,login,domain);

/*
* Destroy object and free memory
*/
log.destroy();

