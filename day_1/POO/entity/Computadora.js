import fs from 'fs';

export class Computadora {
    constructor(computadora, monitor, teclado, raton)  {
        this._id = computadora.id,
        this._nombre = computadora.nombre,
        this._monitor = monitor,
        this._teclado = teclado, 
        this._raton = raton,
        this._contador = computadora.contador
    }
}

export class DataComputadora {
    constructor() {
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
        fs.writeFileSync(this._pathComputadora,jsonData);
    }

    save(computadora) {
        let dataComputadora = this.readJsonFile(this._pathComputadora);
        let dataMonitor = this.readJsonFile(this._patMonitor);
        let dataDispositivo = this.readJsonFile(this._patDispositivo);
        
        for (const key in dataMonitor) {
            if (dataMonitor[key]._id == computadora._monitor) {
                for (const key in dataDispositivo) {
                    if (dataDispositivo[key]._id == computadora._teclado && dataDispositivo[key]._tipo == 'teclado') {
                        for (const key in dataDispositivo) {
                            if (dataDispositivo[key]._id == computadora._raton && dataDispositivo[key]._tipo == 'raton') {
                                dataComputadora.push(computadora);
                                this.writeJsonFile(dataComputadora);
                                console.log('agregado');
                                
                            }
                        }
                        
                    } 
                }
                
            } 
        }
    }

    getAll(){
        let dataComputadora = this.readJsonFile(this._pathComputadora);
        let dataMonitor = this.readJsonFile(this._patMonitor);
        let dataDispositivo = this.readJsonFile(this._patDispositivo);
        let newData;
        
        for (let i = 0; i < dataComputadora.length; i++) {
            for (const key in dataComputadora[i]) {
                if (key == '_monitor'){
                    newData = dataMonitor.find(monitor => monitor._id == dataComputadora[i]._monitor);
                    dataComputadora[i]._monitor = newData;
                } else if (key == '_teclado'){
                    newData = dataDispositivo.find(dispositivo => dispositivo._id == dataComputadora[i]._teclado && dispositivo._tipo == 'teclado' );
                    dataComputadora[i]._teclado = newData;
                } else if (key == '_raton') {
                    // va el raton
                    newData = dataDispositivo.find(dispositivo => dispositivo._id == dataComputadora[i]._raton && dispositivo._tipo == 'raton' );
                    dataComputadora[i]._raton = newData;
                }
            }
        }
        console.log(dataComputadora);
    }

}