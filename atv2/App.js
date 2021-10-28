import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './componentes/Cabecalho';
import Corpo from './componentes/Corpo';
import Disciplina from './componentes/Disciplina';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome='Lorena Amaro' curso='Design Digital'/>
      <Corpo />
      <Text style={{fontWeight: 'bold'}}>Disciplinas Matriculadas:</Text>
      <Disciplina disciplina='Projeto de Interface para Dispositivos Móveis'/>
      <Disciplina disciplina='Projeto de Interface Web'/>
      <Disciplina disciplina='Projeto Integrado 4'/>
      <Disciplina disciplina='Concepção e Desenvolvimento de Produto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
