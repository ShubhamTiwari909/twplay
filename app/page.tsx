"use client";
import { MantineProvider } from "@mantine/core";
import Drawer from "./components/molecules/Drawer";
import { useLocalStorage } from "@mantine/hooks";
import ElementView from "./components/ElementView";

export default function Home() {
     
  const [colorScheme] = useLocalStorage({
    key: 'color-scheme',
    defaultValue: 'dark',
  });
  
  return (
    <MantineProvider>
      <main data-theme={colorScheme} className="flex">
        <Drawer />
        <ElementView />
      </main>
    </MantineProvider>
  );
}

