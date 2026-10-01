import { StyleSheet } from 'react-native';
import { colors } from './colors';
export const listStyles = StyleSheet.create({
screen: { flex: 1, backgroundColor: colors.background },
content: { padding: 20, paddingBottom: 40 },
brand: {
marginTop: 14,
fontSize: 13,
fontWeight: '800',
letterSpacing: 2,
color: colors.primary,
},
title: {
marginTop: 7,
fontSize: 27,
fontWeight: '700',
color: colors.text,
},
description: { marginTop: 7, fontSize: 15, color: colors.muted },
flatListDescription: { marginBottom: 22 },
list: { marginTop: 22, gap: 12 },
separator: { height: 12 },
empty: {
paddingVertical: 40,
textAlign: 'center',
color: colors.muted,
},
});