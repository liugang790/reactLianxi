import React from 'react';
import ReactDom from 'react-dom';
import {Link, Route, Router} from 'router';

class App extends React.Component {
    render(){
        return (
                <div>
                    <div>
                        <Link to="/">首页</Link>
                        <Link to="TV" query={{orderBy:'date'}}>节目</Link>
                    </div>
                    {this.props.children}
                </div>
            )
    }

}


class TV extends React.Component{
    constructor(props){
        super(props);

        console.log(this.props);
    let query = {this.props.location}
    console.log(query);
    }
    render(){
        return(
            <div>
                <div>节目列表</div>
                {this.props.children}
            </div>
            )
    }
}

class  Show extends React.Component {
    render(){
        return(
            <div>娱乐节目</div>
            )
    }
}

ReactDom.render((
    <Router path="/"  component={App}>
        <IndexRoute component={Home}/>
        <Router path="TV" component={TV}>
            <IndexRoute component={TVHome/}
            <Router path="Show/:id" component={Show} onEnter={handleEnter} onLeave={handleLeave} />
        </Router>
    </Router>

    ),document.getElementById('app'));