import React, {
  Profiler,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import { Result } from "./styles";

let start = null;

const RenderTime = ({ Component, counter }) => {
  const [renderTime, setRenderTime] = useState("");
  useMemo(() => {
    start = performance.now();
  }, [Component, counter]);

  useLayoutEffect(() => {
    if (start) {
      const renderTime = performance.now() - start;
      start = null;
      setRenderTime(`${renderTime.toFixed(0)}ms`);
    }
  });

  return (
    <>
      <Result>{renderTime}</Result>
      <Profiler
        id="test"
        onRender={(id, phase, actualDuration) => {
          console.log("...");
          console.log("perf", id, phase, actualDuration);
        }}
      >
        <Component />
      </Profiler>
    </>
  );
};

export default RenderTime;
