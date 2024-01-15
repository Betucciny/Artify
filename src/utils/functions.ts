import { Linking } from "react-native";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const postOnFacebook = (facebookShareURL: string | undefined, postContent: string | undefined) => {
    let facebookParameters = [];
    if (facebookShareURL)
        facebookParameters.push('u=' + encodeURI(facebookShareURL));
    if (postContent)
        facebookParameters.push('quote=' + encodeURI(postContent));
    const url =
        'https://www.facebook.com/sharer/sharer.php?'
        + facebookParameters.join('&');

    Linking.openURL(url)
        .then((data) => {
            console.log('Facebook Opened');
        })
        .catch(() => {
            console.log('Something went wrong');
        });
};


export const postOnInstagram = (instagramShareURL: string | undefined, postContent: string | undefined) => {
    let instagramParameters = [];
    if (instagramShareURL)
        instagramParameters.push('url=' + encodeURI(instagramShareURL));
    if (postContent)
        instagramParameters.push('caption=' + encodeURI(postContent));
    const url =
        'https://www.instagram.com/share?'
        + instagramParameters.join('&');

    Linking.openURL(url)
        .then((data) => {
            console.log('Instagram Opened');
        })
        .catch(() => {
            console.log('Something went wrong');
        });
};

export const postOnTwitter = (twitterShareURL: string | undefined, postContent: string | undefined) => {
    let twitterParameters = [];
    if (twitterShareURL)
        twitterParameters.push('url=' + encodeURI(twitterShareURL));
    if (postContent)
        twitterParameters.push('text=' + encodeURI(postContent));
    const url =
        'https://twitter.com/intent/tweet?'
        + twitterParameters.join('&');

    Linking.openURL(url)
        .then((data) => {
            console.log('Twitter Opened');
        })
        .catch(() => {
            console.log('Something went wrong');
        });
};

export const postOnPinterest = (pinterestShareURL: string | undefined, postContent: string | undefined) => {
    let pinterestParameters = [];
    if (pinterestShareURL)
        pinterestParameters.push('url=' + encodeURI(pinterestShareURL));
    if (postContent)
        pinterestParameters.push('description=' + encodeURI(postContent));
    const url =
        'https://pinterest.com/pin/create/button/?'
        + pinterestParameters.join('&');

    Linking.openURL(url)
        .then((data) => {
            console.log('Pinterest Opened');
        })
        .catch(() => {
            console.log('Something went wrong');
        });
}

export function getDimensions(width: number, height: number) {
    const originX = Math.floor(width > height ? (width - height) / 2 : 0);
    const originY = Math.floor(height > width ? (height - width) / 2 : 0);
    const croppedWidth = Math.floor(width > height ? height : width);
    const croppedHeight = Math.floor(height > width ? width : height);

    return {
        originX,
        originY,
        width: croppedWidth,
        height: croppedHeight,
    };
}


export async function saveImageAsync(uri: string) {
    const asset = await MediaLibrary.createAssetAsync(uri);
    const albums = await MediaLibrary.getAlbumsAsync();
    const album = albums.find((album) => album.title === "Artify")
    if (!album) {
        await MediaLibrary.createAlbumAsync("Artify", asset, false);
    } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
    }
}

export async function shareImage(uri: string) {
    await Sharing.shareAsync(uri, { dialogTitle: "Share your art" });
}

const androidDrawableResPath = FileSystem.bundledAssets
export const getAndroidReleaseImageURI = (sourceURI: string) => `${androidDrawableResPath}/${sourceURI}.jpg`;