import { expect, test } from "vitest";
import lock from "../package-lock.json";
test("pins dependencies to CVE-fixed versions", () => {
  const fixed = { next: "15.5.24", tinypool: "2.1.2", postcss: "8.5.18", sharp: "0.35.4", "source-map-js": "1.2.2", vite: "7.3.7", zod: "4.6.6" };
  for (const [name, version] of Object.entries(fixed)) {
    const actual = lock.packages[name === "postcss" ? "node_modules/vite/node_modules/postcss" : `node_modules/${name}`]?.version;
    expect(actual, `${name} must be ${version}`).toBe(version);
  }
});
