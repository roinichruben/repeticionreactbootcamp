import {useState} from 'react';

import EventItem from './components/Eventitem';
//import data from '../../data/events.json';
import eventJSON from '../../data/events.json';

//const events = data._embedded.events; Uso el otro short

const Events = () => {
    const [data] = useState(eventJSON);
    const {_embedded: {events}} = data;
    //const eventsComponents = ;
    const handleEventItemClick = (id) => {
        console.log('evento clickeado ', id);
    }

    return (
        <div>
            Eventos
            {events.map((eventItem) => (
    <EventItem 
        key={`event-item-${eventItem.id}` }
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEventItemClick}
        id={eventItem.id}
        />
    ))}
        </div>
    );
};

export default Events;