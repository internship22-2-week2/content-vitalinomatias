import fs from 'fs';

export class Monitor {
    constructor(monitor) {
        this._id = monitor.id,
        this._marca = monitor.marca,
        this._tamaño = monitor.tamaño,
        this._contador = monitor.contador
    }
}

export class DataMonitor {
    constructor() {
        this._path = './monitor.json'
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

    save(monitor) {
        let data = this.readJsonFile();
        data.push(monitor);
        this.writeJsonFile(data);
    }

    getAll(){
        return this.readJsonFile();
    }
}