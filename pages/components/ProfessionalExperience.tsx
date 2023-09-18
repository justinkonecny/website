import React, {FC} from 'react';
import {Section} from "./Section";
import {ExpandableText} from "./ExpandableText";
import {Skills} from "./Skills";

interface Props {
}

export const ProfessionalExperience: FC<Props> = (props) => {
    return (
        <Section alignment={'left'}>
            <h2>Professional Experience</h2>

            <h3>Meta</h3>
            <h4>Privacy Engineer</h4>
            <h4>February 2022 - Present | Menlo Park, CA</h4>

            <ExpandableText text={'Role + Responsibilities'}>
                <ul className={'list-container'}>
                    <div className={'list'}>
                        <li>Led the design and development of a Hack / React web app to power the computation, storage,
                            and integrations required to quantify the impact of thousands of privacy incidents, enabling
                            risk-quantification and incident prioritization across multiple teams.
                        </li>
                        <li>Enhanced and scaled a tool by updating the data consumed and produced to support all teams
                            in the organization, providing cross-functional insights on privacy risk and product
                            weaknesses.
                        </li>
                        <li>Added new training features and refined training dataset, improving the accuracy and recall
                            of a Python supervised machine learning model, enabling earlier mitigation and remediation
                            of hundreds of newly identified technical privacy incidents.
                        </li>
                        <li>Reduced data discrepancies and defined a single source of data for thousands of incidents by
                            architecting and developing a vulnerability database in Hack.
                        </li>
                    </div>

                </ul>
            </ExpandableText>
            <Skills
                proficient={['Hack', 'React', 'Python', 'GraphQL', 'SQL']}
                knowledgeable={['Machine Learning', 'Mercurial']}
            />
            <Skills
                proficient={['Root Cause Analysis', 'Variant Analysis', 'Mitigation Validation',
                    'Data Lineage Analysis', 'Impact Data Analysis']}
            />

            <h3>Facebook</h3>
            <h4>Privacy Engineering Intern</h4>
            <h4>May 2021 - August 2021 | Menlo Park, CA</h4>
            <ExpandableText text={'Role + Responsibilities'}>
                <ul className={'list-container'}>
                    <div className={'list'}>
                        <li>Led the design and development of a Hack / React web app to power the computation, storage,
                            and integrations required to quantify the impact of thousands of privacy incidents, enabling
                            risk-quantification and incident prioritization across multiple teams.
                        </li>
                        <li>Enhanced and scaled a tool by updating the data consumed and produced to support all teams
                            in the organization, providing cross-functional insights on privacy risk and product
                            weaknesses.
                        </li>
                        <li>Added new training features and refined training dataset, improving the accuracy and recall
                            of a Python supervised machine learning model, enabling earlier mitigation and remediation
                            of hundreds of newly identified technical privacy incidents.
                        </li>
                        <li>Reduced data discrepancies and defined a single source of data for thousands of incidents by
                            architecting and developing a vulnerability database in Hack.
                        </li>
                    </div>

                </ul>
            </ExpandableText>
            <Skills
                proficient={['Hack', 'React', 'SQL']}
            />
            <Skills
                proficient={['Root Cause Analysis', 'Variant Analysis', 'Mitigation Validation']}
            />

            <h3>Places For Less</h3>
            <h4>Full-Stack Software Engineering Co-op</h4>
            <h4>May 2020 - January 2021 | Boston, MA</h4>
            <ExpandableText text={'Role + Responsibilities'}>
                <ul className={'list-container'}>
                    <div className={'list'}>
                        <li>Architected and developed full-stack solutions using PHP, Laravel, Vue.js, and MariaDB for
                            anonymously tracking web users, email subscriptions, and customizable pages for A / B tests.
                        </li>
                        <li>Integrated a PHP API with Twilio’s library, Gmail’s library, and Salesforce’s REST API to
                            analyze and track user and client actions to improve sales team efficiency and
                            effectiveness.
                        </li>
                        <li>Wrote SQL queries and leveraged Laravel ORM to aggregate and present metrics from tens of
                            thousands of records to evaluate and provide insight into various marketing efforts.
                        </li>
                    </div>

                </ul>
            </ExpandableText>
            <Skills
                proficient={['PHP', 'Laravel', 'Vue.js', 'SQL', 'Git', 'Salesforce API', 'Twilio API']}
            />

            <h3>Rocket Software</h3>
            <h4>Software Engineering Co-op</h4>
            <h4>July 2019 - December 2019 | Waltham, MA</h4>
            <ExpandableText text={'Role + Responsibilities'}>
                <ul className={'list-container'}>
                    <div className={'list'}>
                        <li>Implemented new features and bug fixes in a React / TypeScript web application that
                            interacted with a REST API to enable efficiently managing multiple computer systems.
                        </li>
                        <li>Created utilities for use in a Java server shared by five projects to register, track, log,
                            and wait for hundreds of threads to ensure a safe and complete system shutdown.
                        </li>
                    </div>

                </ul>
            </ExpandableText>
            <Skills
                proficient={['Java', 'Python', 'React', 'TypeScript', 'Git']}
                knowledgeable={['Bash']}
            />
        </Section>
    );
}

export default ProfessionalExperience;