import { rest } from "msw";
import { arr } from "../components/coctailListComponents/arr";

export const handlers = [
    rest.get("http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin", (req, res, ctx) => {
      return res(ctx.json([arr]));
    })
  ]