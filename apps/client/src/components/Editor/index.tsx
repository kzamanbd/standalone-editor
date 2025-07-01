import MonacoEditor, { Monaco, OnMount } from '@monaco-editor/react';
import { type editor } from 'monaco-editor';
import parser from 'php-parser';
import { useEffect, useRef, useState } from 'react';

const engine = new parser.Engine({
    parser: { extractDoc: true, php7: true },
    ast: { withPositions: true }
});

type StandaloneEditor = editor.IStandaloneCodeEditor;

type EditorProps = {
    language: string;
    codeSnippet: string;
    onChange?: (value: string) => void;
};

const FileEditor = (props: EditorProps) => {
    const editorRef = useRef<StandaloneEditor>();
    const monacoRef = useRef<Monaco>();
    const [value, setValue] = useState(props.codeSnippet);

    const handleEditorDidMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
        monacoRef.current = monaco;
        editor.setValue(value);
    };

    const phpValidator = (code: string) => {
        if (!editorRef.current || !monacoRef.current) return;
        if (props.language !== 'php') return;

        const monaco = monacoRef.current;
        const model = editorRef.current.getModel();
        if (!model) return;

        try {
            engine.parseCode(code, 'server.php');
            // Clear existing markers if successful
            monaco.editor.setModelMarkers(model, 'php', []);
        } catch (e: unknown) {
            const error = e as {
                lineNumber?: number;
                column?: number;
                message?: string;
            };
            monaco.editor.setModelMarkers(model, 'php', [
                {
                    startLineNumber: error.lineNumber || 1,
                    startColumn: error.column || 1,
                    endLineNumber: error.lineNumber || 1,
                    endColumn: (error.column || 1) + 1,
                    message: error.message || 'Syntax error',
                    severity: monaco.MarkerSeverity.Error
                }
            ]);
        }
    };

    const onChange = (code: string | undefined) => {
        if (!code || !editorRef.current || !monacoRef.current) return;

        phpValidator(code);
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

