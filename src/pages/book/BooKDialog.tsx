import React, { useState } from 'react'
import {
    Form,
    Input,
    Button,
    Dialog,
    TextArea,
    DatePicker,
    Selector,
    Slider,
    Stepper, Picker, Switch, Popup, Toast
} from 'antd-mobile-v5'

import dayjs from 'dayjs'
import {basicColumns} from "../personalcenter/roleData";
import {piUsers,feeTypes,admins} from "./mock-data";

import { Collapse, DotLoading, Result } from 'antd-mobile-v5'



//const BooKDialog :React.FC =(props) => {
export default (props: { data: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    const onFinish = (values: any) => {
        Dialog.alert({
            content: JSON.stringify(values),
        })
    }

    //const {data} = props;

    const [pickerItemDateStartVisible, setPickerItemDateStartVisible] = useState(false)
    const [pickerItemDateEndVisible, setPickerItemDateEndVisible] = useState(false)

    const [piVisible, setPiVisible] = useState(false)
    const [piValue, setPiValue] = useState<(string | null)[]>(['M'])

    const [feeTypesVisible, setFeeTypesVisible] = useState(false)
    const [feeTypesValue, setFeeTypesValue] = useState<(string | null)[]>(['M'])

    const [adminsVisible, setAdminsVisible] = useState(false)
    const [adminsValue, setAdminsValue] = useState<(string | null)[]>(['M'])

    const [checked, setChecked] = useState(false);

   return (
        <>
            <Form
                onFinish={onFinish}
            >
                <Form.Item
                    name='itemDateStart'
                    label='预约开始时间:'
                    trigger='onConfirm'
                    onClick={() => {
                        setPickerItemDateStartVisible(true)
                    }}

                >

                    <DatePicker
                        visible={pickerItemDateStartVisible}
                        onClose={() => {
                            setPickerItemDateStartVisible(false)
                        }}
                        precision='minute'
                        onConfirm={val => {
                            Toast.show(val.toString())
                        }}
                    >
                        {value =>
                            value ? dayjs(value).format('YYYY-MM-DD HH:mm') : '请选择日期'
                        }
                    </DatePicker>
                </Form.Item>
                <Form.Item
                    name='itemDateEnd'
                    label='预约结束时间:'
                    trigger='onConfirm'
                    onClick={() => {
                        setPickerItemDateEndVisible(true)
                    }}

                >

                    <DatePicker
                        visible={pickerItemDateEndVisible}
                        onClose={() => {
                            setPickerItemDateEndVisible(false)
                        }}
                        precision='minute'
                        onConfirm={val => {
                            Toast.show(val.toString())
                        }}
                    >
                        {value =>
                            value ? dayjs(value).format('YYYY-MM-DD HH:mm') : '请选择日期'
                        }
                    </DatePicker>
                </Form.Item>
                <Form.Item name='disabledField' label='姓名/email：' disabled>
                    <Input placeholder='王臻/406876092@qq.com' />
                    <p>获取父组件传过来的值：{props.data}</p>
                </Form.Item>
                <Form.Item name='itemCostPiValue' label='测试费来源：'trigger='onConfirm'
                           onClick={() => {
                               setPiVisible(true)
                           }}>
                    <Picker
                        columns={piUsers}
                        visible={piVisible}
                        onClose={() => {
                            setPiVisible(false)
                        }}
                        value={piValue}
                        onConfirm={v => {
                            setPiValue(v)
                        }}
                    />
                </Form.Item>
                <Form.Item name='itemCostFeeRuleValue' label='收费标准：'trigger='onConfirm'
                           onClick={() => {
                               setFeeTypesVisible(true)
                           }}>

                    <Picker
                        columns={feeTypes}
                        visible={feeTypesVisible}
                        onClose={() => {
                            setFeeTypesVisible(false)
                        }}
                        value={piValue}
                        onConfirm={v => {
                            setFeeTypesValue(v)
                        }}
                    />

                </Form.Item>
                <Form.Item
                    name='itemDoWhat'
                    label='测试内容'
                    rules={[{ required: true, message: '测试内容不能为空' }]}
                >
                    <Input placeholder='请输入姓名' />
                </Form.Item>
                <Form.Item
                    name='itemRemark'
                    label='备注'
                >
                    <Input placeholder='请输入备注内容' />
                </Form.Item>
                <Form.Item name='itemIsRequestHelp' label='需要管理员辅助'>

                    <Switch uncheckedText='否' checkedText='是'
                            onChange={checked => {
                                setChecked(checked)
                                if(checked) {
                                    setAdminsVisible(true)
                                }else {
                                    setAdminsVisible(false)
                                }


                            }}/>

                    <Popup
                        visible={adminsVisible}
                        onMaskClick={() => {
                            setAdminsVisible(false)
                        }}
                        bodyStyle={{
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                            minHeight: '40vh',
                        }}
                    >
                        也可以通过 Collapse.Panel 的 arrow 属性来自定义单个面板的箭头
                        也可以通过 Collapse.Panel 的 arrow 属性来自定义单个面板的箭头
                        也可以通过 Collapse.Panel 的 arrow 属性来自定义单个面板的箭头
                        也可以通过 Collapse.Panel 的 arrow 属性来自定义单个面板的箭头
                    </Popup>



                </Form.Item>


            </Form>
        </>
    )
}

//export default BooKDialog
