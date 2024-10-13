// rndhex - main.ts
import { bold, rgb24 } from "https://deno.land/std@0.212.0/fmt/colors.ts";

// Function to generate a random hex color code
export function getRandomHexCode(): string {
  const randomInt = Math.floor(Math.random() * 0xffffff);
  return `#${randomInt.toString(16).padStart(6, '0')}`;
}

// Function to print a square of hashtags with the background color
export function printColoredSquare(hex: string) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  // Print a 3x3 square with the background color
  const square = `###\n###\n###`;
  console.log(rgb24(bold(square), { r, g, b }));
}

const hexCode = getRandomHexCode();
console.log(hexCode);  // Print the random hex code
printColoredSquare(hexCode);  // Print the square with the hex color
