import React from "react";
import { Select, Form, Modal, message, Button, Input} from "antd";
import "../../style/style.css";
const  Option = Select.Option;
const FormItem = Form.Item;
let img = require("../../images/phone.jpg");
let picture = require("../../images/number.jpg");
class Myfrom  extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            selectTypeValue:"来电背景：Android",
            selectBackValue:"明星背景：刘德华",
            inputTextarea:''
        }
    }

     //select选择
     handleSelectChange(type,value) {
         let selectValue = `selected ${value}`;
         console.log(selectValue);
         this.state[type] = selectValue;
         this.setState({});
    }
    handlePasswordBlur(e) {
        const inputTextarea = e.target.value;
        this.setState({inputTextarea:inputTextarea}) 
    }
    //提交表单
    handleSubmit(e)  {
        e.preventDefault();
        console.log("提交的表单:",this.props.form.getFieldsValue());
        //this.props.form.resetFields()
    }

  //显示弹框
    showModal() {
        //this.props.form.setFieldsValue = {
        //    visible:true
        //}
        this.setState({visible:true});
    }

  //隐藏弹框
   hideModal() {
        //this.props.form.setFieldsValue ={
        //    visible:false
        //}
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
            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                <FormItem required>
                    <div  className="header"><img className="picture" src={img} /></div>
                </FormItem>
                <FormItem required>
                    <div className="content">
                        {getFieldDecorator('people',{
                            initialValue:this.state.selectBackValue
                        })(
                            <Select   size="large" dropdownClassName="dropdownClassName"  onChange={this.handleSelectChange.bind(this,"selectBackValue")}>
                                <Option value="明星背景：刘德华">明星背景：刘德华</Option>
                                <Option value="明星背景：郭富城">明星背景：郭富城</Option>
                                <Option value="明星背景：黎明">明星背景：黎明</Option>
                                <Option value="明星背景：张学友">明星背景：张学友</Option>
                            </Select>
                            )}
                     </div>   
                </FormItem>  
                <FormItem required>
                    <div className="content">   
                    {getFieldDecorator('phone',{
                        initialValue:this.state.selectTypeValue
                    })(
                        <Select  notFoundContent="请选择类型" dropdownClassName="dropdownClassName"  onChange={this.handleSelectChange.bind(this,"selectTypeValue")}>
                            <Option value="来电背景：Android">来电背景：Android</Option>
                            <Option value="来电背景：Iphone">来电背景：Iphone</Option>
                        </Select>
                        )} 
                    </div>
                 </FormItem>   
                 <FormItem id="control-textarea" required>
                    <div className="textarea">
                        {getFieldDecorator('content')(
                            <Input type="textarea"  id="control-textarea"  rows="3"  placeholder="自定义来电地址" className="textarea top"  onBlur={this.handlePasswordBlur.bind(this)} />
                            )}
                    </div>
                </FormItem>   
                <FormItem>
                    <div className="button">
                        <Button type="primary" htmlType="submit" onClick={this.success.bind(this)} size="large">确定</Button>
                    </div>
                </FormItem>
                <Modal title="登录" visible={this.state.visible} onOk={this.hideModal.bind(this)} onCancel={this.hideModal.bind(this)}>
                    请填写正确的信息！！！
                </Modal>
           </Form>
            )
        }
    }
Myfrom = Form.create()(Myfrom)
export default Myfrom