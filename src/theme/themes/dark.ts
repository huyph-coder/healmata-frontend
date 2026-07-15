import colors from "../colors"
import type { AppTheme } from "./theme.type";

const DarkTheme: AppTheme = {
    colors: {
        ...colors,
        primary: "#567b55",
        secondary: "#333333",
        background: "#F5F5F5",
        surface: "#FFFFFF",
        text: {
            primary: "yellow",
            secondary: "#666666",
            disabled: "#CCCCCC"
        },
    }
}

export default DarkTheme;