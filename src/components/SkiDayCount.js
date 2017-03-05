/**
 * Created by alexandershipunov on 05/03/2017.
 **/

import '../stylesheets/ui.scss';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

const percentToDecimal = (decimal) => ((decimal * 100) + '%');

const calcGoalProgress = (total, goal) => (percentToDecimal(total/goal));

export const SkiDayCount = ({ total = 50, powder = 15, backcountry = 15, goal = 100}) =>  (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{total}</span>
                    <Calendar />
                    <span>days</span>
                </div>
                <div className="powder-days">
                    <span>{powder}</span>
                    <SnowFlake />
                    <span>days</span>
                </div>
                <div className="backcountry-days">
                    <span>{backcountry}</span>
                    <Terrain />
                    <span>days</span>
                </div>
                <div>
                    <span>
                        {calcGoalProgress(total, goal)}
                        </span>
                </div>
            </div>
        );

/* Default props can be also defined in following way:
SkiDayCount.defaultProps = {
    total: 50,
    powder: 15,
    backcountry: 15,
    goal: 100
};*/
