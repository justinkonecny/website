import React, {FC} from 'react';
import {Skills} from "./Skills";
import style from '../../styles/AllSkills.module.css';

interface Props {

}

export const AllSkills: FC<Props> = (props) => {
    return (
        <div className={style.highlights}>
            <Skills header={'Languages, Libraries, & Frameworks'}
                    proficient={[
                        'Hack', 'PHP', 'GraphQL', 'Python', 'Laravel',  'React', 'JavaScript', 'TypeScript', 'Java', 'HTML', 'CSS',
                    ]}
                    knowledgeable={['Vue.js', 'SQL', 'C', 'C++', 'Go']}
            />
            <Skills header={'Other Software'}
                    proficient={['Git', 'Docker']}
                    knowledgeable={['AWS', 'Salesforce', 'GDB']}
            />
            <Skills header={'Privacy Skills'}
                    proficient={[
                        'Software Development', 'Root Cause Analysis', 'Variant Analysis', 'Incident Impact Analysis',
                        'Mitigation Validation', 'Remediation Validation', 'Data Lineage Analysis'
                    ]}
            />
            <Skills header={'Personal Interests'}
                    proficient={['Dogs', 'Running', 'Snowboarding', 'Traveling', 'Cooking']}
            />
        </div>
    );
}
