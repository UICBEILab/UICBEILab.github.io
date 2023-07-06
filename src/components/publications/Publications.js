import React from "react";
import PaperList from "./PaperList";
import "./Publications.css";
import FadeInSection from "../FadeInSection";

class Publications extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }
    render() {
        return (
            <div id="publications">
                <FadeInSection>
                    <div className="section-header ">
                        <span className="section-title">Publications</span>
                    </div>
                    <PaperList></PaperList>
                </FadeInSection>
            </div>
        );
    }
}

export default Publications;
