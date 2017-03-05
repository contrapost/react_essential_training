/**
 * Created by alexandershipunov on 05/03/2017.
 **/

import { PropTypes } from 'react';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

export const SkiDayRow = ({ resort, date, powder, backcountry }) => (
    <tr>
        <td>
            {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
        </td>
        <td>
            {resort}
        </td>
        <td>
            {(powder) ? <SnowFlake /> : null}
        </td>
        <td>
            {(backcountry) ? <Terrain /> : null}
        </td>
    </tr>
);

SkiDayRow.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    resort:  PropTypes.string.isRequired,
    backcountry:  PropTypes.bool,
    powder:  PropTypes.bool
};