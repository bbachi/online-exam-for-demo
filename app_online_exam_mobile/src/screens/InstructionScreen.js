import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function InstructionScreen({ children }) {
    return (
        <View style={styles.instructionsWrapper}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    instructionsWrapper: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 80,
        paddingBottom: 20,
        textTransform: 'uppercase',
    }
});
