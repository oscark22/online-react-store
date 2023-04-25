import Navbar from "./comps/Navbar";
import Router from "./routes/Router";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Router />
    </AuthProvider>
  );
};

export default App;
