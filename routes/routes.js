const express=require("express")
const router=express.Router()

router.get("/name", (req, res) => {
    res.status(200).send("Mandefro Endalk");
});
router.get("/dream", (req,res)=>{
    res.status(200).send("<h3>Debugging is like being a detective in a crime movie where YOU wrote the script. Keep going, dev—you’re the hero who saves the day, one bug at a time!<h3>")
})
router.get("/hobby",(req,res)=>{
    const responseData = {
        message:"Hello",
      hobbies:{
          hobbies1: "Reading",
         hobbies2:"movie",
          status: "solving probllems"
      },
     
    }
    
    res.status(200).json(responseData)
})
module.exports=router