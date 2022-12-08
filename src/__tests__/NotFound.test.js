import { NotFound } from "app/views";
import { renderWithProviders } from "configs/utils";
import { server } from "configs/mocks/server";

describe("404 Page", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders 404 page without crashing", () => {
    renderWithProviders(<NotFound />);
  });

  // page contains a link to the home page
  it("renders a link to the home page", () => {
    const { getByText } = renderWithProviders(<NotFound />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    getByText(/Go Home/i);
  });
});
