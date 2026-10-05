import { router } from 'expo-router';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { tasks } from '../data/tasks';
import { Task } from '../types/task';

export default function NuevaTareaScreen() {
  const [title, setTitle] = useState('');
  const [asset, setAsset] = useState('');
  const [priority, setPriority] = useState<Task['priority']>('Media');
  const [description, setDescription] = useState('');

  function guardarTarea() {
    const nuevaTarea: Task = {
      id: `OT-${104 + tasks.length}`,
      title: title,
      asset: asset,
      priority: priority,
      description: description,
    };

    tasks.push(nuevaTarea);

    router.push('/tareas');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nueva tarea</Text>

      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el título"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Equipo</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el equipo"
        value={asset}
        onChangeText={setAsset}
      />

      <Text style={styles.label}>Prioridad</Text>

      <View style={styles.priorities}>
        <Button
          title="Alta"
          onPress={() => setPriority('Alta')}
        />

        <Button
          title="Media"
          onPress={() => setPriority('Media')}
        />

        <Button
          title="Baja"
          onPress={() => setPriority('Baja')}
        />
      </View>

      <Text style={styles.selected}>
        Prioridad seleccionada: {priority}
      </Text>

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={[styles.input, styles.description]}
        placeholder="Ingrese la descripción"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Button
        title="Guardar tarea"
        onPress={guardarTarea}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },

  description: {
    height: 100,
    textAlignVertical: 'top',
  },

  priorities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },

  selected: {
    fontSize: 14,
    marginBottom: 8,
  },
});