const https = require('https');

var urls = ['https://flagcdn.com/es/codes.json',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/posts/2'];

var promesas = [];

// ------------------------------------------------------------------------------
// ASINCRONA


function requestJson(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (resp) =>{
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk
            });
            resp.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

for (let i = 0; i < urls.length; i++) {
    requestJson(urls[i]);
    async function hacerPeticion(){
        let request = await requestJson(urls[i]);
        console.table(request);
        console.error()
    }    
    hacerPeticion();
}

// ------------------------------------------------------------------------------
// PROMISE.ALL Y PROMISE.RACE

for (let i = 0; i < urls.length; i++) {
    const promesa = new Promise((resolve, reject) => {
        https.get(urls[i], (resp) =>{
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk
            });
            resp.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', (error) => {
            reject(error);
        });
    })
    promesas.push(promesa);
}

// ------------------------------------------------------------------------------
// PROMISE.ALL

Promise.all(promesas)
    .then(resultado =>{
        console.log(resultado);
    }), error => {
        console.log(error);
    }

// ------------------------------------------------------------------------------
// PROMISE.RACE  

Promise.race(promesas)
    .then( valor => {
        console.log(valor);
    }), error => {
        console.log(error);
    }