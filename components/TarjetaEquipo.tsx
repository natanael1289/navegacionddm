import { Text, View } from 'react-native';
import { colors } from '../styles/colors';
import { tarjetaEquipoStyles as styles } from './TarjetaEquipo.styles';
import type { Equipo, EstadoEquipo } from '../types/Equipo';
type TarjetaEquipoProps = {
equipo: Equipo;
};
const coloresEstado: Record<EstadoEquipo, string> = {
Operativo: '#DDF1E9',
'En mantenimiento': '#FBE6CA',
'Fuera de servicio': '#F7D7D9',
};
export function TarjetaEquipo({ equipo }: TarjetaEquipoProps) {
return (
<View style={styles.card}>
<View style={styles.header}>
<View style={styles.information}>
<Text style={styles.code}>{equipo.id}</Text>
<Text style={styles.name}>{equipo.nombre}</Text>
<Text style={styles.detail}>{equipo.categoria}</Text>
<Text style={styles.location}>{equipo.ubicacion}</Text>
</View>
<View style={[styles.badge, { backgroundColor: coloresEstado[equipo.estado] }]}>
<Text style={styles.badgeText}>{equipo.estado}</Text>
</View>
</View>
</View>
);
}