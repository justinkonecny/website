import React, {Component} from 'react';
import '../css/Timeline.scss';

export class TimelineElement extends Component {
    constructor(props) {
        super(props);
        this.setDotCoordinates = this.setDotCoordinates.bind(this);
        this.watchDot = this.watchDot.bind(this);

        this.offset = window.innerHeight / 2;

        const styleDot = {
            top: this.props.dotTop ? this.props.dotTop : '50px'
        };

        const styleContent = {
            width: this.props.textOnly ? '60%' : '100%'
        };

        const styleSection = {
            height: this.props.height ? 'calc(' + this.props.height  + ' - 20vh)' : 'auto', // height - TopBottomPadding
            display: this.props.display ? this.props.display : 'block'
        };

        const styleLine = {
            top: this.props.start ? '50px' : 0,
            bottom: 0
        };

        this.state = {
            dot: styleDot,
            content: styleContent,
            section: styleSection,
            line: styleLine,
            isFilled: this.props.start
        };
    }

    setDotCoordinates() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const rect = this.getOffset(this.props.dotId);
        const dotY = rect.top - 10 + rect.height * 0.5;  // posTop - (1/2)(dotHeight) + (1/2)(elementHeight)
        if (dotY !== this.state.dot.top) {
            this.setState({
                dot: {
                    top: dotY
                },
                line: {
                    top: this.props.start ? dotY : 0
                },
                isFilled: this.props.start || scrollTop > this.state.dot.top - this.offset
            });
        }
    }

    watchDot() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (!this.state.isFilled && scrollTop > this.state.dot.top - this.offset) {
            this.setState({isFilled: true});
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.setDotCoordinates);
        window.addEventListener('scroll', this.watchDot);
        setTimeout(this.setDotCoordinates, 100);
        this.setDotCoordinates();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setDotCoordinates);
        window.removeEventListener('scroll', this.watchDot);
    }

    getOffset(elementId) {
        const rect = document.getElementById(elementId).getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft,
            width: rect.width,
            height: rect.height,
            x: rect.x,
            y: rect.y,
        }
    }

    render() {
        let dotClass = 'timeline-dot';
        dotClass += this.props.start ? ' timeline-dot-start' : '';
        dotClass += !this.props.start && this.state.isFilled ? ' timeline-dot-filled' : '';

        return (
            <div>
                <div className={'timeline-section'} style={this.state.section}>
                    <div className={'timeline-content'} style={this.state.content}>
                        {this.props.children}
                    </div>
                    <div className={'timeline-line'} style={this.state.line}/>
                </div>
                <div className={dotClass} style={this.state.dot}/>
            </div>
        );
    }
}
