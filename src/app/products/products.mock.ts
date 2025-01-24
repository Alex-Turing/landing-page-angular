export const productsList:Product[] = [
    {id: 1, name: 'chlorine', price: 10, description: "Chlorine is used in household cleaners and disinfectants"},
    {id: 2, name: 'Detergent', price: 15, description: "Detergent can be defined as a surfactant or a mixture of surfactants with cleansing properties when in dilute solutions."},
    {id: 3, name: 'Softener', price: 25},
    {id: 4, name: 'Glass cleaner', price: 7, description: "Glass cleaner is a liquid product used to clean glass surfaces like windows, mirrors, and glass tables"},
    {id: 5, name: 'Baking soda', price: 5, description: "It is a salt composed of a sodium cation (Na+) and a bicarbonate anion (HCO3−). Sodium bicarbonate is a white solid that is crystalline but often appears as a fine powder."}
];

export interface Product {
    id: number | string;
    name: string;
    price: number;
    description?: string;
}