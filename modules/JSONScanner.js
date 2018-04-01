/**
* A module to scan the JSON data.
*
* @param    JSON   json
* @param    JSON   dependencies
* @return   bool
*/
module.exports = function(json, dependencies)
{
    // If the JSON is not valid and it is empty, then return false;
    if(!require('is-json')(json) && json === '' && json === {})
    {
        return false;
    }

    // If the JSON is valid, return true.
    return true;
};
