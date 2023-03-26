import React from "react";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";
function HomeComponent () {
    return(
        <div>
            <h4 className={"fw-bold"}>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </div>
    )
}
export default HomeComponent