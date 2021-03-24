var reqNoXHR = function (req, res, next) {
    console.dir(req.xhr);
    if(req.xhr){
        console.log("vous n'êtes pas en https");
        res.send("vous n'êtes pas en https",418);
    }
    else{
        next();
    }
  
  };

  module.exports = reqNoXHR;