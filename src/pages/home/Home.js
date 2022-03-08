import react,{Component } from "react";
import {Tabs, Badge, InfiniteScroll, List, DotLoading, SafeArea,Image,Space} from 'antd-mobile-v5'
import { mockRequest } from './mock-request.tsx'

import Notice from "../home/Notice";
import "./noticess.less"

import aa from './a.jpeg'

const demoSrc ="./a.jpeg";
class Home extends Component{


    render() {
        return <div>
            <div className='imagesContainer'>
                <Space wrap>
                    <Image src={aa}/>

                </Space>
            </div>
            <Tabs>
            <Tabs.Tab title='通知' key='notice'>
                <Notice></Notice>

            </Tabs.Tab>
            <Tabs.Tab title='成员' key='member'>
                西红柿
            </Tabs.Tab>
            <Tabs.Tab title='仪器' key='equip'>
                蚂蚁
            </Tabs.Tab>
                <Tabs.Tab title='问答' key='qa'>
                    蚂蚁
                </Tabs.Tab>
        </Tabs>

        </div>;
    }
}

export default Home;
