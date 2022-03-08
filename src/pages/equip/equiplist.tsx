import React, {useEffect, useState} from 'react'
import { InfiniteScroll, List, DotLoading,Tag,Space,SearchBar,Button } from 'antd-mobile-v5'
import { mockRequest } from './mock-request'
import  './equiplistss.less'


export default () => {
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
            <div className='equip_list'>


            {data.length > 0 ? (
                <>
                    <div>
                    <List>
                        {data.map((item, index) => (
                            <List.Item key={index} description='地点  清华大学李兆基科技大楼B区' clickable>{item}</List.Item>
                        ))}
                    </List>
                    <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
                    </div>
                </>
            ) : (
                <div className='placeholder'>
                    <div className='loadingWrapper'>
                        <DotLoading />
                    </div>
                    正在拼命加载数据
                </div>
            )}
            </div>
        </>
    )
}
