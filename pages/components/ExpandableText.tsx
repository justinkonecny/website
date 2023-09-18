import React, {FC, PropsWithChildren, useState} from 'react';
import style from '../../styles/ExpandableText.module.css';

interface Props {
    text: string;
}

export const ExpandableText: FC<PropsWithChildren<Props>> = ({text, children}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const plusClass = [style.plus];
    if (isExpanded) {
        plusClass.push(style.x);
    }

    return (
        <div className={style.expandableContainer}>
            <div className={style.expandableHeader}>
                <h5>{text}</h5>
                <button className={style.plusBtn} onClick={() => setIsExpanded(!isExpanded)}>
                    <div className={plusClass.join(' ')}/>
                </button>
            </div>
            <div className={isExpanded ? style.expandableContent : style.expandableHidden}>
                {children}
            </div>
        </div>
    );
}

export default ExpandableText;