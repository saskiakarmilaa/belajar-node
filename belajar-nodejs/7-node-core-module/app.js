// core module
// file system
const fs = require('fs');
// menuliskan string ke file (syncronous)
// try {
// fs.writeFileSync('data/test.txt', 'hello world secara sychronous!');
// } catch(e) {
//     console.log(e);
// }

// menuliskan string ke file (asynchronous)

// fs.writeFile('data/test.txt', 'hello world secara asychronous!', (e) => {
//     console.log(e);
// });

// membaca isi file (synchronous)
// const data = fs.readFileSync('data/contacts.json', 'utf-8');
// console.log(data);

// membaca isi file (asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('masukkan nama anda : ', (nama) => {
    rl.question('masukkan no HP anda : ', (noHP) => {
        const contact = { nama, noHP };
        const file = fs.readFileSync('data/contacts.json', 'utf8');
        const contacts = JSON.parse(file);
        
        contacts.push(contact);
        rl.close();
    });
    
});