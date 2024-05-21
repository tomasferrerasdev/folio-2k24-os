import { useEffect, useState } from "react";
import { ExecutableIcons } from "../../Executables";
import { Navbar } from "../Navbar/Navbar";
import { Window } from "../Window/Window";
import styles from "./OS.module.css";
import { DndContext } from "@dnd-kit/core";
import { Coordinates } from "@dnd-kit/core/dist/types";
import { Icon, IconName } from "../Icon/Icon";
import { useWindowStore } from "../../../store/windows-store";

export interface IWindow {
  id: number;
  windowTitle: string;
  windowBarColor: string;
  windowBarIcon: IconName;
  children: JSX.Element;
  width?: number;
  height?: number;
  isMinimized: boolean;
}

export const OS = () => {
  const { openWindows, setActiveWindow, activeWindow } = useWindowStore();
  const [coordinates, setCoordinates] = useState<{
    [key: number]: Coordinates;
  }>({});

  useEffect(() => {
    const playSound = (evt: MouseEvent) => {
      const mouseDown = new Audio(`/music/mouse_down.mp3`);
      const mouseUp = new Audio(`/music/mouse_up.mp3`);
      if (evt.type === "mousedown") {
        mouseDown.play();
      } else if (evt.type === "mouseup") {
        mouseUp.play();
      }
    };

    window.addEventListener("mousedown", (e) => playSound(e));
    window.addEventListener("mouseup", (e) => playSound(e));

    return () => {};
  }, []);

  return (
    <main className={styles.OS}>
      {openWindows.map((window) => (
        <DndContext
          key={window.id}
          onDragStart={() => setActiveWindow(window.id)}
          onDragEnd={({ delta }) => {
            setCoordinates((prevCoordinates) => {
              return {
                ...prevCoordinates,
                [window.id]: {
                  x: (prevCoordinates[window.id]?.x || 0) + delta.x,
                  y: (prevCoordinates[window.id]?.y || 0) + delta.y,
                },
              };
            });
          }}
        >
          <div
            key={window.id}
            style={{
              position: "absolute",
              zIndex: activeWindow === window.id ? 99999 : 99,
            }}
          >
            <Window
              window={window}
              top={coordinates[window.id]?.y || 0}
              left={coordinates[window.id]?.x || 0}
            />
          </div>
        </DndContext>
      ))}
      <ExecutableIcons />
      <Navbar />
      <div className={styles.helper}>
        <div className={styles.helperText}>
          <p>
            If you want to exit just click the "power" button and turn off the
            computer
          </p>
        </div>
        <Icon icon="clip" size={190} />
      </div>
    </main>
  );
};
