import React, { useRef, useState } from 'react';
// import './App.css';
import FullCalendar, { parseClassNames } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import axios from 'axios';
import AddEventModal from './AddEventModal';
import moment from 'moment';

const Calendar = () =>{

        const[ModalOpen,setModalOpen] = useState(false);
        const[events,setEvents] = useState([]);
        const calendarRef = useRef(null);
        
        const onEventAdded = (event) =>{
            let calendarApi = calendarRef.current.getApi();
            calendarApi.addEvent({
            title:event.title,
            start:moment(event.start).toDate(),
            end:moment(event.end).toDate()
            
            });
        }


        function handleEventAdd(data){
            axios.post('http://localhost:5000/calendar',data.event);
            
        }

        function handleDateSet(data){
            const response = axios.get('http://localhost:5000/calendar'+moment(data.start).toISOString()+'&end='+moment(data.end).toISOString());
            setEvents(response.data);
        }

        return(
            
        
            <section className='Appclass'>
                
              <button className="btn-sm btn-warning my-3 mx-1" type="button" onClick={()=>setModalOpen(true)}>Add Event</button>
               <div style={{position:'realtive' , zIndex : 0 ,opacity:0.8}}>
               <FullCalendar
                ref={calendarRef}
                events={events}
                    plugins={[dayGridPlugin]}
                    initialView='dayGridMonth'
                    eventAdd={event => handleEventAdd(event)}
                    datesSet={(date)=>handleDateSet(date)}
                />
               </div>
                <AddEventModal 
                isOpen={ModalOpen} 
                onClose={()=>setModalOpen(false)} 
                onEventAdded={(event)=>onEventAdded(event)}/>
                
            </section>
        );
    }
    
export default Calendar;
