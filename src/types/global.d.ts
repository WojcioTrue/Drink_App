export { }

declare global {
    type CategoryDrinkType = {
        strDrink: string;
        strDrinkThumb: string;
        idDrink: string;
    }

    type InitialStateProps = {
        data: CategoryDrinkType[];
        loading: "pending" | "idle";
        error: null | string;
    }
}