// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

//Durante l'esecuzione del codice, sono stati creati 9 oggetti in memoria: l'oggetto hamburger con i suoi due oggetti annidati (maker e restaurant), e altrettanti oggetti per secondBurger e thirdBurger, dato che structuredClone() esegue una copia profonda.