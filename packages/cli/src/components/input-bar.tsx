

type Props = {
  OnSubmit: (text: string) => void;
  disabled?: boolean;
};

export function InputBar({ OnSubmit, disabled = false }: Props) {
  return (
    <box width="100%" alignItems="center">
      <box border={["left"]} borderColor="gray" width="100%">
        <box
          position="relative"
          justifyContent="center"
          paddingX={1}
          paddingY={1}
          backgroundColor="#333333"
          width="100%"
        >
          <input
            placeholder="Ask Layl..."
            placeholderColor="#666666"
            textColor="white"
            focused
            width="100%"
          />
        </box>
      </box>
    </box>
  );
}
