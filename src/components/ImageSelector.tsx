import { ImageResult, SaveFormat, manipulateAsync } from "expo-image-manipulator";
import { View, Text, StyleSheet, Image} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { getDimensions } from "@/utils/functions";
import { useTheme , Button} from "react-native-paper";


type Props = {
    setImage: (ImageAsset: string) => void;
    imageAsset: string | null;
}

export default function ImageSelector({ setImage, imageAsset }: Props) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: "100%",
            height: 320,
            margin: 10,
            alignSelf: 'center',
        },
        image: {
            alignSelf: 'center',
            borderRadius: 10,
            width: 300,
            height: 300,
            zIndex: 0,
        },
        image_mock: {
            zIndex: 0,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            alignSelf: 'center',
            width: 300,
            height: 300,
            backgroundColor: theme.colors.outlineVariant,
        },
        button: {
            position: 'absolute',
            bottom: 0,
            zIndex: 1,
            alignSelf: 'center',
        },
    });

    const handlePress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
        });
        if (result.canceled) {
            console.log('canceled');
            return;
        }
        const assetImage = result.assets[0];
        if (assetImage.width === null || assetImage.height === null) {
            console.log('width or height is null');
            return;
        }
        const imageResult = await manipulateAsync(
            assetImage.uri,
            [
                { crop: getDimensions(assetImage.width, assetImage.height) },
                { resize: { width: 256, height: 256 } }
            ],
            { compress: 1, format: SaveFormat.JPEG }
        );
        setImage(imageResult.uri);
    }
    console
    return (
        <View style={styles.container}>
            {imageAsset === null
                ? <View style={styles.image_mock}>
                    <Text>Choose an image</Text>
                </View>
                : <Image source={{ uri: imageAsset }} style={styles.image} />
            }
            <Button onPress={handlePress} mode="contained" style={styles.button}>Select Image</Button>
        </View>
    )

}