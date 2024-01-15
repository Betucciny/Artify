import DialogMissingImages from "@/components/DialogMissingImages";
import ImageSelector from "@/components/ImageSelector";
import ImageStyleSelector from "@/components/ImageStyleSelector";
import ModalStyleSelection from "@components/ModalStyleSelection";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { data_styles, data_styles_local } from "@utils/styles";
import { RootStackParamList } from "App";
import { Asset } from "expo-asset";
import { SaveFormat, manipulateAsync } from "expo-image-manipulator";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Button, Icon, useTheme } from "react-native-paper";


type Props = NativeStackScreenProps<RootStackParamList, 'Generate'>;

export default function GenerateScreen({navigation}: Props) {
    const styles_avariable = [...data_styles.map(style => style.name), "Personalized"];
    const [style, setStyle] = useState(styles_avariable[0]);
    const [isVisible, setIsVisible] = useState(false);

    const theme = useTheme();
    const styles = StyleSheet.create({
        main_container: {
            backgroundColor: theme.colors.background,
        },
        title: {
            color: theme.colors.onSurface,
            fontSize: 25,
            fontWeight: 'bold',
            margin: 20,
        },
        button: {
            borderColor: theme.colors.primary,
            borderWidth: 2,
            margin: 10,
        },
        text: {
            verticalAlign: 'middle',
            color: theme.colors.onSurface,
            fontSize: 15,
            margin: 10,
        },
        text_icon: {
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
        },
    });


    const [styleImage, setStyleImage] = useState<string | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const [index, setIndex] = useState(0);
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    useEffect(() => {
        const loadInitialImage = async () => {
            const asset = data_styles_local.find(styleA => styleA.name === style);
            if (asset === undefined) {
                setStyleImage(null);
                return;
            }
            console.log(asset.images[index]);
            setStyleImage(asset.images[index]);
        }
        loadInitialImage();
    }, [style, index]);


    const controlGenerate = () => {
        if (styleImage === null || image === null) {
            setIsDialogVisible(true);
            return;
        }
        alert("We recommend using wifi to generate the image, the model is very heavy and can consume a lot of data")
        navigation.navigate('Result', {
            styleImageUri: styleImage,
            imageUri: image,
        });
    }

    return (
        <>
            <DialogMissingImages
                isVisible={isDialogVisible}
                setIsVisible={setIsDialogVisible}
            />
            <ModalStyleSelection
                style={style}
                setStyle={setStyle}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                styles_avariable={styles_avariable}
            />
            <ScrollView style={styles.main_container}>
                <Text style={styles.title}>Generate your next image <Icon source="palette-outline" size={30} color={theme.colors.primary} /></Text>
                <View>
                    <View style={styles.text_icon}>
                        <Icon source="check-circle" size={30} color={theme.colors.onSurface} />
                        <Text style={styles.text}>Choose your style</Text>
                    </View>
                    <Button
                        onPress={() => setIsVisible(true)}
                        mode="text"
                        style={styles.button}
                    >{style}</Button>
                    <ImageStyleSelector
                        setImageStyle={setStyleImage}
                        imageAsset={styleImage}
                        style_selected={style}
                        setIndex={setIndex}
                    />
                </View>
                <View>
                    <View style={styles.text_icon}>
                        <Icon source="check-circle" size={30} color={theme.colors.onSurface} />
                        <Text style={styles.text}>Choose your image</Text>
                    </View>
                    <ImageSelector setImage={setImage} imageAsset={image} />
                </View>
                <Button
                    onPress={controlGenerate}
                    mode="elevated"
                    style={styles.button}
                >
                    Generate
                </Button>
            </ScrollView>
        </>
    )
}