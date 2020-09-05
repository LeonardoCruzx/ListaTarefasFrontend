var express = require('express');

var app = express();

app.use(express.static('./dist/listaTarefasFrontend'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/listaTarefasFrontend/'}
  );
});

app.listen(process.env.PORT || 8080);