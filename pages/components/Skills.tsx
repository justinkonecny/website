import React, {FC} from 'react';
import style from '../../styles/Skills.module.css';

interface Props {
    header?: string;
    proficient?: string[];
    knowledgeable?: string[];
    familiar?: string[];
}

export const Skills: FC<Props> = ({
                                      header,
                                      proficient,
                                      knowledgeable,
                                      familiar,
                                  }) => {

    return (
        <div className={header ? style.highlight : style.highlightNoHeader}>
            {header && (<h3 className={style.highlightTitle}>{header}</h3>)}
            <div className={style.highlightSkills}>
                {proficient && proficient.map(s =>
                    (<div key={s}
                          className={[style.skillAll, style.highlightSkill, style.skillProficient].join(' ')}>{s}</div>)
                )}
                {knowledgeable && knowledgeable.map(s =>
                    (<div key={s}
                          className={[style.skillAll, style.highlightSkill, style.skillKnowledgeable].join(' ')}>{s}</div>)
                )}
                {familiar && familiar.map(s =>
                    (<div key={s}
                          className={[style.skillAll, style.highlightSkill, style.skillFamiliar].join(' ')}>{s}</div>)
                )}
            </div>
        </div>
    );
}
