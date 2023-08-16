import { useDisclosure } from "@mantine/hooks";
import { Drawer, Group, Button } from "@mantine/core";
import { PiHamburger } from "react-icons/pi";
import { twClasses } from "@/app/methods/data";
import { useStore } from "@/app/methods/methods";

function Sidebar() {
  const [opened, { open, close }] = useDisclosure(false);
  const { setTabType } = useStore();

  const content = twClasses.map((classes) => {
    return (
      <button key={classes} className="btn btn-primary text-white" onClick={() => {
        setTabType(classes)
        close()
      }}>{classes}</button>
    );
  });

  return (
    <div data-theme="dark" className="fixed top-2 left-2 z-10">
      <Drawer opened={opened} onClose={close} title="Categories" size={200}>
        <div className='flex flex-col gap-3'>{content}</div>
      </Drawer>

      <Group position="left">
        <Button onClick={open}>
          <PiHamburger />
        </Button>
      </Group>
    </div>
  );
}

export default Sidebar;
