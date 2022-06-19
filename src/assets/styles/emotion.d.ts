import '@emotion/react';

interface FgProps {
    primary: string,
    danger: string,
    red: string,
    new: string,
    complete: string,
    onGoing: string,
    etc: string,
    black: string,
    gray: string,
    translucent: string,
    active: string,
};

interface BgProps {
    danger: string,
    complete: string,
    onGoing: string,
    etc: string,
};


declare module '@emotion/react' {
    export interface Theme {
        fg: FgProps;
        bg: BgProps;
    }
}