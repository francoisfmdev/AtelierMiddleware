 var hello = function (req, res, next) {
    console.log("hello");
    next();
  };

  module.exports = hello;