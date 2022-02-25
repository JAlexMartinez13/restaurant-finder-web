import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import RestauratDetails from "./components/RestaurantDetails";
import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";

export default function App() {
  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 999, width: "100%" }}>
          <h1
            style={{
              fontSize: 28,
              textAlign: "center",
              color: "white",
              fontWeight: "800",
            }}
          >
            Restaurant Finder
          </h1>
        </Header>

        <Content>
          <Routes>
            <Route path="/" element={<RestaurantList />} />
            <Route path="/details/:id" element={<RestauratDetails />} />
          </Routes>
        </Content>
      </Layout>
    </>
  );
}
