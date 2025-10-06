import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const Routes = () => {
	return (
		<Suspense fallback="loading...">
			<RouterProvider router={router} />
		</Suspense>
	);
};

export default Routes;