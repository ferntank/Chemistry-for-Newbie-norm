// WORKS PERFECTLY // DO NOT TOUCH //

import color from "./colors";

export default class Theme {
    isLight: boolean;
    constructor() {
        let theme: string | undefined;
        let k = document.cookie.split(";");
        for (let i=0; i<k.length; i++) {
            let c = k[i];
            while(c.charAt(0)==" "){c=c.substring(1)}
            if (c.indexOf("theme=")==0) {
                theme = c.substring(6, c.length);
                break
            }
        }
        this.isLight = theme!='1' ? false : true;
    };
    refresh(): void {
        const date = new Date();
        date.setTime(date.getTime()+0x757b12c00);
        document.cookie = "theme="+(this.isLight?'1':'0')+";expires="+date.toUTCString()+";path=/;SameSite=Lax";
        color(this.isLight?0:1);
    };
    toggle(): void {
        this.isLight = !this.isLight;
        this.refresh();
    };
}
