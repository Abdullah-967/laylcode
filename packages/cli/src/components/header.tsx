export function Header() {
    return (
        <box justifyContent="center" alignItems="flex-end" >
        <box flexDirection="row" alignItems="center" gap={0.5} justifyContent="center"> 
            <ascii-font font="tiny" text="Layl" color="white" />
            <ascii-font font="shade" text="CLI" />
        </box>
        </box>
    );
};