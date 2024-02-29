export { }

declare global {
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
        loading: "pending" | "idle";
        error: null | string;
    }

    type InitialDrinkDataType = {
        data: Record<string, string | null>;
        loading: "idle" | "pending",
        error: null | "Error occured",
    }

    type IngredientPromptDataType = {
        drinks: {
            strIngredient1: string;
        }[];
        }

    type SearchBarType = {
        searchDrinkData:  {drinks: GlobalDrinkType[]} ,
        loading: "idle" | "pending",
        error: null | "Error occured",
      }
    }