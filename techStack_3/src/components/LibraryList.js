import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { fetchLibraries } from '../actions';
import ListItem from './ListItem';



class LibraryList extends Component {

    componentDidMount() {
        this.props.fetchLibraries();
    }

    renderItems = (library) => {
        return (
            <ListItem library={library.item} />
        );
    }

    render() {
        return (
            <FlatList
                style={Style.container}
                renderItem={this.renderItems}
                data={this.props.libraries}
                keyExtractor={(library) => library.id}
            />
        );
    }
}


const Style = StyleSheet.create({
    container: {
        alignSelf: 'stretch'
    }
})


const mapStateToProps = (state) => {
    console.log(">> mapStateToProps libraries")
    console.log(state)
    return { libraries: state.libraries };
}


export default connect(mapStateToProps, { fetchLibraries })(LibraryList);
