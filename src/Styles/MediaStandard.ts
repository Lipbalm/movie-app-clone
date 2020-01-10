const minSize = {
  mobileS: "0px",
  mobileM: "481px",
  tablet: "768px",
  laptop: " 1025px",
  desktopS: "1281px",
  desktopM: "1681px",
  desktopL: "1919px"
};

const maxSize = {
  mobileS: "480px",
  mobileM: "767px",
  tablet: "1024px",
  laptop: "1280px"
};

export const device = {
  mobileS: `(min-width: ${minSize.mobileS}) and (max-width: ${maxSize.mobileS})`,
  mobileM: `(min-width: ${minSize.mobileM}) and (max-width: ${maxSize.mobileM})`,
  tablet: `(min-width: ${minSize.tablet}) and (max-width: ${maxSize.tablet}) and (orientation: landscape)`,
  laptop: `(min-width: ${minSize.laptop}) and (max-width: ${maxSize.laptop})`,
  desktop: `(min-width: ${minSize.desktopS})`
};

export const simpleDevice = {
  mobile: `(min-width: ${minSize.mobileM})`,
  tablet: `(min-width: ${minSize.tablet}) `,
  laptop: `(min-width: ${minSize.laptop}) `,
  desktopS: `(min-width: ${minSize.desktopS})`,
  desktopM: `(min-width: ${minSize.desktopM})`,
  desktopL: `(min-width: ${minSize.desktopL})`
};
