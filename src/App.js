import React from 'react';
import './App.css';
import Graph from "./pages/Graph";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
    const queryClient = new QueryClient()


    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Graph/>
            </QueryClientProvider>

        </div>
    )
}

export default App;
