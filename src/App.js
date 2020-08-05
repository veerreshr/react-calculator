import React, { useState } from "react";

import "./App.css";

function App() {
  const islimitnotexceeded = /^\w{0,10}$/g;
  const isvalidnumber = /^[0-9]+(\.[0-9]+)?$/g;
  const iswithnonumberafterpoint = /^\d+\.$/g;
  const isnotminus = /^[\+\/x\%]$/g;
  const isoperator = /^[\+\/x%-]$/g;
  const endswithmultipleoperator = /^.*[\+\/x%-]{2,}$/g;
  const containsdot = /^\d+\.\d+$/g;
  const containesequals = /^.*=.*$/g;
  const islimit = /^MAX.+/g;
  const [number, setnumber] = useState("0");
  const [dontrespond, setdontrespond] = useState(false);
  const [formula, setformula] = useState("");
  const clear = () => {
    setnumber("0");
    setformula("");
    setdontrespond(false);
  };
  const clearnumber = () => {
    const length = number.length;
    setnumber("");
    setformula(formula.slice(0, -length));
  };
  const evaluate = () => {
    const expression = formula.replace("x", "*");
    const value = eval(expression);
    setformula(formula + "=" + value);
    setnumber(value);
  };
  const numberfunction = (x) => {
    if (dontrespond) {
      return;
    }
    if (number.length === 0) {
      if (x === ".") {
        setnumber("0.");
        setformula(formula + "0.");
        return;
      } else {
        setnumber(x);
        setformula(formula + x);
        return;
      }
    }
    if (containesequals.test(formula)) {
      setformula("");
      if (x === ".") {
        setnumber("0.");
      } else {
        setnumber(x);
      }
    }

    if (isoperator.test(number)) {
      if (x === ".") {
        setnumber("0.");
        setformula(formula + "0.");
        return;
      } else {
        setnumber(x);
        setformula(formula + x);
        return;
      }
    } else {
      if (number.length >= 10) {
        let presentnumber = number;
        setnumber("MAX LIMIT REACHED");
        setdontrespond(true);

        setTimeout(() => {
          setnumber(presentnumber);
          setdontrespond(false);
        }, 500);
        return;
      }
      if (x === ".") {
        if (containsdot.test(number)) {
          return;
        }
      }

      if (number.length === 1 && number === "0") {
        if (x === ".") {
          setnumber(number + x);
          setformula(formula + "0.");
        } else {
          setnumber(x);
          setformula(formula + x);
        }
      } else {
        if (number[number.length - 1] === ".") {
          if (x !== ".") {
            setnumber(number + x);
            setformula(formula + x);
          }
        } else {
          if (containsdot.test(number)) {
            if (x !== ".") {
              setnumber(number + x);
              setformula(formula + x);
            } else {
              setnumber(number);
              setformula(formula + x);
            }
          } else {
            setnumber(number + x);
            setformula(formula + x);
          }
        }
      }
    }
  };
  const operatorfunction = (x) => {
    if (containesequals.test(formula)) {
      setformula(number + x);
      setnumber(x);
      return;
    }

    if (endswithmultipleoperator.test(formula) && x !== "-") {
      setnumber(x);
      setformula(formula.slice(0, -2) + x);
      return;
    }
    setformula(formula + number);

    if (x !== "-") {
      if (!isoperator.test(number)) {
        setformula(formula + x);
        setnumber(x);
      } else {
        setformula(formula.slice(0, -1) + x);
        setnumber(x);
      }
    } else {
      if (number === "-") {
        return;
      } else {
        setformula(formula + x);
        setnumber(x);
      }
    }
  };
  return (
    <div className="calculator">
      <div id="title">Calculator</div>
      <div id="formula">{formula}</div>
      <div id="display">{number}</div>
      <div className="button sign" id="clear" onClick={clear}>
        AC
      </div>

      <div className="button sign " onClick={clearnumber}>
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
        id="seven"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        7
      </div>
      <div
        id="eight"
        className="button"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        8
      </div>
      <div
        id="nine"
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
        id="four"
        className="button"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        4
      </div>
      <div
        id="five"
        className="button"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        5
      </div>
      <div
        id="six"
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
        id="one"
        className="button"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        1
      </div>
      <div
        id="two"
        className="button"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        2
      </div>
      <div
        id="three"
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
        id="decimal"
        onClick={(e) => {
          numberfunction(e.target.innerHTML);
        }}
      >
        .
      </div>

      <div className="button sign" id="equals" onClick={evaluate}>
        =
      </div>
    </div>
  );
}

export default App;
