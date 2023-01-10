
import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import  './Admin.css';



class Admin extends Component {
    render() {
        return (
            <div className="admin-menu-container">
                <h2>관리자님, 환영합니다</h2>
                <Button type="primary" block size="large">
                    <Link to="/newAdd">
                      게시판 추가
                    </Link>
                </Button>
                <Button type="primary" block size="large">
                    <Link to="/newEpi">
                    게시판 삭제
                    </Link>
                </Button>
                <Button type="primary" block size="large">
                    <Link to="/AdminCustomer">
                    회원정지
                    </Link>
                </Button>
            </div>
        );
    }
}

export default Admin;