'use strict';

module.exports = {
	JWT_Secret : {
		SECRET_KEY: process.env.JWT_SECRET || "Saraharasecratekey"
	},
	SESSION_SECRET: {
		SECRET_KEY: process.env.SESSION_SECRET || "Saraharasessionkey"
	},
	DB_Connection: {
		URL: process.env.DB_Connection || "mongodb://localhost:27017/skypeClone"
	},
	SERVER_PORT: {
		PORT: process.env.PORT || 3001
	},
	log: true,
	port: 3000,
	url: "/",
	ssl: {
		use: false,
		key: "/path/to/your/ssl.key",
		cert: "/path/to/your/ssl.crt"	
	},
        readline: {
        	use: true,
			prompt: "[--:--:--][CONSOLE] "
        }
}
