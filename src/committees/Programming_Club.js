import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ProgrammingClubEvent = ({clubName, events}) => {
  const calculateCountdown = (eventDate) => {
    const now = new Date();
    const targetDate = new Date(eventDate);
    const timeDifference = targetDate - now;

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    days = Math.max(days, 0);
    hours = Math.max(hours, 0);
    minutes = Math.max(minutes, 0);

    return { days, hours, minutes };
  };

  const [countdowns, setCountdowns] = useState(
    events.map((event) => calculateCountdown(event.date))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdowns(
        events.map((event) => calculateCountdown(event.date))
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [events]);


  return (
    <div className="container mt-5 bg-white">
      <Link to="/" className="btn btn-primary mb-4 mt-2">
        Go to Home Page
      </Link>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4">
          <img
            src="../logo-new.png" 
            alt="Club Logo"
            className="img-fluid mt-4"
            style={{ maxHeight: "70px", maxWidth: "60px" }}
          />
        </div>
        <div className="col-md-8 d-flex flex-column flex-sm-row align-items-center">
          <h1 className="mb-0 mr-sm-2">Programming Club</h1>
        </div>
      </div>
      <div className="row mt-5">
        <h2 className="text-center mb-4">Upcoming Events</h2>
        {eventsData && eventsData.length > 0 ? (
          eventsData.map((event, index) => (
            <div className="col-md-4" key={index}>
              <div className="card glassmorphism p-3 mb-4">
                <img
                  src={`../images/${event.imageFileName}`}
                  alt={event.name}
                  className="img-fluid mb-3"
                  style={{ maxHeight: "12em" }}
                />
                <h3>{event.name}</h3>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
                <div className="text-center">
                  <h5>
                    Countdown: {countdowns[index].days} days{" "}
                    {countdowns[index].hours} hours {countdowns[index].minutes}{" "}
                    minutes
                  </h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No current events</p>
        )}
      </div>
      {eventsData && eventsData.length > 0 ? (
        eventsData.map((event, index) => (
          <div className="row mt-5" key={index}>
            <div className="col-md-12">
              <h2>{event.name}</h2>
              <p>{event.description}</p>
            </div>
          </div>
        ))
      ) : null}
      <div className="row mt-5">
        <div className="col-md-12">
          <h2>Club Information</h2>
          <p>
            Programming Club has been working to help people explore their
            hidden passion for programming. We help students understand some
            basic concepts, and a few who stick around enjoy and master the art
            of competitive programming. This includes solving complex problems
            under time and space constraints, which is a valued skill in the
            field of computer science. Our philosophy is to make programming a
            fun activity where students come up with problems and discuss
            solutions out of their interest. We regularly organize contests and
            discussion sessions to encourage participation of the student
            community. We actively promote students to participate in
            algorithmically challenging competitions like ACM ICPC, Facebook
            Hacker-cup, Google Code Jam, Codechef Snackdown, TCS Codevita,
            Hackerearth Collegiate Cup, and various others. Students of our club
            have represented DA-IICT at various such competitions. Programming
            club continuously strives to uphold and further raise the bar for
            the programming capabilities of students at DA-IICT.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <h2>Event Organizers</h2>
          <ul>
            <li>
              <strong>Coding Contest - </strong>Organizer 1
            </li>
            <li>
              <strong>Treasure Club - </strong>Organizer 2
            </li>
            {/* Add more organizer details as needed */}
          </ul>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <h2>Convener and Deputy Convener</h2>
          <p>Convener: Convener Name</p>
          <p>Deputy Convener: Deputy Convener Name</p>
        </div>
      </div>
    </div>
  );
};
const eventsData = [
    // {
    //   name: "Coding Contest",
    //   date: "2023-10-15T18:00:00",
    //   time: "10:00 AM",
    //   imageFileName: "codeing.jpg",
    // },
    // {
    //   name: "Treasure Club",
    //   date: "2023-10-16T14:30:00",
    //   time: "2:30 PM",
    //   imageFileName: "Treasure-Hunt.webp",
    // },
    // {
    //   name: "Bot race",
    //   date: "2023-10-17T14:30:00",
    //   time: "2:30 PM",
    //   imageFileName: "bot-race.jpg",
    // },
    // {
    //   name: "Tug of bots",
    //   date: "2023-10-16T18:30:00",
    //   time: "2:30 PM",
    //   imageFileName: "tug-of-bots.jpg",
    // },
    // {
    //   name: "Rocket event",
    //   date: "2023-10-18T14:30:00",
    //   time: "2:30 PM",
    //   imageFileName: "rocket.jpg",
    // },
    // {
    //   name: "Sherlock",
    //   date: "2023-10-18T14:43:00",
    //   time: "2:30 PM",
    //   imageFileName: "shelock.jpg",
    // },
    // Add more event objects as needed
  ];
  
  const ProgrammingClub = () => {
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <ProgrammingClubEvent clubName="Programming Club" events={eventsData} />
            {/* Add other components or content here */}
          </div>
        </div>
      </div>
    );
  };

export default ProgrammingClub;




