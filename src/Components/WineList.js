import React, {Component} from 'react';
import './WineList.css';

class WineList extends Component {
    render() {
        const {wines, handleClick} = this.props
        return (
            <ul className="Winelist">
                { wines.map ( (wine, i) => (
                    <li className="Winelist__item" key={i} onClick={handleClick.bind(this,wine)}> 
                        <p className="Winelist__item-title">{ wine.name }</p>
                        <p>{ wine.type} </p>
                    </li>
                ))}
            </ul>
        )
    }
}

export default WineList