import { TextAttributes } from "@opentui/core";

export function StatusBar() {
  return (
    <box flexDirection="row" gap={1} justifyContent="center" alignItems="center">
      <text fg="cyan">Build</text>
      <text attributes={TextAttributes.DIM} fg="gray">
        &gt; gpt-4o
      </text>
    </box>
  );
}