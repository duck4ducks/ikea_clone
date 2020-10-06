import { getData } from './getData.js';

// Test data for cartList
const cartList = [
    {
        id: 'idd005',
        count: 1
    },
    {
        id: 'idd056',
        count: 2
    },
    {
        id: 'idd088',
        count: 3
    }
];

export const loadData = () => {

    if (location.hash) {
        getData.item(location.hash.substring(1), (data) => console.log(data));
    }

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));
    }

};