import React, {Component} from 'react';
import './WineItem.css';

class WineItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDescription: false
        }
    }

    toggleClass() {
        const currentDescriptionState = this.state.showDescription;
        this.setState({
            showDescription: !currentDescriptionState
        })
    }

    render() {
        const {wine} = this.props
        return (
            <div className="WineItem">
                <div className="WineItem__header">
                    <div className="WineItem__info">
                        <h3 className="WineItem__title">{wine.name}, {wine.producer}, {wine.year}</h3>
                        <div className="WineItem__price">DKK  {wine.price}</div>

                        <div className="WineItem__descriptionWrapper">
                        <div className="WineItem__descriptionToggle" onClick={this.toggleClass.bind(this)}>
                            <p>Description</p>
                        </div>
                        <div className={this.state.showDescription ? "WineItem__description show" : "WineItem__description"}>
                            <p>{wine.description}</p>
                        </div>
                        <div className="WineItem__short-info">
                        <p>Information:</p>
                        <table className="WineItem__infoTable">
                        <tbody>
                        <tr>
                            <td>Type</td>
                            <td>{wine.type}</td>
                        </tr>
                        <tr>
                            <td>Country:</td>
                            <td>{wine.country}</td>
                        </tr>
                        <tr>
                            <td>Producer:</td>
                            <td>{wine.producer}</td>
                        </tr>
                        <tr>
                            <td>Year:</td>
                            <td>{wine.year}</td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                       
                    </div>
                    <div className="WineItem__image">
                        <img src={wine.imgUrl} alt="wine.name"/>
                    </div>
                </div>
                <div className="WineItem__content">
                </div>               
            </div>
        )
    }
}

export default WineItem;