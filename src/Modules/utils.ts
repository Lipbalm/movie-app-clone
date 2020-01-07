import { genreIds } from "./apis";

const isMatch = (input: string, pattern: string) => {
  let regex = new RegExp(pattern, "g");
  return regex.test(input);
};

const changeGenreIdToName = (inputIds: number[]) => {
  const result = inputIds.join("/");
  inputIds.forEach(v => result.replace(v.toString(), `${genreIds[v]}`));
  return result;
};

export { isMatch, changeGenreIdToName };
