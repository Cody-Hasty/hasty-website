import * as React from "react";
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai"
import psiPic from "../../images/psi.jpg"

class Notes extends React.Component {
    render() {
        return (
            <div className="notes">
                <div className="top-bar">
                    <div className="tabs"></div>
                    <div className="exit-button" >
                        <Link to="/">
                            <AiFillCloseCircle className="exit-icon" />
                        </Link>
                    </div>
                </div>
                <div className="notes-frame">
                    <div className="notes-document">
                        <h1 className="notes-header">Overhauling the STAR method</h1>
                        <hr />
                        <p className="notes-paragraph">
                            The STAR method: Situation, Task, Action, Result. I'm not alone in 
                            my struggle to recall what each letter stands for, and recalling this 
                            acronym in the heat of an interview is twice as difficult. Going further,
                            even the different letters require a memorized definition; What really sets
                            apart the "Situation" from the "Task"? In describing the task, there requires
                            some explanation of the "why", both of which are truly intertwined in practice.
                            In seperating both of these concepts so decidedly, the natural flow of explanation
                            is disrupted, and answers dwindle down to little more than checking off the next of
                            several bullet points. 
                        </p>
                        <p className="notes-paragraph">
                            In simplifying the natural rhythm of answering traditional STAR questions, I found 
                            myself coming back to my own alternative method of answering, with a much easier to remember 
                            acronym while interviewing. The new method I employ is the "PSI" approach: Problem, Solution,
                            Impact. The problem in this case is much easier to define, simply, "What needed a solution
                            and how did the need for that solution arise?". The solution contains the steps that were 
                            necessary to solve the problem, a combination of both the task and action from the STAR method.
                            The impact remains the same as the result from the STAR method, however, the specific terminology
                            encouraged me to speak much more broadly on how my actions affected those around me.
                            I hope that this information proves useful to others, and that I might
                            one day see it in use by another interviewee while on the other side of the interviewing table.
                        </p>
                        <p>Best Wishes,</p>
                        <p>Brittany Hasty</p>
                        <img className="notes-pic" src={psiPic} alt="PSI sticky note on my desk" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Notes;