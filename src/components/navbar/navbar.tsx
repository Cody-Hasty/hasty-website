import * as React from "react";
import { Link } from 'react-router-dom';
import powerPic from '../../icons/system-shutdown-panel.svg'


interface NavbarStateTypes {
    time: Date
}

type NavbarPropTypes = History;

class Navbar extends React.Component<NavbarPropTypes, NavbarStateTypes> {
    abbr: Record<number, string>;
    interval: NodeJS.Timeout;
    
    constructor(props: NavbarPropTypes) {
        super(props);
        this.state = { time: new Date() };
        this.tick = this.tick.bind(this);
        this.abbr = {
            0: "Jan",
            1: "Feb",
            2: "Mar",
            3: "Apr",
            4: "May",
            5: "Jun",
            6: "Jul",
            7: "Aug",
            8: "Sep",
            9: "Oct",
            10: "Nov",
            11: "Dec"
        }
        this.interval = setInterval(this.tick, 1000);
    }

    tick() {
        this.setState({ time : new Date() });
    }

    parseDate() {
        const t = this.state.time;
        let h = t.getHours();
        if (h === 0) {h = 12}
        const m = t.getMinutes();
        let parsed = this.abbr[t.getMonth()] + " " + t.getDate() + " " 
            + (h > 12 ? h - 12 : h) + ":" + (m < 10 ? "0" + m : m)
            + (h > 11 ? " PM" : " AM");
        return parsed;
    }

    render() {
        return (
            <div id="navbar">
                <div className="left">Places</div>
                <div className="middle">{this.parseDate()}</div>
                <Link to="/locked" className="right"><img src={powerPic} alt="Power"/></Link>
            </div>
        )
    }
}

export default Navbar;