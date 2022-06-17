import * as React from 'react'

let DateTime = () => {
    let showDate = new Date();
    let showTodayDate = showDate.toLocaleDateString();
    let showTime = showDate.toLocaleTimeString();

    return (
        <div>
            <p>{showTodayDate} - {showTime}</p>
        </div>
    )
}

export default DateTime