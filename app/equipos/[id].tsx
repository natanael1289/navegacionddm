import { Button, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { equipos } from '../../data/equipos';
import { listStyles as styles } from '../../styles/listas.styles';


export default function DetalleEquipo() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const equipo = equipos.find((e) => e.id === id);

if (!equipo) {
    return (
        <SafeAreaView>
            <Text>Equipo no encontrado.</Text>
            <Button title="Volver" onPress={() => router.back()} />
        </SafeAreaView>
    );
}

return (
    <SafeAreaView>
        <View>
            <Text style={styles.title}>Detalle del equipo</Text>
            <Text style={styles.description}>ID: {equipo.id}</Text>
            <Text style={styles.description}>Nombre: {equipo.nombre}</Text>
            <Text style={styles.description}>Categoría: {equipo.categoria}</Text>
            <Text style={styles.description}>Ubicación: {equipo.ubicacion}</Text>
            <Text style={styles.description}>Estado: {equipo.estado}</Text>

            <Button title="Volver" onPress={() => router.back()} />
        </View>
    </SafeAreaView>

   );
}