import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "App"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, useTheme } from "react-native-paper";
import Animated from "react-native-reanimated";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { useEffect, useState } from "react";
import { data_styles_internet } from "@/utils/styles";
import { data_model } from "@/utils/model";



type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
}

export default function SplashScreen({ navigation }: Props) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container_global: {
            flex: 1,
            backgroundColor: theme.colors.background,
            justifyContent: "space-evenly",
            alignItems: "center"
        },
        sub_container: {
            justifyContent: "center",
            alignItems: "center"
        },
        title_text: {
            color: theme.colors.onSurface,
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold"
        },
        description_text: {
            color: theme.colors.onSurface,
            fontSize: 25,
            fontWeight: "normal"
        },
        logo_image: {
            borderRadius: 100,
            width: 300,
            height: 300
        },
        button: {
            borderRadius: 100,
            padding: 20,
            backgroundColor: theme.colors.primary,
        }
    })

    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
    const [imageDownloaded, setImageDownloaded] = useState(false);

    const controlOnPress = async () => {
        requestPermission().then(() => {
            if (permissionResponse === null) {
                return;
            }
            if (permissionResponse.granted) {
                if (imageDownloaded) {
                    navigation.navigate('Tabs');
                } else {
                    alert("Please wait until the images are downloaded or verify your internet connection");
                }
            }
        }).catch((e) => {
            console.log(e);
        })
    }

    useEffect(() => {
        const loadImages = async () => {
            const info = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'Styles');
            if (!info.exists) {
                const promiseArray: Promise<void>[] = [];
                await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'Styles');
                for (const style of data_styles_internet) {
                    promiseArray.push(FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'Styles/' + style.name))
                }
                try {
                    await Promise.all(promiseArray);
                } catch (e) {
                    await FileSystem.deleteAsync(FileSystem.documentDirectory + 'Styles');
                    await loadImages();
                    return
                }
                const promisesImages = [];
                for (const style of data_styles_internet) {
                    for (const [index, image] of style.images.entries()) {
                        promisesImages.push(FileSystem.downloadAsync(image, FileSystem.documentDirectory + 'Styles/' + style.name + '/' + index + '.jpg'));
                    }
                }
                try {
                    await Promise.all(promisesImages);
                } catch (e) {
                    await FileSystem.deleteAsync(FileSystem.documentDirectory + 'Styles');
                    await loadImages();
                    return
                }
                await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'Model');
                const promiseArrayModel = [];
                promiseArrayModel.push(FileSystem.downloadAsync(data_model.model[1], FileSystem.documentDirectory + 'Model/' + data_model.model[0]));
                for (const [name, uri] of data_model.weights) {
                    promiseArrayModel.push(FileSystem.downloadAsync(uri, FileSystem.documentDirectory + 'Model/' + name + '.jpg'));
                }
                try {
                    await Promise.all(promiseArrayModel);
                } catch (e) {
                    await FileSystem.deleteAsync(FileSystem.documentDirectory + 'Styles');
                    await FileSystem.deleteAsync(FileSystem.documentDirectory + 'Model');
                    await loadImages();
                    return
                }
            }
            setImageDownloaded(true);
        }
        loadImages();
    }, []);


    return (
        <View style={styles.container_global}>
            <View style={styles.sub_container}>
                <Animated.Image
                    source={require('@assets/logo.png')}
                    style={styles.logo_image}
                    sharedTransitionTag="logo"
                />
            </View>
            <View style={styles.sub_container}>
                <Animated.Text style={styles.title_text} sharedTransitionTag="Artify">Artify</Animated.Text>
                <Text style={styles.description_text}>
                    Apply Artistic Styles
                </Text>
            </View>
            <View style={styles.sub_container}>
                {imageDownloaded
                    ? <Button
                        onPress={controlOnPress}
                        mode="contained"
                        icon="arrow-right"
                    >
                        Start
                    </Button>
                    : <ActivityIndicator
                        animating={true}
                        color={theme.colors.primary}
                    />
                }
            </View>
        </View>
    )
}

