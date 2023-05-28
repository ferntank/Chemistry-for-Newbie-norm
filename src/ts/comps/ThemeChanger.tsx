import React from "react";
import Theme from "../theme";

export default class ThemeChanger extends React.Component<{}, {}, void> {
    private theme: Theme;
    private touch: React.Touch | undefined;
    private wheelY: number | undefined;
    constructor(props: {}) {
        super(props);
        this.theme = new Theme;
    };
    inner(props: {
        theme: Theme,
        oW: React.WheelEventHandler<HTMLDivElement>,
        oML: React.MouseEventHandler<HTMLDivElement>,
        oTS: React.TouchEventHandler<HTMLDivElement>,
        oTE: React.TouchEventHandler<HTMLDivElement>
    }): React.ReactElement<void, string> {
        React.useEffect(() => props.theme.refresh(), []);
        return <div id='theme-changer' onWheel={props.oW} onMouseLeave={props.oML} onTouchStart={props.oTS} onTouchEnd={props.oTE}>
            <h1 id='theme-name'></h1>
        </div>
    };
    render(): React.ReactElement<void, string> {
        return <this.inner
            theme={this.theme}
            oW={event => this.wheelY = event.deltaY}
            oML={() => this.mouseLeave()}
            oTS={event => {if (this.touch === undefined) this.touch = event.targetTouches[0]}}
            oTE={event => this.touchEnd(event.changedTouches)}
        />
    };
    private mouseLeave(y: number | void): void {
        if (y === undefined) {
            y = this.wheelY;
            this.wheelY = undefined;
        };
        if (y && this.theme.loaded) {
            y<0?this.animateDown():this.animateUp();
            this.theme.toggle();
        };
    };
    private touchEnd(changed: React.TouchList): void {
        if (this.touch) {
            let y: number | undefined;
            for (let i=0; i<changed.length; i++) {
                if (this.touch.identifier == changed[i].identifier) {
                    y = changed[i].pageY - this.touch.pageY;
                };
            };
            this.mouseLeave(y);
            this.touch = undefined;
        };
    };
    private animateUp(): void {
        // add animation
    };
    private animateDown(): void {
        // add animation
    };
}
