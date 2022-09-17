const express=require("express")
const bodyParser=require("body-parser")
const{default: mongoose}=require("mongoose")
const route=require("./route")

const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("kuch bhi",{
    UseNewUrlParser:true
})
.then(()=>console.log("mongobd is connected"))
.catch((err)=>console.log(err))

app.use("/",route);

app.listen(process.env.PORT||3000,function(){
    console.log("expess is running on port"+(process.env.PORT||3000))
});