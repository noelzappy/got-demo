import { Config } from "app/config";
import { rest } from "msw";
import { books, characters, houses } from "./data";

export const handlers = [
  // Books API Handler
  rest.get(`${Config.API_URL}/books`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        books.map((book, index) => ({
          ...book,
          id: index + 1,
        }))
      ),
      ctx.delay(30)
    );
  }),

  rest.get(`${Config.API_URL}/books/:id`, (req, res, ctx) => {
    const { id } = req.params;

    if ((id && Number.isNaN(id)) || id < 1 || id > books.length)
      return res(ctx.status(404), ctx.delay(30));

    if (id) return res(ctx.status(200), ctx.json(books[id - 1]), ctx.delay(30));

    return res(ctx.status(404), ctx.delay(30));
  }),

  // Characters API Handler
  rest.get(`${Config.API_URL}/characters`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        characters.map((character, index) => ({
          ...character,
          id: index + 1,
        }))
      ),
      ctx.delay(30)
    );
  }),

  rest.get(`${Config.API_URL}/characters/:id`, (req, res, ctx) => {
    const { id } = req.params;

    if ((id && Number.isNaN(id)) || id < 1 || id > characters.length)
      return res(ctx.status(404), ctx.delay(30));

    if (id)
      return res(ctx.status(200), ctx.json(characters[id - 1]), ctx.delay(30));

    return res(ctx.status(404), ctx.delay(30));
  }),

  // Houses API Handler
  rest.get(`${Config.API_URL}/houses`, (req, res, ctx) => {
    const { id } = req.params;

    if ((id && Number.isNaN(id)) || id < 1 || id > books.length)
      return res(ctx.status(404), ctx.delay(30));

    if (id) return res(ctx.status(200), ctx.json(books[id - 1]), ctx.delay(30));

    return res(
      ctx.status(200),
      ctx.json(
        houses.map((house, index) => ({
          ...house,
          id: index + 1,
        }))
      ),
      ctx.delay(30)
    );
  }),

  rest.get(`${Config.API_URL}/houses/:id`, (req, res, ctx) => {
    const { id } = req.params;

    if ((id && Number.isNaN(id)) || id < 1 || id > houses.length)
      return res(ctx.status(404), ctx.delay(30));

    if (id)
      return res(ctx.status(200), ctx.json(houses[id - 1]), ctx.delay(30));

    return res(ctx.status(404), ctx.delay(30));
  }),
];
