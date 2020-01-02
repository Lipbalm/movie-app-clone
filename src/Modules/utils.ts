function isMatch(input: string, pattern: string): boolean {
  let regex = new RegExp(pattern, "g");
  return regex.test(input);
}
export { isMatch };
