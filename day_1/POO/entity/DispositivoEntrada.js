import fs from 'fs';

class DispositivosEntrada {
    constructor(dispositivo) {
        this._id = dispositivo.id,
        this._marca = dispositivo.marca,
        this._contador = dispositivo.contador
    }
}

export class Raton extends DispositivosEntrada {
    constructor(raton) {
        super(raton);
        this._tipo = raton.tipo
    }
}

export class Teclado extends DispositivosEntrada {
    constructor(teclado) {
        super(teclado);
        this._tipo = teclado.tipo
    }
}

export class DataDispositivos {
    constructor() {
        this._path = './dispositivos.json'
    }

    readJsonFile(){
        let contentFile = fs.readFileSync(this._path, 'utf-8');
        if (contentFile) {
            return JSON.parse(contentFile)
        } else {
            return [];
        }
    }

    writeJsonFile(data) {
        let jsonData = JSON.stringify(data,null,'');
        fs.writeFileSync(this._path,jsonData);
    }

    save(dispositivo) {
        let data = this.readJsonFile();
        data.push(dispositivo);
        this.writeJsonFile(data);
    }

    getAll(){
        return this.readJsonFile();
    }
}