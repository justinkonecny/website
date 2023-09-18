import React, {createRef, FC, useEffect, useRef} from 'react';
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

    // ref used to animate child elements
    const ref = useRef<HTMLDivElement>(null);

    // setup event listeners for animating skills on hover
    useEffect(() => {
        const skills = Array.from(ref.current?.children ?? []);
        for (const skill of skills) {
            // on hover, add class to animate the skill
            skill.addEventListener('mouseover', function (e) {
                skill.classList.add(style.skillAnimation)
            })
            // on animation end, remove the animation class
            skill.addEventListener('animationend', function (e) {
                skill.classList.remove(style.skillAnimation)
            })
        }
    }, []);

    return (
        <div className={header ? style.highlight : style.highlightNoHeader}>
            {header && (<h3 className={style.highlightTitle}>{header}</h3>)}
            <div ref={ref} className={style.highlightSkills}>
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

export default Skills;