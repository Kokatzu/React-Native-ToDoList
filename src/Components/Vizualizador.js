import React, { Component } from "react";
import { View, Text } from 'react-native'

export default class Vizualizador extends Component {
    render() {
        return (
            <View>
                <Text>Tarefa a ser cadastrada:</Text>
                <Text>Tarefa: {this.props.tarefa}</Text>
                <Text>Data: {this.props.termino}</Text>
                <Text>Prioridade: {this.props.prioridade}</Text>
                <Text>Status: {this.props.status} </Text>
                <Text></Text>
            </View>
        )
    }
}