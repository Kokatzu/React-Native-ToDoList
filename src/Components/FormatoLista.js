import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class FormatoLista extends Component {

    getTarefa = () => {
        if (this.props.prioridade == "Alta") {
            return {
                margin: 5,
                borderWidth: 2,
                borderColor: '#ff6b6b',
                borderRadius: 5,
                padding: 5,
                backgroundColor: '#fa8282'
            }
        }
        else if (this.props.prioridade == "Média") {
            return {
                margin: 5,
                borderWidth: 2,
                borderColor: '#fca33d',
                borderRadius: 5,
                padding: 5,
                backgroundColor: '#f5b164'
            }
        }
        else if (this.props.prioridade == "Baixa") {
            return {
                margin: 5,
                borderWidth: 2,
                borderColor: '#3663f7',
                borderRadius: 5,
                padding: 5,
                backgroundColor: '#6e90ff'
            }
        }
    }

    render() {
        return (
            <View style={this.getTarefa()}>
                <Text style={style.text}>ID: {this.props.id}</Text>
                <Text style={style.text}>Tarefa: {this.props.tarefa}</Text>
                <Text style={style.text}>Prazo: {this.props.termino} | Prioridade: {this.props.prioridade} | Status: {this.props.status}</Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{ width: 100, backgroundColor: 'orange', alignItems: 'center', padding: 5, borderRadius: 10}} onPress={() => this.props.excluir(this.props.id)}>
                        <Text style={{ color: 'white', fontWeight: 'bold', marginHorizontal: 5 }}>Concluido</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 100, backgroundColor: 'green', alignItems: 'center', padding: 5, borderRadius: 10, marginHorizontal: 5}} onPress={() => this.props.fazendo(this.props.id)}>
                        <Text style={{ color: 'white', fontWeight: 'bold', marginHorizontal: 5 }}>Fazendo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 100, backgroundColor: 'red', alignItems: 'center', padding: 5, borderRadius: 10}} onPress={() => this.props.pendente(this.props.id)}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Pendente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style = new StyleSheet.create({
    tarefa: {
        margin: 5,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#grey'
    },
    text: {
        color: 'white'
    }
})