import React from "react";

const parseDate = string => {
    let fullDate = new Date(string.replace(/-/g, "/"));
    let month = fullDate.toLocaleString('en', {month: "short"});
    let year = fullDate.getFullYear();
    let time = `${fullDate.getHours()}:${fullDate.getMinutes()}`;
    let date = `${fullDate.getDate()} ${month} ${year}`;

    return (
        <strong>
            {time} <br/> {date}
        </strong>
    );
}

export default parseDate;
