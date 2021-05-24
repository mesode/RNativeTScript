import { number } from "joi"

interface Fruit {
    id: number;
    name: string;
    price: number;
}

const Fruits: Fruit[] = [
    {
        id: 1,
        name: "Mango",
        price: 10,
    },
    {
        id: 2,
        name: "Orange",
        price: 20,
    },
    {
        id: 3,
        name: "Apple",
        price: 30,
    },
    {
        id: 4,
        name: "Pineapple",
        price: 7,
    },
]
export { Fruit, Fruits };