import { Button, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { equipos } from '../../data/equipos';

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
                <Text>Detalle del equipo</Text>
                <Text>ID: {equipo.id}</Text>
                <Text>Nombre: {equipo.nombre}</Text>
                <Text>Categoría: {equipo.categoria}</Text>
                <Text>Ubicación: {equipo.ubicacion}</Text>
                <Text>Estado: {equipo.estado}</Text>

                <Button title="Volver" onPress={() => router.back()} />
            </View>
        </SafeAreaView>
    );
}