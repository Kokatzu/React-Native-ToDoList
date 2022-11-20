import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'

import database from './src/database/database'
import Tarefa from "./src/Model/Tarefa";
import FormatoLista from "./src/Components/FormatoLista";

export default class App extends Component {
  //States
  constructor(props) {
    super(props);
    this.state = {
      tarefa: "",
      termino: "",
      prioridade: "",
      status: "",
      lista: []
    }

    this.Listar();

  }

  //Funções
  TestarConexao = () => {
    const db = new database();
    db.conectar();
  }

  Cadastrar = (tarefa, termino, prioridade, status) => {
    const db = new database();
    const novaTarefa = new Tarefa(tarefa, termino, prioridade, status)
    db.inserir(novaTarefa)
    this.Listar();
  }

  Listar = () => {
    const db = new database();
    db.listar().then(data => { this.setState({ lista: data }) })
  }

  Excluir = (id) => {
    const db = new database();
    db.remover(id);
    this.Listar();
  }

  Fazendo = (id) => {
    const db = new database();
    db.updateFazendo(id);
    this.Listar();
  }

  Pendente = (id) => {
    const db = new database();
    db.updatePendente(id);
    this.Listar();
  }

  render() {
    return (
      <View style={style.tela}>

        <View style={style.box1}>
          <Text style={style.text}>Cadastro</Text>
          <TextInput style={style.textinput} onChangeText={(textoDigitado) => this.setState({ tarefa: textoDigitado })} placeholder="Tarefa (Obrigatório)" />

          <TextInput style={style.textinput} onChangeText={(textoDigitado) => this.setState({ termino: textoDigitado })} placeholder="Data (Obrigatório)" />

          <TextInput style={style.textinput} onChangeText={(textoDigitado) => this.setState({ prioridade: textoDigitado })} placeholder="Prioridade (Obrigatório) - Tipos de Prioridade: Alta, Média e Baixa" />

          <TextInput style={style.textinput} onChangeText={(textoDigitado) => this.setState({ status: textoDigitado })} placeholder="Status (Obrigatório)" />

          <TouchableOpacity style={{ width: 100, backgroundColor: 'green', alignItems: 'center', padding: 5, borderRadius: 10, left: 10 }} onPress={() => { this.Cadastrar(this.state.tarefa, this.state.termino, this.state.prioridade, this.state.status) }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Cadastrar</Text>
          </TouchableOpacity>

        </View>

        <View style={style.box2}>
            <Text style={style.text}>Lista</Text>
            <ScrollView>
            {
              this.state.lista.map(
                item => (<FormatoLista key={item.id} id={item.id} tarefa={item.tarefa} termino={item.termino} prioridade={item.prioridade} status={item.status} excluir={this.Excluir} fazendo={this.Fazendo} pendente={this.Pendente}/>)
              )
            }
          </ScrollView>
        </View>
      </View >
    )
  }
}

const style = new StyleSheet.create({
  box1: {
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#4d4f54',
    maxHeight: 400
  },
  box2: {
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#4d4f54',
    maxHeight: 350
  },

  text: {
    fontSize: 20,
    color: 'white'
  },

  tela: {
    backgroundColor: '#3e414a',
    flex: 1
  },

  textinput: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
  }
})