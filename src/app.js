var m = require('mithril');

var testview = require('./views/testview');

m.mount(document.body, testview);

/*
m.route(document.body, '/', {
	'/': testview
});
*/