const express = require('express');
const noteModel = require("./model/note.model")
const app = express();
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("hii");
});

app.get("/about", (req,res)=>{
    res.send("About Page")
});
const notes = [];

app.post("/test" ,(req,res)=>{
    // console.log(req.body.Title);
    notes.push(req.body);

    res.status(201).json({
        message: "Data received"
    });
});

app.get("/tests" , (req,res)=>{
    res.status(200).json({
        Message: "Message",
        note: notes
    });
});

app.delete("/test/:index",(req,res)=>{
    const index = req.params.index;

    delete notes[index];

    res.status(200).json({
        Message: "Deleted",
        
    });
});

app.patch("/test/:index",(req,res)=>{
    const index = req.params.index;
    const description = req.body.description;

    notes[index].description = description;
    res.status(200).json({
        Message: "Updated",
        
    });
});


app.post("/final",async (req,res)=>{
    console.log(req.body);
    await noteModel.create({
        Title: req.body.Title,
        description: req.body.Description
    });

    res.status(200).json({
        Message: "note created",
        
    });

});

app.get("/test1" ,async(req,res)=>{
    const notes =await noteModel.find(); 
    res.status(200).json({
        message: "Your Notes",
        notes: notes
    });
});
app.delete("/testdelete/:id" , async(req,res)=>{
    const id = req.params.id;
    await noteModel.findByIdAndDelete(id);
    if (!deleted) {
        return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({
        Message: "Deleted",
        
    });
});
app.patch("/testpatch/:id",async(req,res)=>{
    const id = req.params.id;
    const Description = req.body.Description;

    const updated = await noteModel.findByIdAndUpdate(id,{Description});

    if(!updated){
        res.status(400).json({
            Message:"error"
        });
    }

    res.status(200).json({
        message:"Updated"
    });
})


module.exports = app;
