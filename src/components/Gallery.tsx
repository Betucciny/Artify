import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View, FlatList, Pressable } from "react-native";
import { Text, useTheme, Button } from "react-native-paper";
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { shareImage } from "@/utils/functions";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Tabs'>;
}

type image = string;

export default function Gallery({ navigation }: Props) {
    const [images, setImages] = useState<image[]>([]);

    useEffect(() => {
        const getImages = async () => {
            const albums = await MediaLibrary.getAlbumsAsync();
            const artifyAlbum = albums.find(album => album.title === 'Artify');
            if (artifyAlbum === undefined) {
                return;
            }
            const assets = await MediaLibrary.getAssetsAsync({ album: artifyAlbum, first: 20, sortBy: MediaLibrary.SortBy.creationTime });
            setImages(assets.assets.map(asset => asset.uri));
        }
        const subscription = navigation.addListener('focus', () => {
            getImages();
        });
        return subscription;
    }, [navigation]);

    const theme = useTheme();

    const styles = StyleSheet.create({
        main_container: {
            backgroundColor: theme.colors.background,
            height: "100%",
        },
        container: {
            flex: 1,
        },
        title: {
            fontSize: 30,
            color: theme.colors.primary,
            margin: 20,
        },
        text: {
            paddingHorizontal: 20,
            marginBottom: 10,
            fontSize: 20,
            fontWeight: 'bold',
        },
        image_container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
        },
        image: {
            borderRadius: 10,
            borderColor: theme.colors.primary,
            borderWidth: 2,
            width: "100%",
            aspectRatio: 1,
            // height: "100%",
        },
        button: {
            margin: 10,

        },
    });

    return (
        <View style={styles.main_container}>
            <Text style={styles.title}>Generate your new image</Text>
            <Button
                mode="contained"
                style={styles.button}
                onPress={() => navigation.navigate('Generate')}
            >
                Generate
            </Button>
            <Text style={styles.title}>Gallery</Text>
            {images.length === 0
                ? <Text style={styles.text}>You have no images, generate some to start</Text>
                : <Text style={styles.text}>Here you can see the images you have ganerated, to see all of them open your Pictures Folder</Text>}
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Pressable style={styles.image_container} onPress={async () => {
                        await shareImage(item);
                    }}>
                        <Image source={{ uri: item }} style={styles.image} />
                    </Pressable>
                )}
                keyExtractor={(_, index) => index.toString()}
                numColumns={2}
            />
        </View>
    )

}