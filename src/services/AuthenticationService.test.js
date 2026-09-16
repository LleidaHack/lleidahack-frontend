import { confirmResetPassword } from "./AuthenticationService";

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    headers: { get: () => "application/json" },
    json: async () => ({ success: true }),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("sends reset credentials in the JSON body without query parameters", async () => {
  await confirmResetPassword("test-reset-token", "ChangedPassword123");
  const [url, options] = global.fetch.mock.calls[0];
  expect(url).toMatch(/\/v1\/auth\/confirm-reset-password$/);
  expect(url).not.toContain("test-reset-token");
  expect(url).not.toContain("ChangedPassword123");
  expect(options.method).toBe("POST");
  expect(options.headers["Content-Type"]).toBe("application/json");
  expect(JSON.parse(options.body)).toEqual({
    token: "test-reset-token",
    password: "ChangedPassword123",
  });
});

test("does not log reset credentials in debug mode", async () => {
  const previous = process.env.REACT_APP_DEBUG;
  process.env.REACT_APP_DEBUG = "true";
  const log = jest.spyOn(console, "log").mockImplementation(() => {});
  try {
    await confirmResetPassword("test-reset-token", "ChangedPassword123");
    const output = JSON.stringify(log.mock.calls);
    expect(output).not.toContain("test-reset-token");
    expect(output).not.toContain("ChangedPassword123");
  } finally {
    if (previous === undefined) delete process.env.REACT_APP_DEBUG;
    else process.env.REACT_APP_DEBUG = previous;
  }
});
