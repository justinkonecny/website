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
            height: this.props.height ? 'calc(' + this.props.height + ' - 20vh)' : 'auto', // height - TopBottomPadding
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
            dotAbsolutePos: 0,
            isFilled: this.props.filled !== undefined ? this.props.filled : (this.props.start === true)
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.setDotCoordinates);
        if (this.props.filled === undefined) {
            window.addEventListener('scroll', this.watchDot);
        }
        setTimeout(this.setDotCoordinates, 100);
        this.setDotCoordinates();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setDotCoordinates);
        window.removeEventListener('scroll', this.watchDot);
    }

    setDotCoordinates() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offset = this.getOffset(this.props.dotId);
        if (offset !== this.state.dot.top) {
            this.setState({
                dot: {
                    top: offset.dotRelative
                },
                line: {
                    top: this.props.start ? offset.dotAbsolute : 0
                },
                dotAbsolutePos: offset.dotAbsolute,
                isFilled: (this.props.filled !== undefined) ? this.props.filled : (this.props.start || scrollTop > this.state.dotAbsolutePos - this.offset)
            });
        }
    }

    watchDot() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (!this.state.isFilled && scrollTop > this.state.dotAbsolutePos - this.offset) {
            this.setState({isFilled: true});
        }
    }

    getOffset(elementId) {
        const element = document.getElementById(elementId);
        const elementBounds = element.getBoundingClientRect();
        const parentBounds = element.closest('.timeline-section').getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const y = elementBounds.y - parentBounds.y;
        const heightAdjustment = (0.5 * elementBounds.height) - 6;  // (1/2)(elementHeight) - (1/2)(dotHeight + borderSize)

        return {
            dotRelative: y + heightAdjustment,
            dotAbsolute: elementBounds.y + heightAdjustment + scrollTop
        };
    }

    render() {
        let dotClass = 'timeline-dot';
        if (this.props.filled !== undefined) {
            dotClass += this.props.filled ? ' timeline-dot-start' : '';
        } else {
            dotClass += this.props.start ? ' timeline-dot-start' : '';
            dotClass += !this.props.start && this.state.isFilled ? ' timeline-dot-filled' : '';
        }

        return (
            <div>
                <div className={'timeline-section'} style={this.state.section}>
                    <div className={'timeline-content'} style={this.state.content}>
                        {this.props.children}
                    </div>
                    <div className={'timeline-line'} style={this.state.line}/>
                    <div className={dotClass} style={this.state.dot}/>
                </div>
            </div>
        );
    }
}
