import Cookies from "js-cookie";

class Theme {
    isLight: boolean;
    constructor() {
        let theme: string | undefined = Cookies.get('theme');
        if (theme === undefined || !(theme == '0' || theme == '1')) {
            this.isLight = false;
        } else {
            this.isLight = Boolean(Number(theme))
        }
    }
    private set(theme: boolean) {
        Cookies.set('theme', String(theme));
        this.isLight = theme;
    }
    toggle() {
        this.set(!this.isLight)
    }
}

export const theme = new Theme();