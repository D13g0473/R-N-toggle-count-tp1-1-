import { Platform, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  const { height } = Dimensions.get('window');

  const containerStyle = {
    backgroundColor: isDarkTheme ? '#1D1D1D' : '#F5F5F5',
    flex: 1,
    padding: 16,
    marginTop: Platform.OS === 'android' ? 35 : 0,
  };

  const cardStyle = StyleSheet.create({
  card: {
    backgroundColor: isDarkTheme ? '#333' : '#FFF',
    margin: 20,
    marginTop: height  * 0.2,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
  },
  });

  const textStyle = StyleSheet.create({
    text:{
    color: isDarkTheme ? '#FFF' : '#000',
    height: 'auto',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: isDarkTheme ? '#007AFF': '#6F8DF2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 25, // 🔹 redondea el botón
    marginVertical: 8,
  },
  resetButton: {
    backgroundColor: isDarkTheme ? '#FF3B30' : '#F26F6F',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color : isDarkTheme ? '#FFF' : '#000', 
  },
  themeButton:{
    backgroundColor: isDarkTheme ? '#333' : '#FFF' 
  },
  counter: {
    marginTop: 20,
    fontSize: 24,
  },
});
  return (
    <ThemedView style={containerStyle}>
      <View
      style={{ flexDirection: 'row',  justifyContent: 'flex-end' }}
      >
      <TouchableOpacity
        style={[styles.button, styles.themeButton]}
        onPress={toggleTheme}
      >
        <Ionicons 
          name={isDarkTheme ? "moon" : "sunny"} 
          size={24} 
          color={isDarkTheme ? "#FFF" : "#000"} 
        />
      </TouchableOpacity>
      </View>
      <ThemedView style={cardStyle.card}>
        <ThemedText style={textStyle.text}>{count}</ThemedText>
      </ThemedView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: height  * 0.2 }}>
       <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        onPress={() => setCount(0)}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

