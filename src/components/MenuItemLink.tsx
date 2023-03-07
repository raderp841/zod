import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink } from "react-router-dom";

interface  NavProps {
    linkPath: string,
    linkName: string
}

function MenuItemLink({linkName, linkPath}:NavProps) {
    return (
        <Link to={linkPath}>
            <MenuItem >
                {linkName}
            </MenuItem>
        </Link>
    );
}

export default MenuItemLink;

