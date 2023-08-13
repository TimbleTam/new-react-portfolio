import React from "react";

import "./Views.css";
function SplitView({sideleft, sideright}) {



    return (
        <div className="SplitView">

            <div className="SplitView1">{sideleft}</div>
            <div className="SplitView2">{ sideright}</div>
        </div>
    );
}

export default SplitView;
