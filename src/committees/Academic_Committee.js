import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const AcademicEvent = ({ clubName, events }) => {
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
      setCountdowns(events.map((event) => calculateCountdown(event.date)));
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
        <div className="col-md-4 ">
          <img
            src="../logo-new.png"
            alt="Club Logo"
            className="img-fluid mt-4"
            style={{ maxHeight: "70px", maxWidth: "60px" }}
          />
        </div>
        <div className="col-md-8 d-flex flex-column flex-sm-row align-items-center">
          <h1 className=" mb-0 mr-sm-2">{clubName}</h1>
        </div>
      </div>
      <div className="row mt-5">
        <h2 className="text-center mb-4">upcoming Events</h2>
        {events && events.length > 0 ? (
          events.map((event, index) => (
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
      <div className="text-center"></div>
      <div className="row mt-5">
        <div className="col-md-12">
          <h2>Event Description</h2>
          <h3 className="mt-4 mb-4 text-decoration-underline">
            Coding Contest
          </h3>
          <p>
            The Coding Contest is an exhilarating event that invites coding
            enthusiasts of all levels to participate in a thrilling competition.
            Participants, in teams of up to three members, will have the
            opportunity to showcase their problem-solving skills, algorithmic
            thinking, and coding prowess. The event promises an exciting
            challenge with the chance to win substantial prize money for the
            top-performing teams.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <h3 className="mt-4 mb-4 text-decoration-underline">Treasure Club</h3>
          <p>
            The Treasure Club event is a thrilling treasure hunt where teams of
            up to three members embark on an exciting adventure to solve clues,
            decode puzzles, and find hidden treasures. Participants will test
            their teamwork, problem-solving skills, and creativity as they race
            against time to uncover the ultimate prize. Don't miss this chance
            to explore, strategize, and win significant prize money!
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <h3 className="mt-4 mb-4 text-decoration-underline">Bot Race</h3>
          <p>
            The Bot Race event challenges participants to design and build their
            own robots to compete in an exhilarating race. Teams of up to three
            members will showcase their engineering skills, creativity, and
            innovation as they navigate their robots through a series of
            obstacles and challenges. Join us for this high-tech competition and
            stand a chance to win exciting prizes and recognition for your
            robotic expertise!
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <h3 className="mt-4 mb-4 text-decoration-underline">Tug of Bots</h3>
          <p>
            Prepare for a battle of strength and strategy in the Tug of Bots
            event! Teams of up to three members will design and build powerful
            robots capable of engaging in an epic tug-of-war showdown. It's a
            test of engineering prowess and teamwork as participants pit their
            bots against each other to claim victory. Get ready for a thrilling
            and intense competition where only the strongest bots will triumph!
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h3 className="mt-4 mb-4 text-decoration-underline">Rocket Event</h3>
          <p>
            The Rocket Event is an awe-inspiring competition where participants
            design, build, and launch their own rockets. Teams of up to three
            members will demonstrate their knowledge of aerodynamics and rocket
            science as they launch their creations to impressive heights. With
            creativity and precision, participants will aim for the stars and
            compete for recognition and valuable prizes. Join us for this
            thrilling event and witness the power of innovation!
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h3 className="mt-4 mb-4 text-decoration-underline">Sherlock</h3>
          <p>
            Sherlock is an intriguing detective challenge that will test your
            analytical and deductive skills. Teams of up to three members will
            delve into a complex mystery, solving puzzles, deciphering codes,
            and uncovering clues to unravel the case. Put on your detective hats
            and collaborate with your team to crack the code, solve the mystery,
            and become the ultimate Sherlock! Prizes await the sharpest minds,
            so don't miss this opportunity to showcase your detective abilities!
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Club Information</h2>
          <p>
            The Academic Committee is a pivotal body within educational
            institutions, overseeing various aspects of academic life. One of
            its core responsibilities is to develop and review the curriculum,
            ensuring it aligns with educational standards and meets the needs of
            students. Additionally, the committee formulates and updates
            academic policies, fostering a fair and consistent learning
            environment. It plays a key role in faculty development, organizing
            workshops and training sessions to enhance teaching methodologies.
            The committee also provides essential student support services,
            addressing academic challenges and promoting a conducive learning
            atmosphere. Overall, the Academic Committee serves as a cornerstone,
            ensuring the academic excellence and holistic development of
            students and educators alike.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Event Organizers</h2>
          <ul>
            <li>
              <strong>Coding Club - </strong>Organizer 1
            </li>
            <li>
              <strong>Treasure Club - </strong>Organizer 2
            </li>
            <li>
              <strong>Bot Race - </strong>Organizer 3
            </li>
            <li>
              <strong>Tug of Bots - </strong>Organizer 4
            </li>
            <li>
              <strong>Rocket event - </strong>Organizer 5
            </li>
            <li>
              <strong>Sherlock - </strong>Organizer 6
            </li>
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
  {
    name: "Coding Contest",
    date: "2023-10-15T18:00:00",
    time: "10:00 AM",
    imageFileName: "codeing.jpg",
  },
  {
    name: "Treasure Club",
    date: "2023-10-16T14:30:00",
    time: "2:30 PM",
    imageFileName: "Treasure-Hunt.webp",
  },
  {
    name: "Bot race",
    date: "2023-10-17T14:30:00",
    time: "2:30 PM",
    imageFileName: "bot-race.jpg",
  },
  {
    name: "Tug of bots",
    date: "2023-10-16T18:30:00",
    time: "2:30 PM",
    imageFileName: "tug-of-bots.jpg",
  },
  {
    name: "Rocket event",
    date: "2023-10-18T14:30:00",
    time: "2:30 PM",
    imageFileName: "rocket.jpg",
  },
  {
    name: "Sherlock",
    date: "2023-10-18T14:43:00",
    time: "2:30 PM",
    imageFileName: "shelock.jpg",
  },
  // Add more event objects as needed
];

const Academic = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
          <AcademicEvent clubName="Academic Committee" events={eventsData} />
          {/* Add other components or content here */}
        </div>
      </div>
    </div>
  );
};

export default Academic;
