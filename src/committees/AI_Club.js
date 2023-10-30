import logo from "../images/ai_club.png";
import location from "../images/location.png"
import aiclub from "../images/aiclub.jpg"
import "./AI_Club.css"
import CountdownTimer from "./DCEI Components/CountdownTimer";

export default function AI_club() {

    function Upcoming() {
        const date="2023-11-04T23:59:59";
        return (
            <div className="events2">
                <div className="month">
                    February 2023
                </div>
                <div className="eventbox">
                    <div className="datebox">
                        <div className="dateno" style={{ "font-size": "40px", }}>24 </div>
                        Feb
                    </div>
                    <div className="eventDetails">
                        <div className="name">Guest Hands on Blockchain Session</div>
                        <div className="location"> <img src={location} style={{ "width": "15px", "height": "15px" }} alt="location" />   DA-IICT Auditorium, near Reliance Chowkdi, 390040</div>
                        <a href="/ok">Find out more</a>
                        <CountdownTimer targetDate={date}/>

                    </div>
                </div>
            </div>
        )
    }


    function Past() {
        return (
            <div className="events2">
                <div className="month">
                    February 2023
                </div>
                <div className="eventbox">
                    <div className="datebox">
                        <div className="dateno" style={{ "font-size": "40px", }}>24 </div>
                        Feb
                    </div>
                    <div className="eventDetails">
                        <div className="name">Guest Hands on Blockchain Session</div>
                        <div className="location"> <img src={location} style={{ "width": "15px", "height": "15px" }} alt="location" />   DA-IICT Auditorium, near Reliance Chowkdi, 390040</div>
                        <a href="/ok">Find out more</a>

                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="aipage">
            <div className="heading_section">
                <img className="logo" src={logo} alt="logo"></img>
                <div className="club_heading">AI CLUB</div>
            </div>
            <div className="mainSection">
                <div className="upcomingEvents">
                    <h1>Upcoming Events</h1>
                    <Upcoming />
                </div>

                <div className="pastEvents">
                    <h1>Past Events</h1>
                    <Past />
                </div>

            </div>
            <div className="aboutus">
                <h1>About us</h1>
                <div className="aboutusflex">
                <img src={aiclub} alt="aiclub" ></img>
                <div>
                We're on a mission to educate and raise awareness about AI and its applications.
                </div>
                </div>



            </div>
            <div className="members">
                <h1>Members</h1>
            <div className="member-card">
            
            <div className="mycard">
                <h2><b>Nisarg Suthar</b></h2>
                <h4>Deputy Convener</h4>
                <p>Btech Mnc 2020</p>
            </div>
            <div className="mycard">
                <h2><b>Dreamy Pujara</b></h2>
                <h4>Convener</h4>
                <p>Mtech ICT 2022</p>
            </div>

            </div>
            <center><a href="/"><button>Go home</button></a></center>
            </div>
            
        </div>
    )
}