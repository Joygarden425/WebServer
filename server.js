const http = require('http');
const fs = require('fs').promises;

const user = {};


http.createServer(async(req, res) => {
    try{
        if(req.method === 'GET'){
            if(req.url==='/'){
                const data = await fs.readFile('./pr.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            }
            else if(req.url==='/pro1'){
                const data = await fs.readFile('./problem01.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            }
            else if (req.url==='/pro2'){
                const data = await fs.readFile('./problem02.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            }
            else if (req.url==='/pro3'){
                const data = await fs.readFile('./problem03.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            }
            else if (req.url==='/pro4'){
                const data = await fs.readFile('./problem04.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            }
            else if (req.url==='/pro5'){
                const data = await fs.readFile('./problem05.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            }
        }
    }
    catch(err){
        console.log(err);
        res.writeHead(500,{'content-Type': 'text/html; charset=utf-8'});
        res.end(err.message);

    }
}).listen(8080,() =>{
    console.log('8080번 포트에서 서버 대기중');
    });


/*const server1 = http.createServer(async(req,res) =>{
    try{
    const data = await fs.readFile('./problem01.html');
    res.writeHead(200,{'content-Type': 'text/html; charset=utf-8'});
    res.end(data);
    } catch(err){
        console.log(err);
        res.writeHead(500,{'content-Type': 'text/html; charset=utf-8'});
        res.end(err.message);

    }
});


const server2 = http.createServer((req,res) =>{
    res.writeHead(200,{'content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node</h1>');
    res.end('<p>Hello Server</p>');
});


server1.on('error',(error)=>{
    //console.error(error);
});


server2.listen(8081);

server2.on('listening',() => {
    console.log('8080번 포트에서 서버 대기중');
});
server2.on('error',(error)=>{
    //console.error(error);
});
*/
