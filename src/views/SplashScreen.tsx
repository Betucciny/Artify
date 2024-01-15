import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "App"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, useTheme } from "react-native-paper";
import Animated from "react-native-reanimated";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { useEffect, useState } from "react";
import { data_styles_internet } from "@/utils/styles";



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
                if (imageDownloaded){
                    navigation.navigate('Tabs');
                }else{
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
                await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'Styles');
                for(const style of data_styles_internet){
                    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'Styles/' + style.name);
                    for(const [index, image] of style.images.entries()){
                        await FileSystem.downloadAsync(image, FileSystem.documentDirectory + 'Styles/' + style.name + '/' + index + '.jpg');
                    }
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
                <Button
                    onPress={controlOnPress}
                    mode="contained"
                    icon="arrow-right"
                >
                    Start
                </Button>
            </View>
        </View>
    )
}

