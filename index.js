/** 
 * https://github.com/YeCamila/tools-crypto-server.git
 */
"use strict";

const ts = require('crypto-ts')('crypto:server');

const pjson = require('./package.json');
const aspa = require('abv-spa')();
const Node = require('tools-crypto-node');
const store = require('abv-store');

aspa.use('/store', store);

const node = new Node(aspa);

class Server
{
	constructor(){ }
	
	get web(){ return aspa; }
	
	get wss(){ return node; }
	
	start(host,port)
	{
		aspa.listen(port, host, (err) => {  
			if (err) return ts.error(28,err);
			ts.info('Node.js: ' + process.version,'os: ' + process.platform,'arch: '+process.arch);
			ts.println(`Abvos node is running on http://${host}:${port}`,ts.GREEN);
		});
	}
	
	stop()
	{
		// TODO: stop, restart
	}
		
}

module.exports = Server;
