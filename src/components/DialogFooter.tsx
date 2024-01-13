import { Button, Dialog, Portal, Text } from "react-native-paper"

type Props = {
    visible: boolean,
    onDismiss: () => void,
    text: string,
    title: string
}

export default function DialogFooter({ visible, onDismiss, text, title}: Props) {
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={onDismiss}>
                <Dialog.Title>{title}</Dialog.Title>
                <Dialog.Content>
                    <Text>{text}</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={onDismiss}>Done</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}