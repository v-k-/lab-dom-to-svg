 "use strict";



 import express from 'Express';





// creatte server
const server = express();
const port = 3000;

//serve public files
server.use(express.static('public'));

server.listen(port, () => console.log(`Lab's sever listening at port ${port}.`));

server.get('/oi', ()=>console.log('here //||\\'));




