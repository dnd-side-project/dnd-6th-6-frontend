// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    blue: {
      lighter?: string;
      normal: string;
      bold: string;
    };
    green: {
      lighter?: string;
      normal: string;
      bold?: string;
    };
  }
}
