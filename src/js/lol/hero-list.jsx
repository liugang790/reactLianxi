import {Link} from 'react-router'
import React from "react";
const List = React.createClass({
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="home">趣图生成器</Link></li>
                    <li><Link to="success">生成成功</Link></li>
                    <li><Link to="/phone">明星来电</Link></li>
                    <li><Link to="/big">大字生成器</Link></li>
                    <li><Link to="/data/1">九宫格图片生成器</Link></li>
                    <li><Link to="/data/2">九宫格切图器</Link></li>
                    <li><Link to="pictureCreate">九宫格图片生成器</Link></li>
                    <li><Link to="pictureSelect">九宫格切图器</Link></li>
                    <li><Link to="test">Test</Link></li>
                </ul>
            </div>
            )
    }
});
export default List;
