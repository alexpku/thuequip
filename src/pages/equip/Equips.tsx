import React, {useEffect, useState} from 'react'
import {SideBar, SearchBar, Button, Space} from 'antd-mobile-v5'
import { sidetabs } from './sidetabs'
import   './tabs.less'
import classNames from 'classnames'
import Equiplist from  './equiplist';
import {mockRequest} from "./mock-request";
import {SearchOutline} from "antd-mobile-icons";


export default () => {
    const [activeKey, setActiveKey] = useState('key1')

    const [data, setData] = useState<string[]>([])
    const [hasMore, setHasMore] = useState(true)
    async function loadMore() {
        const append = await mockRequest()
        setData(val => [...val, ...append])
        setHasMore(append.length > 0)
    }

    function doSearch() {
        setData([])
        setHasMore(true)
        loadMore()
    }

    useEffect(() => {
        doSearch()
    }, [])

    return (
        <>
            <div>
        <div>
            <div className='header'>
                <div className='left'>
                    <SearchBar />
                </div>
                <div className='right'>
                    <Button size='small' color='primary' onClick={doSearch}>
                        <Space>
                            <SearchOutline />
                            <span>搜索</span>
                        </Space>
                    </Button>

                </div>
            </div>
        <div className="container">

            <div className="side">
                <SideBar activeKey={activeKey} onChange={setActiveKey}>
                    {sidetabs.map(item => (
                        <SideBar.Item key={item.key} title={item.title} badge={item.badge}/>
                    ))}
                </SideBar>
            </div>
            <div className="main">
                <div
                    className={classNames(
                        "content",
                        activeKey === 'key1' && 'active'
                    )}
                >
                    <Equiplist></Equiplist>
                </div>
                <div
                    className={classNames(
                        'content',
                        activeKey === 'key2' && 'active'
                    )}
                >
                    <Equiplist></Equiplist>
                </div>
                <div
                    className={classNames(
                        'content',
                        activeKey === 'key3' && 'active'
                    )}
                >
                    <Equiplist></Equiplist>
                </div>
                <div
                    className={classNames(
                        'content',
                        activeKey === 'key4' && 'active'
                    )}
                >
                    <Equiplist></Equiplist>
                </div>
                <div
                    className={classNames(
                        'content',
                        activeKey === 'key5' && 'active'
                    )}
                >
                    <Equiplist></Equiplist>
                </div>
            </div>
        </div>
        </div>
            </div>
        </>
    )
}
