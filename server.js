const http=require("node:http");

const server=http.createServer(function(req,res){
    
    if(req.url==="/add"){
        return res.end("There is nothing here!")
        //req.url==="/*"    this doesn't work in native nodejs
    }
    res.end("Node JS Practice Session Port")
})

server.listen(7777)