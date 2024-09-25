import FileEditorView from './pages/FileEditorView';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        Component: FileEditorView
    }
]);

export default function App() {
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
}
