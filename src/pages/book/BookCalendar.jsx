import React, {useState} from 'react'
import FullCalendar, {formatDate} from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {INITIAL_EVENTS, createEventId} from './event-utils'
import {Button, Dialog, Space, Toast, Divider, Popup} from 'antd-mobile-v5'

import {SearchOutline} from "antd-mobile-icons";

export default class BookCalendar extends React.Component {
    state = {
        weekendsVisible: true,
        currentEvents: []
    }



    render() {


        return (
            <div className='demo-app'>
                {this.renderSidebar()}
                <div className='demo-app-main'>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        buttonText={{
                            today: '今天',
                            month: '月视图',
                            week: '周',
                            day: '日'
                        }}
                        timeFormat={{
                            '': 'H:mm{-H:mm}'
                        }}

                        columnFormat={ {
                            month: 'dddd',
                            week: 'dddd M-d',
                            day: 'dddd M-d'
                        }}


                        headerToolbar={{
                            left: 'prev,next today',
                            center: '',
                            right: 'timeGridWeek,timeGridDay'
                        }}
                        monthNames={["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]}
                        dayNamesShort={["周日", "周一", "周二", "周三", "周四", "周五", "周六"]}
                        today="今天"
                        allDayText="全天"
                        weekMode="variable"
                        locale={'zh-cn'}
                        displayEventEnd={true}
                        initialView='timeGridWeek'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={this.state.weekendsVisible}
                        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                        select={this.handleDateSelect}
                        eventContent={renderEventContent} // custom render function
                        eventClick={this.handleEventClick}
                        eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                        /* you can update a remote database when these fire:
                        eventAdd={function(){}}
                        eventChange={function(){}}
                        eventRemove={function(){}}
                        */
                        height={700}

                    />
                </div>


            </div>
        )
    }

    renderSidebar() {
        return (
            <div className='demo-app-sidebar'>
                <div className='demo-app-sidebar-section'>

                    <ul>
                        <Space wrap>

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
                            {/*<Button color='success' size='small' >Success</Button>*/}
                            {/*<Button color='danger' size='small' >Danger</Button>*/}
                            {/*<Button color='warning' size='small' >Warning</Button>*/}
                        </Space>

                    </ul>
                </div>
                {/* <div className='demo-app-sidebar-section'>
                    <label>
                        <input
                            type='checkbox'
                            checked={this.state.weekendsVisible}
                            onChange={this.handleWeekendsToggle}
                        ></input>
                        toggle weekends
                    </label>
                </div>*/}
                <div className='demo-app-sidebar-section'>

                    <ul>
                        {this.state.currentEvents.map(renderSidebarEvent)}
                    </ul>
                </div>

            </div>
        )
    }

    handleWeekendsToggle = () => {
        this.setState({
            weekendsVisible: !this.state.weekendsVisible
        })
    }

    handleDateSelect = (selectInfo) => {

        let title = "select   select  select "
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }

        Dialog.alert({
            content:"",
            actions: [
                [
                    {
                        key: 'cancel',
                        text: '取消',
                    },
                    {
                        key: 'delete',
                        text: '提交',
                        bold: true,
                        danger: true,
                    },
                ]],
            title:"机时预约登记",
            onConfirm: () => {
                console.log('Confirmed')
            }
        })

       // let title = prompt('Please enter a new title for your event')

    }

    handleEventClick = (clickInfo) => {
        // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        //     clickInfo.event.remove()
        // }
    }

    handleEvents = (events) => {
        this.setState({
            currentEvents: events
        })
    }

}

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}

function renderSidebarEvent(event) {
    return (
        <li key={event.id}>
            <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
            <i>{event.title}</i>
        </li>
    )
}
