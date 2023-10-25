import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dance_Club.css";
// import ParticlesBg from "particles-bg";

export const DanceEvent = ({ clubName, events }) => {
    // Function to calculate the countdown to event date
    const calculateCountdown = (eventDate) => {
        const now = new Date();
        const targetDate = new Date(eventDate);
        const timeDifference = targetDate - now;

        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        days = Math.max(days, 0);
        hours = Math.max(hours, 0);
        minutes = Math.max(minutes, 0);

        return { days, hours, minutes };
    };

    // Use state to track countdowns
    const [countdowns, setCountdowns] = useState(
        events.map((event) => calculateCountdown(event.date))
    );

    // Update countdowns every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCountdowns(events.map((event) => calculateCountdown(event.date)));
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [events]);

    // Function to generate anchor links for events
    const eventLink = (event) => {
        const eventlink = "#" + event.name;
        return eventlink;
    };

    return (
        <div className="container dancewhole mt-5">
            <Link to="/" className="btn btn-primary mb-4 mt-2">
                Go to Home Page
            </Link>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4">
                    <img
                        src="../logo-new.png"
                        alt="Club Logo"
                        className="img-fluid mt-4"
                        style={{ maxHeight: "70px", maxWidth: "60px", borderRadius: "10px" }}
                    />
                </div>
                <div className="col-md-8 d-flex flex-column flex-sm-row align-items-center">
                    <h1 className="poppinsfonts mb-0 mr-sm-2">{clubName}</h1>
                </div>
            </div>
            <div className="row mt-5">
                <h2 className="poppinsfonts text-center">Upcoming Events:</h2>
                <div className="horlinecover2 mb-4">
                    <div className="horline"></div>
                </div>
                {events && events.length > 0 ? (
                    events.map((event, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="moolifonts Cardcover">
                                <a href={eventLink(event)}>
                                    <div className="Card">
                                        <div className="innerCard">
                                            <div className="frontSide">
                                                <img
                                                    src={`../images/${event.imageFileName}`}
                                                    alt={event.name}
                                                    className="culimg img-fluid mb-3"
                                                    style={{ maxHeight: "12em" }}
                                                />
                                                <h3>{event.name}</h3>
                                            </div>
                                            <div className="backSide">
                                                <p>Date: {event.date}</p>
                                                <p>Time: {event.time}</p>
                                                <div className="text-center">
                                                    <h5>
                                                        Countdown: {countdowns[index].days} days{" "}
                                                        {countdowns[index].hours} hours{" "}
                                                        {countdowns[index].minutes} minutes
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="moolifonts">No current events</p>
                )}
            </div>

            <div>
                <h2 className="danceeventdes mt-5 moolifonts text-center">Events Description:</h2>
            </div>
            <div className="horlinecover2">
                <div className="horline"></div>
            </div>
            <div className="eventdes">
                {events.map((data, index) => {
                    return (
                        <div key={index} id={data.name} className="danceeventdes moolifonts row mt-5">
                            <div className="col-md-12">
                                <h3 className="mt-4 mb-4 text-decoration-underline">{data.name}</h3>
                                <p>{data.eventDes}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="moolifonts row mt-5">
                <div className="p-5 col-md-6">
                    <h2>Club Information</h2>
                    <div>
                        <div className="horline"></div>
                    </div>
                    <p>
                        {/* Replace with Dance Club information */}
                    </p>
                </div>
                <div className="p-5 col-md-6">
                    <h2>Event Organizers</h2>
                    <div className="horlinecover3">
                        <div className="horline"></div>
                    </div>
                    <ul>
                        {events.map((data, index) => {
                            return (
                                <li key={index}>
                                    <strong>{data.name} - </strong>
                                    {data.eventorganizer}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2>Convener and Deputy Convener</h2>
                    <p>Convener: Convener Name</p>
                    <p>Deputy Convener: Deputy Convener Name</p>
                </div>
                <div className="horlinecover">
                    <div className="horline"></div>
                </div>
                <div className="dancelinks">
                    <a className="dancefacebooklink" href="https://www.facebook.com/DaiictDanceClub/">
                        {/* Add your social media links */}
                    </a>
                    <a className="danceinstalink" href="https://www.instagram.com/dance_daiict/">
                        {/* Add your social media links */}
                    </a>
                </div>
            </div>
        </div>
    );
};
const eventsData = [
    {
        name: "Dance Night",
        date: "2023-10-27T19:00:00",
        time: "7:00 PM",
        imageFileName: "dance-night.jpg",
        eventorganizer: "Dance Club Organizer 1",
        eventDes: "Get ready to groove at the Dance Night organized by the Dance Club. This night is all about music, rhythm, and amazing dance performances. Join us for an electrifying evening filled with mesmerizing dance moves and memorable beats. Whether you're a seasoned dancer or just want to enjoy the show, everyone is welcome to this dance extravaganza!",
    },
    {
        name: "Salsa Social",
        date: "2023-11-10T18:30:00",
        time: "6:30 PM",
        imageFileName: "salsa-social.jpg",
        eventorganizer: "Dance Club Organizer 2",
        eventDes: "Experience the passion of salsa dancing at our Salsa Social event. Learn the sultry moves, enjoy the lively Latin music, and dance the night away. No prior dance experience is required, so whether you're a beginner or an experienced dancer, join us for an unforgettable evening of salsa and fun.",
    },
    {
        name: "Bollywood Dance Fest",
        date: "2023-11-25T20:00:00",
        time: "8:00 PM",
        imageFileName: "bollywood-dance-fest.jpg",
        eventorganizer: "Dance Club Organizer 3",
        eventDes: "The Dance Club presents the Bollywood Dance Fest. Dive into the vibrant world of Bollywood with energetic dance performances, colorful costumes, and popular Bollywood hits. Join us for a night of entertainment, rhythm, and the magic of Bollywood on the dance floor.",
    },
    {
        name: "Contemporary Dance Workshop",
        date: "2023-12-05T14:00:00",
        time: "2:00 PM",
        imageFileName: "contemporary-dance-workshop.jpg",
        eventorganizer: "Dance Club Organizer 4",
        eventDes: "Explore the art of contemporary dance at our workshop. Learn expressive movements and techniques that blend various dance styles. This workshop is open to all skill levels, so come and discover your own dance style in a creative and supportive environment.",
    },
    // Just add more event objects as needed in the same above format 
];

const Dance = () => {
    return (
        <div className="dancebox">
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <DanceEvent clubName="Dance_Club" events={eventsData} />
                        {/* Add other components or content here */}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dance;

