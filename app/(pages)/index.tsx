import {
  startTransition,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";

import { AuthContext } from "../../store/auth-context";
import * as SecureStore from "expo-secure-store";

import {
  useRouter,
  useFocusEffect,
  useNavigation,
  useLocalSearchParams,
} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";

function AuthStack() {
  const router = useRouter();

  useFocusEffect(() => {
    // Redirect to /about
    router.replace("/authScreen");
  });

  return null;
  //return <Redirect href="/authScreen" />;
}

function AuthenticatedStack() {
  const auth = useContext(AuthContext);
  const router = useRouter();
  const navigation = useNavigation();
  useFocusEffect(() => {
    if (auth && auth.token) {
      navigation.dispatch(
        CommonActions.reset({
          routes: [
            {
              key: "(tabs)",
              name: "(tabs)",
            },
          ],
        }),
      );
      if (auth.role == "Manufacturer" || auth.role == "Trader") {
        router.replace("/(pages)/categories");
      } else if (auth.role == "Admin") {
        router.replace("/(tabs)/(dashboard)/admin/dashboardAdminScreen");
      }
    }
  });
  return null;
}

function Navigation() {
  const [storedData, setStoredData] = useState<any | null>(null);

  useEffect(() => {
    async function load() {
      const initialUserData: any = {
        token: null,
        userId: null,
        userName: null,
        email: null,
        mobileNo: null,
        role: null,
        image: null,
        expiration: null,
      };
      const result =
        (await SecureStore.getItemAsync("userData")) || initialUserData;
      setStoredData(result);
    }
    load();
  }, []);

  if (storedData && storedData.token) {
    return <AuthenticatedStack />;
  } else {
    return <AuthStack />;
  }
}

function Root(): any {
  return <Navigation />;
}

export default function PagesLayout() {
  return <Root />;
}
