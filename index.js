const loaderUtils = require('loader-utils');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();
module.exports =  function(source) {
    this.cacheable && this.cacheable();
    const options = loaderUtils.getOptions(this);
    console.log('options', options);
    const self = this;
    parser.parseString(source, function (err, result) {
        self.callback(err, !err && "module.exports = " + JSON.stringify(result));
    });
};