import React, { createContext, useContext, useState } from 'react';

/**
 * Define the type for the mode.
 * Can be 'light' or 'dark'.
 */
type Mode = 'light' | 'dark';

/**
 * Context to store the current mode and its setter function.
 */
const ModeContext = createContext<{ mode: Mode; setMode: (mode: Mode) => void }>({
  mode: 'light',
  setMode: () => {},
});

/**
 * Custom hook to access the current mode and its setter function from the context.
 * @returns {Object} An array containing the current mode and its setter function.
 */
const useMode = () => {
  const modeContext = useContext(ModeContext);
  return [modeContext.mode, modeContext.setMode];
};
/**
 *
 * Provider component to wrap the components that need access to the mode context.
 * @param {Object} props - The component props.
 * @returns {JSX.Element} The wrapped component tree with access to the mode context.
 */
const ModeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<Mode>('light');

  return <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>;
};

export { useMode, ModeProvider };
