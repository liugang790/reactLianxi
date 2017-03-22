import React from 'react';
import Reflux from 'reflux';
// let Test = React.createClass({
//     getInitialState:function(){
//         return {
//             opacity:1.0
//         };
//     },
//     componentDidMount:function(){
//         // this.timer = setInterval(function(){
//         //     var newopacity = this.state.opacity;
//         //     newopacity -= .05;
//         //     if(newopacity < 0.1){
//         //         newopacity = 1.0;
//         //     }
//         //     this.setState({
//         //         opacity:newopacity
//         //     });
//         // }.bind(this),100);
//         // 
//     },

//     render:function(){
//         return (
//               <div style={{opacity:this.state.opacity}}>
//                   Hello {this.props.name}
//               </div>
//             )
//     }
//     // 
//     ////AJAX请求。。。
//     // getInitialState:function(){
//     //     return {
//     //         username: '',
//     //         lastGistUrl:''
//     //     };
//     // },
//     // componentDidMount:function(){
//     //     $.get(this.props.source,function(result){
//     //         var lastGistUrl = result[0];
//     //         if(this.isMounted()){
//     //             this.setState({
//     //                 username:lastGist.owner.login,
//     //                 lastGistUrl:lastGist.html_url
//     //             });
//     //         }
//     //     }.bind(this));
//     // },

//     // render:function(){
//     //     return(
//     //          <div>
//     //              {this.state.username} last gist is 
//     //              <a herf={this.state.lastGistUrl}>here</a>
//     //          </div>
//     //         );
//     // }
// });
// export default Test;

var TodoActions = Reflux.creatActions([
        'addItem'
    ]);

var TodoStore = Reflux.creatStore({
    items:[1,2],
    listenables:[TodoActions],
    onAddItem:function (model) {
        $.post('/server/add',{data:model},function(data){
            this.items.unshift(data);
            this.trigger(this.items);
        });
    }
});


var TodoComponent = React.createClass({
    mixins:[Reflux.listenTo(TodoStore,'onStatusChange')],
    getInitialState:function(){
        return {list:[]};
    },
    onStatusChange(){
        this.setState({
            list:TodoStore.items
        });
    },
    render:function(){
        return(
             <div>
                  {
                    this.state.list.map(function(item){
                        return <p>item</p>
                    })
                  }
             </div>
            )
    }
})
