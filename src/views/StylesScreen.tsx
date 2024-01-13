import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Gallery from "@components/Gallery";
import { useTheme } from "react-native-paper";
import { RootStackParamList } from "App";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Tabs'>;
}

export default function StylesSreen({ navigation }: Props) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        title: {
            fontSize: 30,
            color: theme.colors.primary,
            margin: 20,
        },
        button: {
            margin: 10,
        },

    });
    return (
        <Gallery navigation={navigation} />
    )
}