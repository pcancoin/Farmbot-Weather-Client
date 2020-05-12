import React from "react";

function formaterDate(date) {
    return (
        date.getDate().toString().padStart(2, "0") +
        "/" +
        (date.getMonth() + 1).toString().padStart(2, "0") +
        "/" +
        (date.getFullYear()).toString() +
        " à " +
        date.getHours() +
        "h" +
        date.getMinutes().toString().padStart(2, "0")
    );
}

const ItemArrosage = props => {
    console.log("props", props);
    return (
        <tr>
            <th>{formaterDate(new Date(props.date))}</th>
            <td>{props.humidite}%</td>
            <td>{props.indicateurMeteo}</td>
        </tr>
    );
};



export default ItemArrosage;
