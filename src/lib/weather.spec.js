import { describe, it, expect, vi } from "vitest";
import { getWeather } from "./weather";

describe("getWeather", () => {
  it("returns formatted weather data", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            name: "Edmonton",
            main: { temp: 10.4 },
            weather: [{ description: "clear sky", icon: "01d" }],
          }),
      })
    );

    const result = await getWeather("Edmonton", "test-key");

    expect(result).toEqual({
      city: "Edmonton",
      temperature: 10,
      description: "clear sky",
      icon: "01d",
    });
  });

  it("throws error when fetch fails", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    await expect(getWeather("Edmonton", "test-key")).rejects.toThrow(
      "Failed to fetch weather"
    );
  });
});