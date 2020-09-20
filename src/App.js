import React,{ useEffect, useState } from 'react';
import Edit from './components/Editor';
import useLocalStorage from './hooks/useLocalStorage';
function App() {
  const [html,setHtml] =useLocalStorage('html','')
  const [css,setCss] =useLocalStorage('css','')
  const [javascript,setJavaScipt] =useLocalStorage('javascript','')
  const [srcdoc,setSrcdoc] = useState('')
 
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcdoc(`
      <html>
      <body>${html}</html>
      <style>${css}</style>
      <script>${javascript}</script>
    </html>
      `)
    },250)
    return ()=>{
      clearTimeout(timeout)
    }
  },[html,css,javascript])
  return (
    <>
      <div className="pane top-pane">
        <Edit language="xml" displayName="HTML" value={html} onChange={setHtml} />
        <Edit language="css" displayName="CSS" value={css} onChange={setCss} />
        <Edit language="javascript" displayName="JAVASCRIPT" value={javascript} onChange={setJavaScipt} />
      </div>   
        <div className="pane">
          <iframe 
          srcDoc={srcdoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0" 
          width="100%"
          height="100%" 
          />
        </div>
    </>
  );
}

export default App;
