import Dashboard from './pages/Dashboard';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Dashboard
    }
]);

export default function App() {
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
}
