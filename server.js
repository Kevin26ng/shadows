import http from 'http';
const PORT=8000;
const server = http.createServer((req,res)=>{
    res.writeHead(2000,{'Content-Type':'text/html'});
    res.end('<h1>WELCOME KEVIN</h1>');
    

});

server.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`);
});

