import React from "react";
import { useHistory, useParams } from "react-router-dom";


const Review = (props) => {

    const history = useHistory();
    const params = useParams();
    const [rate, setRate] = React.useState(0);

    return (
        <>
          <div
            style={{ 
              maxWidth: "350px",    
              height: "90vh",
              margin: "5vh auto",
              padding: "5vh 5vw",   
              boxSizing: "border-box",
              borderRadius: "5px",
            }}
          >
            <h3 style={{ textAlign: "center" }}>
              <span
                style={{
                  color: "#fff",
                  fontWeight: "900",
                  background: "orange",
                  padding: "0.2rem",
                  borderRadius: "5px",
                }}
              >
                { params.days }요일
              </span>{" "}
              평점 남기기
            </h3>
    
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem 0",
                width: "100%",
              }}
            >
             
              {Array.from({ length: 5 }, (item, idx) => {
                return (
                  <div key={idx} onClick={() => { setRate(idx + 1); }}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "30px",
                      margin: "5px",
                      backgroundColor: rate < idx + 1 ? "#ddd" : "#ffeb3b",
                    }}
                  ></div>
                );
              })}
            </div>
    
            <button
              style={{
                width: "100%",
                backgroundColor: "purple",
                border: "none",
                borderRadius: "5px",
                padding: "1rem",
                color: "#fff",
              }}
              onClick={() => {
                history.goBack();
              }}
            >
              평점 남기기
            </button>
          </div>
        </>
      );
    };
    
    export default Review;