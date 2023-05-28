export default class Colors {
    private colors: {
        background: Array<string>
        text: Array<string>
    }
    constructor() {
        this.colors = {
            background:     ['#eeeeee', '#212121'],
            text:           ['#000000', '#ffffff']
        }
    }
    apply(n: 0 | 1): void {
        (document.getElementsByTagName('body')[0] as HTMLElement).style.backgroundColor = this.colors.background[n];
        (document.getElementById('root') as HTMLElement).style.backgroundColor = this.colors.background[n];
        (document.getElementById('main-header') as HTMLElement).style.color = this.colors.text[n];
    }
}
