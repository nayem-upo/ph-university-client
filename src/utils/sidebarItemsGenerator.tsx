import { ReactNode } from "react"
import { TMainPaths } from "./routesGenerator";
import { NavLink } from "react-router-dom";


type TMenuItem = {
    key: string,
    label: ReactNode,
    children?: TMenuItem[]
}

export const sideBarItemsGenerator = (paths: TMainPaths[], role: string) => {
    const sidebarItems = paths.reduce((acc: TMenuItem[], item) => {
        if (item.path && item.name) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
            })
        }
        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map(child => ({
                    key: child.name,
                    label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
                })),
            })
        }
        return acc;
    }, [])
    return sidebarItems;
}