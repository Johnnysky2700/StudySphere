import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={() => setPlayState(true)} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Toworrow's Learders Today</h2>
                <p>Embark on a transformative journey with our university, where innovation
                    meets tradition to shape the leaders of tomorrow. Our commitment to excellence
                    ensures that students are equipped with the knowledge and skills needed to make
                    a meaningful impact in their chosen fields.</p>
                <p>With a focus on innovation, hand-on learning, and personalized mentorship,
                    our programs prepare aspiring educators to make a meaningfulimpart in classrooms,
                    schools, and cummunities. we foster an environment where curiosity thrives and
                    potential is limitless.</p>
                <p>Whether you're aspire to become a student, educator, admistrator,counselor, or
                    community member, our university offers opportunities to grow, learn, and contribute
                    to a brighter future and to unlock your full potential in shaping the future of
                    education</p>
            </div>
        </div>
    )
}

export default About