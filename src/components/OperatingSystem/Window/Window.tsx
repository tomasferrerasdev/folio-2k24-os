import { DragOverlay, useDraggable } from "@dnd-kit/core";
import styles from "./Window.module.css";
import { Icon } from "../Icon/Icon";
import { IWindow } from "../OS/OS";
import { useWindowStore } from "../../../store/windows-store";
import { useState, useEffect } from "react";

interface Props {
  window: IWindow;
  top: number;
  left: number;
}

export const Window = ({ window: osWindow, top, left }: Props) => {
  const {
    id,
    children,
    windowBarColor,
    windowBarIcon,
    windowTitle,
    width,
    height,
  } = osWindow;
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id.toString(),
  });
  const { removeWindow } = useWindowStore();
  const [resizing, setResizing] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: width ? width : 1200,
    height: height ? height : 900,
  });
  const [initialSize, setInitialSize] = useState({ width: 0, height: 0 });
  const [initialMousePosition, setInitialMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (!resizing) return;
      const dx = event.clientX - initialMousePosition.x;
      const dy = event.clientY - initialMousePosition.y;
      setWindowSize({
        width: initialSize.width + dx,
        height: initialSize.height + dy,
      });
    };

    const handleMouseUp = () => {
      setResizing(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [resizing, initialSize, initialMousePosition]);

  return (
    <>
      <div
        ref={setNodeRef}
        className={`${styles.windowContainer}`}
        style={{
          top,
          left,
          width: windowSize.width,
          height: windowSize.height,
        }}
      >
        <div className={styles.window}>
          <div className={styles.windowContent}>
            <nav style={{ backgroundColor: windowBarColor }}>
              <div
                className={styles.navbarTitle}
                {...listeners}
                {...attributes}
              >
                <figure>
                  <Icon icon={windowBarIcon} size={22} />
                </figure>
                <p>{windowTitle}</p>
              </div>
              <div className={styles.windowActions}>
                <div className={styles.windowActionContent}>
                  <button>
                    <Icon icon="minimize" />
                  </button>
                </div>
                <div className={styles.windowActionContent}>
                  <button>
                    <Icon icon="window" />
                  </button>
                </div>
                <div className={styles.windowActionContent}>
                  <button onClick={() => removeWindow(id)}>
                    <Icon icon="close" />
                  </button>
                </div>
              </div>
            </nav>
            <div className={styles.windowScreen}>
              <div
                className={styles.windowScreenContainer}
                style={{ overflowY: width && height ? "hidden" : "scroll" }}
              >
                {children}
              </div>
            </div>
            <footer>
              <div className={styles.footerCopyright}>
                <p>© Copyright 2024 Tomas Ferreras</p>
              </div>
              <div className={styles.footerBox}></div>
              <div className={styles.footerBox}></div>
              <div className={styles.footerBoxExtend}></div>
              {width && height ? (
                <></>
              ) : (
                <button
                  className={styles.resize}
                  onMouseDown={(event) => {
                    setInitialSize(windowSize);
                    setInitialMousePosition({
                      x: event.clientX,
                      y: event.clientY,
                    });
                    setResizing(true);
                  }}
                >
                  <Icon icon="resize" />
                </button>
              )}
            </footer>
          </div>
        </div>
      </div>
      <DragOverlay>
        <div
          className={styles.overlay}
          style={{
            width: windowSize.width,
            height: windowSize.height,
          }}
        >
          <div className={styles.overlayContainer}>
            <div className={styles.top}></div>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
            <div className={styles.bottom}></div>
          </div>
        </div>
      </DragOverlay>
    </>
  );
};
