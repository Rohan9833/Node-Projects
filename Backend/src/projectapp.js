const express = require('express');
const multer = require('multer');
const uploadFile = require("./service/storage.service")
const postModel = require("./model/post.model");
const cors = require("cors")


const app = express();
app.use(cors())
app.use(express.json());


const upload = multer({ storage: multer.memoryStorage() })

app.post("/create-post", upload.single("image"), async (req, res) => {

  const result = await uploadFile(req.file.buffer);
  console.log("req.file.buffer");
  const caption = req.body.caption;
  const img = result.url;
  // console.log(result);
  await postModel.create({
    image:img,
    caption: caption
  });



  res.status(201).json(result);
});

app.get("/get-post", async(req,res)=>{
  const post = await postModel.find();
  console.log(post);

  res.status(200).json({
    message: "Your post",
    display : post
  });
})




module.exports = app;

