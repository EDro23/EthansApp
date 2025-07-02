import { Tabs } from "expo-router";
import { GameProvider } from "../Components/GameContext";

export default function RootLayout() {
  return (
    <GameProvider>
      <Tabs>
        <Tabs.Screen
          name="index"      // your view page (e.g., Index.jsx)
          options={{
            title: "View Games",
            tabBarLabel: "View",
          }}
        />
        <Tabs.Screen
          name="updategames"  // your edit page (UpdateGames.jsx)
          options={{
            title: "Edit Games",
            tabBarLabel: "Edit",
          }}
        />
      </Tabs>
    </GameProvider>
  );
}
