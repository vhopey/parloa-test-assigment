import { Layout } from "antd"
import Customers from "./components/Customers"
import Creator from "./components/Creator"
import Filters from "./components/Filters"

import styles from "./App.module.css"

const { Header, Content } = Layout

const headerStyle: React.CSSProperties = {
  color: "#fff",
  height: 64,
  lineHeight: "64px",
  backgroundColor: "rgb(49, 49, 49)",
}

const contentStyle: React.CSSProperties = {
  padding: "30px",
  minHeight: 120,
  lineHeight: "120px",
  backgroundColor: "rgb(232, 232, 232)",
}

function App() {
  return (
    <Layout>
      <Header style={headerStyle}>Parloa test assigment</Header>
      <Content style={contentStyle}>
        <div className={styles.panel}>
          <Filters />
          <Creator />
        </div>
        <Customers />
      </Content>
    </Layout>
  )
}

export default App
