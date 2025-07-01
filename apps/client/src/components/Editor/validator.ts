import * as monaco from 'monaco-editor';
import parser from 'php-parser';

// PHP parser for validation
const phpEngine = new parser.Engine({
    parser: { extractDoc: true, php7: true },
    ast: { withPositions: true }
});

export const phpValidator = (code: string, model: monaco.editor.ITextModel) => {
    try {
        phpEngine.parseCode(code, 'server.php');
    } catch (e) {
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
