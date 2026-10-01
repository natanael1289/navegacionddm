import { FlatList, Button, Text, View } from 'react-native';
import { router } from 'expo-router';
import { TarjetaEquipo } from '../components/TarjetaEquipo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { equipos } from '../data/equipos';
import type { Equipo } from '../types/Equipo';
import { listStyles as styles } from '../styles/listas.styles';

export default function EquiposScreeb() {
    const renderEquipo = ({ item }: { item: Equipo }) => (
        <TarjetaEquipo equipo={item} />
    );
    return (
        <SafeAreaView style={styles.screen}>
            <FlatList
                data={equipos}
                renderItem={renderEquipo}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.content}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListHeaderComponent={
                    <>
                        <Text style={styles.brand}>SIGMA</Text>
                        <Text style={styles.title}>Inventario con FlatList</Text>
                        <Text style={styles.description}>
                            La lista administra eficientemente los elementos visibles.
                        </Text>
                    </>
                }
                ListEmptyComponent={
                    <Text style={styles.empty}>No hay equipos registrados.</Text>
                }
            />
            <Button title="Volver" onPress={() => router.back()} />
        </SafeAreaView>
    );
}

