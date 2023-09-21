import { rest } from 'msw';
// import the server created for the entire test suite
// this mock server includes commonMswHandlers
import { arr } from '../arr';
import { server } from '../../../mocks/server';

export const listHandlers = [
    rest.get("http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin", (req, res, ctx) => {
      const category = req.url.searchParams.get("i")
      console.log(category)

      return res(ctx.status(200), ctx.json([arr]));
    })
  ]

export const setupCoctailListHandlers = () => {
  server.use(...listHandlers);
};