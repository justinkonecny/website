import React, {FC} from 'react';
import styles from '../../styles/Hero.module.css';
import {Section} from "./Section";

interface Props {
}

export const Hero: FC<Props> = (props) => {
    return (
        <Section isFullHeight={true}>
            <div className={styles.heroContent}>
                <h1>Hi, I&apos;m Justin.</h1>
                <p className={styles.subtitle}>
                    I&apos;m a <span className={'emphasis'}>Software Engineer</span>.
                </p>
            </div>
        </Section>
    );
}
