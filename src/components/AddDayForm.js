/**
 * Created by alexandershipunov on 06/03/2017.
 **/
import {Component, PropTypes} from 'react';

export const AddDayForm = ({ resort, date, backcountry, powder }) => {

    let _resort, _date, _powder, _backcountry;

    const submit = (e) => {
        e.preventDefault();
        console.log('resort', _resort.value);
        console.log('date', _date.value);
        console.log('powder', _powder.checked);
        console.log('backcountry', _backcountry.checked);
    };

    return (
        <form onSubmit={submit} className="add-day-form">
            <label htmlFor="resort">Resort Name</label>
            <input id="resort" type="text" required defaultValue={resort} ref={input => _resort = input}/>

            <label htmlFor="date">Date</label>
            <input id="date" type="date" required defaultValue={date} ref={input => _date = input}/>

            <div>
                <input id="powder" type="checkbox" defaultChecked={powder} ref={input => _powder = input}/>
                <label htmlFor="powder">Powder Day</label>
            </div>

            <div>
                <input id="backcountry" type="checkbox" defaultChecked={backcountry} ref={input => _backcountry = input}/>
                <label htmlFor="backcountry">Backcountry Day</label>
            </div>


            <button>Add day</button>

        </form>
    )
};

/*export class AddDayForm extends Component {

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
}*/

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