/**
 * Obtiene el valor de la carta
 * @param {String} Ncarta Ejemplo - 4D (four of Diamonds)
 * @returns {Number} Ejemplo - 7 o 9
 */


export const valorCarta = ( Ncarta ) => {

    if(!Ncarta) throw new Error('Es Obligatorio saber la carta eliminada');

    const valor = Ncarta.substring(0, Ncarta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}