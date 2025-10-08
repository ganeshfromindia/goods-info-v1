import AuthContent from "../components/Auth/AuthContent";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Alert,
  Button,
} from "react-native";
import { ThemedText } from "../components/ThemedText";

function LoginScreen() {
  return (
    <>
      <AuthContent />
    </>
  );
}

export default LoginScreen;
