import { BellFilled, CommentOutlined, MessageFilled, UserOutlined, UserSwitchOutlined } from '@ant-design/icons'
import React from 'react'

const Header = () => {
  return (
    <div style={{display: "flex",justifyContent: "space-between"}}>
        <div>
            <h1 style={{fontSize: "58px",fontWeight: "bold"}}>Weekly sumup</h1>
            <p style={{fontSize: "20px",color: "#AEAEAE"}}>Get summary of your weekly online transactions here.</p>
        </div>
        <div style={{display: "flex",gap: "12px"}}>
            <MessageFilled style={{color: "#E3E3E3", fontSize: "24px"}}/>
            <BellFilled style={{color: "#E3E3E3", fontSize: "24px"}} />
            <div style={{display: "flex", gap: "12px",alignItems: "center"}}>
                <UserOutlined style={{backgroundColor: "#FFC145", color: "blue", fontSize: "35px", padding: "8px", borderRadius: "50%"}}/>
                <div>
                    <p style={{fontSize: "18px",fontWeight: "bold"}}>Andrew</p>
                    <p>Admin account</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header