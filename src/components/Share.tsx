import { postOnFacebook, postOnTwitter } from "@utils/functions";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

type shareFunction = (shareURL: string, shareContent: string) => void

export default function Share() {
    const styles = StyleSheet.create({
        mainContainer: {
            marginBottom: 10,
        },
        container: {
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
        },
        button_text: {
            fontSize: 13,
        },
        button: {
            margin: 5,
            maxWidth: 200,
        }
    })

    const share = (shareFunction: shareFunction) => {
        return () => shareFunction("https://github.com/Betucciny/AIapp", "Check out this app!");
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Button
                    mode="contained"
                    icon={"facebook"}
                    onPress={share(postOnFacebook)}
                    compact
                    uppercase={false}
                    style={styles.button}
                    labelStyle={styles.button_text}
                >
                    Share with Facebook
                </Button>
                {/* <Button
                    mode="contained"
                    icon={"instagram"}
                    onPress={share(postOnInstagram)}
                    compact
                    uppercase={false}
                    style={styles.button}
                    labelStyle={styles.button_text}
                >
                    Share with Instagram
                </Button> */}

            </View>
            <View style={styles.container}>
                <Button
                    mode="contained"
                    icon={"file-excel-box-outline"}
                    onPress={share(postOnTwitter)}
                    compact
                    uppercase={false}
                    style={styles.button}
                    labelStyle={styles.button_text}
                >
                    Share with X
                </Button>
            </View>
        </View>
    )
}