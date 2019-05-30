import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Header } from './common'
import LibraryList from './LibraryList';

export default Main = (props) => {
    return (
        <View style={styles.container}>
            <Header title="React Trends" />
            <LibraryList />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});



