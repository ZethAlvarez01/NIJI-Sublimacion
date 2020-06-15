const path = require('path');

module.exports = app =>{

    //Seteo el valor del puerto por default o le asigno el 3000
    app.set('port',process.env.PORT || 3000);
    
    return app;
}