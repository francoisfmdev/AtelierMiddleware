

const express = require('express')
const app = express()
const port = 3000;
const hello = require('./middleware/hello.js');
const checkHTTPS = require('./middleware/checkhttps.js');
const reqNoXHR = require('./middleware/requestnoxhr.js');
const checkBody = require('./middleware/checkBody.js')
const indexRouter = require('./routes/index.js');
const { use } = require('./routes/index.js');

app.use(express.urlencoded({ extended: true }));
app.use('/',hello);
app.use('/',checkBody);
//app.use(checkHTTPS);
//app.use('/',reqNoXHR);
/*app.use('/', (req, res, next) => {
  console.log('test');
   next();
});
*/
app.use('/', indexRouter);






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})