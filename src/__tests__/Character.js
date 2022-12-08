import { Character } from "app/views";
import { renderWithProviders } from "configs/utils";
import { server } from "configs/mocks/server";

describe("Single Character", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders single character page without crashing", () => {
    renderWithProviders(<Character />);
  });
});
