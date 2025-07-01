import MonacoEditor, { Monaco, OnMount } from '@monaco-editor/react';
import { type editor } from 'monaco-editor';
import { useEffect, useMemo, useRef, useState } from 'react';
import { registerLanguages } from './languages';
import { validateCode } from './validators';

type EditorOptions = editor.IStandaloneEditorConstructionOptions;

type EditorProps = {
    language: string;
    codeSnippet: string;
    onChange?: (value: string) => void;
    options?: EditorOptions;
};

const Editor = ({ options = {}, language, codeSnippet, onChange }: EditorProps) => {
    const editorRef = useRef<editor.IStandaloneCodeEditor>();
    const monacoRef = useRef<Monaco>();
    const [value, setValue] = useState(codeSnippet);

    const defaultOptions: EditorOptions = useMemo(() => {
        return {
            tabSize: 4,
            insertSpaces: true,
            automaticLayout: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            lineNumbers: 'on',
            wordWrap: 'on',
            fontSize: 14,
            fontFamily: 'monospace',
            fontWeight: 'normal',
            fontLigatures: true,
            ...options
        };
    }, [options]);

    const handleEditorDidMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
        monacoRef.current = monaco;
        editor.setValue(value);
        // Register language and theme if needed
        registerLanguages(language, monaco);
        if (language === 'log') {
            monaco.editor.setTheme('logTheme');
        } else {
            monaco.editor.setTheme('vs-light');
        }
    };

    const handleOnChange = (code: string | undefined) => {
        if (!code || !editorRef.current || !monacoRef.current) return;

        // Simple validation call
        validateCode(code, language, editorRef.current, monacoRef.current);

        setValue(code);
        onChange?.(code);
    };

    useEffect(() => {
        setValue(codeSnippet);
        // Register language and theme on language change
        if (monacoRef.current) {
            registerLanguages(language, monacoRef.current);
            if (language === 'log') {
                monacoRef.current.editor.setTheme('logTheme');
            } else {
                monacoRef.current.editor.setTheme('vs-light');
            }
        }
    }, [codeSnippet, language]);

    return (
        <MonacoEditor
            height="90vh"
            value={value}
            language={language}
            onChange={handleOnChange}
            onMount={handleEditorDidMount}
            options={defaultOptions}
        />
    );
};

export default Editor;

