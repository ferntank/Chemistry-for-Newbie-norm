
const colors = {
    bg:             ['#eeeeee', '#212121'],
    mainHeader:     ['#000000', '#ffffff']
}

export default function color(n: number): void {
    (document.getElementById('root') as HTMLElement).style.backgroundColor = colors.bg[n];
    (document.getElementById('main-header') as HTMLElement).style.color = colors.mainHeader[n];
}
