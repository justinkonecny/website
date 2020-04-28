import React, {Component} from 'react';
import '../css/ExpandableText.scss';
import '../css/Home.scss';

export class ExpandableText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };

        this.toggleExpand = this.toggleExpand.bind(this);
    }

    toggleExpand() {
        const expanded = this.state.isExpanded;
        this.setState({isExpanded: !expanded});
    }

    render() {
        return (
            <div className={'expandable-container'}>
                <div className={'expandable-header'}>
                    <h5>{this.props.text}</h5>
                    <button className={'plus-btn'} onClick={this.toggleExpand}>
                        <div className={this.state.isExpanded ? 'plus x' : 'plus'}/>
                    </button>
                </div>
                <div className={this.state.isExpanded ? 'expandable-content' : 'expandable-hidden'}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
