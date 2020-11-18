import React from 'react';
import {Route} from 'react-router-dom';
import Detail from '../pages/derail';
import Home from '../pages/home';


export default class index extends React.Component {
  render() {
  return(
    <>
      <Route exact path="/" component={Home}/>
      <Route exact path="/detail" component={Detail}/>
    </>
  )
}
}




