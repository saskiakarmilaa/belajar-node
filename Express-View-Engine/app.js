const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
    // res.sendFile('./index.html', {root: __dirname });
    const mahasiswa = [
        {
            nama: 'saskia karmila',
            email:'saskiamila@gmail.com',
        },
        {
            nama: 'stella wulandari',
            email:'stelladari@gmail.com',
        },
        {
            nama: 'syahirah inara',
            email:'syahiranara@gmail.com',
        },
   ];
    res.render('index',{ 
        nama: 'Saskia Karmila', 
        title: 'Halaman Home',
        mahasiswa,
        layout: 'layouts/main-layout',
    }); 
});

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About',
    }); 

});

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact',
    }); 

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