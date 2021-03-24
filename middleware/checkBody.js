var checkBody = function (req, res, next) {
    console.log("body: " + req.body.teapot);
    if(req.body.teapot != "happy unbirthday to you"){
      res.status(418).send();
      console.log("erreur 418");
    }
    next();
  };

  module.exports = checkBody;