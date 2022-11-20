import React, {FC, PropsWithChildren} from 'react';
import styles from '../../styles/Section.module.css';

interface Props {
    isFullHeight?: boolean;
}

export const Section: FC<PropsWithChildren<Props>> =
    ({
         isFullHeight,
         children
     }) => {
        let style = [styles.sectionContainer];
        if (isFullHeight) {
            style.push(styles.sectionContainerFullHeight);
        }

        return (
            <div className={style.join(' ')}>
                <div className={styles.sectionContent}>
                    {children}
                </div>
            </div>
        );
    }
