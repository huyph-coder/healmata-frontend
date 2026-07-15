import { Image, View, ViewProps } from "react-native"
import { radius, spacing } from "@/theme";

type BannerVariant = "error" | "success"
const successIcon = require("@/assets/icon/success.png")
const errorIcon = require("@/assets/icon/exclamation.png")

const Banner = ({ children, props, variant = "error" }: { children?: React.ReactNode, props?: ViewProps, variant?: BannerVariant }) => {
    return (
        <View style={{ flexDirection: "row", backgroundColor: variant === "error" ? "#FFF4F2" : "#E8FFE5", padding: spacing.md, borderRadius: radius.lg, gap: spacing.md, alignItems: "center" }} {...props}>
            <Image style={{ width: 32.22, height: 29.6 }} source={variant === "error" ? errorIcon : successIcon} />
            {children}
        </View>
    )
}

export default Banner