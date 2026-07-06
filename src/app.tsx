import { AppTheme } from "@/theme";
import { useEffect } from "react";
import { BackHandler } from "react-native";
import { Navigation } from "@/navigation";
import { navigationRef } from "./navigation/navRef";

const App = () => {
  useEffect(() => {
    const sub = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );

    return () => sub.remove();
  }, []);

  return (
    <Navigation
      theme={AppTheme}
      ref={navigationRef as any}
    />
  );
}

export default App;
