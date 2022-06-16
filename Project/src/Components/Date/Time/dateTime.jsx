import * as React from 'react'

let DateTime = () => {
    let showDate = new Date();
    let showTodayDate = showDate.getDay() + '/' + showDate.getMonth() + '/' + showDate.getFullYear();
    let showTime = showDate.getHours() + ':' + showDate.getMinutes() + ':' + showDate.getSeconds();

    return (
        <div>
            <p>{showTodayDate} - {showTime}</p>
        </div>
    )
}

export default DateTime