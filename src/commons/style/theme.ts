export interface StyleClosetTheme {
  colors: { [key in keyof typeof colors]: string };
  numbers: { [key in keyof typeof numbers]: string };
  breakpoints: { [key in keyof typeof breakpoints]: string };
  links: { [key in keyof typeof links]: string };
  store: { [key in keyof typeof store]: number };
}

const colors = {
  primary: '#CB6A7D',
  secondary: '#E3BC95',
  tertiary: '#A96224',
  quartiary: '#818C39',
  black: '#000',
  blackLow: '#515151',
  white: '#fff',
  red: '#ff0000'
};

const numbers = {
  whatsapp: '+5547992393892',
};

const links = {
  instagram: 'santaannaconfeitaria',
  maps: 'https://maps.app.goo.gl/r4PuyVD8KUAzQxmL7',
};

const store = {
  open: 8,
  close: 18,
};

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1280px',
};

const theme: StyleClosetTheme = {
  colors,
  numbers,
  breakpoints,
  links,
  store,
};

export { theme };
