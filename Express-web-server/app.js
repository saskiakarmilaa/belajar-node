const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>');
    // res.json({
    //     nama: 'saskia',
    //     email: 'saskia@gmail.com',
    //     noHP: '089787654312',
    // });
    res.sendFile('./index.html', {root: __dirname });
});

app.get('/about', (req, res) => {
//   res.send('Ini adalah halaman about');
    res.sendFile('./about.html', {root: __dirname });

});

app.get('/contact', (req, res) => {
//   res.send('Ini adalah halaman contact');
res.sendFile('./contact.html', {root: __dirname });

});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br>  Category : ${req.query.category}` );
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});






// const http = require ('http');
// const fs = require('fs');

// const port = 3000;

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.write('Error: file not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// };

// http
//     .createServer((req, res) => {

//         res.writeHead(200, {
//             'Content-Type': 'text/html',
//         });

//         const url = req.url;

//         switch (url) {
//             case '/about':
//                 renderHTML('./about.html', res);
//                 break;
//             case '/contact':
//                 renderHTML('./contact.html', res);
//                 break;
//             default:
//                 renderHTML('./index.html', res);
//                 break;
//         }
//         // if( url === '/about'){
//         //     renderHTML('./about.html', res)
//         // } else if( url === '/contact' ) {
//         //     renderHTML('./contact.html', res);
//         // } else {
//         //     // res.write('hello world!');
//         //     renderHTML('./index.html', res);
//         // }
//     })
//     .listen(port, () => {
//         console.log('Server is listening on port 3000..');
//     });