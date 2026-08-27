import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    Image,
    StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

export default function WelcomeScreen() {
    const navigation = useNavigation<any>();

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#F8FCF7" />

            <LinearGradient
                colors={["#F8FCF7", "#EDF8E2", "#DDF3C3"]}
                style={styles.container}
            >
                <SafeAreaView style={styles.safe}>
                    <View style={styles.center}>
                        <Image
                            source={require("../../../../assets/images/logo.png")}
                            style={styles.logo}
                            resizeMode="contain"
                        />

                        <Text style={styles.title}>
                            Proactive {"\n"} Healthcare
                        </Text>

                        <Text style={styles.subTitle}>
                            Monitor, remind, and take care{"\n"}
                            of your health every day.
                        </Text>
                    </View>

                    <View style={styles.bottomContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Image
                                source={require("../../../../assets/images/loginw.png")}
                                style={styles.loginImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        <View style={styles.register}>
                            <Text style={styles.registerText}>
                                Don't have an account yet?
                            </Text>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("signUp")}
                            >
                                <Text style={styles.registerLink}> Register now!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </>
    );
}