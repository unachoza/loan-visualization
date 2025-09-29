import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactQueryProvider from "./providers/ReactQueryProvider.jsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ReactQueryProvider>
			<App />
		</ReactQueryProvider>
	</StrictMode>
);
