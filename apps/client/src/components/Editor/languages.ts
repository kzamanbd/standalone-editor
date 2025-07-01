import { Monaco } from '@monaco-editor/react';

// Log language registration function
export const registerLogLanguage = (monaco: Monaco) => {
    monaco.languages.register({ id: 'log' });

    monaco.languages.setMonarchTokensProvider('log', {
        tokenizer: {
            root: [
                [/\b(INFO|ERROR|WARN|DEBUG|NOTICE|CRITICAL)\b/, 'log-level'],
                [/\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]/, 'timestamp'],
                [/\b(Exception|Trace|Stack)\b/, 'exception'],
                [/\bGET|POST|PUT|DELETE\b/, 'http'],
                [/https?:\/\/[^\s]+/, 'url'],
                [/".*?"/, 'string']
            ]
        }
    });

    monaco.editor.defineTheme('logTheme', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            { token: 'log-level', foreground: 'ffa500', fontStyle: 'bold' },
            { token: 'timestamp', foreground: '808080' },
            { token: 'exception', foreground: 'ff0000', fontStyle: 'italic' },
            { token: 'http', foreground: '00ffff' },
            { token: 'url', foreground: '00bfff', fontStyle: 'underline' },
            { token: 'string', foreground: '90ee90' }
        ],
        colors: {}
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

