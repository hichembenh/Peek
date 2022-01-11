import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import cours, {events} from "../data/cours";
import calendar from '../images/calendar (2).png'

const Programme = () => {
    return (
        <div id='programme'>
            <div className='title'>
                <h1>Programme</h1>
            </div>
            <div className='calendar'>
                <img src={calendar} alt="calendar"/>
            </div>
            {/*<div className='calendar'>*/}
            {/*    <FullCalendar*/}
            {/*        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}*/}
            {/*        initialView='timeGridWeek'*/}
            {/*        headerToolbar={{*/}
            {/*            left: 'prev,next today',*/}
            {/*            center: 'title',*/}
            {/*            right: 'dayGridMonth,timeGridWeek,timeGridDay'*/}
            {/*        }}*/}
            {/*        timeFormat= 'hh:mm'*/}
            {/*        selectMirror={true}*/}
            {/*        dayMaxEvents={true}*/}
            {/*        allDaySlot={false}*/}
            {/*        slotDuration='00:30:00'*/}
            {/*        snapDuration='00:05:00'*/}
            {/*        slotMinTime='08:30:00'*/}
            {/*        slotMaxTime="21:30:00"*/}
            {/*        height={760}*/}
            {/*        events={events}*/}

            {/*        themeSystem='bootstrap4'*/}
            {/*        theme={true}*/}
            {/*    />*/}
            {/*</div>*/}

        </div>
    )
}

export default Programme