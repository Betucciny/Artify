import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, useTheme, ProgressBar, Button } from "react-native-paper";
import { StyleSheet, View, Text, BackHandler, Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import DialogGoBack from "@/components/DialogGoBack";
import { createImage } from "@/utils/model";
import { saveImageAsync, shareImage } from "@/utils/functions";


type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

export default function ResultScreen({ navigation, route }: Props) {

    const theme = useTheme();
    const styles = StyleSheet.create({
        mainContainer: {
            backgroundColor: theme.colors.background,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        title: {
            color: theme.colors.primary,
            fontSize: 25,
            fontWeight: 'bold',
            margin: 20,
        },
        progressBarContainer: {
            flexDirection: 'column',
            width: '80%',
            height: 30,
        },
        image: {
            borderRadius: 10,
            borderWidth: 2,
            borderColor: theme.colors.primary,
            width: 300,
            height: 300,
        },
        imagecontainer: {
            width: 300,
            height: 300,
        },
        buttonContainer: {
            alignContent: 'center',
            justifyContent: 'space-around',
            width: "80%",
            height: 100,
        },
        text: {
            color: theme.colors.onBackground,
            fontSize: 20,
            fontWeight: 'bold',
            margin: 20,
        },
        textContainer: {
            alignContent: 'center',
            justifyContent: 'center',
            width: "80%",
            height: 100,
        },
    });


    const { styleImageUri, imageUri } = route.params;
    const [isLoaded, setIsLoaded] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [result, setResult] = useState('');
    const [progress, setProgress] = useState(0);
    const [textProgress, setTextProgress] = useState("Starting...");


    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                setDialogVisible(true);
                return true;
            }
            const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () => subscription.remove();
        }, [])
    );

    useEffect(() => {
        if (progress >= 0.8) {
            setTextProgress("Almost there...");
        } else if (progress >= 0.6) {
            setTextProgress("Processing...");
        } else if (progress >= 0.4) {
            setTextProgress("Loading Style Image...");
        } else if (progress >= 0.2) {
            setTextProgress("Loading Original Iamge...");
        } else {
            setTextProgress("Loading Model...");
        }
    }, [progress]);

    useEffect(() => {
        const getImage = async () => {
            const resultImageUri = await createImage(imageUri, styleImageUri, setProgress);
            if (resultImageUri === null || resultImageUri === undefined || resultImageUri === '') {
                navigation.goBack();
                alert("Error creating image");
                return;
            }
            setIsLoaded(true);
            setResult(resultImageUri);
        }
        try {
            getImage();
        } catch (e) {
            console.log(e);
        }
    }, []);

    const uri = result === '' ? imageUri : result;

    const controlOnSave = async () => {
        await saveImageAsync(uri);
        navigation.goBack();
        navigation.goBack();
    }

    const controlOnShare = async () => {
        await shareImage(uri);
    }

    return (
        <>
            {!isLoaded
                ? <View style={styles.mainContainer}>
                    <Text style={styles.title}>Creating Image</Text>
                    <ActivityIndicator
                        animating={true}
                        color={theme.colors.primary}
                        size='large'
                    />
                    <Text style={styles.title}>{textProgress}</Text>
                    <View style={styles.progressBarContainer}>
                        <ProgressBar
                            progress={progress}
                            color={theme.colors.primary}
                        />
                    </View>
                </View>
                : <View style={styles.mainContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>New Image!!!</Text>
                        <Text style={styles.text}>Congratulations you've created a new image.</Text>
                    </View>
                    <View style={styles.imagecontainer}>
                        <Image source={{ uri }} style={styles.image} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            mode="contained"
                            onPress={controlOnSave}
                        >
                            Save
                        </Button>
                        <Button
                            mode="elevated"
                            onPress={controlOnShare}
                        >
                            Share
                        </Button>
                    </View>
                </View>
            }
            <DialogGoBack
                isVisible={dialogVisible}
                setIsVisible={setDialogVisible}
                navigation={navigation}
            />
        </>

    )

}
