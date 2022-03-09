import {jugador} from './jugador.js';
import {bola} from './pelota.js';

const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d'); //ctx == contexto
const body = document.querySelector('body');
const container = document.querySelector('.container');
canvas.width = 800; 
canvas.height = 500;
canvas.style.border = '8px solid white';

body.style.display = 'flex';
body.style.justifyContent='center';
body.style.alignContent='center';
body.style.backgroundColor='gray';

container.style.backgroundColor = 'black';

// deltatime
const perfectFrameTime= 1000/60;
let deltaTime=0;
let lastTimestamp =0;
const start=()=>{
    requestAnimationFrame(animate);
}

const animate=(timestamp)=>{
    requestAnimationFrame(animate);
    deltaTime= (timestamp-lastTimestamp)/perfectFrameTime;
    lastTimestamp=timestamp;


    console.log(deltaTime);


    canvas.width = 800; 
    canvas.height = 500;

    jugador.dibujar();
    jugador.update();
    jugador.mover(deltaTime);


    bola.dibujar();
    bola.mover(deltaTime);
    bola.colisiones();
    
    bola.renderizaMarcador();
}


start();