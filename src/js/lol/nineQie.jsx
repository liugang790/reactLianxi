import React from "react";
import {Link} from "react-router";
import "../../style/style.css";
let img = require("../../images/number.jpg");
const List = React.createClass({
    render(){
        return(
            <div>
                <div  className="header"><img className="picture" src={img} /></div>
                <div className="content">
                    <div></div>
                    <div className="button"><Link to="/success">确定生成</Link></div>
                </div>
           </div>
            )
    }
});
export default List;
