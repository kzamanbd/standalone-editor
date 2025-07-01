import MonacoEditor, { Monaco, OnMount } from '@monaco-editor/react';
import { type editor } from 'monaco-editor';
import { useEffect, useRef, useState } from 'react';
import { phpValidator } from './validator';

type EditorProps = {
    language: string;
    codeSnippet: string;
    onChange?: (value: string) => void;
};

const FileEditor = (props: EditorProps) => {
    const editorRef = useRef<editor.IStandaloneCodeEditor>();
    const monacoRef = useRef<Monaco>();
    const [value, setValue] = useState(props.codeSnippet);

    const handleEditorDidMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
        monacoRef.current = monaco;
        editor.setValue(value);
    };

    const onChange = (code: string | undefined) => {
        if (!code || !editorRef.current || !monacoRef.current) return;

        if (props.language === 'php') {
            phpValidator(code, editorRef.current, monacoRef.current);
        }
        setValue(code);
    };

    useEffect(() => {
        setValue(props.codeSnippet);
    }, [props.codeSnippet]);

    return (
        <MonacoEditor
            height="90vh"
            value={value}
            onChange={onChange}
            onMount={handleEditorDidMount}
            language={props.language}
            options={{
                minimap: {
                    enabled: false
                }
            }}
        />
    );
};

export default FileEditor;

