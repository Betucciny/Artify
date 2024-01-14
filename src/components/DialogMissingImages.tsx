import { Dialog, Portal, Text, Button } from "react-native-paper";


type Props = {
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
}

export default function DialogMissingImages({isVisible, setIsVisible}: Props){
    const hideDialog = () => setIsVisible(false);
    return (
        <Portal>
            <Dialog visible={isVisible} onDismiss={hideDialog}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Text variant="bodyMedium">Some images are missing, please select your images</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Ok</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )

}