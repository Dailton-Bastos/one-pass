import type { TouchableOpacityProps, TextInputProps, ImageSourcePropType } from "react-native";
import type { Session } from "@supabase/supabase-js";
import { Href, RouteParams, Router } from "expo-router";

type PasswordStrengthType = 'solid' | 'dashed'

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

export type InputPasswordProps = {
  showPasswordStrength?: boolean
  showPasswordStrengthLabel?: boolean
  passwordStrengthType?: PasswordStrengthType
} & InputProps

export type AuthContextData = {
  session: Session | null
  isLoading
  signOut: () => void
}

export type SearchProps = {
  isLoading?: boolean
} & TextInputProps

export type NotFoundProps = {
  showLinkHome?: boolean
  title?: string
  description?: string
}

export type CopyToClipboardProps = {
  handleClickCopy: () => void
}

export type PasswordCardProps = {
  passwordCard: {
    logo: ImageSourcePropType
    title: string
  }
}

export type BackButtonProps = {
  backLink: Href<string | object>
}

export type PasswordStrengthProps = {
  showLabel?: boolean
  value: string
  type?: PasswordStrengthType
  className?: string
}

export type GeneratePasswordParams = {
  includeUppercase: boolean,
  includeLowercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean,
  length: number,
}

export type CopyToClipboardResult = null | { state: 'success' } | { state: 'error'; message: string };
