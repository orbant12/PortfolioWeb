import ExampleTheme from "./themes/themeEditor";

import React, { useState} from "react";

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { getFunctions, httpsCallable } from "firebase/functions";
import {app} from "../../../firebase"


import 'firebase/functions';
//GPT

import ChatMessage from "../chatMessage"



export const editorConfig = {
 
  // The editor theme
  theme: ExampleTheme,
  editorState: '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ]
};



export default function AiText() {
const functions = getFunctions(app);
//GPT
const [aiTxt,setAiTxt] = useState("")//INPUT
const [chatLog,setChatLog] = useState([])
const [questionLoading, setQuestionLoading] = useState(false)

const [isFirstQuestion,setIsFirstQuestion] = useState(true)


//ANALYZE SCIPT
const [isScriptLoading, setIsScriptLoading] = useState(false)
const [isScriptLoaded, setIsScriptLoaded] = useState(false)

const [summerisingIsLoading,setSummerisingIsLoading] = useState(false)

const handleInputChange = (e) => {
  const userInput = e.target.value;
  setAiTxt(userInput);
};

const handleEnterPress = (e) => {
  if (e.key === 'Enter') {
    if(questionLoading == false){
    // Do something when Enter is pressed, e.g., trigger a function or submit a form
    e.preventDefault();
    setQuestionLoading(true)
    setIsScriptLoaded(false)

    const generateTextFromPrompt = async (request) => {
      const generateTextFunction = httpsCallable(functions, 'openAIHttpFunctionSec');
      let chatLogNew = [...chatLog, {user: "me", message: `${request}`} ]
      try {
          console.log(request)
          const result = await generateTextFunction({name: request});

          //SETT LOADING FALSE
          setQuestionLoading(false)
          setChatLog([...chatLogNew, {user: "gpt", message: `${result.data.data.choices[0].message.content}`}])
      } catch (error) {
          console.error('Firebase function invocation failed:', error);
      }
    };

    const  question =  aiTxt;
    let chatLogNew = [...chatLog, {user: "me", message: `${question}`} ];
    //Loading GPT
    setChatLog([...chatLogNew, {user: "gpt", message: "Loadin...."}]);
     //FINSIH QUESTION
    console.log('question:', question); 
    //FUNCTION EVENT
    generateTextFromPrompt(question);
  }
  //FIRST QUESTION LOGIC
  setIsFirstQuestion(false)
  //BACK TO DEFAULTS
  setAiTxt("")

  }

};





const handleScriptLoading = async () =>{
    alert("You can try this feture in Clippidy App")
}


const handleSummerising = async () =>{
    alert("You can try this feture in Clippidy App")

}

return (
<div className="experience-show">
    <div className="editor-container" >
      <div className={`editor-inner ${!isFirstQuestion ? 'active' : ''}`} style={{border:"0px solid black",background:"transparent"}}>
      {isFirstQuestion ? (
        <div className="ai-input-cont">
          <h1 className="ai_title">Ai Chat</h1>
         
          
          <div className="feature-boxes">
       { !isScriptLoaded?( 
            !isScriptLoading? ( 
              <div className="feature_1"  onClick={handleScriptLoading}>
                  <h2>Analyze the Script</h2>
                  <h5>Ask your question if it's highlighted</h5>
              </div>):(
                 <div className="feature_1">
                 <h2>Scipt Loading</h2>
                 <h5>It may take some times...</h5>
             </div>
              )
              ):(
                <div className="feature_1" style={{borderColor:"aquamarine"}} >
                 <h2>Scipt is Ready</h2>
                 <h5>Ask Anyithing I Click to Undo</h5>
             </div>
             )}

            {!summerisingIsLoading?(
              <div className="feature_2" onClick={handleSummerising}>
                  <h2>Summarise the video</h2>
                  <h5>However you want</h5>
              </div>):(
                  <div className="feature_2" style={{borderColor:"aquamarine"}} onClick={handleSummerising}>
                  <h2>Processing</h2>
                  <h5>It may take some times</h5>
              </div>
              )}
          </div>
          {!isScriptLoaded ? (
        <input type="text" value={aiTxt} className="ai-input" placeholder="Ask me anything" onChange={handleInputChange} onKeyPress={handleEnterPress}/>
        ):(
          <input type="text" value={aiTxt} className="ai-input" placeholder="The Video Script is Loaded" onChange={handleInputChange} onKeyPress={handleEnterPress}/>
        )
      }
     
        </div>
         ) : (
          <>
          <div className="editor-inner2">
          <div className="chat-cont">
              <h1 className="chat-log-title">Chat Log</h1>
              <hr className="chat-log-hr"/>
      {chatLog.map((message,index) => (
           <ChatMessage key={index} message={message}/>
            ))}
            </div>
            
          </div>
          <div className="input_bar_2_stage">
          <div className="cancel-ai-input" onClick={() => setIsFirstQuestion(!isFirstQuestion)}>
            <h3>Close Bar</h3>
        </div>
          <div className="feature-boxes">
          { !isScriptLoaded?( 
              !isScriptLoading? ( 
              <div className="feature_1" onClick={handleScriptLoading}>
                  <h2>Analyze the Script</h2>
                  <h5>If it's green you can ask your question</h5>
              </div>):(
                 <div className="feature_1">
                 <h2>Scipt Loading</h2>
                 <h5>It may take some times...</h5>
             </div>
              )
              ):(
              <div className="feature_1" style={{borderColor:"aquamarine"}} >
                 <h2>Scipt is Ready</h2>
                 <h5>Click to Undo</h5>
             </div>
             )}

{!summerisingIsLoading?(
              <div className="feature_2" onClick={handleSummerising}>
                  <h2>Summarise the video</h2>
                  <h5>However you want</h5>
              </div>):(
                  <div className="feature_2" style={{borderColor:"aquamarine"}} onClick={handleSummerising}>
                   <h2>Processing</h2>
                  <h5>It may take some times</h5>
              </div>
              )}
          </div>
      {!isScriptLoaded ? (
        <input type="text" value={aiTxt} className="ai-input" placeholder="Ask me anything" onChange={handleInputChange} onKeyPress={handleEnterPress}/>
        ):(
          <input type="text" value={aiTxt} className="ai-input" placeholder="The Video Script is Loaded" onChange={handleInputChange} onKeyPress={handleEnterPress}/>
        )
      }
  
        </div>
    
        </>
        )}
        </div>
    </div>
    </div>
);
}
