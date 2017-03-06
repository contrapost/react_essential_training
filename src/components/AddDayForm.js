/**
 * Created by alexandershipunov on 06/03/2017.
 **/
import {Component, PropTypes} from 'react';

export class AddDayForm extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        console.log('resort', this.refs.resort.value);
        console.log('date', this.refs.date.value);
        console.log('powder', this.refs.powder.checked);
        console.log('backcountry', this.refs.backcountry.checked);
    }

    render() {

        const { resort, date, backcountry, powder } = this.props;

        return (
            <form onSubmit={this.submit} className="add-day-form">
                <label htmlFor="resort">Resort Name</label>
                <input id="resort" type="text" required defaultValue={resort} ref="resort"/>

                <label htmlFor="date">Date</label>
                <input id="date" type="date" required defaultValue={date} ref="date"/>

                <div>
                    <input id="powder" type="checkbox" defaultChecked={powder} ref="powder"/>
                    <label htmlFor="powder">Powder Day</label>
                </div>

                <div>
                    <input id="backcountry" type="checkbox" defaultChecked={backcountry} ref="backcountry"/>
                    <label htmlFor="backcountry">Backcountry Day</label>
                </div>


                <button>Add day</button>

            </form>
        )
    }
}

AddDayForm.defaultProps = {
    date: "2017-02-12",
    resort: "Kirkwood",
    backcountry: true,
    powder: false
};

AddDayForm.propTypes = {
    date: PropTypes.string.isRequired,
    resort: PropTypes.string.isRequired,
    backcountry: PropTypes.bool,
    powder: PropTypes.bool
};