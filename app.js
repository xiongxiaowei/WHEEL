var express=require('express')
// include dependencies
var proxy = require('http-proxy-middleware');
// proxy middleware options
// mount `exampleProxy` in web server
var app = express();
app.get('/',(req,res)=>{
	res.send("How are you?")
})
app.get('/api/goods',(req,res)=>{
	var goods=[
      {id:1,barnd:"德芙",price:18,content:"到你是我一生的幸福——德芙巧克力"},
      {id:2,barnd:"兰蔻",price:18,content:"We are one for all for ever."},
      {id:3,barnd:"博柏利",price:18,content:"Be good,be bad,just be yourself."},
      {id:4,barnd:"香奈儿",price:18,content:"Gold is cold.Diamonds are dead.A Limousine is a car.Don't Pretend.Feel what's real.C'est Ca "},
	]
	res.json({code:200,msg:"OK",data:goods})
})
// const apiProxy = proxy('/api', { target: 'http://localhost:8088',changeOrigin: true });//将服务器代理到localhost:8080端口上[本地服务器为localhost:3000]
// app.use('/api/*', apiProxy);//api子目录下的都是用代理
app.listen("3000",()=>{
	console.log("The time is "+new Date().toLocaleString())
	console.log("server is running at port 3000")
})