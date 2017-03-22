import React from "react";
import "../../style/style.css";
import {Link} from "react-router";
import {Form, Input, Button, Select, message, Modal} from "antd";
const FormItem = Form.Item;
const Option = Select.Option;
let img = require("../../images/bigfont.jpg");
class  Bigmyfrom extends  React.Component{
     constructor(props){
       super(props)
       this.state = {
          selectTypeValue:"大字背景：微信绿框气泡",
          bigContent:'',
          ewmFont:'',
          visible:false
       }
     }


     handleSelectChange(type,value){
       let selectValue = `${value}`;
       console.log(selectValue);
       this.state[type] = selectValue;
       this.setState({});
     }

     handleContentChange(e){
      const bigContent = e.target.value;
      this.setState({bigContent:bigContent})
     }

     handleewmFontChange(e){
      const ewmFont = e.target.value;
      this.setState({ewmFont:ewmFont})
     }

     handleSubmit(e){
      e.preventDefault();
      console.log("提交表单:",this.props.form.getFieldsValue());
     }

     showModal(){
        this.setState({visible:true})
     }

     hideModal(){
        this.setState({visible:false})
     }

     success() {
             if(!this.state.bigContent  || !this.state.selectTypeValue){
                this.showModal();
             }else if(this.state.bigContent.length > 30){
                 message.warning("内容超出30个字！！",1.5)
             }else {
                message.success("操作成功!")
             } 
        }

    render(){
            // function setupWebViewJavascriptBridge(callback) {
            //   if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
            //   if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
            //   window.WVJBCallbacks = [callback];
            //   var WVJBIframe = document.createElement('iframe');
            //   WVJBIframe.style.display = 'none';
            //   WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
            //   document.documentElement.appendChild(WVJBIframe);
            //   setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
            // }
            //   window.do_pic_action.generate("/app/word/" + selectNo, '{"text":"' + text + '"}');

      const  {getFieldDecorator} = this.props.form;
        return(
              <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                <FormItem>
                    <div  className="header"><img className="picture" src={img} /></div>
                </FormItem>
                <FormItem>
                    <div className="content">
                    {getFieldDecorator('content')(
                        <Input type="textarea"  placeholder="输入内容，最多30个字" className="textarea top" onBlur = {this.handleContentChange.bind(this)} /> 
                    )}
                    </div>     
                </FormItem>  
                <FormItem>  
                    <div className="content">
                     {getFieldDecorator('ewmFont')(
                        <Input type="textarea"  placeholder="二维码内容，如果不需要添加二维码可以不填写" className="textarea top"  onBlur= {this.handleewmFontChange.bind(this)} />
                     )}
                    </div>
                </FormItem>
                    <div className="content">    
                        <p className="notice"><span className="fontcolor">*</span>如果填写链接则必须包含<span className="fontcolor">http://</span>前缀，例如<span className="fontcolor">http://www.zhikr.cn</span></p>
                    </div>
                <FormItem required>
                    <div className="content">
                    {getFieldDecorator('fontBg',{
                        initialValue:this.state.selectTypeValue
                    })(
                      <Select  notFoundContent="请选择类型"  dropdownClassName="dropdownClassName" onChange={this.handleSelectChange.bind(this,'selectTypeValue')}>
                        <Option value="大字背景：微信绿框气泡">大字背景：微信绿框气泡</Option>
                        <Option value="大字背景：蓝色气泡">大字背景：蓝色气泡</Option>
                      </Select>
                    )}
                    </div>
                </FormItem>   
                <FormItem >
                    <div className="button">
                        <Button type="primary" htmlType="submit" large="size" onClick={this.success.bind(this)}>确定</Button>
                    </div>
                </FormItem>
                <Modal title="登录" visible={this.state.visible} onOk={this.hideModal.bind(this)} onCancel={this.hideModal.bind(this)}>
                    请填写正确的信息！！！
                </Modal>    
              </Form>
            )
    }
}
Bigmyfrom = Form.create()(Bigmyfrom)

export default Bigmyfrom;
