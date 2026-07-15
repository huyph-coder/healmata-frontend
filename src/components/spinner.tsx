import { useEffect } from "react";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
    cancelAnimation,
} from "react-native-reanimated";

const Spinner = () => {
    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = withRepeat(
            withTiming(1, {
                duration: 1000,
                easing: Easing.inOut(Easing.ease),
            }),
            -1,
            false
        );

        return () => cancelAnimation(progress);
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                rotate: `${progress.value * 360}deg`,
            },
        ],
    }));

    return (
        <Animated.Image
            source={require("@/assets/icon/loading.png")}
            style={[animatedStyle]}
        />
    );
};

export default Spinner;