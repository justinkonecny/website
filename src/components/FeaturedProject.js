import React, {Component} from 'react';
import '../css/FeaturedProject.scss';
import '../css/Home.scss';
import github from '../resources/github.svg';
import link from '../resources/link.svg';

export class FeaturedProject extends Component {

    constructor(props) {
        super(props);

        this.setupIcon = this.setupIcon.bind(this);


        const id = this.props.title.replace(' ', '_').toLowerCase();
        this.gitId = 'fp_git_' + id;
        this.externalId = 'fp_external_' + id;

        this.colorInactive = '#30B96E';
        this.colorHover = '#2C7F54';

        this.state = {
            gitHover: this.colorInactive,
            extHover: this.colorInactive
        }
    }

    componentDidMount() {
        this.setupIcon();
    }

    setupIcon() {
        if (this.props.linkGitHub) {
            const git = document.getElementById(this.gitId);

            git.addEventListener('mouseover', function (e) {
                this.setState({gitHover: this.colorHover});
            }.bind(this));

            git.addEventListener('mouseout', function (e) {
                this.setState({gitHover: this.colorInactive});
            }.bind(this));
        }

        if (this.props.linkExternal) {
            const ext = document.getElementById(this.externalId);

            ext.addEventListener('mouseover', function (e) {
                this.setState({extHover: this.colorHover});
            }.bind(this));

            ext.addEventListener('mouseout', function (e) {
                this.setState({extHover: this.colorInactive});
            }.bind(this));
        }

    }

    render() {
        return (
            <div className={this.props.isMobile ? 'project project-mobile' : 'project'}>
                <div className={this.props.isMobile ? 'project-descript project-descript-mobile' : 'project-descript'}>
                    <div className={'featured-project-header'}>
                        <h3>{this.props.title}</h3>
                        <div className={'featured-year'}>{this.props.year}</div>
                        {this.props.linkGitHub &&
                        <a id={this.gitId} className={'proj-icon'} href={this.props.linkGitHub} target={'_blank'} rel={'noopener noreferrer'}>
                            <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M12.7007 19.0539C12.636 19.0407 12.5828 19.014 12.5411 18.9738C12.4532 18.8892 12.4092 18.7832 12.4092 18.6563V16.422C12.4092 15.7372 12.2266 15.2359 11.8613 14.9183C12.2618 14.876 12.6218 14.8122 12.9416 14.7275C13.2612 14.6427 13.5916 14.505 13.9324 14.3144C14.2732 14.1239 14.5578 13.8891 14.7863 13.6102C15.0146 13.3312 15.2007 12.9608 15.3447 12.4982C15.4885 12.0357 15.5608 11.5046 15.5608 10.9045C15.5608 10.0503 15.283 9.32306 14.728 8.72292C14.9881 8.08056 14.9599 7.3605 14.6438 6.5627C14.447 6.49909 14.1622 6.53796 13.7898 6.67909C13.4176 6.8203 13.0942 6.97564 12.8203 7.14515L12.4198 7.39919C11.7662 7.2157 11.0915 7.12393 10.396 7.12393C9.7004 7.12393 9.02591 7.2157 8.37231 7.39919C8.25986 7.32167 8.11061 7.22608 7.92433 7.11329C7.73806 7.00046 7.44479 6.86437 7.04425 6.7055C6.64379 6.54671 6.34159 6.49898 6.13782 6.56259C5.82861 7.36036 5.80406 8.08045 6.0641 8.7228C5.50899 9.32295 5.23138 10.05 5.23138 10.9044C5.23138 11.5045 5.3034 12.0339 5.44741 12.4929C5.59135 12.9517 5.77586 13.3225 6.00067 13.6049C6.22546 13.8871 6.50827 14.1237 6.84919 14.3143C7.18993 14.5051 7.52021 14.6427 7.83983 14.7275C8.15964 14.8122 8.51968 14.8759 8.92015 14.9181C8.63918 15.1723 8.467 15.5358 8.40376 16.009C8.25614 16.0796 8.09802 16.1326 7.9295 16.1679C7.7608 16.2031 7.56056 16.2207 7.32873 16.2207C7.0969 16.2207 6.86673 16.1449 6.63844 15.9931C6.40996 15.8413 6.21516 15.6207 6.05346 15.3312C5.91994 15.1053 5.74957 14.9218 5.54232 14.7806C5.33497 14.6394 5.16113 14.5548 5.02059 14.5265L4.80987 14.4949C4.66224 14.4949 4.5605 14.5104 4.50421 14.5422C4.44791 14.5741 4.43041 14.6147 4.45153 14.6642C4.47261 14.7137 4.50417 14.7631 4.54633 14.8125C4.58852 14.8618 4.63415 14.9044 4.68332 14.9397L4.75712 14.9927C4.91169 15.0633 5.06448 15.1974 5.21558 15.3951C5.36668 15.5927 5.47728 15.7729 5.54753 15.9351L5.65292 16.1788C5.74429 16.4469 5.89886 16.6641 6.11659 16.83C6.33443 16.9959 6.56977 17.1018 6.8228 17.1475C7.07571 17.1935 7.31998 17.2183 7.55528 17.2216C7.7907 17.225 7.98569 17.213 8.14026 17.1845L8.38268 17.1424C8.38268 17.4104 8.38438 17.7246 8.388 18.0847C8.39151 18.4448 8.39332 18.6354 8.39332 18.6566C8.39332 18.7835 8.34769 18.8895 8.25632 18.9741C8.21288 19.0143 8.15833 19.0411 8.09265 19.0542'
                                    fill={this.state.gitHover}/>
                                <circle cx='10.002' cy='10.5' r='9.25' stroke={this.state.gitHover} strokeWidth='1.5'/>
                            </svg>
                        </a>}
                        {this.props.linkExternal &&
                        <a id={this.externalId} className={'proj-icon'} href={this.props.linkExternal} target={'_blank'} rel={'noopener noreferrer'}>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path
                                        d="M15.702 9.09998C15.302 9.09998 14.902 9.39998 14.902 9.89998V18.4H1.90195V5.39998H10.402C10.802 5.39998 11.202 5.09998 11.102 4.59998C11.002 4.09998 10.902 3.89998 10.502 3.89998H1.20195C0.801953 3.89998 0.501953 4.29998 0.501953 4.69998V19.2C0.501953 19.6 0.801953 19.9 1.30195 19.9H15.802C16.202 19.9 16.602 19.6 16.602 19.1V9.89998C16.502 9.49998 16.202 9.09998 15.702 9.09998Z"
                                        fill={this.state.extHover}/>
                                    <path
                                        d="M19.402 1.39998C19.402 1.29998 19.302 1.19998 19.202 1.19998C19.102 1.09998 19.102 1.09998 19.002 1.09998C18.902 1.09998 18.902 1.09998 18.802 1.09998C18.802 1.09998 18.802 1.09998 18.702 1.09998H12.402C12.002 1.09998 11.602 1.39998 11.602 1.89998C11.602 2.39998 11.902 2.69998 12.402 2.69998H16.902L9.80195 9.59998C9.50195 9.89998 9.50195 10.4 9.80195 10.7C10.002 10.8 10.202 10.9 10.402 10.9C10.602 10.9 10.802 10.8 10.902 10.7L18.002 3.49998V7.99998C18.002 8.39998 18.302 8.79998 18.802 8.79998C19.302 8.79998 19.502 8.39998 19.502 7.99998V1.69998C19.502 1.49998 19.502 1.49998 19.402 1.39998Z"
                                        fill={this.state.extHover}/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <path d="M0.00195312 0.5H20.002V20.5H0.00195312V0.5Z" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>}
                    </div>
                    {this.props.children}
                </div>
                <div className={'right-half'}>
                    <div className={this.props.isMobile ? 'img-container img-container-mobile' : 'img-container'}>
                        <img className={'img-proj'} src={this.props.imageSrc} alt={this.props.text}/>
                    </div>
                </div>
            </div>
        );
    }
}
