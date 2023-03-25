import React, {FC} from 'react';
import {Section} from "./Section";
import styles from "../../styles/About.module.css";
import profileImage from '../../assets/profile.jpeg';
import Image from "next/image";
import {AllSkills} from "./AllSkills";

interface Props {
}

export const About: FC<Props> = (props) => {
    return (
        <Section>
            <div className={styles.aboutSplit}>
                <div className={styles.aboutText}>
                    <h2>About Me</h2>
                    <p>
                        Hey there, I&apos;m Justin, a software engineer from New Jersey. I&apos;m currently living in
                        the New York area, with my pup, Jingle.
                    </p>
                    <p>
                        I&apos;m a <span className={'emphasis'}>Privacy Engineer</span> at <span
                        className={'emphasis'}>Meta</span>. I love developing software across the stack, and I&apos;m
                        always looking for new opportunities to expand my skill set. I&apos;m open to exploring
                        positions where I can make meaningful software contributions to real products.
                    </p>
                </div>

                <div className={styles.aboutProfile}>
                    <div className={styles.profileCrop}>
                        <Image src={profileImage} className={styles.profileImg} width={300} alt={'Profile'}/>
                    </div>
                </div>
            </div>

            <AllSkills/>
        </Section>
    );
}
