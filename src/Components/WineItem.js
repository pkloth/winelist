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
        const {title, type, country, producer, year, description, price} = this.props
        return (
            <div className="WineItem">
                <h3 className="WineItem__title">{producer}, {title}, {year}</h3>
                <div className="WineItem__price">
                  DKK  {price}
                </div>
                <div className="WineItem__content">
                    <div className="WineItem__info">
                        <p>Information:</p>
                        <table className="WineItem__infoTable">
                        <tbody>
                        <tr>
                            <td>Type</td>
                            <td>{type}</td>
                        </tr>
                        <tr>
                            <td>Country:</td>
                            <td>{country}</td>
                        </tr>
                        <tr>
                            <td>Producer:</td>
                            <td>{producer}</td>
                        </tr>
                        <tr>
                            <td>Year:</td>
                            <td>{year}</td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="WineItem__descriptionWrapper">
                        <div className="WineItem__descriptionToggle" onClick={this.toggleClass.bind(this)}>
                            <p>Description</p>
                        </div>
                        <div className={this.state.showDescription ? "WineItem__description show" : "WineItem__description"}>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default WineItem;