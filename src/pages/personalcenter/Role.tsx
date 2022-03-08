import React, { useState } from 'react'
import { Picker, Button, Space, Toast } from 'antd-mobile-v5'
import { basicColumns } from './roleData'
import {TeamOutline} from "antd-mobile-icons";
import {piUsers} from "../book/mock-data";

// 基础用法
export function BasicDemo() {
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState<(string | null)[]>(['M'])
    return (
        <>
            <Button  shape='default' color='warning'
                onClick={() => {
                    setVisible(true)
                }}
            >
                <Space>
                    <TeamOutline />
                    <span>切换角色</span>
                </Space>

            </Button>
            <Picker
                columns={basicColumns}
                visible={visible}
                onClose={() => {
                    setVisible(false)
                }}
                value={value}
                onConfirm={v => {
                    setValue(v)
                }}
            />
        </>
    )
}

export function PIUsers() {
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState<(string | null)[]>(['M'])
    return (
        <>
            <Button  shape='default' color='warning'
                     onClick={() => {
                         setVisible(true)
                     }}
            >
                <Space>
                    <TeamOutline />
                    <span>切换角色</span>
                </Space>

            </Button>
            <Picker
                columns={piUsers}
                visible={visible}
                onClose={() => {
                    setVisible(false)
                }}
                value={value}
                onConfirm={v => {
                    setValue(v)
                }}
            />
        </>
    )
}

// 渲染所选值
function RenderChildrenDemo() {
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState<(string | null)[]>([])
    return (
        <Space align='center'>
            <Button
                onClick={() => {
                    setVisible(true)
                }}
            >
                选择
            </Button>
            <Picker
                columns={basicColumns}
                visible={visible}
                onClose={() => {
                    setVisible(false)
                }}
                value={value}
                onConfirm={setValue}
                onSelect={(val, extend) => {
                    console.log('onSelect', val, extend.items)
                }}
            >
                {items => {
                    if (items.every(item => item === null)) {
                        return '未选择'
                    } else {
                        return items.map(item => item?.label ?? '未选择').join(' - ')
                    }
                }}
            </Picker>
        </Space>
    )
}

export default () => {
    return (
        <>

                <Button
                    onClick={async () => {
                        const value = await Picker.prompt({
                            columns: basicColumns,
                        })
                        Toast.show(`你选择了 ${value}`)
                    }}
                >
                    弹出 Picker
                </Button>

        </>
    )
}
