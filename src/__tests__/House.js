import { House } from "app/views";
import { renderWithProviders } from "configs/utils";
import { server } from "configs/mocks/server";

describe("Single House", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders single house page without crashing", () => {
    renderWithProviders(<House />);
  });
});
