import React, {FC, PropsWithChildren} from 'react';
import styles from '../../styles/Section.module.css';

interface Props {
    isFullHeight?: boolean;
    alignment?: 'left';
}

export const Section: FC<PropsWithChildren<Props>> =
    ({
         isFullHeight,
         alignment,
         children
     }) => {
        let style = [styles.sectionContainer];
        if (isFullHeight) {
            style.push(styles.sectionContainerFullHeight);
        }

        const contentStyle = [styles.sectionContent];
        if (alignment === 'left') {
            contentStyle.push(styles.sectionLeft)
        }

        return (
            <div className={style.join(' ')}>
                <div className={contentStyle.join(' ')}>
                    {children}
                </div>
            </div>
        );
    }
