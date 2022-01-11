import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import Datetime from 'react-datetime';
import axios from "axios";

function AddEventModal({isOpen,onClose,onEventAdded}) {
    const[uname, setTitle] = useState('');
    const[uid, setuid] = useState('');
    const[Description, setdes] = useState('');
    const[location, setlocation] = useState('');
    const[start,setStart] = useState(new Date());
    const[end,setEnd] = useState(new Date());
    const[display,setDisplay] = useState([])

    const onSubmit = (event) =>{
        event.preventDefault();

        onEventAdded({
            uname,
            uid,
            Description,
            location,
            start,
            end,
        })
        onClose();
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/user').then((response)=>{
            console.log(response.data[0].name);
        });
    },[]);
    return(
        <Modal isOpen={isOpen} onRequestClose={onClose}
        
        style={
            {
                overlay:{
                    backgroundColor:'grey',
                    opacity: 1
                },
                content:{
                    backgroundColor:'white',
                    opacity: 1
                }
            }
        }>
            <form onSubmit={onSubmit}>
            <div>
                    <select defaultValue="" className="form-select "  name="Name" value={uname} aria-label="Default select example" onChange={e => setTitle(e.target.value)}>
                    <option selected>Select User</option>
                    <option value="4">RAMJI GOPAL PATANKAR </option>
                    <option value="1"> Mrunmayi</option>
                    <option value="2"> Yash</option>
                    <option value="3"> Priya</option>
                </select>
            </div>
            <div>
                <label>Unique Id</label><br/>
                <input className="form-control" placeholder="uid" value={uid} onChange={e => setuid(e.target.value)}></input>
            </div>
            <div>
                <label>Description</label><br/>
                <textarea className="form-control" placeholder="Description" value={Description} onChange={e => setdes(e.target.value)}></textarea>
            </div> 
            <div>
                <label>Location</label><br/>
                <input className="form-control" placeholder="Location" value={location} onChange={e => setlocation(e.target.value)}></input>
            </div>       
        
                
            <div>
                <label>StartTime</label>
                <Datetime value={start} onChange={date=>setStart(date)}></Datetime>
            </div>

            <div>
                <label>End Time</label>
                <Datetime value={end} onChange={date=>setEnd(date)}></Datetime>
            </div>
            
            <button className="btn-sm btn-primary my-3 mx-1" type="button">Add Event</button>
            </form>
        </Modal>
    )
}

export default AddEventModal;
