import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const obj1 = {
    name: "Jack",
    age: 20,
    sex: "M",
    employed: true,
    wife: { name: "Jill", age: 19, sex: "F", employed: false }
  };
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState(1);

  const answer2Click = () => {};

  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>Coding Challenge</h1>

      <div>
        <ul>
          <li>
            Make the app work as instructed and demmonstrate good coding
            techniques.
          </li>
          <li>Feel free to ask questions. Google is your "friend"</li>
          <li>You are not expected to answer all the questions.</li>
          <li>Take your time - this is not a speed test.</li>
        </ul>
      </div>

      <div>
        <h2>Question 1</h2>
        <ul>
          <li>
            When component mounted, change the text in the textbox below 'Hello
            World', using a React hook.
          </li>
          <textarea id="answer1" key="answer1" value={answer1} />
        </ul>
      </div>

      <div>
        <h2>Question 2.</h2>
        <div>Update the button below.</div>
        <ul>
          <li>Make the button text red.</li>
          <li>Make the text a softer shade of red.</li>
          <li>Make the button disappear after 3 clicks.</li>
        </ul>
        <button>Question 2 - Click Me</button>
      </div>

      <div>
        <h2>Question 3.</h2>
        <ul>
          <li>
            Display the TestComponent below the button, but only after the
            button is pressed.
          </li>
          <li>
            Toggle the visibility of TestComponent each time the button is
            clicked.
          </li>
        </ul>
        <button>Question 3 - Click Me</button>
      </div>

      <div>
        <h2>Question 4.</h2>
        <div>Update the button below.</div>
        <ul>
          <li>
            On click, make the button disappear and re-appear after 3 seconds.
          </li>
        </ul>
        <button>Question 4 - Click Me</button>
      </div>

      <div>
        <h2>Question 5.</h2>
        <div>
          Write the properties of the object vriable obj1 to the text box below
          when you click the button.
        </div>
        <ul>
          <input id="txtObjProps" />
        </ul>
        <button>Question 5 - Click Me</button>
      </div>

      <div>
        <h2>Question 6.</h2>
        Code the following in the comment block following the instructions:
        <ul>
          <li>
            Create a text area input which you can type into, and set it's
            initial text to any string.
          </li>
          <li>Set the text area so you can type in it.</li>
          <li>Create a clickable icon with the image of your choice.</li>
          <li>Make the image an appropriate size.</li>
          <li>
            When you click on the icon, the text in the text area should be
            reversed. Use String.split and Array.forEach.
          </li>
          <li>Prevent typing a lowercase or uppercase "a" in the text area.</li>
        </ul>
        {/* enter your code here */}
      </div>
    </div>
  );
}
