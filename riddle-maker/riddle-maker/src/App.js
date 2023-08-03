import logo from './logo.svg';
import './App.css';
import { Configuration, OpenAIApi } from "openai";
import { useEffect } from 'react';
import { useState } from 'react';
const configuration = new Configuration({
    apiKey: "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",
});
async function getRiddles(openai){
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {"role": "system", "content": "You are a riddle master. Every riddle you generate must be in this format <riddle>here you insert riddle</riddle><answer>here insert the answer to the riddle</answer>. If the answer is long try to shorten it. You must include answer to your riddle"}, 
      {role: "user", content: "Give me 5 unique riddles"}],
  });
  var riddles=completion.data.choices[0].message.toString();
  console.log(riddles);
  console.log("Ahoj");
  return completion.data.choices[0].message;
}
function App() {
  document.title="Riddle Guesser";
  const openai = new OpenAIApi(configuration);
  var riddles=getRiddles(openai);
  console.log("THis is"+riddles);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Here is clickable
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
