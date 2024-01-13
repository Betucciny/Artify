import { ScrollView, StyleSheet } from "react-native";
import { Modal, Portal, RadioButton, Text, useTheme } from "react-native-paper";


type Props_Buttom = {
    style: string;
}



type Props = {
    style: string;
    setStyle: (style: string) => void;
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
    styles_avariable: string[];
}

function Item({ style }: Props_Buttom) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        radioButtom: {
            margin: 10,
            backgroundColor: theme.colors.primary,
            borderRadius: 10,
            width: 200,
        },
        text: {
            color: theme.colors.onPrimary,
            fontSize: 15,
            fontWeight: 'bold',
        }
    });

    return (
        <RadioButton.Item
            label={style}
            value={style}
            style={styles.radioButtom}
            labelStyle={styles.text}
            theme={theme}
            uncheckedColor={theme.colors.onPrimary}
            color={theme.colors.onPrimary}
        />
    )
}

export default function ModalStyleSelection({ style, setStyle, isVisible, setIsVisible, styles_avariable }: Props) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        portal: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            color: theme.colors.primary,
            margin: 10,
            fontSize: 25,
            fontWeight: 'bold',
        },
        modal: {
            alignSelf: 'center',
            backgroundColor: theme.colors.background,
            margin: 20,
            padding: 20,
            borderRadius: 10,
            height: 500,
            width: 300,
        },
        container: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    const controlOnValueChange = (value: string) => {
        setStyle(value);
        setIsVisible(false);
    }

    return (
        <Portal>
            <Modal visible={isVisible} onDismiss={() => setIsVisible(false)} contentContainerStyle={styles.modal}>
                <Text style={styles.text}>Select style</Text>
                <ScrollView contentContainerStyle={styles.container}>
                    <RadioButton.Group onValueChange={controlOnValueChange} value={style}>
                        {styles_avariable.map(style => <Item style={style} key={style}  />)}
                    </RadioButton.Group>
                </ScrollView>
            </Modal>
        </Portal>
    )
}