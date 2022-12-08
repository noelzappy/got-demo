import { Book } from "app/views";
import { renderWithProviders } from "configs/utils";
import { server } from "configs/mocks/server";

describe("Single Book", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders single book page without crashing", () => {
    renderWithProviders(<Book />);
  });
});
