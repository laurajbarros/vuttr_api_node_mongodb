let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");
let should = chai.should();
chai.use(chaiHttp);

module.exports = {
	chai: chai,
	server: server,
	should: should
};
