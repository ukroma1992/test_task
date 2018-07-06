import React from 'react';
import UsersList from './UsersList';
import { Layout } from 'antd';
import './App.css';


class App extends React.Component {
  render() {
    const { Header, Content } = Layout;

    return (
      <div className="App">
        <Layout>
          <Header>Test App</Header>
          <Content>
            <UsersList />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;