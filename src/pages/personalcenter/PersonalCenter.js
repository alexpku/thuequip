import react,{Component} from "react";
import {Avatar, List, Space, Button, Switch} from 'antd-mobile-v5'
import {BasicDemo} from './Role.tsx'
import { CheckCircleOutline, ClockCircleOutline,FileOutline,HeartOutline,UserContactOutline ,QuestionCircleOutline,FillinOutline,SearchOutline} from 'antd-mobile-icons'
import BookCalendar from "../book/BookCalendar";
import {Route,Link} from "react-router-dom";


class PersonalCenter extends Component {

   // const navigate = useNavigate();


    render(){
       return <div>


           <List>
               <List.Item
                   prefix={<Avatar src =   'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                       />}
                   description='2022626622，信息化技术中心'
                   clickable>
                   张无忌
               </List.Item>
               <List.Item  style={{ fontSize: 18,margin:10 }}>
                   <Space wrap>
                       <BasicDemo></BasicDemo>

                   <Link  to="/demoapp">

                   </Link>
                       <Link  to="/demoapp2">
                           <Button shape='default' color='success'>
                               <Space>
                                   <SearchOutline />
                                   <span>我要预约</span>
                               </Space>
                           </Button>
                       </Link>
                   </Space>

               </List.Item>

               <List.Item style={{ fontSize: 16,margin:10 }}
                   prefix={<ClockCircleOutline color='var(--adm-color-danger)'/>}
                   clickable>
                   我的预约
               </List.Item>
               <List.Item style={{ fontSize: 16,margin:10 }}
                          prefix={<FileOutline color='var(--adm-color-primary)'/>}
                          clickable>
                   我的实验记录
               </List.Item>
               <List.Item style={{ fontSize: 16,margin:10 }}
                          prefix={<CheckCircleOutline color='#76c6b8'/>}
                          clickable>
                   预约过的仪器
               </List.Item>
               <List.Item style={{ fontSize: 16,margin:10 }}
                          prefix={<HeartOutline color='var(--adm-color-primary)'/>}
                          clickable>
                   我的收藏夹
               </List.Item>
               <List.Item style={{ fontSize: 16,margin:10 }}
                          prefix={<UserContactOutline color='var(--adm-color-danger)'/>}
                          clickable>
                   相关主用户
               </List.Item>
               <List.Item style={{ fontSize: 16,margin:10 }}
                          prefix={<QuestionCircleOutline color='#76c6b8'/>}
                          clickable>
                   如何才能网上预约
               </List.Item>
               <List.Item style={{ fontSize: 16,margin:10 }}
                          prefix={<FillinOutline color='var(--adm-color-danger)'/>}
                          clickable>
                   问答咨询
               </List.Item>
           </List>


       </div>
    }
}

export default PersonalCenter;
