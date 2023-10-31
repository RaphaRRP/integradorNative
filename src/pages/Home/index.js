import Header from "../../components/Header";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Movements from "../../components/Movements";

const list = [
    {
        id: 1,
        label: "Boleto conta de luz",
        value: "300,90",
        date: '17/09/2022',
        type: 0
    },
    {
        id: 2,
        label: 'pix Cliente x',
        value: '2.500,00',
        date: '22/09/2022',
        type: 1,
    },
    {
        id: 3,
        label: 'salario',
        value: '7.200,00',
        date: '30/09/2022',
        type: 1,
    },
    {
        id: 4,
        label: 'salario',
        value: '7.200,00',
        date: '30/09/2022',
        type: 1,
    },
]

export default function Home(){
    return(
        <View style={styles.container}>
            <Header userName={"Pablo"} text="Movimentações"/>
            <FlatList
            style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={ ({item}) =>  <Movements data={item}/>}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAFDFF"
    }
})
