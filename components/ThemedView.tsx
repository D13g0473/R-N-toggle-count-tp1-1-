import { View, ViewProps, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';

type ThemedViewProps = ViewProps & {
  style?: StyleProp<ViewStyle>;
};

export function ThemedView({ style, ...props }: ThemedViewProps) {
  const theme = useTheme(); // ejemplo de tema
  return <View style={[{ backgroundColor: theme.colors.background }, style]} {...props} />;
}
