import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Header } from "./components/header";
import { InputBar } from "./components/input-bar";
import {StatusBar} from "./components/status-bar";

function App() {
  return (
    <box
      alignItems="center"
      justifyContent="center"
      backgroundColor="black"
      width="100%"
      height="100%"
      gap={2} 
      > 
      <Header />
        <box width="100%" maxWidth={75} padding={2}>
          <InputBar OnSubmit={() => {}} />
        </box>
     <StatusBar />
    
    </box>
  );
};

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
