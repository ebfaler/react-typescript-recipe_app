export default interface AppProps {
    id: number;
    image: string;
    instructions: string;
    summary: string;
    extendedIngredients: string[];
    servings: number;
    preparationMinutes: number;
    title: string;
    vegan: boolean;
    vegetarian: boolean;
    veryHealthy: boolean;
    veryPopular: boolean;
}