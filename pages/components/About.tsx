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
                        Hey there, I&apos;m Justin, a software engineer from NJ. I&apos;m currently living in the Bay
                        Area, and I&apos;m a <span className={'emphasis'}>Privacy Engineer</span> at Meta.
                    </p>
                    <p>
                        I love developing software across the stack, and I&apos;m always looking for new opportunities
                        to expand my skill set. I&apos;m looking for a position where I can make meaningful software
                        contributions to real products.
                    </p>
                </div>

                <div className={styles.aboutProfile}>
                    <div className={styles.profileCrop}>
                        <Image src={profileImage} className={styles.profileImg} width={400} alt={'Profile'}/>
                    </div>
                </div>
            </div>

            <AllSkills/>
        </Section>
    );
}
