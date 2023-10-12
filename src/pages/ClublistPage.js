let committees = [
    "Academic Committee",
    "AI Club",
     "Annual Festival Committee",
     "Cafeteria Management Committee",
     "Cultural Committee",
     "Hostel Management Committee",
     "ICT Committee",
     "Sports Committee",
     "Student Placement Cell",
     "TechSupport Committee",
     "Press Club",
     "Debate Club",
     "Dance Club",
     "DCEI",
     "Music Club",
     "DA-IICT Theatre",
     "Research Club",
     "Chess Club",
     "Sambhav",
     "Programming Club",
     "Film Club",
     "Developer Student Club",
     "Electronics Hobby Club",
     "Mircosoft Student Club"
 
 ]

export default function ClublistPage(){
    let rowgen = () =>{
        let allrows = [];
        let i=1;
        committees.forEach(club => {
            allrows.push(
                <tr key = {i} className="myrow">
                    <td  className="number">{i++}</td>
                    <td  className="clubname"><a href ={`/${i-1}`}>{club}</a></td>
                </tr>

            )
        });
      return (allrows);
   }
    return(
        <div className="container">
          <table className="mytable">
            <caption className="mycaption">Clubs and Committees at DA-IICT</caption>
            <thead>
              <tr key= "ok" className="headrow">
                <th className="headnumber">Sr no.</th>
                <th className="headname"  scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {rowgen()}
            </tbody>
          </table>
        </div>
    )
}