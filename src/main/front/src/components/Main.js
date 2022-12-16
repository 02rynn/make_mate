import React from 'react';
import { Layout, theme, Card } from 'antd';
import { useState, useEffect } from 'react';


function Main() {
    
    const { Header, Content, Footer, Sider } = Layout;
    const {
        token: { colorBgContainer },
        } = theme.useToken();
    const { Meta } = Card;

    const [Title, setTitle] = useState('');
    const [count, setCount] = useState(0);
    const completionWord =`A friend is a second self, Make Mate!`;

    useEffect(() => {
        const typingInterval = setInterval(() => {
        setTitle((prevTitleValue) => {
            let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
            setCount(count + 1);
    
            if (count >= completionWord.length) {
                setCount(0);
                setTitle('');
            }
    
            return result;
        });
        }, 190);
    
        return () => {
            clearInterval(typingInterval);
        };
        });

    
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
                            }}><div className='mainTitle' style={{textAlign:'center',fontSize:'22px'}}>{Title}</div></Header>
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