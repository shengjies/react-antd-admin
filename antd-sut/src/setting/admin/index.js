import React,{Component} from 'react'
import {Menu, Icon, Dropdown,Tabs} from 'antd'
import NProgress from 'nprogress'
const TabPane = Tabs.TabPane;
export default class AdminView extends Component{
    componentWillMount(){
        NProgress.start();
    }
    componentDidMount(){
        NProgress.done();
    }
    render(){
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
              </Menu.Item>
            </Menu>
          );
        return(
            <div>
                <Tabs defaultActiveKey="1" style={{width:300}}>
                    <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
                    <TabPane tab="Tab 2" disabled key="2">Tab 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
                </Tabs>
            </div>
        )
    }
}