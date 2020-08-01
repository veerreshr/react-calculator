import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const islimitnotexceeded = /^\w{0,10}$/g;
  const isvalidnumber = /^[0-9]+(\.[0-9]+)?$/g;
  const iswithnonumberafterpoint = /^\d+\.$/g;
  const isnotminus = /^[\+\/\*\%]$/g;
  const isnotoperator = /^[^\+\/\*\%\-]$/g;
  const containsdot = /^\d+\.\d+$/g;
  const [number, setnumber] = useState("0");
  const [formula, setformula] = useState("");
  const clear = () => {
    setnumber("0");
    setformula("");
  };
  const clearnumber = () => {};
  const evaluate = () => {};
  const numberfunction = (x) => {
    if (x === ".") {
      if (containsdot.test(number)) {
        return;
      }
    }

    if (number.length === 1 && number === "0") {
      if (x === ".") {
        setnumber(number + x);
      } else {
        setnumber(x);
      }
    } else {
      if (number[number.length - 1] === ".") {
        if (x !== ".") {
          setnumber(number + x);
        }
      } else {
        if (containsdot.test(number)) {
          if (x !== ".") {
            setnumber(number + x);
          } else {
            setnumber(number);
          }
        } else {
          setnumber(number + x);
        }
      }
    }
    // if (istwodots.test(number)) {
    //   console.log(true);
    //   setnumber(number.slice(0, -1));
    // }
  };
  const operatorfunction = (x) => {
    console.log(x.toString());
  };
  return (
    <div className="calculator">
      <div id="title">Calculator</div>
      <div id="formula">{formula}</div>
      <div id="display">{number}</div>
      <div className="button sign" id="clear" onClick={clear}>
        AC
      </div>

      <div className="button sign" onClick={clearnumber}>
        CE
      </div>
      <div
        className="button sign"
        onClick={(e) => {
          operatorfunction(e.target.innerHTML);
        }}
      >
        %
      </div>
      <div
        className="button sign"
        id="divide"
        onClick={(e) => {
          operatorfunction(e.target.innerHTML);
        }}
      >
        /
      </div>
      <div
        className="button"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        7
      </div>
      <div
        className="button"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        8
      </div>
      <div
        className="button"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        9
      </div>
      <div
        className="button sign"
        id="multiply"
        onClick={(e) => {
          operatorfunction(e.target.innerHTML);
        }}
      >
        x
      </div>
      <div
        className="button"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        4
      </div>
      <div
        className="button"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        5
      </div>
      <div
        className="button"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        6
      </div>
      <div
        className="button sign"
        id="subtract"
        onClick={(e) => {
          operatorfunction(e.target.innerHTML);
        }}
      >
        -
      </div>
      <div
        className="button"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        1
      </div>
      <div
        className="button"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        2
      </div>
      <div
        className="button"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        3
      </div>
      <div
        className="button sign"
        id="add"
        onClick={(e) => {
          operatorfunction(e.target.innerHTML);
        }}
      >
        +
      </div>
      <div className="button"></div>
      <div
        className="button"
        id="zero"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        0
      </div>
      <div
        className="button"
        id="decimal "
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        .
      </div>

      <div className="button sign" id="equals">
        =
      </div>
    </div>
  );
}

export default App;
