import React from 'react';
import { Layout, theme, Card } from 'antd';

function Main() {
    
    const { Header, Content, Footer, Sider } = Layout;
    const {
        token: { colorBgContainer },
        } = theme.useToken();
    const { Meta } = Card;

    
    return(
        <div className='mainContainer'>
            <div className='sideBar'>
                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={(broken) => {
                                console.log(broken);
                            }}
                        onCollapse={(collapsed, type) => {
                                console.log(collapsed, type);
                            }}>
                        <Card
                            hoverable
                            style={{
                                width: 'auto ',margin:'3%',marginTop:'10%'
                                }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            <Meta style={{textAlign:'center'}} title="유저닉네임" description="www.instagram.com" />
                        </Card>
                    </Sider>
                    <Layout>
                        <Header
                            style={{
                            padding: 0,
                            background: colorBgContainer,
                            }}><div style={{textAlign:'center'}}>대충 멋있는말</div> </Header>
                                <Content
                                    style={{
                                    margin: '24px 16px 0',
                                    height:'100rem'
                                    }}>
                                <div
                                    style={{
                                    padding: 24,
                                    minHeight: 1600,
                                    background: colorBgContainer,
                                    }}>content
                                </div>
                                </Content>
                                <Footer
                                    style={{
                                    textAlign: 'center',
                                    }}>
                                    Ant Design ©2018 Created by Ant UED
                                </Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
}
export default Main;