import React, {Component} from 'react';
import './AddWineForm.css';

class AddWineForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const newWine = {
            name: this.refs.WineName.value,
            type: this.refs.WineType.value,
            producer: this.refs.WineProducer.value,
            country: this.refs.WineCountry.value,
            year: this.refs.WineYear.value,
            description: this.refs.WineDescription.value,
            price: this.refs.WinePrice.value
        }

        const newData = [...this.props.data, newWine];
        this.props.updateList(newData);
        this.props.addWine(newWine);
        this.refs.AddWineForm.reset();
    }

    render() {
        return (
            <form className="AddWineForm" ref="AddWineForm" onSubmit={this.handleSubmit}>
                <h2 className="AddWineForm__title">Add wine</h2>
                <div className="AddWineForm__inputs">
                    <div className="AddWineForm__inputWrapper">
                        <label 
                            className="AddWineForm__label" 
                            htmlFor="WineName">
                            Name
                        </label>
                        <input 
                            className="AddWineForm__input" 
                            ref="WineName"
                            type="text" 
                            placeholder="Enter wine name"
                        />
                    </div>
                    <div className="AddWineForm__inputWrapper">
                        <label 
                            className="AddWineForm__label" 
                            htmlFor="WinePrice">
                            Price
                        </label>
                        <input 
                            className="AddWineForm__input" 
                            ref="WinePrice"  
                            type="number" 
                            placeholder="Enter price"
                        />
                    </div>  
                    <div className="AddWineForm__inputWrapper">
                        <label 
                            className="AddWineForm__label" 
                            htmlFor="WineType">
                            Type
                        </label>
                        <input 
                            className="AddWineForm__input" 
                            ref="WineType"
                            type="text" 
                            placeholder="Enter type"
                        />
                    </div>
                    <div className="AddWineForm__inputWrapper">
                        <label 
                            className="AddWineForm__label" 
                            htmlFor="WineProducer">
                            Producer
                        </label>
                        <input 
                            className="AddWineForm__input" 
                            ref="WineProducer"
                            type="text" 
                            placeholder="Enter producer"
                        />
                    </div>
                    <div className="AddWineForm__inputWrapper">
                        <label 
                            className="AddWineForm__label" 
                            htmlFor="WineCountry">
                            Country
                        </label>
                        <input 
                            className="AddWineForm__input"  
                            ref="WineCountry" 
                            type="text" 
                            placeholder="Enter country"
                        />
                    </div>
                    <div className="AddWineForm__inputWrapper">
                        <label 
                            className="AddWineForm__label" 
                            htmlFor="WineYear">
                            Year
                        </label>
                        <input 
                            className="AddWineForm__input"  
                            ref="WineYear" 
                            type="number" 
                            placeholder="Enter year"
                        />
                    </div>
                    <div className="AddWineForm__inputWrapper">
                        <label 
                            className="AddWineForm__label" 
                            htmlFor="WineDescription">
                            Description
                        </label>
                        <textarea 
                            className="AddWineForm__input"  
                            ref="WineDescription" 
                            type="text" 
                            placeholder="Enter description"
                        />
                    </div>
                    <button className="AddWineForm__button" type="submit"> Add wine</button>
                </div>
            </form>
        )
    }
}

export default AddWineForm;