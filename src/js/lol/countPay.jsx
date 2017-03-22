import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, Link ,Message, IndexRoute , hashHistory ,Redirect } from 'react-router';
import 'antd/dist/antd.css';
import "../../style/style.css";
class  countPay extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            countMoney:'',
            color:true
        }
    }


    componentDidMount(){
        let _this = this;
        $(".num").on("click",(e,a)=>{
            let target = e.currentTarget;
            let num = $(target).text();
            let {countMoney} = _this.state;
                    color:false
                })
            }
            _this.setState({},()=>{
            countMoney += num;
            if(!countMoney == "" || !countMoney == null) {
                this.setState({
                this.props.add && this.props.add.call(null,countMoney);//父级用传add方法的话，就执行add方法，并且把countMoney传回去
            });
        })
    }


    render(){
        console.log(this.state.countMoney);
        console.log(this.state.color);
        return(
                <div className="table">
                         <table cellSpacing="0" cellPadding="0" border="0">
                            <tbody ref = "tbody">
                                <tr>
                                    <td className="num" ref = "num1">1</td>
                                    <td className="num">2</td>
                                    <td className="num">3</td>
                                    <td rowSpan="1" onClick = {()=>{this.props.delete && this.props.delete()}}>删除</td>
                                </tr>
                                <tr>
                                    <td className="num">4</td>
                                    <td className="num">5</td>
                                    <td className="num">6</td>
                                    <td onClick={this.props.pay} className={this.state.color?"payCount":"payCountChange"} rowSpan="3">付款</td>
                                </tr>
                                <tr>
                                    <td className="num">7</td>
                                    <td className="num">8</td>
                                    <td className="num">9</td>
                                    
                                </tr>
                                <tr>
                                    <td className="num">00</td>
                                    <td className="num">0</td>
                                    <td className="num">.</td>
                                </tr>
                            </tbody>
                         </table>
                </div>
                )
    }
}

export default countPay;