import { FlatList, Button, StyleSheet, Text, View } from 'react-native';
import { TaskCard } from '../components/TaskCard';
import { tasks } from '../data/tasks';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TareasScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tareas pendientes</Text>
      <Text style={styles.subtitle}>Seleccioná una orden para ver su detalle.</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
        contentContainerStyle={styles.list}
      />
      <Button title="Volver" onPress={() => router.back()} />      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F8FA' },
  title: { fontSize: 26, fontWeight: '700', color: '#102A43' },
  subtitle: { color: '#52606D', marginTop: 6, marginBottom: 16, fontSize: 16 },
  list: { gap: 12, paddingBottom: 24 },
});
