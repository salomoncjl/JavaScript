const boleto = 'vip';
// let codigoDeAcesso;

// if(boleto === 'vip'){
//     codigoDeAcesso = 'VIP-123-456'
// } else {
//     codigoDeAcesso = 'REGULAR-456-789'
// }

const codigoDeAcesso = (boleto === 'vip') ? 'VIP-123-456' :'REGULAR-456-789';

(boleto === 'vip') ? console.log('tu boleto es tipo VIP') : console.log('Tu boleto no es VIP');