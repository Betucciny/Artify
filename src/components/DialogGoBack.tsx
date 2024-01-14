import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { Dialog, Portal, Text, Button } from "react-native-paper";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Result'>;
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
}

export default function DialogGoBack({ navigation, isVisible, setIsVisible }: Props) {
    const hideDialog = () => setIsVisible(false);
    const goBack = () => navigation.goBack();
    return (
        <Portal>
            <Dialog visible={isVisible} onDismiss={hideDialog}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Text variant="bodyMedium">Are you sure you want to go back, all the progress will be lost if you didn't save your image</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={goBack}>Go back</Button>
                    <Button onPress={hideDialog}>Cancel</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )

}