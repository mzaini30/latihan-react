import React from "react";
import { Outlet } from "react-router-dom";

const DynamicIndex = React.lazy(() => import("./pages/index"));
const DynamicAbout = React.lazy(() => import("./pages/about"));

export const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "/", element: <DynamicIndex />, index: true },
      { path: "/about", element: <DynamicAbout /> },
    ],
  },
];

export const pages = [{ route: "/" }, { route: "/about" }];
