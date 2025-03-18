// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

// Per clonare l'oggetto chef, il metodo migliore è l'operatore spread {...chef}, perchè mantiene anche la funzione.
// Per clonare l'oggetto restaurant invece, structuredClone(restaurant) è il metodo migliore, in quanto esegue una copia profonda, duplicando sia gli oggetti annidati che quelli complessi, come  new Date().