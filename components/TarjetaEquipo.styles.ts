import { StyleSheet } from 'react-native';
import { colors } from '../styles/colors';
export const tarjetaEquipoStyles = StyleSheet.create({
card: {
padding: 18,
borderWidth: 1,
borderColor: colors.border,
borderRadius: 16,
backgroundColor: colors.white,
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'flex-start',
gap: 12,
},
information: { flex: 1 },
code: {
fontSize: 12,
fontWeight: '800',
letterSpacing: 1,
color: colors.primary,
},
name: {
marginTop: 6,
fontSize: 18,
fontWeight: '700',
color: colors.text,
},
detail: { marginTop: 5, fontSize: 14, color: colors.muted },
location: { marginTop: 3, fontSize: 14, color: colors.muted },
badge: {
maxWidth: 120,
paddingHorizontal: 10,
paddingVertical: 6,
borderRadius: 99,
},
badgeText: {
textAlign: 'center',
fontSize: 12,
fontWeight: '700',
color: colors.text,
},
});