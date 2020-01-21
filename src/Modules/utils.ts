import { genreIds } from "./apis";
import { ICSSPesudo, IStyleProperty, IStyleFrame } from "./StyleInterfaces";
export const isMatch = (input: string, pattern: string) => {
  let regex = new RegExp(pattern, "g");
  return regex.test(input);
};

export const changeGenreIdToName = (inputIds: number[]) =>
  inputIds.map(v => genreIds[v]).join("/");

export const combineStyle = (
  target: IStyleFrame,
  source?: IStyleFrame,
  testId?: string
) => {
  const convertCSS = (obj: Object) => {
    return Object.entries(obj).reduce((a, c) => {
      return (a += `  ${c[0]}: ${c[1]};\n`);
    }, "");
  };

  const convertPesudoClass = (key: string, value: IStyleProperty) => {
    return `${key} {\n${convertCSS(value)}} \n`;
  };

  const combinePesudo = (target: ICSSPesudo, source: ICSSPesudo) => {
    let remainder = Object.entries(source);
    const conversion = Object.entries(target).reduce((a, c) => {
      const key = c[0];
      const value = c[1];

      if (source[key] === undefined) {
        return (a += convertPesudoClass(key, value));
      } else {
        remainder = remainder.filter(v => v[0] !== key);
        const mixedStyle = Object.assign(value, source[key]);
        return (a += convertPesudoClass(key, mixedStyle));
      }
    }, "");

    const addedPesudo = remainder.reduce((a, c) => {
      return (a += convertPesudoClass(c[0], c[1]));
    }, "");

    return `${conversion}${addedPesudo}`;
  };
  const targetBasis: IStyleProperty = cloneObject(target.basis);

  const replacBasis: IStyleFrame =
    source === undefined ? { basis: {}, pesudo: {} } : cloneObject(source);

  const orginPesudo: ICSSPesudo =
    target.pesudo === undefined ? {} : cloneObject(target.pesudo);

  const replacePesudo: ICSSPesudo =
    replacBasis.pesudo === undefined ? {} : cloneObject(replacBasis.pesudo);

  const basis = convertCSS(Object.assign(targetBasis, replacBasis.basis));
  const pesudo = combinePesudo(orginPesudo, replacePesudo);

  return `${basis}${pesudo}`;
};

export const cloneObject = (obj: Object) => {
  return JSON.parse(JSON.stringify(obj));
};
