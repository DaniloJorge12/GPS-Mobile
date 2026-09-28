import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const logo = require("../../assets/navega-senai.png");

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Olá, Novato!</Text>
            <Text style={styles.subtitle}>
              Que bom ter você por aqui.
            </Text>
          </View>

          <Pressable
            onPress={() => router.push("/(tabs)/configuracoes")}
          >
            <Ionicons
              name="settings-outline"
              size={28}
              color="#5A3218"
            />
          </Pressable>
        </View>

        <View style={styles.logoArea}>
          <Image
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.logoText}>
            Seu guia na escola, sempre.
          </Text>
        </View>

        <Pressable
          style={styles.locationCard}
          onPress={() => router.push("/(tabs)/locais")}
        >
          <View style={styles.locationIcon}>
            <Ionicons
              name="location"
              size={30}
              color="#FFF9EE"
            />
          </View>

          <View style={styles.locationText}>
            <Text style={styles.locationTitle}>
              Encontrar um local
            </Text>

            <Text style={styles.locationDescription}>
              Descubra onde ficam os principais lugares da escola.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={24}
            color="#A96B3B"
          />
        </Pressable>

        <Text style={styles.sectionTitle}>
          Acesso rápido
        </Text>

        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() => router.push("/(tabs)/locais")}
          >
            <Ionicons
              name="map-outline"
              size={28}
              color="#5A3218"
            />

            <Text style={styles.buttonText}>
              Ver locais
            </Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => router.push("/(tabs)/locais")}
          >
            <Ionicons
              name="compass-outline"
              size={28}
              color="#5A3218"
            />

            <Text style={styles.buttonText}>
              Explorar
            </Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => router.push("/(tabs)/sobre")}
          >
            <Ionicons
              name="information-circle-outline"
              size={28}
              color="#5A3218"
            />

            <Text style={styles.buttonText}>
              Sobre
            </Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => router.push("/(tabs)/configuracoes")}
          >
            <Ionicons
              name="settings-outline"
              size={28}
              color="#5A3218"
            />

            <Text style={styles.buttonText}>
              Configurações
            </Text>
          </Pressable>
        </View>

        <View style={styles.tip}>
          <Ionicons
            name="bulb-outline"
            size={28}
            color="#5A3218"
          />

          <View style={styles.tipTextArea}>
            <Text style={styles.tipTitle}>
              Dica para novatos
            </Text>

            <Text style={styles.tipText}>
              Use a aba Locais para descobrir os pontos importantes da escola.
            </Text>
          </View>
        </View>

        <View style={styles.bottomCard}>
          <Text style={styles.bottomTitle}>
            Conheça nossa escola
          </Text>

          <Text style={styles.bottomText}>
            Encontre os lugares que fazem parte da sua rotina.
          </Text>

          <Pressable
            style={styles.bottomButton}
            onPress={() => router.push("/(tabs)/locais")}
          >
            <Text style={styles.bottomButtonText}>
              Explorar locais
            </Text>

            <Ionicons
              name="arrow-forward"
              size={18}
              color="#FFF9EE"
            />
          </Pressable>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },

  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5A3218",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#6F4A2D",
  },

  logoArea: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 5,
  },

  logo: {
    width: 300,
    height: 100,
  },

  logoText: {
    fontSize: 14,
    color: "#5A3218",
    marginTop: -10,
  },

  locationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF9EE",
    margin: 20,
    padding: 16,
    borderRadius: 18,
  },

  locationIcon: {
    width: 55,
    height: 55,
    borderRadius: 15,
    backgroundColor: "#A96B3B",
    justifyContent: "center",
    alignItems: "center",
  },

  locationText: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },

  locationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5A3218",
  },

  locationDescription: {
    marginTop: 4,
    fontSize: 13,
    color: "#6F4A2D",
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#5A3218",
    marginHorizontal: 20,
    marginBottom: 12,
  },

  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  button: {
    width: "48%",
    backgroundColor: "#EAD8BE",
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
  },

  buttonText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#5A3218",
  },

  tip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0DFC4",
    marginHorizontal: 20,
    marginTop: 8,
    padding: 16,
    borderRadius: 18,
  },

  tipTextArea: {
    flex: 1,
    marginLeft: 12,
  },

  tipTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5A3218",
  },

  tipText: {
    marginTop: 4,
    fontSize: 13,
    color: "#6F4A2D",
  },

  bottomCard: {
    backgroundColor: "#D3A46E",
    margin: 20,
    padding: 20,
    borderRadius: 18,
  },

  bottomTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5A3218",
  },

  bottomText: {
    marginTop: 8,
    fontSize: 14,
    color: "#FFF9EE",
  },

  bottomButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#5A3218",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 15,
  },

  bottomButtonText: {
    color: "#FFF9EE",
    fontWeight: "bold",
    marginRight: 8,
  },
});