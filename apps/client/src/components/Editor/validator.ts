import { Monaco } from '@monaco-editor/react';
import { type editor } from 'monaco-editor';
import parser from 'php-parser';

// PHP parser for validation
const phpEngine = new parser.Engine({
    parser: { extractDoc: true, php7: true },
    ast: { withPositions: true }
});

export const phpValidator = (
    code: string,
    editor: editor.IStandaloneCodeEditor,
    monacoEditor: Monaco
) => {
    if (!editor || !monacoEditor) return;

    const model = editor.getModel();
    if (!model) return;

    try {
        phpEngine.parseCode(code, 'server.php');
        // Clear existing markers if successful
        monacoEditor.editor.setModelMarkers(model, 'php', []);
    } catch (e: unknown) {
        const error = e as {
            lineNumber?: number;
            column?: number;
            message?: string;
        };
        monacoEditor.editor.setModelMarkers(model, 'php', [
            {
                startLineNumber: error.lineNumber || 1,
                startColumn: error.column || 1,
                endLineNumber: error.lineNumber || 1,
                endColumn: (error.column || 1) + 1,
                message: error.message || 'Syntax error',
                severity: monacoEditor.MarkerSeverity.Error
            }
        ]);
    }
};

