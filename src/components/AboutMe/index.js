import React from 'react';
import coverImage from '../../assets/cover/mark-cover-image.jpg';

function AboutMe() {
    return (
        <section className="my-5">
            <h1 id="about" className="">About Me</h1>
            <img src={coverImage} className="my-2" style={{ width: 500, height: 500 }} alt="cover" />
            <p>My name is Mark. I am a 32 year old Latino man, born and raised in San Antonio, Texas. My family is a hodge-podge of Latino cultures, ranging from Mexican, Argentinian, and Spanish. I come from a colorful family where it has been no simple task just to survive and succeed enough to get by. I have an 8 year old daughter, whom I take care of as a single father. She is Latin, and of African-American descent (from her mother's side). 

I have my certification as a Full Stack Web Developer, attained through a Full Stack Coding Bootcamp through University of San Antonio, Texas (UTSA, go Roadrunners!) I am seeking a role as a Junior Developer at company where I can show my ability to be unique and be an endless resource for others. I truly thrive in environments where I can continue learning and pushing myself to be more creative and sustainable in my ability as a developer. 

Currently, I am employed at Black Rifle Coffee as a Customer Service Representative (over 2 years now). Numerous times have I reached milestones, been selected and called out for my work ethic, my approachable demeanor, and my willingness to help others. I have received several "Employee Of The Month" honors, as well as "Highest Number Of Completed Tickets", "Highest Average Of Completed Tickets Per Hour honors through-out my 2+ years working at the company. 

I'm great with people, I take pride in my capacity to be compassionate, to accept constructive criticism, and to apply that to my work ethic and to grow as a person.</p>
        </section>
    );
}

export default AboutMe; 