import React from "react";

function SimpleCounter(props) {
  let texto = props.seconds.toString();
  let units = texto[texto.length - 1];
  let tens = texto[texto.length - 2];
  let hundreds = texto[texto.length - 3];
  let thousands = texto[texto.length - 4];
  return (
    <div className="bigCounter">
      <div className="calendar">
        <i className="fas fa-clock "></i>
      </div>
      <div className="thousands">{thousands == undefined ? 0 : thousands}</div>
      <div className="hundreds">{hundreds == undefined ? 0 : hundreds}</div>
      <div className="tens">{tens == undefined ? 0 : tens}</div>
      <div className="units">{units}</div>
    </div>
  );
}
export default SimpleCounter;
