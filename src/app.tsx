import { AppTheme } from "@/theme";
import { createStaticNavigation } from "@react-navigation/native";
import { RootNavigator } from "./navigation/navigator";
import { useBlockBack } from "./hooks";
import { navRef } from "@/navigation/ref";

const Navigation = createStaticNavigation(RootNavigator)

const App = () => {
  useBlockBack();
  return (
    <Navigation theme={AppTheme} ref={navRef as any} />
  );
}

export default App;
