import fs from 'fs';

export class Orden {
    constructor(orden, computadora) {
        this._id = orden.id,
        this._computadoras = computadora,
        this._contador = orden.contador
    }
}

export class DataOrden {
    constructor() {
        this._pathOrden = './orden.json'
        this._pathComputadora = './computadoras.json' 
        this._patMonitor = './monitor.json'
        this._patDispositivo = './dispositivos.json'
    }

    readJsonFile(path){
        let contentFile = fs.readFileSync(path, 'utf-8');
        if (contentFile) {
            return JSON.parse(contentFile)
        } else {
            return [];
        }
    }

    writeJsonFile(data) {
        let jsonData = JSON.stringify(data,null,'');
        fs.writeFileSync(this._pathOrden,jsonData);
    }

    save(orden) {
        let dataOrden = this.readJsonFile(this._pathOrden);
        let dataComputadora = this.readJsonFile(this._pathComputadora);
        
        for (const key in dataComputadora) {
            if (dataComputadora[key]._id == orden._computadoras){
                dataOrden.push(orden);
                this.writeJsonFile(dataOrden);
                console.log('agregado');
            }
        }
    }

    getAll(){
        let dataOrden = this.readJsonFile(this._pathOrden);
        let dataComputadora = this.readJsonFile(this._pathComputadora);
        let dataMonitor = this.readJsonFile(this._patMonitor);
        let dataDispositivo = this.readJsonFile(this._patDispositivo);
        let newData;

        for (let i = 0; i < dataOrden.length; i++) {
            for (const key in dataOrden[i]) {
                if (key == '_computadoras'){
                    newData = dataComputadora.find(computadora => computadora._id == dataOrden[i]._computadoras)
                    dataOrden[i]._computadoras = newData;
                    
                    // console.log(newData);
                }
                
            }
        }
        
        console.log(dataOrden);
    }

}