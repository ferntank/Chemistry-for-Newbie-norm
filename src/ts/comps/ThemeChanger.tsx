import React from "react";
import Theme from "../theme";

let loaded: boolean = false;
const theme = new Theme;

export default class ThemeChanger extends React.Component {
    props:any;s0:boolean;s1:boolean;d:'up'|'down'|'stay';
    constructor(props: any){super(props);this.s0=false;this.s1=false;this.d='stay'};
    refreshElement():React.ReactElement{React.useEffect(()=>{theme.refresh();loaded=true}, []);return<></>};
    debug():void{if(loaded){(document.getElementById('theme-changer') as HTMLElement).innerHTML=this.d}};
    render(): React.ReactElement {
        let touches: React.TouchList;
        let maxChange: number = 0;
        return <div
            id='theme-changer'
            onTouchStart={(event)=>{touches=event.targetTouches;}}
            onTouchMove={()=>{}}
            onTouchEnd={(event)=>{

                let ct: React.TouchList = event.changedTouches;
                for (let i=0; i<touches.length; i++) {
                    let cv: number = ct.identifiedTouch(touches[i].identifier).pageY;
                    if (Math.abs(cv) > Math.abs(maxChange)) {
                        maxChange = cv;
                    }
                };
                this.d = maxChange==0?'stay':maxChange<0?'up':'down';
                if (this.d != 'stay') {
                    theme.toggle();
                    animate(this.d);
                    this.d = 'stay';
                };
            }}

            onMouseEnter={()=>{this.s0=true}}
            onWheel={(event)=>{const y=event.deltaY;y==0?{}:this.d=y<0?'up':'down';this.s1=true}}
            onMouseLeave={()=>{if(this.s0==true&&this.s1==true){this.s0=false;this.s1=false;theme.toggle();animate(this.d)}this.d='stay'}}
        >
            <this.refreshElement/>
        </div>
    }
}

function animate(d: 'up'|'down'|'stay') {
    
};
