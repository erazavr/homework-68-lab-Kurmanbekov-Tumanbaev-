import React, {Component} from 'react';
import './WatchList.css'

class WatchList extends Component {
    render() {
        return (
            <div className='list'>
                    <p className='list-field'>{this.props.name}</p>
                <button className='list-btn' onClick={this.props.remove}>x</button>
            </div>
        );
    }
}

export default WatchList;