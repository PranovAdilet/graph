import React from 'react';
import './App.scss';
import GraphPage from "./pages/GraphPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
    const queryClient = new QueryClient()


    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <GraphPage/>
            </QueryClientProvider>
        </div>
    )
}

export default App;
