var checkHTTPS = function (req, res, next) {
    console.log("protocole" + req.protocol)
    if(req.protocol == "http"){
          console.log("vous n'êtes pas en https");
            res.send("vous n'êtes pas en https",405);
    }else if(req.protocol == "https"){
        console.log("vous 'êtes en https");
        next();
    }
    
  };

  module.exports = checkHTTPS;