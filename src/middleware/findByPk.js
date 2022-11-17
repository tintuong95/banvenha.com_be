const { STATUS_SERVER_ERROR, STATUS_SUCCESS, STATUS_NOTFOUND } = require("../constants/response.status");
const { NOT_FOUND_TEXT } = require("../constants/response.text");

module.exports = function findId(model) {
  return (req, res, next) => {
    
    model.findByPk(req.params.id).then(result=>{
        if(result){
             res.locals.model = result;
             return next();
        }
        return res.status(STATUS_NOTFOUND).send(NOT_FOUND_TEXT);
        
    }).catch(err=>{
        res.status(STATUS_SERVER_ERROR).send(SERVER_ERROR);
    })
  };
};
