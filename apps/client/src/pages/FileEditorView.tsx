import FileEditor from '@/components/Editor';
import { CODE_SNIPPETS } from '@/components/Editor/constants';
import { useState } from 'react';

const FileEditorView = () => {
    const options = Object.keys(CODE_SNIPPETS)
        .map((language) => ({
            value: language,
            label: language.charAt(0).toUpperCase() + language.slice(1)
        }))
        .sort((a, b) => a.label.localeCompare(b.label));
    const [selectedLanguage, setSelectedLanguage] = useState(options[0].value);
    const [value, setValue] = useState(
        CODE_SNIPPETS[selectedLanguage as keyof typeof CODE_SNIPPETS]
    );
    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const language = event.target.value;
        setValue(CODE_SNIPPETS[language as keyof typeof CODE_SNIPPETS]);
        setSelectedLanguage(language);
    };
    return (
        <>
            <div className="flex gap-4 justify-between items-center mb-4 border-b border-gray-200 p-4">
                <h1>File Editor({selectedLanguage})</h1>
                <select
                    value={selectedLanguage}
                    onChange={changeLanguage}
                    className="py-2 px-3 pe-9 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <FileEditor codeSnippet={value} language={selectedLanguage} />
        </>
    );
};

export default FileEditorView;

