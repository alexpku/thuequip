import React, {useEffect, useState} from 'react'
import { InfiniteScroll, List, DotLoading,Tag,Space,SearchBar,Button } from 'antd-mobile-v5'
import { mockRequest } from './mock-request'
import  './noticess.less'

// const InfiniteScrollContent = ({ hasMore }: { hasMore?: boolean }) => {
//     return (
//         <>
//             {hasMore ? (
//                 <>
//                     <span>Loading</span>
//                     <DotLoading />
//                 </>
//             ) : (
//                 <span>--- 我是有底线的 ---</span>
//             )}
//         </>
//     )
// }
// export function Notice() {
//     const [data, setData] = useState<string[]>([])
//     const [hasMore, setHasMore] = useState(true)
//     async function loadMore() {
//         const append = await mockRequest()
//         setData(val => [...val, ...append])
//         setHasMore(append.length > 0)
//     }
//
//     return (
//         <>
//             <div>
//             <List>
//                 {data.map((item, index) => (
//                     <List.Item key={index} description='[实验室动态]' clickable>
//                         {item}
//                     </List.Item>
//
//                 ))}
//             </List>
//             <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
//                 <InfiniteScrollContent hasMore={hasMore} />
//             </InfiniteScroll>
//             </div>
//         </>
//     )
// }

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
            <div className='scroll_div'>
            <div className='header'>
                <div className='left'>
                    <SearchBar />
                </div>
                <div className='right'>
                    <Button size='small' color='primary' onClick={doSearch}>
                        搜索
                    </Button>
                </div>
            </div>
            <div className="notice_container">
            {data.length > 0 ? (
                <>
                    <List>
                        {data.map((item, index) => (
                            <List.Item key={index} description='[实验室动态]' clickable>{item}</List.Item>
                        ))}
                    </List>
                    <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
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
            </div>
        </>
    )
}
