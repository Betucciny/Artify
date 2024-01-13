import { StyleSheet, View } from "react-native";
import { Surface, Text, useTheme } from "react-native-paper";
import Animated from "react-native-reanimated";

function Header() {
    const theme = useTheme();

    const styles = StyleSheet.create({
        back:{
            backgroundColor: theme.colors.background,
            justifyContent: "center",
            alignItems: "center"
        },
        titleText: {
            color: theme.colors.background,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold"
        },
        subText: {
            color: theme.colors.background,
            fontSize: 15,
        },
        container: {
            backgroundColor: theme.colors.primary,
            borderRadius: 20,
            margin: 10,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
        },
        subContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        logo: {
            width: 60,
            height: 60,
            borderRadius: 20,
        },


    });

    return (
        <View style={styles.back}>
            <Surface theme={theme} style={styles.container} >
                <Animated.Image
                    source={require('@assets/logo.png')}
                    style={styles.logo}
                    sharedTransitionTag="logo"
                />
                <View style={styles.subContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.titleText}>Welcome to </Text>
                        <Animated.Text style={styles.titleText} sharedTransitionTag="Artify">Artify</Animated.Text>
                    </View>
                    <Text style={styles.subText}>Get creative with your photos</Text>
                </View>
            </Surface>
        </View>
    );
}



export default Header;
