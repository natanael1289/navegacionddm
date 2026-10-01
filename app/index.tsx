import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <Button
        title="Equipos"
        onPress={() => router.push('/equipos')}
      />
      <Button
        title="Tareas"
        onPress={() => router.push('/tareas')}
      />
      <Button
        title="Nueva tarea"
        onPress={() => router.push('/nueva-tarea')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, gap: 16 },
  title: { fontSize: 24, fontWeight: '700' },
  text: { fontSize: 16, color: '#52606D' },
});
