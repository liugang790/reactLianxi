import React from "react";
import {Link} from "react-router";
import {Form, Input, message, Modal, Button} from "antd";
import Colorselect from "./colorSelect.jsx";
const FormItem = Form.Item;
import "../../style/style.css";
let img = require("../../images/number.jpg");
let source = JSON.parse(require("../../data.json"));
class nineMyForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible:false,
            nineContent:'',
            color:'',
            colors:''
        }
    }

    handleSubmit(e){
        e.preventDefault;
        console.log("提交表单:",this.props.form.getFieldsValue());
        console.log(this.state.color);
        console.log(this.state.colors);

        // this.props.form.resetFields()
    }

    handleContentBlur(e){
        const nineContent = e.target.value;
        this.setState({nineContent:nineContent})
    }

    selectCallBack(color){
        this.setState({color:color});
        console.log(color);
    }

    selectCallBacka(colors){
        this.setState({colors:colors});
        console.log(colors);
    }


    //显示弹框
    showModal() {
        this.setState({visible:true});
    }

  //隐藏弹框
   hideModal() {
       this.setState({visible:false});
    }

    success() {
             if(!this.state.inputTextarea || !this.state.selectTypeValue || !this.state.selectBackValue){
                this.showModal();
             }else {
                message.success("操作成功!")
             } 
        }
    render(){

        const  {getFieldDecorator} = this.props.form;

        return(
            <Form  horizontal onSubmit={this.handleSubmit.bind(this)}>
                <FormItem required>
                    <div  className="header"><img className="picture" src={img} /></div>
                </FormItem>
                <FormItem required>
                    <div className="content">
                        {getFieldDecorator('content')(
                        <Input type="textarea"  placeholder="输入内容，最多九个字" onBlur = {this.handleContentBlur.bind(this)} />
                        )}
                    </div>
                </FormItem>   
                <FormItem required> 
                    <div className="content">
                        {getFieldDecorator('bgColor')(
                            <div className="colorsBg">
                                <p>背景颜色:</p>
                                <Colorselect  source={source}  callback = {this.selectCallBack.bind(this)} />
                            </div>
                            )}  
                    </div>
                </FormItem>        
                <FormItem required>
                    <div className="content">
                        <p>字体颜色:</p>
                        {getFieldDecorator('fontColor')(
                            <div className="selectColor">
                                <Colorselect  source={source}  callback = {this.selectCallBacka.bind(this)} />
                            </div>
                            )}
                    </div>
                 </FormItem>
                 <FormItem>   
                     <div className="button">
                        <Button type="primary" htmlType="submit" onClick={this.success.bind(this)} size="large">确定</Button>
                     </div>
                 </FormItem>   
             </Form>     
            )
    }
}

nineMyForm = Form.create()(nineMyForm)

export default nineMyForm;
