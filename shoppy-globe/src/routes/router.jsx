import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import App from "../App";

const Home = lazy(() => import("../pages/Home/Home"));
const ProductDetail = lazy(() =>
  import("../pages/ProductDetail/ProductDetail")
);
const Checkout = lazy(() =>
  import("../pages/Checkout/Checkout")
);
const Cart = lazy(() =>
  import("../components/Cart/Cart")
);
const NotFound = lazy(() =>
  import("../pages/NotFound/NotFound")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <Suspense fallback={<h2>Loading...</h2>}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h2>Loading Home...</h2>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<h2>Loading Product...</h2>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<h2>Loading Cart...</h2>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<h2>Loading Checkout...</h2>}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;