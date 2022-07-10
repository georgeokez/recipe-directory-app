import React, {useCallback, useState} from 'react';
import day_night_img from '../assets/icons/day-and-night.png'

const DayNightSwitch = () => {

    const [toggle, setToggle] = useState(true);

    const handleClick = useCallback(() => {
        setToggle(!toggle);
        console.log(toggle);
    }, [toggle]);

    return (
        <div className="day-night-switch">
            <span onClick={handleClick}>
                <img src={day_night_img} />
            </span>
        </div>
    );
}

export default DayNightSwitch;