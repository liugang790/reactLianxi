import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, Link , IndexRoute , hashHistory ,Redirect } from 'react-router';
import 'antd/dist/antd.css';
import createPicture from "./lol/createPicture.jsx";
import Success from "./lol/success.jsx";
import Phone from "./lol/personphone.jsx";
import bigFont from "./lol/big.jsx";
import pictureCreate from "./lol/nineSuccess.jsx";
import pictureSelect from "./lol/nineQie.jsx";
import Data from "./lol/hero-data.jsx";
import List from "./lol/hero-list.jsx";
import Test from "./lol/test.jsx";
import Count from "./lol/count.jsx";
ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={createPicture} />
        <Route path="/count" component={Count}/>
        <Route path="/data/:id" component={Data} />
        <Route path="/success" component={Success} />
        <Route path="/phone" component={Phone} />
        <Route path="/big" component={bigFont} />
        <Route path="/test" component={Test} />
        <Route path="/pictureCreate" component={pictureCreate} />
        <Route path="/pictureSelect" component={pictureSelect} />
    </Router>
), document.getElementById("app"))


// <Route path="/" component={List} />
//         <Route path="/data/:id" component={Data} />
//         <Route path="/home" component={createPicture} />
//         <Route path="/success" component={Success} />
//         <Route path="/phone" component={Phone} />
//         <Route path="/big" component={bigFont} />
//         <Route path="/test" component={Test} />
//         <Route path="/pictureCreate" component={pictureCreate} />
//         <Route path="/pictureSelect" component={pictureSelect} />