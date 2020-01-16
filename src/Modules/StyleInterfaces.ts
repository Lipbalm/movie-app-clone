export interface IStyleProperty {
  [key: string]: string;
}
export interface ICSSPesudo {
  [key: string]: IStyleProperty;
}
export interface IStyleFrame {
  basis: IStyleProperty;
  pesudo?: ICSSPesudo;
}
export interface IStyle {
  styleObj?: IStyleFrame;
}
