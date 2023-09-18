import React, {FC} from 'react';
import {Section} from "./Section";
import {ExpandableText} from "./ExpandableText";
import {Skills} from "./Skills";

interface Props {
}

export const Education: FC<Props> = (props) => {
    return (
        <Section alignment={'left'}>
            <h2>Education</h2>
            <h3>Northeastern University</h3>
            <h4>2017 - 2021 | Boston, MA</h4>
            <h4>
                Bachelor of Science in Cybersecurity<br/>
                Minor in Mathematics<br/>
                <i>Summa Cum Laude</i>
            </h4>
            <ExpandableText text={'Relevant Coursework'}>
                <ul className={'list-container'}>
                    <div className={'list'}>
                        <li>Algorithms & Data Structures</li>
                        <li>Networks & Distributed Systems</li>
                        <li>Software Development</li>
                        <li>Object-Oriented Design</li>
                        <li>Network Security</li>
                        <li>Computer Systems</li>
                        <li>Systems Security</li>
                        <li>Cryptography</li>
                        <li>Theory of Computation</li>
                    </div>
                    <div className={'list'}>
                        <li>Software Vulnerabilities & Security</li>
                        <li>Foundations of Cybersecurity</li>
                        <li>Fundamentals of CS 1 & 2</li>
                        <li>Discrete Structures</li>
                        <li>Probability & Statistics</li>
                        <li>Statistics & Stochastic Processes</li>
                        <li>Embedded Design: Robotics</li>
                        <li>Differential Equations & Linear Algebra</li>
                        <li>Linear Algebra</li>
                    </div>
                </ul>
            </ExpandableText>
            <Skills
                proficient={['Java', 'Python', 'Git']}
                knowledgeable={['AWS', 'C', 'C++', 'Racket', 'LaTeX']}
                familiar={['AMD64 Assembly']}
            />
        </Section>
    );
}

export default Education;