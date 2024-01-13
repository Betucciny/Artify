import Slider from "@react-native-community/slider"
import { useTheme } from "react-native-paper"
import { StyleSheet, View, Text } from "react-native"

type Props = {
    similarity: number,
    setSimilarity: (similarity: number) => void
}

export default function SliderSimilarity({ similarity, setSimilarity }: Props) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        title: {
            alignSelf: 'flex-start',
            color: theme.colors.onSurface,
            fontSize: 25,
            fontWeight: 'bold',
            marginHorizontal: 20,

        },
        text: {
            color: theme.colors.onSurface,
            fontSize: 15,
            margin: 10,
        },
        container: {
            marginHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.colors.background,
        },
        slider: {
            width: "70%",
            height: 40,
        },
        slider_container: { 
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Similarity</Text>
            <Text style={styles.text}>Select how much you want to keep of your original image</Text>

            <View style={styles.slider_container}>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor={theme.colors.primary}
                    maximumTrackTintColor={theme.colors.onSurface}
                    thumbTintColor={theme.colors.primary}
                    value={similarity}
                    onValueChange={setSimilarity}
                />
                <Text style={styles.text}>{similarity.toFixed(2)}</Text>
            </View>
        </View>
    )
}