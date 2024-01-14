import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';
import * as jpeg from 'jpeg-js';
import * as FileSystem from 'expo-file-system';


const modelAssets = {
    model: require("@assets/model/model.json"),
    weights: [
        require("@assets/model/group1-shard1of23.bin"),
        require("@assets/model/group1-shard2of23.bin"),
        require("@assets/model/group1-shard3of23.bin"),
        require("@assets/model/group1-shard4of23.bin"),
        require("@assets/model/group1-shard5of23.bin"),
        require("@assets/model/group1-shard6of23.bin"),
        require("@assets/model/group1-shard7of23.bin"),
        require("@assets/model/group1-shard8of23.bin"),
        require("@assets/model/group1-shard9of23.bin"),
        require("@assets/model/group1-shard10of23.bin"),
        require("@assets/model/group1-shard11of23.bin"),
        require("@assets/model/group1-shard12of23.bin"),
        require("@assets/model/group1-shard13of23.bin"),
        require("@assets/model/group1-shard14of23.bin"),
        require("@assets/model/group1-shard15of23.bin"),
        require("@assets/model/group1-shard16of23.bin"),
        require("@assets/model/group1-shard17of23.bin"),
        require("@assets/model/group1-shard18of23.bin"),
        require("@assets/model/group1-shard19of23.bin"),
        require("@assets/model/group1-shard20of23.bin"),
        require("@assets/model/group1-shard21of23.bin"),
        require("@assets/model/group1-shard22of23.bin"),
        require("@assets/model/group1-shard23of23.bin"),
    ],
};


async function img2tensor(imgUri: string) {
    const img64 = await FileSystem.readAsStringAsync(imgUri, {
        encoding: FileSystem.EncodingType.Base64,
    });
    const imgBuffer = tf.util.encodeString(img64, 'base64').buffer;
    const raw = new Uint8Array(imgBuffer);
    const decodedImg = decodeJpeg(raw);
    const resizedImg = tf.image.resizeBilinear(decodedImg, [256, 256]);
    const expandedImg = resizedImg.expandDims(0);
    return expandedImg.div(255.0);
    
}

async function tensor2img(tensor: tf.Tensor<tf.Rank>) {
    const height = tensor.shape[1]
    const width = tensor.shape[2]
    if (height === undefined || width === undefined) {
        throw new Error("tensor2img: height or width is undefined")
    }
    const newTensor = tf.concat(
        [
            tensor.squeeze([0]).mul(255),
            tf.ones([height, width, 1]).mul(255)
        ],
        -1
    )
        .slice([0], [height, width, 4])

    const data = Buffer.from(newTensor.dataSync())

    const rawImageData = { data, width, height };
    const jpegImageData = jpeg.encode(rawImageData, 100);
    const imgBase64 = tf.util.decodeString(jpegImageData.data, "base64")
    const salt = `${Date.now()}-${Math.floor(Math.random() * 10000)}`
    const uri = FileSystem.cacheDirectory + `artify-${salt}.jpg`;
    await FileSystem.writeAsStringAsync(uri, imgBase64, {
        encoding: FileSystem.EncodingType.Base64,
    });
    return uri;
}

type SetProgress = (progress: number) => void;

export async function createImage(originalImageUri: string, styleImageUri: string, setProgress: SetProgress): Promise<string | null> {
    const loadModel = async () => {
        await tf.ready();
        return await tf
            .loadGraphModel(bundleResourceIO(modelAssets.model, modelAssets.weights))
    }
    const model = await loadModel();
    setProgress(0.2);
    const originalImageTensor = await img2tensor(originalImageUri);
    setProgress(0.4);
    const styleImageTensor = await img2tensor(styleImageUri);
    setProgress(0.6);
    const result = model.predict([originalImageTensor, styleImageTensor]);
    setProgress(0.8);
    const resultImageUri = await tensor2img(result as tf.Tensor<tf.Rank>);
    model.dispose();
    setProgress(1);
    return resultImageUri;
}

