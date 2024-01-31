import React, { useState } from "react"

const Header = ({ }) => {
    const [show, setShow] = useState(false)
    const [selection, setSelection] = useState("about")

    const toggleShow = () => {
        (show === true ? setShow(false) : setShow(true))
    }

    return (
        <div className="headerContainer">
            <div className="mainTitle">THE COMPLETE SIGHT AND SOUND GREATEST FILMS OF ALL TIME DATABASE</div>
            {show == false ? (
                <div className="infotext" onClick={toggleShow}>Click for more information <b>&#709;</b></div>
                ) : null
            }

            {show ? (
                <div>
                    <div className="headerSelectionContainer">
                        <div className="headerSelection" id={selection == "about" ? "headerSelected" : null} onClick={() => setSelection("about")}>About</div>
                        <div className="headerSelection" id={selection == "paper" ? "headerSelected" : null} onClick={() => setSelection("paper")}>White Paper</div>
                        <div className="headerSelection" id={selection == "data" ? "headerSelected" : null} onClick={() => setSelection("data")}>Data</div>    
                    </div>
                    {selection == "about" ? (
                        <div className="information">
                            <p>This database is a collection of every vote that has ever been cast during the history of the Sight and Sound Greatest Films of All Time Poll. Run by the British Film Institute, the poll is conducted once every ten years, inaugurally in 1952 and most recently in 2022.
                            </p>
                            <p>As one of the longest running and most robust sources of film opinion, the Sight and Sound poll has a lot to reveal about the way the film canon changes over time.  However, the way the Sight and Sound polls are typically consumed online, as separate ranked lists for each decade, does not encourage analysis of how a film's rank has changed over the course of the poll.
                            </p>
                            <p>This project combines the results of every Sight and Sound poll into one centralized database. Each film's rankings from every Sight and Sound poll are displayed on a card so that, without having to navigate elsewhere, a user can see how a film's ranking has changed.  Combined with a series of filters, the results can answer targeted questions about how the film canon is evolving overall and in terms of release year, country of origin, and more.
                            </p>
                            <p>Data collected and website built by Katie Donia
                            </p>

                            <div className="infotext" onClick={toggleShow}>Click for less information <b>&#708;</b></div>
                        </div>
                    ) : null}

                    {selection == "data" ? (
                        <div className="information">
                            <p>To view or use the data I collected for this project, including all the data that feed this database as well as transcriptions of every ballot from every Sight and Sound poll, <a target="_blank" href="https://docs.google.com/spreadsheets/d/1iQBA6FbsACr6iuc08Al4F3oR5QnvH8W5BoJMYn3_YJA/edit?usp=sharing">click here.</a>
                            </p>

                            <div className="infotext" onClick={toggleShow}>Click for less information <b>&#708;</b></div>
                        </div>
                    ) : null}

                
                    {selection == "paper" ? (
                        <div className="information">
                            <p>To read more about the project, <a target="_blank" href="https://drive.google.com/file/d/1YNqqAJQkz-secjsLRZtjAeHVvlPcICfZ/view?usp=sharing">click here.</a>
                            </p>

                            <div className="infotext" onClick={toggleShow}>Click for less information <b>&#708;</b></div>
                        </div>
                    ) : null}
                </div>
            ) : null}
        </div>
    )
}

export default Header