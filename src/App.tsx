import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <a className="test">Test</a>
//       </header>
//     </div>
//   );
// }

//export default App;

import { NavBar, TabBar } from 'antd-mobile-v5'
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom'

import {
  AppOutline,
  SearchOutline,
  UnorderedListOutline,
  UserSetOutline,
} from 'antd-mobile-icons'

import './app.less'

import  PersonalCenter from "./pages/personalcenter/PersonalCenter"
import Home from './pages/home/Home';
import Lab from './pages/lab/Lab';
import Equips from './pages/equip/Equips';
import BookCalendar from "./pages/book/BookCalendar";
import BookCalendar2 from "./pages/book/BookCalendar2";

const Bottom: FC = () => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    history.push(value)
  }

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/lab',
      title: '找实验室',
      icon: <SearchOutline />,
    },
    {
      key: '/equip',
      title: '找仪器',
      icon: <SearchOutline />,
    },
    {
      key: '/personalcenter',
      title: '我的',
      icon: <UserSetOutline />,
    },
  ]

  return (
      <div className='scroll_div'>
      <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
        {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
      </div>
  )
}

export default () => {
  return (
      <Router initialEntries={['/home']}>
        <div className='app'>
          <div className='top'>
            <NavBar>清华大学大型仪器共享系统</NavBar>
          </div>
          <div className='app_body'>
            <Switch>
              <Route exact path='/home'>
                <Home />
              </Route>
              <Route exact path='/lab'>
                <Lab />
              </Route>
              <Route exact path='/equip'>
                <Equips />
              </Route>
              <Route exact path='/personalcenter'>
                <PersonalCenter />
              </Route>

              <Route exact path='/demoapp'>
                <BookCalendar />
              </Route>
              <Route exact path='/demoapp2'>
                <BookCalendar2 />
              </Route>
            </Switch>
          </div>
          <div className='bottom'>
            <Bottom />
          </div>
        </div>
      </Router>
  )
}
