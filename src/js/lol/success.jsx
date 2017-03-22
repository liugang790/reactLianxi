import React from "react";
import {Link} from "react-router";
import "../../style/style.css";
let img = require("../../images/choose.png");
const List = React.createClass({
    render(){
        return(
            <div className="successChoose">
                <div className="successHeader">
                   <span><img src={img} /></span>
                   <span><a>已经生成成功</a><a>最佳画质</a></span>
                </div>
                <div><img src=""/></div>
                <div className="successBtn">传微信</div>
                <div className="successBtna"><Link to="/home">继续生成</Link></div>
            </div>
            )
    }
});
export default List;
