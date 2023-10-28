import React, { useState, useEffect } from 'react';
import './Dance_Club.css';
import { Link } from "react-router-dom";

const DanceClub = () => {
  const [countdowns, setCountdowns] = useState([]);

  const upcomingEvents = [
    {
      name: "Dance Night",
      date: "2023-12-15",
      time: "7:00 PM",
      imageFileName: "dance-night.jpg",
      eventDes: "Join us for an unforgettable night of dancing, music, and fun!",
      eventorganizer: "Dance Club Committee",
    },
    {
      name: "Salsa Extravaganza",
      date: "2024-02-10",
      time: "8:30 PM",
      imageFileName: "salsa-extravaganza.jpg",
      eventDes: "Experience the passion of salsa dancing in our extravagant event.",
      eventorganizer: "Dance Club Committee",
    },
    {
      name: "Bollywood Beats Bash",
      date: "2024-04-05",
      time: "6:00 PM",
      imageFileName: "bollywood-beats.jpg",
      eventDes: "Get ready to groove to the best Bollywood beats in town.",
      eventorganizer: "Dance Club Committee",
    },
    // Add more upcoming events here
  ];
  
  useEffect(() => {
    const now = new Date();
    const countdownData = upcomingEvents.map((event) => {
      const eventDate = new Date(event.date);
      const timeDifference = eventDate - now;
  
      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        return { ...event, days: days, hours: hours, minutes: minutes };

      }
      return event;
    });
  
    setCountdowns(countdownData);
  }, [upcomingEvents]);
  
  return (
    <div className="dance-club-container">
      <h1 className="club-title">Dance Club</h1>
      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="event-list">
          {countdowns.map((event, index) => (
            <div className="event-card" key={index}>
              <img src={`images/${event.imageFileName}`} alt={event.name} />
              <div className="event-details">
                <h3>{event.name}</h3>
                <p>{event.eventDes}</p>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
                <p>Organizer: {event.eventorganizer}</p>
                <p>Countdown: {event.days} days {event.hours} hours {event.minutes} minutes</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="club-description">
        <h2>Club Description</h2>
        <p>
          Welcome to the Dance Club! We are passionate about dancing and spreading joy through our moves.
        </p>
      </div>

      <div className="organizer-details">
        <h2>Organizer Details</h2>
        <ul>
          <li>
            <strong>Organizer 1:</strong> Event Coordinator
          </li>
          <li>
            <strong>Organizer 2:</strong> Choreographer
          </li>
          <li>
            <strong>Organizer 3:</strong> Public Relations
          </li>
        </ul>
      </div>

      <div className="club-convener-details">
        <h2>Club Convener</h2>
        <p>
          <strong>Name:</strong> Convener's Name
        </p>
        <p>
          <strong>Contact:</strong> convener@example.com
        </p>
      </div>

      <div className="club-deputy-convener-details">
        <h2>Club Deputy Convener</h2>
        <p>
          <strong>Name:</strong> Deputy Convener's Name
        </p>
        <p>
          <strong>Contact:</strong> deputyconvener@example.com
        </p>
      </div>
      <Link to="/" className="home-button">Home</Link>
    </div>
  );
};

export default DanceClub;

