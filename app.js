//app.js sample file
const express = require('express') //import 하기
const app = express(); //객체 생성
const port = process.env.PORT||3000; //포트 설정
//http://127.0.0.1:3000
app.get('/', (req, res) => res.send('두번째 테스트!'));
app.get('/welcome', (req, res)=>{
    var user_name =req.param('name');
    res.send('Hi, there. Welcome to the Nodejs service.['+user_name+']');
});
app.listen(port, () =>console.log('Example app listening on port 3000'))