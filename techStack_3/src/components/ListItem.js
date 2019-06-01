import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableHighlight,
    UIManager,
    LayoutAnimation
} from 'react-native'
import { CardItem } from './common'
import { selectLibrary } from '../actions';
import { connect } from 'react-redux'


class ListItem extends Component {

    onPress = (e) => {
        const { library } = this.props;
        this.props.selectLibrary(library);
        console.log(library)
    }

    renderDescription = () => {

        return (
            <CardItem style={Style.expandedStyle} >
                <Text style={Style.descriptionStyle}>
                    {this.props.library.description}
                </Text>
            </CardItem>
        );
    }

    componentDidUpdate() {

        UIManager.setLayoutAnimationEnabledExperimental &&
            UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    render() {
        const { expand, library } = this.props;
        return (
            <TouchableHighlight underlayColor='#afafaf10' onPress={this.onPress}>
                <View>
                    <CardItem style={Style.container}>
                        <Text>{library.title}</Text>
                    </CardItem>
                    {expand && this.renderDescription.call(this)}
                </View>
            </TouchableHighlight>
        );
    }
}


const Style = StyleSheet.create({
    container: {
        alignSelf: 'stretch'
    },
    expandedStyle: {
        padding: 12,
        paddingLeft: 16,
        paddingRight: 16
    },
    descriptionStyle: {
        textAlign: 'justify'
    },
    touchableStyle: {

    }
});

const mapStateToProps = ({ selectedLibrary }, ownProps) => {

    return { expand: (selectedLibrary.id === ownProps.library.id) }
}

export default connect(mapStateToProps, { selectLibrary })(ListItem);

