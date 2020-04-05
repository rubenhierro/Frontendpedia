const button = document.getElementById('gift');
gifts = [
    'Macbook Pro 16 pulgadas',
    'Iphone 15 Max',
    'Viaje a Marbella',
    'BMW Serie 2 Gran Coupé',
    'Apple Watch serie 5',
    'Curso de FrontEnd para Dummies'
];
const getGift = (gifts) => {
    max = gifts.length;
    randomNumber = Math.floor(Math.random() * Math.floor(max));
    return gifts[randomNumber];
}
const openGift = () => alert(`Enhorabuena, te acaba de tocar un ${getGift(gifts)}`);

button.addEventListener('click', openGift);