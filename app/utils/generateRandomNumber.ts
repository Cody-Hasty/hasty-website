export default function generateRandomNumber(numberMin: number, numberMax: number): number {
  // Generate a random number between numberMin and numberMax (inclusive)
  return Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin
}