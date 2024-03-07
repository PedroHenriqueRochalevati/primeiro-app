import { Navigationcontainer } from "@react-navigation/native";
import Routes from './src/Routes';

export default function App() {
  return (
    <Navigationcontainer>
      <Routes />
    </Navigationcontainer>
  );
}