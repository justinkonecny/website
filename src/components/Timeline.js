import React, {Component} from 'react';
import '../css/Timeline.scss';

export class Timeline extends Component {
    render() {
        return (
            <div className={'timeline'}>
                {this.props.children}
            </div>
        );
    }
}
