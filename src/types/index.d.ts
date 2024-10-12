import type { TouchableOpacityProps, TextInputProps } from "react-native";

export type ButtonProps = {
  title: string
  variant: 'primary' | 'outline'
  className?: string
  isLoading?: boolean
  activityIndicatorColor?: string
} & TouchableOpacityProps

export type InputProps = {
  label?: string
  secureTextEntry?: boolean
  error?: boolean
  errorMessage?: string
  className?: string
} & TextInputProps
