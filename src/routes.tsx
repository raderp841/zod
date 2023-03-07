// src/routes.ts

// pages

// other
import {FC} from "react";
import BasicForm from "./pages/BasicForm";
import BasicFormWithUseHook from "./pages/BasicFormWithUseHook";
import BasicFormWithUseHookAndZod from "./pages/BasicFormWithUseHookAndZod";
import Home from "./pages/Home";
import MuiFormWithUseHookAndZod from "./pages/MuiFormWithUseHookAndZod";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'basic-form-route',
        title: 'Form One',
        path: '/basicForm',
        enabled: true,
        component: BasicForm
    },
    {
        key: 'basic-form-with-use-hook-route',
        title: 'Form Two',
        path: '/basicFormWithUseHook',
        enabled: true,
        component: BasicFormWithUseHook
    },
    {
        key: 'basic-form-with-use-hook-and-zod-route',
        title: 'Form Three',
        path: '/basicFormWithUseHookAndZod',
        enabled: true,
        component: BasicFormWithUseHookAndZod
    },
    {
        key: 'mui-form-with-use-hook-and-zod-route',
        title: 'Form Four',
        path: '/muiFormWithUseHookAndZod',
        enabled: true,
        component: MuiFormWithUseHookAndZod
    }
]