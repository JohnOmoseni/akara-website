import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import LayoutProvider from "./layouts/LayoutProvider";
import NotFound from "./layouts/NotFound";
import PrivacyPolicy from "./app/policy/page";
import Home from "./app/(home)/page";
import ErrorBoundary from "./components/fallback/Error";
import AppContextProvider from "./context/AppContext";

function App() {
	return (
		<Router>
			<AppContextProvider>
				<ErrorBoundary>
					<Routes>
						<Route element={<LayoutProvider />}>
							<Route path="*" element={<NotFound />} />
							<Route index element={<Home />} />

							<Route path="/policy" element={<PrivacyPolicy />} />
						</Route>
					</Routes>
				</ErrorBoundary>
			</AppContextProvider>
		</Router>
	);
}

export default App;
