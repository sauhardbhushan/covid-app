import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import "tailwindcss/tailwind.css"
import Home from "./components/Home/Home";

library.add(faAngleUp)

export const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <header className="App-header">
                    <Home className=""/>
                </header>
            </div>
        </ApolloProvider>
    );
}

export default App;
