import React from 'react'
import { Tabs, Badge } from 'antd-mobile-v5'


export default () => {
    return (
        <>

            <Tabs>
                <Tabs.Tab title='校级平台' key='fruits'>
                    校级平台
                </Tabs.Tab>
                <Tabs.Tab title='院系平台' key='vegetables'>
                    院系平台
                </Tabs.Tab>
            </Tabs>



        </>
    )
}
