// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni).

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

function deepCopy(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    const copy = {};
    for (const key in obj) {
        const value = obj[key];
        if (typeof value !== 'object') {
            copy[key] = value;
        } else {
            copy[key] = deepCopy(value)
        }
    }
    return copy;
}

const chefCopy = deepCopy(chef);