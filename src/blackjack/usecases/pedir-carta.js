/**
 * Pide una carta de la Baraja
 * @param {Array<String>} Ndeck Ejemplo - '2D', '3D', '4S'
 * @returns {String} Ejemplo - 2D (Two of Diamonds)
 */

export const pedirCarta = (Ndeck) => {

    if(!Ndeck) throw new Error('El Deck es obligatorio');

    if ( Ndeck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = Ndeck.pop();
    return carta;
}