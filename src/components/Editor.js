import React, { useState } from 'react';
import './Editor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {Controlled as ControlEditor,} from 'react-codemirror2';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompressAlt,faExchangeAlt} from '@fortawesome/free-solid-svg-icons';
const Edit = (props)=>{
    const {language,displayName,value,onChange} = props;
    const handleChange =(editor,data,value)=>{
        onChange(value)
    }
    const [open,setOpen] = useState(true)
    return(
        <div className={`editor__container ${open ? '' : 'collapsed'}`}>
            <div className="editor__title">
                    {displayName}
                    <button 
                    type="button"
                    className="expand-collapse-btn"
                    onClick={()=>setOpen(prevOpen => !prevOpen)}>
                        <FontAwesomeIcon
                        icon={open ? faCompressAlt : faExchangeAlt}
                         />
                    </button>
            </div>
            <ControlEditor 
                onBeforeChange={handleChange}
                value ={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping:true,
                    lint:true,
                    mode:language,
                    theme:'material',
                    lineNumbers:true
                }}
            />
        </div>
    )
}

export default Edit;