import { DataDispositivos, Raton, Teclado } from "./entity/DispositivoEntrada.js";
import { DataMonitor, Monitor } from "./entity/Monitor.js";
import { Computadora, DataComputadora } from "./entity/Computadora.js";
import { DataOrden, Orden } from "./entity/Orden.js";

class RegistroDispositivo {
    constructor() {
        this._data = new DataDispositivos
    }

    registro(dispositivo){
        let newDispositivo = null;
        if (dispositivo.tipo == 'raton'){
            newDispositivo = new Raton(dispositivo);
        } else if (dispositivo.tipo == 'teclado'){
            newDispositivo = new Teclado(dispositivo);
        }
        this._data.save(newDispositivo);
        console.log(`Dispositivo ${newDispositivo._tipo} agregado`);
    }

    showData(){
        let data = this._data.getAll();
        console.log(data);
    }
}

class RegistroMonitor {
    constructor() {
        this._data = new DataMonitor;   
    }

    registro(monitor){
        let newMonitor = new Monitor(monitor);
        // console.log(newMonitor);
        this._data.save(newMonitor);
        console.log(`Monitor ${newMonitor._marca} agregado`);
    }

    showData(){
        let data = this._data.getAll();
        console.log(data);
    }
}

class RegistroComputadora {
    constructor() {
        this._data = new DataComputadora;
    }

    registro(computadora, monitor, teclado, raton){
        let newComputadora = new Computadora(computadora, monitor, teclado, raton);
        // console.log(newComputadora);
        this._data.save(newComputadora);
        
    }

    showData(){
        let data = this._data.getAll();
        console.log(data);
    }
}

class RegistoOrden {
    constructor() {
        this._data = new DataOrden;
    }

    registro(orden, computadora){
        let newOrden = new Orden(orden, computadora);
        this._data.save(newOrden);
        console.log(newOrden);
    }
    
    showData(){
        let data = this._data.getAll();
        console.log(data);
    }
}



let teclado = {
    id: 1,
    marca: 'dell',
    contador: 100,
    tipo: 'teclado'
}

let raton = {
    id: 1,
    marca: 'dell',
    contador: 100,
    tipo: 'raton'
}

let monitor = {
    id: 2,
    marca: 'dell',
    tamaño: '32 pulgadas',
    contador: 100
}

let computadora = {
    id: 1,
    nombre: 'dell',
    monitor: 1,
    teclado: 1,
    raton: 1,
    contador: 100
}

let orden = {
    id: 1,
    computadoras: 1,
    contador: 100
}

const dispositivo = new RegistroDispositivo();

const registroMonitor = new RegistroMonitor();

const registroComputadora = new RegistroComputadora();

const registroOrden = new RegistoOrden();


// -------------------------
// Dispositivo

// dispositivo.registro(teclado);
// dispositivo.showData();




// -------------------------
// Monitor

// registroMonitor.registro(monitor);
// registroMonitor.showData();



// -------------------------
// Computadora

// registroComputadora.registro(computadora,2,2,3)
// registroComputadora.showData();


// -------------------------
// Orden

// registroOrden.registro(orden, 2);
registroOrden.showData();