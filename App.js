import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

function DadosScreen({ navigation }) {
  const[nome, setNome] = useState('');
  const[cnpj, setCnpj] = useState('');
  const[razaoSocial, setRazaoSocial] = useState('');
  const[inscricao, setInscricao] = useState('');
  const[celular, setCelular] = useState('');
  const[telefone, setTelefone] = useState('');
  const[nomeVendedor, setNomeVendedor] = useState('');

  return (
  <View contentContainerStyle={{ padding: 20 }}>
    <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
    <TextInput
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
    <TextInput
        placeholder="Razão Social"
        value={razaoSocial}
        onChangeText={setRazaoSocial}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
    <TextInput
        placeholder="Inscrição Estadual"
        value={inscricao}
        onChangeText={setInscricao}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
    <TextInput
        placeholder="Celular"
        value={celular}
        onChangeText={setCelular}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
    <TextInput
        placeholder="Telefone Fixo"
        value={telefone}
        onChangeText={setTelefone}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
          <TextInput
        placeholder="Nome Vendedor"
        value={nomeVendedor}
        onChangeText={setNomeVendedor}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Ir para Endereço" onPress={() => navigation.navigate
      ('Endereco',{nome, cnpj, razaoSocial, inscricao, celular, telefone})} />
  </View>
  );
}

function EnderecoScreen({route, navigation}){
  const {nome, cnpj, razaoSocial, inscricao, celular, telefone} = route.params;

  const[cep, setCep] = useState('');
  const[endereco,setEndereco]= useState('');
  const[numero,SetNumero]= useState('');
  const[complemento, setComplemento]= useState('');
  const[referencia, setReferencia]= useState('');
  const[bairro, setBairro]= useState('');
  const[cidade, setCidade]= useState('');
  
  return (
  <View contentContainerStyle={{ padding: 20 }}>
    <TextInput
        placeholder="CEP"
        value={cep}
        onChangeText={setCep}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
    <TextInput
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
    <TextInput
        placeholder="Número"
        value={numero}
        onChangeText={SetNumero}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
    <TextInput
        placeholder="Complemento"
        value={complemento}
        onChangeText={setComplemento}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
    <TextInput
        placeholder="Referência"
        value={referencia}
        onChangeText={setReferencia}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
    <TextInput
        placeholder="Bairro"
        value={bairro}
        onChangeText={setBairro}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
    <TextInput
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
     <Button title="Enviar" onPress={() => navigation.navigate('Formulario', { nome, cnpj, razaoSocial, inscricao, celular, telefone, cep, endereco, numero, complemento, referencia, bairro, cidade })} />
  </View>
  );
}
 
function FormularioScreen({ route }) {
  const { nome, cnpj, razaoSocial, inscricao, celular, telefone, cep, endereco, numero, complemento, referencia, bairro, cidade } = route.params;
  return (
    <View style={{ padding: 20 }}>
      <Text> Nome: {nome}</Text>
      <Text> Cnpj: {cnpj}</Text>
      <Text> Razão Social: {razaoSocial}</Text>
      <Text> Inscrição Estadual: {inscricao}</Text>
      <Text> Celular: {celular}</Text>
      <Text> Telefone: {telefone}</Text>
      <Text> CEP: {cep}</Text>
      <Text> Endereço: {endereco}</Text>
      <Text> Número: {numero}</Text>
      <Text> Complemento: {complemento}</Text>
      <Text> Referência: {referencia}</Text>
      <Text> Bairro: {bairro}</Text>
      <Text> Cidade: {cidade}</Text>
 
    </View>
  );
}
 
const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dados" component={DadosScreen} />
        <Stack.Screen name="Endereco" component={EnderecoScreen} />
        <Stack.Screen name="Formulario" component={FormularioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

