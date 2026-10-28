import AntdProvider from "./AntdProvider";

function AppProvider({ children }) {
  return (
    <AntdProvider>
      {children}
    </AntdProvider>
  );
}

export default AppProvider;