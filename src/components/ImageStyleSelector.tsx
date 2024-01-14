import { View, StyleSheet, Image, Text } from "react-native";
import { Button, useTheme } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import { SaveFormat, manipulateAsync } from "expo-image-manipulator";
import { getDimensions } from "@/utils/functions";
import { useState } from "react";
import { data_styles } from "@/utils/styles";


type Props = {
    setImageStyle: (ImageAsset: string) => void;
    imageAsset: string | null;
    style_selected: string;
    setIndex: (index: number | ((index: number)=> number)) => void;
}

export default function ImageStyleSelector({ setImageStyle, style_selected, imageAsset, setIndex }: Props) {
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
            zIndex: -1,
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
        button_left: {
            position: 'absolute',
            left: 10,
            bottom: 0,
            zIndex: 100,
            width: 100,
            alignSelf: 'center',
        },
        button_right: {
            position: 'absolute',
            width: 100,
            right: 10,
            bottom: 0,
            zIndex: 100,
            alignSelf: 'center',
        },
    })


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
        setImageStyle(imageResult.uri);
    }

    const handlePressDirection = async (direction: "left" | "right") => {
        const totalImages = data_styles.find(styleA => styleA.name === style_selected)?.images.length;
        if (totalImages === undefined) {
            return;
        }
        if (direction === "left") {
            setIndex(index => {
                if (index === 0) {
                    return totalImages - 1;
                }
                return index - 1;
            });
        } else {
            setIndex(index => {
                if (index === totalImages - 1) {
                    return 0;
                }
                return index + 1;
            });
        }
    }

    if (style_selected === 'Personalized') {
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

    return (
        <View style={styles.container}>
            {imageAsset === null
                ? <View style={styles.image_mock}></View>
                : <Image source={{ uri: imageAsset}} style={styles.image} />
            }
            <Button
                onPress={() => handlePressDirection("left")}
                mode="contained"
                icon="menu-left"
                style={styles.button_left}
            >
                Left
            </Button>
            <Button
                onPress={() => handlePressDirection("right")}
                mode="contained"
                icon="menu-right"
                contentStyle={{ flexDirection: "row-reverse" }}
                style={styles.button_right}
            >
                Right
            </Button>
        </View>
    )
}


