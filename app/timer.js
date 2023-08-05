const parse = require('./parse');

parse();
let parseId = setInterval(parse, 30 * 1000);

function syncData() {
    clearInterval(parseId);
    parse();
    parseId = setInterval(parse, 30 * 1000);
}

module.exports = { syncData };
