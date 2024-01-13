import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import StylesHorizontal from "@components/StylesHorizontal";
import { ScrollView } from "react-native";
import Banner from "@components/Banner";
import Share from "@components/Share";
import Footer from "@components/Footer";
import { RootStackParamList } from "App";
import { useTheme } from "react-native-paper";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Tabs'>;
}

export default function HomeScreen({ navigation }: Props) {
    
    const theme = useTheme();
    const styles = {
        container: {
            backgroundColor: theme.colors.background,
        },
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Banner />
            <StylesHorizontal />
            <Share />
            <Footer />
        </ScrollView>
    )
}