import { Books } from "app/views";
import { renderWithProviders } from "configs/utils";
import { server } from "configs/mocks/server";

describe("All Books", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders all books without crashing", () => {
    renderWithProviders(<Books />);
  });
});
