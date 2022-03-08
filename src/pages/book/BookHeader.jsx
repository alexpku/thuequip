import React, {useState} from 'react'
import {Button, Dialog, Space, Toast, Divider, Popup, Tag} from 'antd-mobile-v5'
import {SearchOutline} from "antd-mobile-icons";

export default (props) => {
        return (
            <div className='demo-app-sidebar'>
                <div className='demo-app-sidebar-section'>
                    <ul className='book-header'>
                        <Space style={{ '--gap': '24px' }}>
                            <Button color='primary'  size='small'  onClick={() => {
                                Dialog.alert({
                                    content: '贾永霞(手机：18611991913，办公室电话：010-62792815，email：yongxiajia@mail.tsinghua.edu.cn)\n' +
                                        '\n' +
                                        '王景玉(手机：17080131080，办公室电话：010-66668888，email：jingyu9575@hotmail.com)\n' +
                                        '\n' +
                                        '王臻(手机：13810496109，办公室电话：010-3333333，email：wang.zhen@mail.tsinghua.edu.cn)',
                                    onConfirm: () => {
                                        console.log('Confirmed')
                                    },
                                })
                            }}>
                                <Space>
                                    <SearchOutline />
                                    <span>仪器管理员联系方式</span>
                                </Space>
                            </Button>
                            <Button color='primary' size='small'  onClick={() => {
                                Dialog.alert({
                                    content:
                                    <>

                                    </>,
                                    onConfirm: () => {
                                        console.log('Confirmed')
                                    },
                                })
                            }}>
                                <Space>
                                    <SearchOutline />
                                    <span>查看收费标准</span>
                                </Space>
                            </Button>

                        </Space>
                        <Divider />
                        <Space   style={{ '--gap': '24px' }}>
                            <Button color='success' size='small' >
                                <Space>
                                    <SearchOutline />
                                    <span>时间规则</span>
                                </Space>
                            </Button>
                            <Button color='success' size='small' >
                                <Space>
                                    <SearchOutline />
                                    <span>上机规则</span>
                                </Space>
                            </Button>
                        </Space>
                        <Divider />
                        <Space  style={{ '--gap': '24px' }}>
                            <Tag color='danger'>本人预约</Tag>
                            <Tag color='warning'>他人预约</Tag>
                            <Tag color='default'>不可预约或已过期</Tag>
                            <Tag color='success'>可预约</Tag>
                        </Space>
                    </ul>
                </div>
            </div>
        )
}
