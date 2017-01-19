/**
 * Created by ruslan on 19.01.17.
 */
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 4000));

app.use('/', express.static(__dirname));

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});