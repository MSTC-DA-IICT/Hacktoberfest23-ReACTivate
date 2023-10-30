import CountdownTimer from '../DCEI Components/CountdownTimer';
import SambhavCountdown from './SambhavCountdown';
import './SambhavEvents.css'
const SambhavEvents = ({ heading, paragraph, eventdate, venue, image, date }) => {
    return (
        <div>
            <div className="sambhav-eventbox">
                {/* <img className="sambhav-event-img" src={image} /> */}
                <div className="sambhav-event-details">
                    <h2 className="sambhav-event-heading">{heading}</h2>
                    <p className="sambhav-event-paragraph">{paragraph}</p>
                    <p className="sambhav-event-paragraph">Event Date : {eventdate}</p>
                    <p className="sambhav-event-paragraph">Venue : {venue}</p>
                    <SambhavCountdown  targetDate={date}  />
                </div>
            </div>
        </div>
    )
}
export default SambhavEvents;