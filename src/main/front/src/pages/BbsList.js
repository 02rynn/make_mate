

import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';




class BbsList extends Component {
   
	
	
	
	render() {
        return (
            <div className="admin-menu-container">
                <h2>관리자님, 환영합니다</h2>
                <Button type="primary" block size="large">
                   
                        게시판 추가
                   
                </Button>
                <Button type="primary" block size="large">
                   
                    게시판삭제
                    
                </Button>
                <Button type="primary" block size="large">
                    
                    회원정지
                 
                    </Button>
            </div>
        );
    }
}



export default BbsList;