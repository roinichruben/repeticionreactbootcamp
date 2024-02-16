import {useState} from 'react';

import EventItem from './components/Eventitem';
//import data from '../../data/events.json';
import eventJSON from '../../data/events.json';

//const events = data._embedded.events; Uso el otro short

const Events = ({searchTerm}) => {
    const [data] = useState(eventJSON);
    const {_embedded: {events}} = data;
    //const eventsComponents = ;
    const handleEventItemClick = (id) => {
        console.log('evento clickeado ', id);
    };

    const renderEvents =() => {
        let eventsFiltered = events;

        if(searchTerm.length > 0){
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm));
        }
        return eventsFiltered.map((eventItem) => (
            <EventItem 
                key={`event-item-${eventItem.id}` }
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
                onEventClick={handleEventItemClick}
                id={eventItem.id}
                />
            ));
        return 
    };

    return (
        <div>
            Eventos
            {renderEvents()}
        </div>
    );
};

export default Events;