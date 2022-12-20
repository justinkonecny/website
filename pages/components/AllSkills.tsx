import React, {FC} from 'react';
import {Skills} from "./Skills";
import style from '../../styles/AllSkills.module.css';

interface Props {

}

export const AllSkills: FC<Props> = (props) => {
    return (
        <div className={style.highlights}>
            <Skills header={'Languages'}
                    proficient={[
                        'Hack', 'PHP', 'Python', 'Java', 'React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Laravel'
                    ]}
                    knowledgeable={['GraphQL', 'Vue.js', 'SQL', 'C', 'C++', 'Go']}
            />
            <Skills header={'Privacy Skills'}
                    proficient={[
                        'Software Development', 'Root Cause Analysis', 'Variant Analysis', 'Incident Impact Analysis',
                        'Mitigation Validation'
                    ]}
            />
            <Skills header={'Software'}
                    proficient={['Linux', 'Docker', 'Jira', 'JetBrains', 'VS Code']}
                    knowledgeable={['AWS', 'Salesforce', 'GDB', 'VIM', 'XCode']}
            />
            <Skills header={'Interests'}
                    proficient={['Dogs', 'Running', 'Snowboarding', 'Traveling', 'Cooking']}
            />
        </div>
    );
}
