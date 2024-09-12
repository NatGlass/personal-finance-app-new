export type AuthState = "signIn" | "signUp";

export interface AuthFormProps {
  setState: (state: AuthState) => void;
}