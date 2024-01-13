import { modelAssets } from '@/utils/model';
import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from "@tensorflow/tfjs-react-native";
import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

type Props = {
    styleImageUti: string | null,
    imageUri: string | null,
    similarity: number,
    isVisible: boolean,
    setFinalImage: (image: string) => void,
}

export default function GenerateImage({ styleImageUti, imageUri, similarity, isVisible }: Props) {
    const [model, setModel] = useState<tf.LayersModel | void | null>(null);


    useEffect(() => {
        const loadModel = async () => {
            const model = await tf
                .loadLayersModel(bundleResourceIO(modelAssets.model, modelAssets.weights))
                .catch((error) => { console.log(error); });
            setModel(model);
        }
        // loadModel();
    }, []);

    const styles = StyleSheet.create({
        button: {
            margin: 10,
        },
    });

    return (
        <Button
            icon="play"
            mode="outlined"
            style={styles.button}
            onPress={() => {
                console.log("Generate");
            }}
        >
            Generate
        </Button>
    )
}