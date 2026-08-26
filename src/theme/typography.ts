import { BeVietnamPro_400Regular } from '@expo-google-fonts/be-vietnam-pro';

const typography = {

    fontFamily: {
        regular: 'System',
        medium: "System",
        light: "System",
        thin: "System",
    },
    caption: {
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 24,
    },
    hero: {
        fontSize: 28,
        fontWeight: 600,
        lineHeight: 32,
    },
    title: {
        fontSize: 28,
        fontWeight: 600,
        lineHeight: 32,
    },
    heading: {
        fontSize: 24,
        fontWeight: 500,
        lineHeight: 32,
    },
    link: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 24,
        textDecorationLine: "underline",
    }
} as const;

export default typography;