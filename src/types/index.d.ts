import type { TouchableOpacityProps } from "react-native";

export type ButtonProps = {
  title: string
  variant: 'primary' | 'outline'
  className?: string
} & TouchableOpacityProps
