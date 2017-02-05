var analyzeRouter = require('./analyzeRouter');
var phoneRouter = require('./phoneRouter');
// var vidToPic = require('./vidToPic');

function routeConfig(app){
    app.use('/analyze', analyzeRouter);
    app.use('/phone', phoneRouter);
    // app.use('/vidToPic', vidToPic);

   /// catch 404 and forward to error handler
   app.use(function(req, res, next) {
       var err = new Error('Not Found');
       err.status = 404;
       next(err);
   });

   // production error handler
   // no stacktraces leaked to user
   app.use(function(err, req, res, next) {
       res.status(err.status || 500);
       res.send({
           message: err.message,
           error: {}
       });
   });
}

module.exports=routeConfig;
