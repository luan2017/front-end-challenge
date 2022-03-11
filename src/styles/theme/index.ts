type ColorsTheme = {
    primary: string;
    secondary: string;
}

export type Maintheme = {
    colors: ColorsTheme;
}

const theme: Maintheme = {
    colors: {
        primary: '#ED6926',
        secondary: '#d5500c'
    }
}


export { theme as default };