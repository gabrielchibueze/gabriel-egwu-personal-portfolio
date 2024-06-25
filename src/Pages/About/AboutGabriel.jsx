// import React from "react";
// import { Link, Outlet, useParams, useSearchParams, NavLink } from 'react-router-dom'
import gabriel1 from "/public/images/gabriel1.jpeg"
import "./about-me.css"
import ImageDisplay from "../../Components/imageDisplayComponent/imageDisplay"
export default function About() {
    return (
        <div>
            <div className="top-about__section-welcome">
            <ImageDisplay props={{imageName: gabriel1, imageCaption: "Gabriel Photos", imageComment: "❝   I am excited by the way technology can solve problems in industries, allowing people to work together productively and give companies a competitive edge in the industry. ❞"}}/>
            </div>
            <h1>Life History</h1>
            <p>{`Gabriel Chibueze Egwu, fondly called Gabby. I am from a smalll village called Amangballa in Afikpo North Loal Government of Nigeria, Ebonyi State Nigeira.`}</p>
            <p>{`Being the 6th child in the family of 7, I had a lovely childhild while growing up. My elder siblings where always eager to show me to ropes of success as they wouldn't want me to make some mistakes they had already made. This was an opportunity I didn't take for granted. Growing up was not easy on us in terms of finance and educastion as we barely made it past meal times. However, I thank God for a wonderful family and parants I have.`} </p>
            <p>{`With big dreams and the love for knowledge, I was always inquisitive about things, tyring to study things and make meaning out of Life, I aspired to be an engineer as a career. Problem solving has been my greatest characteristics`}</p>
            <h1>Childhood</h1>
            <p>{`My dad was a business man who always carried hiss children along with the family bsinesss. Every weekend, from the age of 10, I usaully go to my dady's shop to learn and help out in some trade activies. My Daddies business "Enyinnia and Sons Ltd" which is currently in operation today in Afikpo North, Ebonyi State Nigeria has been a stepping stone for me towards mind developement and gearing me towards life ambitions of having a good business and entrepreneurial mindset.`} </p>
            <p>{`My Childhood experience was fun. very fun. I used to play a lot. build toy cars and aeroplanes with my hands by utilizing the then-available resources like tins, papers and plastics.  The passion I had for innovation and technology back then is waht motivated mee to study mechanical engineering in my first-degree.`}</p>
        </div>
    )
}