import { View } from "react-native"
import { useTheme } from "@/hooks"

const Divider = ({ children }: { children?: React.ReactNode }) => {
    const { theme } = useTheme();
    return (<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: theme.colors.text.primary }}></View>
        {children}
        <View style={{ flex: 1, height: 1, backgroundColor: theme.colors.text.primary }}></View>
    </View>)
}

export default Divider