export { }

declare global {

    type globalLoadingType = "pending" | "idle"

    type globalErrorType = null | "Error occured";

    type GlobalDrinkType = {
        strDrink: string;
        strDrinkThumb: string;
        idDrink: string;
    }

    type GlobalMockedDrinksType = {
        drinks: GlobalDrinkType[]
    }

    type InitialStateProps = {
        data: GlobalDrinkType[];
        loading: globalLoadingType;
        error: globalErrorType;
    }

    type InitialDrinkDataType = {
        data: Record<string, string | null>;
        loading: globalLoadingType;
        error: globalErrorType;
    }

    type IngredientPromptDataType = {
        drinks: {
            strIngredient1: string;
        }[];
    }

    type SearchBarType = {
        searchDrinkData: { drinks: GlobalDrinkType[] } | undefined;
        loading: globalLoadingType;
        error: globalErrorType;
    }
}