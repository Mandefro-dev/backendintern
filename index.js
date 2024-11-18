const express=require("express")
const routes=require("./routes/routes")

const app=express()
const PORT=process.env.PORT||3000
app.use("/",routes)
app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`)
})