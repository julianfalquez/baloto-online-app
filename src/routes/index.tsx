import { createBrowserRouter, Outlet } from "react-router-dom";
import BuyMenu from "../components/buyMenu/BuyMenu";
import { DateOption } from "../components/dateOptions/DateOption";
import BalotoCheckout from "../pages/balotoCheckout/BalotoCheckout";
import ErrorPage from "../pages/errorPage/errorPage";
import { dateOptions } from "../pages/balotoCheckout/utils";
import { routes } from "../utils/routeUtils";
import { SubscriptionOption } from "../components/subscriptionOption/SubscriptionOption";
import Receipt from "../components/Receipt/Receipt";
import AppLayout from "../pages/appLayout/AppLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routes.CHECKOUT,
        element: <BalotoCheckout />,
        children: [
          {
            path: routes.MENU,
            element: <BuyMenu />,
          },
          {
            path: routes.DATE,
            element: <DateOption dateType={dateOptions.DATE} />,
          },
          {
            path: routes.TODAY,
            element: <DateOption dateType={dateOptions.TODAY} />,
          },
          {
            path: routes.SUBSCRIPTION,
            element: <SubscriptionOption />,
          },
          {
            path: routes.RECEIPT,
            element: <Receipt />,
          },
        ],
      },
    ],
  },
]);
