import React from "react";
import {Link} from "react-router";
import "../../style/style.css";
let img = require("../../images/fonta.png");
let pic = require("../../images/a.png");
const List = React.createClass({
    render(){
        return(
            <div className="indexBg">
                <div className="indexPicture">
                   <span><Link to="/big"><img src={img} /></Link></span>
                   <span><Link to="/phone"><img src={pic} /></Link></span>
                </div>
                <div className="indexPicture">
                   <span><Link to="/pictureCreate"><img src="./src/images/b.png" /></Link></span>
                   <span><Link to="/pictureSelect"><img src="./src/images/c.png" /></Link></span>
                </div>             
                <div className="indexPicture">
                    <span><Link to="/count"><img src="./src/images/d.png" /></Link></span>
                </div>
                <div className="indexWait">
                    <p>更多生成器</p>
                    <p>敬请期待</p>
                </div>
            </div>
            )
    }
});
export default List;
