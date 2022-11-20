import React, {FC} from 'react';

interface Props {
    header: string;
    proficient?: [string];
    knowledgeable?: [string];
    familiar?: [string];
}

export const Skills: FC<Props> = ({
                                      header,
                                      proficient,
                                      knowledgeable,
                                      familiar,
                                  }) => {
    return (
        <div className={'highlight'}>
            <h3 className={'highlight-title'}>{header}</h3>
            <div className={'highlight-skills'}>
                <div className={'skill-all highlight-skill skill-proficient'}>Hack</div>
                <div className={'skill-all highlight-skill skill-knowledgeable'}>Go</div>
            </div>
        </div>
    );
}
