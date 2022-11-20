import React, {FC} from 'react';
import {Skills} from "./Skills";

interface Props {

}

export const AllSkills: FC<Props> = (props) => {
    return (
        <div className={'highlights'}>
            <Skills header={'Languages'}/>
        </div>
    );
}
