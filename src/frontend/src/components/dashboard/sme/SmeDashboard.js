/* eslint-disable no-console */
/* eslint no-console: "error" */
import React from "react";
import { Layout, Menu, Row, Col } from "antd";
import { ZoomOutOutlined, FileAddOutlined, KeyOutlined } from "@ant-design/icons";
import { Router, Route } from "react-router";
import { Switch, Link } from "react-router-dom";
import Project from "./Project";
import Proposal from "./Proposal";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class SmeDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ paddingTop: "60px" }}>
          <div className="logo"></div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<ZoomOutOutlined />}>
              <Link to="/sme/projects">View Projects</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FileAddOutlined />}>
              <Link to="/sme/proposal">Create Proposal</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background header">
            <Row align="middle">
              <Col md="10">Welcome {/*** Name of the user  */}</Col>
              <Col></Col>
            </Row>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Router history={this.props.history}>
              <Switch>
                <Route path="/sme/projects" component={Project} />
                <Route path="/sme/proposal" component={Proposal} />
              </Switch>
            </Router>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SmeDashboard;