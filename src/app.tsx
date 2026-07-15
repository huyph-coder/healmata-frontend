import { createStaticNavigation } from "@react-navigation/native";
import { RootNavigator } from "./navigation/navigator";
import { useBlockBack } from "./hooks";
import { navRef } from "@/navigation/ref";
import { ThemeProvider } from "./theme/provider";

const Navigation = createStaticNavigation(RootNavigator)

const App = () => {
  useBlockBack();
  return (
    <ThemeProvider>
      <Navigation ref={navRef as any} />
    </ThemeProvider>
  );
}

export default App;
