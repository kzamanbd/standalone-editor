import MonacoEditor from '@monaco-editor/react';

import { useRef, useState } from 'react';

type EditorType = undefined | import('monaco-editor').editor.IStandaloneCodeEditor;

// Mapping of file extensions to Monaco languages
const extensionToLanguageMap = {
    '.js': 'javascript',
    '.ts': 'typescript',
    '.jsx': 'javascript',
    '.tsx': 'typescript',
    '.py': 'python',
    '.cpp': 'cpp',
    '.html': 'html',
    '.css': 'css',
    '.json': 'json',
    '.xml': 'xml',
    '.yml': 'yaml',
    '.yaml': 'yaml',
    '.md': 'markdown',
    '.sh': 'shell',
    '.sql': 'sql',
    '.java': 'java',
    '.php': 'php',
    '.rb': 'ruby',
    '.go': 'go',
    '.cs': 'csharp',
    '.swift': 'swift',
    '.lock': 'json'
} as Record<string, string>;

// Function to get language based on file extension
function getLanguageFromExtension(filename: string) {
    const ext = filename.slice(Math.max(0, filename.lastIndexOf('.')) || Infinity);
    return extensionToLanguageMap[ext] || 'plaintext'; // Default to 'plaintext'
}

const FileEditor = () => {
    const editorRef = useRef<EditorType>(undefined);
    const [fileContent, setFileContent] = useState(`// Welcome to the file editor`);

    function handleEditorDidMount(editor: EditorType) {
        editorRef.current = editor;
        editorRef.current.setValue(fileContent);
        editorRef.current.getModel()?.updateOptions({ tabSize: 4 });
        editorRef.current.getModel()?.updateOptions({ insertSpaces: true });
    }

    return (
        <MonacoEditor
            height="85vh"
            defaultValue={fileContent}
            onMount={handleEditorDidMount}
            onChange={(value) => setFileContent(value || '')}
            defaultLanguage={getLanguageFromExtension('server.js')}
        />
    );
};

export default FileEditor;

