import React from 'react';
import { View, Text, Switch, Pressable, StyleSheet} from "react-native";

export const CONFIG_PADRAO = {
    raioChegada: 20,
    somLigado: true,
    modoTeste: false,
    temaEscuro: false,
    rota: 'rapida',
};

const LIGHT_THEME = { background: '#ffffff', card: '#dcfce7', text: '#111827', textMuted:'#4b5563'};
const DARK_THEME = { background: '#111827', card: '#1f2937', text: '#f9fafb', textMuted: '#9ca3af'};

export default function TelaConfiguracoes({ config, onChange}) {
    const colors = config.temaEscuro ? DARK_THEME : LIGHT_THEME;

    function aumentarRaio() {
        if (config.raioChegada < 100) {
            onChange({ ...config, raioChegada: config.raioChegada + 5})
        }
    }


    function diminuirRaio() {
        if (config.raioChegada > 5) {
            onChange({ ...config, raioChegada: config.raioChegada - 5})
        }
    }

    return (
        <View style={[styles.screen, { backgroundColor: colors.background}]}>
            <Text style={[styles.title, {color: colors.text}]}>Configurações</Text>

        <View style={[styles.card, { backgroundColor: colors.card}]}>
            <View style={styles.row}>
                <Text style={[styles.label, { color: colors.text }]}>Modo Escuro</Text>
                <Switch
                    value={config.temaEscuro}
                    onValueChange={(value) => onChange({...config, temaEscuro: value})} 
                    />
            </View>
            </View>

        <View style={[styles.card, { backgroundColor: colors.card}]}>
            <Text style={[styles.label, { color: colors.text}]}>Route Type</Text>
            <View style={styles.routeRow}>
                <Pressable
                    style={[styles.option, config.rota === 'rapida' && styles.activeOption]}
                    onPress={() => onChange({...config, rota: 'rapida'})}
                    >
                        <Text style={[styles.optionText, config.rota === 'rapida' && styles.activeOptionText]}>
                            Rápida
                        </Text>
                    </Pressable>
                    <Pressable
                        style={[styles.option, config.rota === 'curta' && styles.activeOption]}
                        onPress={() => onChange({...config, rota: 'curta'})}
                        >
                            <Text style={[styles.optionText, config.rota === 'curta' && styles.activeOptionText]}>
                                Curta
                    </Text>
                </Pressable>
            </View> 
        </View>

        <View style={[styles.card, { backgroundColor: colors.card}]}>
            <Text style={[styles.label, { color: colors.text}]}>Raio Chegada</Text>
            <Text style={[styles.description, { color: colors.textMuted}]}>
                testo de teste
            </Text>
            <View style={[styles.radiusRow]}>
                <Pressable style={styles.button} onPress={diminuirRaio}>
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Text style={[styles.value, {color: colors.text}]}>{config.aumentarRaio}</Text>
                <Pressable style={styles.button} onPress={aumentarRaio}>
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>    
            </View>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card}]}>
            <View style={styles.row}>
                <Text style={[styles.label, { color: colors.text }]}>Som e Narração</Text>
                <Switch
                    value={config.somLigado}
                    onValueChange={(value) => onChange({...config, somLigado: value})} 
                    />
            </View>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card}]}>
            <View style={styles.row}>
                <Text style={[styles.label, { color: colors.text }]}>Modo de Texto</Text>
                <Switch
                    value={config.modoTeste}
                    onValueChange={(value) => onChange({...config, modoTeste: value})} 
                    />
            </View>
            <Text style={[styles.description, { color: colors.textMuted}]}>
                Teste 2
            </Text>
        </View>
    </View>    
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, padding: 20},
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16},
    card: { borderRadius: 12, padding: 16, marginBottom: 12},
    row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
    radiusRow: { flexDirection: 'row', marginTop: 12},
    routeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12},
    label: { fontSize: 16, fontWeight: '600'},
    description: { fontSize: 13, marginTop: 4},
    value: { fontSize: 20, fontWeight: 'bold', marginHorizontal: 20},
    button: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#16a34a',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: { color: '#ffffff', fontSize: 24, fontWeight: 'bold' },
    option: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 4,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#16a34a',
        alignItems: 'center',
    },
    activeOption: { backgroundColor: '#16a34a'},
    optionText: { color: '#16a34a', fontWeight: '600'},
    activeOptionText: { color: '#ffffff'},
});

