// Qual è il metodo migliore per clonare l’oggetto chef, e perché?

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

const newChef = {
    ...chef,
    restaurant: {
        ...chef.restaurant,
        address: {
            ...chef.restaurant.address
        }
    },
}

// Il metodo migliore per clonare l'oggetto chef è lo spread operator, perché permette di copiare tutte le proprietà, incluse le funzioni. Tuttavia, essendo una copia superficiale, per clonare correttamente anche gli oggetti annidati (restaurant e address), è necessario applicare lo spread operator a ogni livello dell'oggetto.