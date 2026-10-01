export type EstadoEquipo = 'Operativo' | 'En mantenimiento' | 'Fuera de servicio';
export type Equipo = {
id: string;
nombre: string;
categoria: string;
ubicacion: string;
estado: EstadoEquipo;
};