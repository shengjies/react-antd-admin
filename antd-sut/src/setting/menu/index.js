import React,{Component} from 'react'
import NProgress from 'nprogress'
export default class MenuView extends Component{
    componentWillMount(){
        NProgress.start();
    }
    componentDidMount(){
        NProgress.done();
    }
    render(){
        return(
            <div>MenuView</div>
        )
    }
}