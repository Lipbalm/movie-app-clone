import { genreIds } from "./apis";

const isMatch = (input: string, pattern: string) => {
  let regex = new RegExp(pattern, "g");
  return regex.test(input);
};

const changeGenreIdToName = (inputIds: number[]) =>
  inputIds.map(v => genreIds[v]).join("/");

export { isMatch, changeGenreIdToName };
