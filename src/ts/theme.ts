// WORKS PERFECTLY // DO NOT TOUCH //
import Colors from "./colors";
import { Vibration } from "react-native";
export default class Theme {
    loaded: boolean;
    private colors: Colors;
    private isLight: boolean;
    constructor() {
        this.colors = new Colors;
        this.loaded = false;
        let theme: string | undefined;
        let k: Array<string> = document.cookie.split(";");
        for (let i=0; i<k.length; i++) {
            let c: string = k[i];
            while(c.charAt(0)==" "){c=c.substring(1)}
            if (c.indexOf("theme=")==0) {
                theme = c.substring(6, c.length);
                break
            }
        }
        this.isLight = theme!='1'?false:true;
    };
    refresh(): void {
        const date = new Date();
        date.setTime(date.getTime()+0x757b12c00);
        document.cookie = "theme="+(this.isLight?'1':'0')+";expires="+date.toUTCString()+";path=/;SameSite=Lax";
        this.colors.apply(this.isLight?0:1);
        this.loaded = true;
        Vibration.vibrate();
    };
    toggle(): void {
        this.isLight = !this.isLight;
        this.refresh();
    };
}
