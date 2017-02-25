# SpeedLog
High performance async logging library for Node.js. Written in [C/C++ Addons](https://nodejs.org/api/addons.html)

Transports handles
1. __File__
2. __Console__


## Transports

``` js
  var SpeedLog = require('speedlog');
  var log = new SpeedLog.Logger({
	Transports: {
		File: {
			filename: './file.log', // Output
			colorize: true, // (info, error, warn)
			datePattern: true // format name: file.log-YYYY-MM-DD
		},
		Console: {
			colorize: true // (info, error, warn)
		}
	}
  });
```

### Default Logger

``` js
  var SpeedLog = require('speedlog');
  var log = new SpeedLog.Logger({
        Transports: {
                File: {
                        filename: './file.log',
                        colorize: false
                },
                Console: {
                        colorize: true
                }
        }
  });

  var code = '110196009';
  var login = 'login_test';
  var domain = 'domaintest.com.br';

  log.info('YourMethodName','INFO Test - code[%s] - login[%s] - domain[%s] - json[%j]',code,login,domain,{dataInfo: 'info message'});

  log.error('YourMethodName','ERROR Test - code[%s] - login[%s] - domain[%s] - json[%j]',code,login,domain,{dataError: 'error message'});

  log.warn('YourMethodName','WARNING Test - code[%s] - login[%s] - domain[%s] - json[%j]',code,login,domain,{dataWarning: 'warning message'});

  log.destroy();
``` 

### CSV Logger

``` js
  var SpeedLog = require('speedlog');
  var log = new SpeedLog.Logger({
	Transports: {
		File: {
			filename: './file-csv.log',
			csv: true, // (Comma-Separated values)
			datePattern: true // format name: file.log-YYYY-MM-DD
		},
		Console: {
			colorize: true
		}
	}
  });

  var code = '110196009';
  var login = 'login_test';
  var domain = 'domaintest.com.br';

  log.info('YourMethodName',code,login,domain,{dataInfo:'info message'});

  log.error('YourMethodName',code,login,domain);

  log.warn('YourMethodName',code,login,domain);

  log.destroy();
``` 

### CSV Logger (column names)

``` js
  var SpeedLog = require('speedlog');
  var log = new SpeedLog.Logger({
	Transports: {
		File: {
			filename: './file-csv.log',
			csv: true, // (Comma-Separated values)
			fields:['code','name','email','userJsonMetadata'],
			datePattern: true
		},
		Console: {
			colorize: true
		}
	}
  });

  var userData = {
     "firstName": "John",
     "lastName": "Smith",
     "age": 25,
     "address":
     {
         "streetAddress": "21 2nd Street",
         "city": "New York",
         "state": "NY",
         "postalCode": "10021"
     },
     "phoneNumber":
     [
         {
           "type": "home",
           "number": "212 555-1234"
         },
         {
           "type": "fax",
           "number": "646 555-4567"
         }
     ]
  };

  var logLine = {
        email:'jsmith@gmail.com',
        userJsonMetadata:userData,
        code:'110196009',
        name:'John Smith'
  };

  log.info('YourMethodName',logLine);

  log.error('YourMethodName',logLine);

  log.warn('YourMethodName',logLine);

  log.destroy();
```

### CSV Logger(Multiple-Transports-File) 

``` js
  var SpeedLog = require('speedlog');
  var log = new SpeedLog.Logger({
	Transports: {
		File: [
			{
				level: 'info',
				filename: './file-info.log', // Output
				csv: true, // (Comma-Separated values)
				fields:['code','name','email','userJsonMetadata'], // Fields
				datePattern: true // format name: file.log-YYYY-MM-DD
			},
			{
				level: 'error',
				filename: './file-error.log', // Output
				csv: true, // (Comma-Separated values)
				fields:['email','name','code','userJsonMetadata'], // Fields
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

  var userData = {
     "firstName": "John",
     "lastName": "Smith",
     "age": 25,
     "address":
     {
         "streetAddress": "21 2nd Street",
         "city": "New York",
         "state": "NY",
         "postalCode": "10021"
     },
     "phoneNumber":
     [
         {
           "type": "home",
           "number": "212 555-1234"
         },
         {
           "type": "fax",
           "number": "646 555-4567"
         }
     ]
  };

  var logLine = {
        email:'jsmith@gmail.com',
        userJsonMetadata:userData,
        code:'110196009',
        name:'John Smith'
  };

  log.info('YourMethodName',logLine);

  log.error('YourMethodName',logLine);

  log.warn('YourMethodName','WARNING - code[%s] - email[%s] - name[%s] - userData[%j]',logLine.code,logLine.email,logLine.name,userData);

  log.destroy();
```

### INSTALL

  Add the git package in the **package.json** file of your application

``` js
  "dependencies" : {
      "SpeedLog" : "git+http://user:pass@git.domain.com.br:app/SpeedLog.git#master",
  }
```
 Run the command to install: **sudo npm install SpeedLog**
