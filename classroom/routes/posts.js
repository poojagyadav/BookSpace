//Posts
//Index
app.get("/posts",(req,res)=>{
    res.send("GET for posts");
})
//Show
app.get("/posts/:id",(req,res)=>{
    res.send("GET for show posts");
})
//post
app.post("/posts",(req,res)=>{
    res.send("Post for posts");
})
//Delete
app.delete("/posts/:id",(req,res)=>{
    res.send("Delete for posts id");
})