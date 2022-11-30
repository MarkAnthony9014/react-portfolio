import React from 'react';
import coverImage from '../../assets/cover/mark-cover-image.jpg';

function AboutMe() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default AboutMe; 