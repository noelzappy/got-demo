import { Home } from "app/views";
import { renderWithProviders } from "configs/utils";
import { server } from "configs/mocks/server";

describe("Home Page", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders home page without crashing", () => {
    renderWithProviders(<Home />);
  });

  // ensure page contains links to houses, characters and books pages
  it("renders links to houses, characters and books pages", () => {
    const { getByText } = renderWithProviders(<Home />);
    expect(getByText(/houses/i)).toBeInTheDocument();
    expect(getByText(/characters/i)).toBeInTheDocument();
    expect(getByText(/books/i)).toBeInTheDocument();
  });
});
