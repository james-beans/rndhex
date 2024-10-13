// rndhex - main_test.ts
import { assertMatch } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { getRandomHexCode, printColoredSquare } from "./main.ts";

// Test for generating a random hex code
Deno.test("Random Hex Code Generation", () => {
  const hexCode = getRandomHexCode();

  // Check that the hex code matches the pattern for a valid hex color code
  const hexPattern = /^#[0-9a-fA-F]{6}$/;
  assertMatch(hexCode, hexPattern, `Generated hex code (${hexCode}) is not valid`);
});

// Mock the console output to test the square printing
Deno.test("Print Colored Square Format", () => {
  const hexCode = "#ffffff"; // Example hex code to test

  // Capture the console output
  const originalConsoleLog = console.log;
  let consoleOutput = "";
  console.log = (output: string) => {
    consoleOutput += output + "\n";
  };

  try {
    // Call the function to print the colored square
    printColoredSquare(hexCode);

    // Check that the output contains the square format
    const squarePattern = /###\n###\n###/;
    assertMatch(consoleOutput, squarePattern, "Square format not found in output");
  } finally {
    // Restore the original console.log
    console.log = originalConsoleLog;
  }
});
