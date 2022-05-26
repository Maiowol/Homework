import { round } from "lodash";
import React, { useState } from "react";

import { useHistory } from "react-router-dom";

const MyWeek = (props) => {
  const history = useHistory();

  const day_text_dict = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  };


  const week_days = Object.keys(day_text_dict).map((_d, idx) => {
    let today = new Date().getDay();

    let d =
      today + parseInt(_d) > 6
        ? today + parseInt(_d) - 7
        : today + parseInt(_d);


    return day_text_dict[d];
  });

  
  let rate_sum = 0;

  
  const week_rates = week_days.map((e, idx) => {
    const random =
     Math.floor(Math.random() * (5 - 0)) + 0;
    rate_sum += random;
    
    return {
      day: e,
      rate: random,
    };
  });

  const rate_avg = (rate_sum / week_rates.length).toFixed(1);
  const [avg, setAvg] = useState(rate_avg);

  return (
    <>
      <div>
        {week_rates.map((w, idx) => {
          return (
            <div key={`week_day_${idx}`} className= "week_days">
              <p style={{ margin: "0 0.5rem 0 0", fontWeight: "bold" }}>
                {w.day}
              </p>

              {Array.from({ length: 5 }, (item, idx) => {
                return (
                  <div
                    key={idx}
                    className= "circle"
                    style={{
                      backgroundColor: w.rate < idx ? "#ddd" : "#ffeb3b",
                    }}
                  ></div>
                );
              })}

              <div className="circles"
                onClick={() => {
                  history.push(`/review/${w.day}`);
                }}
              ></div>
            </div>
          );
        })}
        <div className="point">
          평균 평점 {avg}
          <div className="point_btn"
            onClick={() => {
              setAvg(parseInt(0).toFixed(1));
            }}
          >
            <p style={{ color: "white", fontSize: "18px" }}>Reset</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWeek;
