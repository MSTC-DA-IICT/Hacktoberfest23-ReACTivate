import { Link } from 'react-router-dom';
import SambhavEvents from './Sambhav Components/SambhavEvents';
import './Sambhav.css'

const Sambhav = () => {
    return (
        <div>

            <div className="sambhav-page">
            <Link to="/" className="btn btn-primary mb-4 mt-2 ">
            Go to Home Page
            </Link>
                <div className="sambhav-top">
                    <img className="daiict-logo" src="https://www.daiict.ac.in/themes/daiict/images/logo-new.png" />
                    <h1 className="sambhav-heading">SAMBHAV CLUB</h1>
                </div>
                <h1 className="upcoming-events-sambhav">UPCOMING EVENTS</h1>
                <div className="sambhav-content" >
                    <div className="sambhav-event-div">
                        <img className="sambhav-image" src='../sambhavImages/blood_donation.png'></img>
                        <SambhavEvents className="particles"
                            heading={"BLOOD DONATION"}
                            paragraph={"We believe in the power of giving back to the community. Our blood donation campaign is a heartfelt endeavor to save lives and make a positive impact on the world. By donating blood, you can become a hero in someone's story. Join us in this noble cause to ensure a healthier, happier future for all. Together, we can make a life-saving difference."}
                            eventdate={"15 November 2023"}
                            venue={"Near Cafeteria,DAIICT"}
                            date={"2023-11-25T16:00:00"}
                        />
                    </div>
                    <div className="sambhav-event-div">
                        <img className="sambhav-image" src='../sambhavImages/books_donation.jpg'></img>
                        <SambhavEvents className="particles"
                            heading={"BOOKS DONATION"}
                            paragraph={"Our book donation campaign is a noble endeavor aimed at fostering a love for reading and education within our community. By contributing books, we are empowering individuals with the knowledge and imagination that books offer, creating a brighter future for all. Join us in this inspiring journey to make a meaningful impact through the power of literature."}
                            eventdate={"25 December 2023"}
                            venue={"Near LT, DAIICT"}
                            date={"2023-12-25T16:00:00"}
                        />
                    </div>
                    <div className="sambhav-event-div">
                        <img className="sambhav-image" src='../sambhavImages/clothes-donation.jpg'></img>
                        <SambhavEvents className="particles"
                            heading={"CLOTHES DONATION"}
                            paragraph={"Our clothes donation campaign is a compassionate initiative that provides warmth and comfort to those in need while promoting sustainability. By donating gently used clothing, we extend a helping hand to underserved communities and contribute to a more eco-friendly and inclusive world."}
                            eventdate={"14 January 2024"}
                            venue={"Near LT, DAIICT"}
                            date={"2024-01-14T16:00:00"}
                        />
                    </div>
                </div>
                <div className="about-club">
                    <h2>About Us</h2>
                    <p>Sambhav means possible. Sambhav, at DA-IICT is a group of students with a motive or interest or urge to bring about some positive change in the society. Sambhav organises various activities throughout the year. Book Sale is one of our prime activities where we sell old unused books at heavily discounted prices to students who wish to purchase them. We organise visits to nearby Orphanage and Deaf and Dumb School. These visits make students aware of the society they live in, making them more attached to various sections of the society as well as generate a sense of responsibility and connectedness. Another major event which we organise is the Blood Donation Camp where we organise a camp in the college premise itself, giving an opportunity the young budding youth of today a chance to serve the society. Sambhav strives to develop a positive and empathetic attitude in students towards the society which they are or will be a part of. Sambhav grows, adopts and adapts dynamically, thus attaining the sense of ‘We Make It Sambhav’</p>
                </div>
                <div className="about-club">
                    <h2> Contact Us</h2>
                    <p>Convener : Convener Name</p>
                    <p>Deputy Convener: Deputy Convener Name</p>

                </div>
            </div>
        </div>
    )
}
export default Sambhav;
