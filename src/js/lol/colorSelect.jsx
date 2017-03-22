import React from 'react';
import "../../style/style.css";

class  colorSelect extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            index:-1
        }
    }
    componentDidMount(){
        console.log(this.props.source.listData);
    }

    handleClick(key,index){
        this.props.callback&&this.props.callback(key);
        this.setState({index});
    }

    render(){
        return (
                <div className="selectColor">
                    {
                     this.props.source.listData.map((item,i) => {
                            return (
                                <span className={this.state.index === i ? "border":""} onClick = {this.handleClick.bind(this,item.color,i)}   key={i}></span>
                                )
                        })
                    }
                </div>
            )
    }
}

export default colorSelect;