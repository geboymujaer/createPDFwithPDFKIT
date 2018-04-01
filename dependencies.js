/**
* This is dependencies registration.
* All internal Functions, Models, or Modules are registered here as a path identification.
*
* @return   JSON
*/
module.exports = {

    /**
    * @return   mixed
    */
    routes: function()
    {
        return require('./http/routes');
    },

    /**
    * @param    string   path
    * @return   mixed
    */
    controllers: function(path)
    {
        return require('./controllers/' + path);
    },

    /**
    * @param    string   path
    * @return   mixed
    */
    models: function(path)
    {
        return require('./models/' + path);
    },

    /**
    * @param    string   path
    * @return   mixed
    */
    modules: function(path)
    {
        return require('./modules/' + path);
    }
};
