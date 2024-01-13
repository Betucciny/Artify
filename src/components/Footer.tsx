import DialogFooter from '@components/DialogFooter';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const Footer = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        footerContainer: {
            backgroundColor: theme.colors.surfaceVariant,
            padding: 10,
            borderTopWidth: 1,
            borderTopColor: '#ccc',
        },
        appVersionSection: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
        },
        feedbackSection: {
            flexDirection: 'row',
            justifyContent: 'space-between',
    
        },
        feedbackButton: {
            padding: 5,
        },
    });

    const [visibleApp, setVisibleApp] = useState(false);
    const [visibleFeedback, setVisibleFeedback] = useState(false);
    const [visibleIssue, setVisibleIssue] = useState(false);

    const controlAppOnPress = async () => {
        setVisibleApp(true);
    }

    const controlFeedbackOnPress = async () => {
        setVisibleFeedback(true);
    }

    const controlIssueOnPress = async () => {
        setVisibleIssue(true);
    }

    const controlAppOnDismiss = async () => {
        setVisibleApp(false);
    }

    const controlFeedbackOnDismiss = async () => {
        setVisibleFeedback(false);
    }

    const controlIssueOnDismiss = async () => {
        setVisibleIssue(false);
    }

    return (
        <View style={styles.footerContainer}>
            <DialogFooter
                visible={visibleApp}
                onDismiss={controlAppOnDismiss}
                text={"App Version: 1.0.0"}
                title={'Artify App Version'}
            />
            <DialogFooter
                visible={visibleFeedback}
                onDismiss={controlFeedbackOnDismiss}
                text={'Please send feedback to betohr48@gmail.com'}
                title={'Feedback'}
            />
            <DialogFooter
                visible={visibleIssue}
                onDismiss={controlIssueOnDismiss}
                text={'Please report an issue to the github repository: https://github.com/Betucciny/AIapp'}
                title={'Issues'}
            />
            <View style={styles.feedbackSection}>
                <TouchableOpacity style={styles.feedbackButton} onPress={controlAppOnPress}>
                    <Text>App Version: 1.0.0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.feedbackButton} onPress={controlFeedbackOnPress}>
                    <Text>Send Feedback</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.feedbackButton} onPress={controlIssueOnPress}>
                    <Text>Report an Issue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



export default Footer;