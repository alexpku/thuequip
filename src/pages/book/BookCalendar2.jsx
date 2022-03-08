import React, {useState} from 'react'
import FullCalendar, {formatDate} from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {INITIAL_EVENTS, createEventId} from './event-utils'
import {Button, Dialog, Space, Toast, Divider, Popup} from 'antd-mobile-v5'
import BooKDialog from "./BooKDialog";
import {SearchOutline} from "antd-mobile-icons";
import BooKHeader from "./BookHeader";

//export default class BookCalendar2 extends React.Component {
export default () => {
   /* state = {
        weekendsVisible: true,
        currentEvents: []
    }*/
    const [name, setName] = useState('winn1111111e');

   // setName("ddddd");
        return (
            <div className='demo-app'>
                <BooKHeader data={name}></BooKHeader>

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
                        //weekends={this.state.weekendsVisible}
                        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                        select={handleDateSelect}
                       // eventContent={renderEventContent} // custom render function
                       // eventClick={this.handleEventClick}
                        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                        height={700}

                    />
                </div>

            </div>
        )
}

function handleEvents  (events)  {
    console.log(events)
   }

// function handleDateSelect  (selectInfo)  {
//
//     console.log(selectInfo)
//
// }

function handleDateSelect  (selectInfo)  {


    let title = "select   select  select ";
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
        content: (
            <>
                <BooKDialog data="ddddddqqq"></BooKDialog>
            </>
        ),
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


}



