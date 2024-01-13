import GenerateImage from "@/components/GenerateImage";
import ImageSelector from "@/components/ImageSelector";
import ImageStyleSelector from "@/components/ImageStyleSelector";
import SliderSimilarity from "@/components/SliderSimilarity";
import ModalStyleSelection from "@components/ModalStyleSelection";
import { data_styles } from "@utils/styles";
import { Asset } from "expo-asset";
import { ImageResult } from "expo-image-manipulator";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Icon, useTheme } from "react-native-paper";



export default function GenerateScreen() {
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
    const [similarity, setSimilarity] = useState(0.5);
    const [finalImage, setFinalImage] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isGenerated, setIsGenerated] = useState(false);


    useEffect(() => {
        const loadInitialImage = async () => {
            const asset = data_styles.find(styleA => styleA.name === style);
            if (asset === undefined) {
                setStyleImage(null);
                return;
            }
            const assetImage = Asset.fromModule(asset.images[index]);
            await assetImage.downloadAsync();
            setStyleImage(assetImage.localUri);
        }
        loadInitialImage();
    }, [style, index]);


    return (
        <>
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
                <SliderSimilarity similarity={similarity} setSimilarity={setSimilarity} />
                <GenerateImage 
                    styleImageUti={styleImage}
                    imageUri={image}
                    similarity={similarity}
                    isVisible={isGenerated}
                    setFinalImage={setFinalImage}
                />
            </ScrollView>
        </>
    )
}