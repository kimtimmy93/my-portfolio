import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#fffff' }}></span><strong>Timothy Kim</strong></span>}>
            <Navigation>
                <a href="/">About Me</a>
                <a href="/">Projects</a>
                <a href="/">Resume</a>
                <a href="/">Contact Me</a>
            </Navigation>
        </Header>
        <Drawer title="Timothy Kim">
            <Navigation>
                <a href="/">About Me</a>
                <a href="/">Projects</a>
                <a href="/">Resume</a>
                <a href="/">Contact Me</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
  );
}

export default App;
