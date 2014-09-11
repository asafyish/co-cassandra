'use strict';

/**
 * Module dependencies.
 */

var util = require('util');
var thunkify = require('thunkify');

/**
 * Wrap `client`.
 *
 * @param {Cassandra} client
 * @return {Object}
 */

module.exports = function (client) {

	function CoClient() {
		CoClient.super_.apply(this, arguments);
	}

	util.inherits(CoClient, client);

	CoClient.prototype.execute = thunkify(client.prototype.execute);
	CoClient.prototype.batch = thunkify(client.prototype.batch);
	CoClient.prototype.stream = client.prototype.stream;
	CoClient.prototype.shutdown = thunkify(client.prototype.shutdown);

	return CoClient;
};
