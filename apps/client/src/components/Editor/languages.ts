import { Monaco } from '@monaco-editor/react';

// Log language registration function
export const registerLogLanguage = (monaco: Monaco) => {
    monaco.languages.register({ id: 'log' });

    monaco.languages.setMonarchTokensProvider('log', {
        tokenizer: {
            root: [
                [/\b(INFO|ERROR|WARN|DEBUG|NOTICE|CRITICAL)\b/, 'log-level'],
                [/\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]/, 'timestamp'],
                [/\b(Exception|Error|Trace|Stack|Warning|Notice)\b/, 'exception'],
                [/\bGET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS\b/, 'http'],
                [/https?:\/\/[^\s]+/, 'url'],
                [/".*?"/, 'string'],
                [/PHP \w+:/, 'php-error'],
                [/line \d+/, 'line-number'],
                [/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/, 'ip-address'],
                [/\b\w+\.php\b/, 'filename']
            ]
        }
    });

    monaco.editor.defineTheme('logTheme', {
        base: 'vs',
        inherit: true,
        rules: [
            { token: 'log-level', foreground: '0000ff', fontStyle: 'bold' }, // Blue
            { token: 'timestamp', foreground: '666666' }, // Dark gray
            { token: 'exception', foreground: 'ff0000', fontStyle: 'bold' }, // Red
            { token: 'http', foreground: '008080', fontStyle: 'bold' }, // Teal
            { token: 'url', foreground: '0066cc', fontStyle: 'underline' }, // Blue
            { token: 'string', foreground: '008000' }, // Green
            { token: 'php-error', foreground: 'cc0000', fontStyle: 'bold' }, // Dark red
            { token: 'line-number', foreground: '666666', fontStyle: 'italic' }, // Gray
            { token: 'ip-address', foreground: '993399' }, // Purple
            { token: 'filename', foreground: '800000', fontStyle: 'bold' } // Maroon
        ],
        colors: {
            'editor.background': '#ffffff',
            'editor.foreground': '#000000',
            'editor.lineHighlightBackground': '#f0f0f0',
            'editorLineNumber.foreground': '#999999',
            'editor.selectionBackground': '#b3d4fc'
        }
    });
};

// Simple object lookup - no switch needed!
const languageRegistrations = {
    log: registerLogLanguage
    // Add new language registrations here: python: registerPythonLanguage,
};

// Main language registration function that handles Monaco language setup
export const registerLanguages = (language: string, monaco: Monaco) => {
    // Get language registration function from object
    const registerLanguage = languageRegistrations[language as keyof typeof languageRegistrations];
    if (!registerLanguage) return; // No registration for this language

    registerLanguage(monaco);
};

