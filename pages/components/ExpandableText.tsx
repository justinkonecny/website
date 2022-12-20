import React, {FC, PropsWithChildren, useState} from 'react';
import style from '../../styles/ExpandableText.module.css';

interface Props {
    text: string;
}

export const ExpandableText: FC<PropsWithChildren<Props>> = ({text, children}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const plusClass = ['plus'];
    if (isExpanded) {
        plusClass.push('x');
    }

    return (
        <div className={style.expandableContainer}>
            <div className={style.expandableHeader}>
                <h5>{text}</h5>
                <button />
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
