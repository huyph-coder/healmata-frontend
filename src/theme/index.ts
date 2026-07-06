import { DefaultTheme } from "@react-navigation/native";
import colors from "./colors";

export const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...colors
    }
}

export { default as radius } from "./radius";
export { default as spacing } from "./spacing";
export { default as typography } from "./typography";