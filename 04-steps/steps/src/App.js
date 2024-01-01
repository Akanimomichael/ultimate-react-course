import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const questions = [
  { id: 1, questions: "what is your name", answ: "coco la bobo" },
  { id: 2, questions: "what is your flavour", answ: "la bobo softe" },
  { id: 3, questions: "what is your taste", answ: "coco pupularate" },
  { id: 4, questions: "what is your makers", answ: "coco la la retolabocater" },
];
function App() {
  // const step = 1;

  const [step, setSteps] = useState(1);
  const [IsOpen, setIsOpen] = useState(true);

  // const handleToggle = () => {
  //   setIsOpen(!IsOpen)
  //   console.log(IsOpen)
  // }

  const handleBtnNext = () => {
    // setSteps(step < 3 ? step + 1 : 1);
    if (step < 3) {
      setSteps((s) => s + 1);
    }
  };

  const handleBtnPrv = () => {
    // step > 1 ? step - 1 : 1;
    if (step > 1) {
      setSteps((s) => s - 1);
    }
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!IsOpen)}>
        &times;
      </button>

      {IsOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "step-1 active" : "step-1"}`}>1</div>
            <div className={`${step >= 2 ? "step-1 active" : "step-1"}`}>2</div>
            <div className={`${step >= 3 ? "step-1 active" : "step-1"}`}>3</div>
          </div>

          <p className="message">
            Step: {step} {messages[step - 1]}{" "}
          </p>

          <div className="buttons">
            <button
              className="previous"
              onClick={handleBtnPrv}
              style={{ backgroundColor: " #7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              className="next"
              onClick={handleBtnNext}
              style={{ backgroundColor: " #7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <Question />
    </>
  );
}

function Question() {
  const [question, setQuestion] = useState(null);

  const hovering = (e) => {
    setQuestion(e !== question ? e : null);
    console.log(e);
    // console.log(quest.id)
  };
  return (
    <div style={{ display: "flex", backgroundColor: "greenyellow" }}>
      {questions.map((quest) => (
        <div
          key={quest.id}
          style={
            question === quest.id
              ? {
                  border: "2px solid red",
                  height: "200px",
                  width: "400px",
                  backgroundColor: "red",
                  margin: "10px",
                  padding: "10px",
                  borderRadius: "20px",
                  transition: ".5s",
                  textAlign: "center",
                }
              : {
                  margin: "10px",
                  border: "2px solid red",
                  height: "200px",
                  width: "400px",
                  padding: "10px",
                  borderRadius: "20px",
                  transition: ".5s",
                  textAlign: "center",
                  justifyItems: 'center',
                }
          }
          onClick={() => hovering(quest.id)}
          // onMouseLeave={() => hovering(null)}
        >
          <h2 style={{ transition: "5s" }}>
            {question === quest.id ? quest.answ : quest.questions}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;
