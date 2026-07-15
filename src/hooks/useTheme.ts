import { ThemeContext } from "@/theme/provider";
import { useContext } from "react";

const useTheme = () => {
    return useContext(ThemeContext);
}

export default useTheme;