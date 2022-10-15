import { publicRoutes as routes } from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {routes.map((route) => {
                        const Layout = route.layout;
                        const Component = route.component;

                        return (
                            <Route
                                key={route.id}
                                path={route.path}
                                exact
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
