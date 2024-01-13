import BottomBar from "@components/BottomBar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import HomeScreen from "@views/HomeScreen";
import StylesSreen from "@views/StylesScreen";
import Header from "@components/Header";


type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Tabs'>;
}


export default function TabController({ navigation }: Props) {
    const routes = [
        {
            render: ({ navigation }: Props) => <HomeScreen navigation={navigation} />,
            key: "home",
            title: "Home",
            icon: "home"
        },
        {
            render: ({ navigation }: Props) => <StylesSreen navigation={navigation} />,
            key: "styles",
            title: "Styles",
            icon: "brush-variant"
        }
    ]

    return (
        <>
            <Header />
            <BottomBar listItems={routes} navigation={navigation} />
        </>

    );
}

