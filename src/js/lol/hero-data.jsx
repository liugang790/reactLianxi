import React from "react";
import "../../style/style.css";
let img = require("../../images/phone.jpg");
let picture = require("../../images/number.jpg");
const Data = React.createClass({
    render(){
        let data = (()=>{
            let id = this.props.params.id;
            switch (id){
                case "1" :return(
                       <div>
                            <div  className="header"><img className="picture" src={img} /></div>
                            <div className="content">
                                <select className="select">
                                  <option value="明星背景：刘德华">明星背景：刘德华</option>
                                  <option value="明星背景：郭富城">明星背景：郭富城</option>
                                  <option value="明星背景：黎明">明星背景：黎明</option>
                                  <option value="明星背景：张学友">明星背景：张学友</option>
                                </select>
                                <select className="select top">
                                  <option value="来电背景：Android">来电背景：Android</option>
                                  <option value="来电背景：Iphone">来电背景：Iphone</option>
                                </select>
                                <textarea  placeholder="自定义来电地址" className="textarea top"></textarea>
                                <div className="button">确定生成</div>
                            </div>
                       </div>
                    ); break;
                case "2" :return(
                      <div>
                            <div  className="header"><img className="picture" src={picture} /></div>
                            <div className="content">
                                <select className="select">
                                  <option value="明星背景：刘德华">明星背景：刘德华</option>
                                  <option value="明星背景：郭富城">明星背景：郭富城</option>
                                  <option value="明星背景：黎明">明星背景：黎明</option>
                                  <option value="明星背景：张学友">明星背景：张学友</option>
                                </select>
                                <select className="select top">
                                  <option value="来电背景：Android">来电背景：Android</option>
                                  <option value="来电背景：Iphone">来电背景：Iphone</option>
                                </select>
                                <textarea  placeholder="自定义来电地址" className="textarea top"></textarea>
                                <div className="button">确定生成</div>
                            </div>
                       </div>
                  ); break;
                case "3" :return(<div>流浪法师是法坦1</div>); break;
                case "4" :return(<div>流浪法师是法坦2</div>); break;
                case "5" :return(<div>流浪法师是法坦3</div>); break;
                case "6" :return(<div>流浪法师是法坦4</div>); break;
                case "7" :return(<div>流浪法师是法坦5</div>); break;

            }})();
        return(
            <div>
                {data}
            </div>
            )
    }
});
export default Data;
