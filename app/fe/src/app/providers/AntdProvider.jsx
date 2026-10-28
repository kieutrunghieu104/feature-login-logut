import { ConfigProvider } from 'antd';
import viVN from "antd/locale/vi_VN";

const AntdProvider = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1677ff",
          fontSize: 16
        },
        components: {
          Button: {
            borderRadius: 4
          }
        }
      }}
      locale={viVN}
      componentSize="middle"
    >
      {children}
    </ConfigProvider>
  );
};
export default AntdProvider;
