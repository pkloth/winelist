import React, {Component} from 'react';
import './WineList.css';
import WineItem from './WineItem';

class WineList extends Component {
    render() {
        const {bottles} = this.props

        return (
            <ul className="Winelist">
                { bottles.map ( (bottle, i) => (
                    <li className="Winelist__item" key={i}>
                        <WineItem
                            title = { bottle.name}
                            type = { bottle.type}   
                            producer = {bottle.producer}
                            country = {bottle.country}
                            year = {bottle.year}
                            description = {bottle.description}
                            price = {bottle.price}
                        />
                    </li>
                ))}
            </ul>
        )
    }
}

export default WineList