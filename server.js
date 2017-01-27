/**
 * Created by ruslan on 19.01.17.
 */
var path = require('path');
//var webpack = require('webpack');
var express = require('express');
//var config = require('./webpack.config');

var app = express();
//var compiler = webpack(config);
/*
app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
*//*
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});*/
app.set('port', (process.env.PORT || 4000));
app.use('/', express.static(__dirname));
/*app.listen(4000, function(err) {
    if (err) {
        return console.error(err);
    }

    console.log('Listening at http://localhost:4000/');
})*/
app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});