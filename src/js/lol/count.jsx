import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, Link , IndexRoute , hashHistory ,Redirect ,Table, Icon} from 'react-router';
import 'antd/dist/antd.css';
import "../../style/style.css";
import CountPayt from "./countPay.jsx";
class  CountHeader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            countMoney:'',
            color:true

        }
    }


    handleClick(){
        this.setState({
            color:false,
            countMoney:countMoney
        })
    }

    componentDidMount(){
        var text = document.getElementById("money").innerHTML;
        console.log(text);
    }
    handleAdd(val){
        let {countMoney} = this.state;//相当于 countMoney = this.state.countMoney;  变量赋值
        countMoney += val; // countMoney = countMoney+val;
        this.setState({countMoney:countMoney});
    }
    handleDelete(){
        let {countMoney} = this.state; 
        let newCount = countMoney.slice(0,-1);
        this.setState({countMoney:newCount});
    }
    pay(){
        let{countMoney} = this.state;
    }
    render(){
        
        return(
                <div className="headerCount">
                    <div className="headerCountBg">
                        <div className="headerImg"><img src="./src/images/fontb.png" /></div>
                        <div className="computer">鸿星电脑</div>
                        <div className="shopName">泉水店</div>
                        <div className="inputType">
                            <div>金额</div>
                            <div><span>￥</span><span id="money" >{this.state.countMoney}</span></div>
                        </div>
                        <div className="notice">米花金服在线支付</div>
                    </div> 
                    <CountPayt delete = {this.handleDelete.bind(this)} add = {this.handleAdd.bind(this)} pay = {this.pay.bind(this)} />
                </div>
            )
    }
}
export default CountHeader;
