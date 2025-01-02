
import { crearCartaHTML, pedirCarta, valorCarta } from "./index";

/**
 * 
 * @param {HTMLElement} elemento Html de los puntos
 * @param {HTMLElement} divCartasComputadora Html de los las imagenes de las cartas
 * @param {Number} puntosMinimos  Puntos que necesita la CPU para Ganar
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {


    if(!puntosMinimos) throw new Error('Los Puntos minimos son necesarios')
    if(!deck) throw new Error('El Deck es necesario');
    if(!puntosHTML) throw new Error('Argunto de los puntos del Html es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );
        

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

