import React from "react";
import cart from "../../assets/creditCard.png";
import ann from "../../assets/ann.png";
import john from "../../assets/john.png";
import line from "../../assets/line.png";
import mike from "../../assets/mike.png";
import monica from "../../assets/monica.png";
import {
  Avatar,
  Button,
  Card,
  Col,
  Input,
  Progress,
  Row,
  Switch,
  Table,
} from "antd";
import {
  CarOutlined,
  CoffeeOutlined,
  LaptopOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  ToolOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { render } from "react-dom";

const Overview = () => {
  const columns = [
    {
      title: "Reciever",
      dataIndex: "reciever",
      key: "reciever",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {record.icon}
          {text}
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => <strong>{amount}</strong>,
    },
  ];

  // Jadval ma'lumotlari
  const data = [
    {
      key: "1",
      reciever: "Tesco Market",
      type: "Shopping",
      date: "13 Dec 2020",
      amount: "$75.67",
      icon: <ShoppingOutlined style={{ fontSize: "20px" }} />,
    },
    {
      key: "2",
      reciever: "ElectroMen Market",
      type: "Shopping",
      date: "14 Dec 2020",
      amount: "$250.00",
      icon: <CarOutlined style={{ fontSize: "20px" }} />,
    },
    {
      key: "3",
      reciever: "Fiorgio Restaurant",
      type: "Food",
      date: "07 Dec 2020",
      amount: "$19.50",
      icon: <CoffeeOutlined style={{ fontSize: "20px" }} />,
    },
    {
      key: "4",
      reciever: "John Mathew Kayne",
      type: "Sport",
      date: "06 Dec 2020",
      amount: "$350",
      icon: <TrophyOutlined style={{ fontSize: "20px" }} />,
    },
    {
      key: "5",
      reciever: "Ann Marlin",
      type: "Shopping",
      date: "31 Nov 2020",
      amount: "$430",
      icon: <ShoppingOutlined style={{ fontSize: "20px" }} />,
    },
  ];

  const goals = [
    {
      id: 1,
      amount: "$550",
      date: "12/20/20",
      title: "Holidays",
      icon: <TrophyOutlined style={{ fontSize: "24px", color: "#4299E1" }} />,
    },
    {
      id: 2,
      amount: "$200",
      date: "12/20/20",
      title: "Renovation",
      icon: <ToolOutlined style={{ fontSize: "24px", color: "#F6AD55" }} />,
    },
    {
      id: 3,
      amount: "$820",
      date: "12/20/20",
      title: "Xbox",
      icon: <ToolOutlined style={{ fontSize: "24px", color: "#48BB78" }} />,
    },
  ];

  const statistics = [
    {
      icon: (
        <ShoppingCartOutlined style={{ fontSize: "24px", color: "#F6AD55" }} />
      ),
      label: "Shopping",
      percent: 52,
      color: "#ED8936",
    },
    {
      icon: <LaptopOutlined style={{ fontSize: "24px", color: "#48BB78" }} />,
      label: "Electronics",
      percent: 21,
      color: "#38A169",
    },
    {
      icon: <CarOutlined style={{ fontSize: "24px", color: "#4299E1" }} />,
      label: "Travels",
      percent: 74,
      color: "#3182CE",
    },
  ];

  const users = [
    { name: "Ann", avatar: ann },
    { name: "Monica", avatar: monica },
    { name: "John", avatar: john },
    { name: "Mike", avatar: mike },
    { name: "Mia", avatar: ann },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            display: "flex",
            gap: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 4, 0.5)",
            padding: "22px",
            borderRadius: "30px",
            width: "550px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                paddingBottom: "9px",
              }}
            >
              Cards
            </p>
            <img style={{ width: "300px" }} src={cart} alt="" />
            <div style={{ display: "flex", gap: "90px", paddingTop: "30px" }}>
              <p style={{ color: "#AEAEAE", fontSize: "14px" }}>
                Weekly payment limit{" "}
              </p>
              <p style={{ fontSize: "14px" }}>$350.60 / $4000</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "end",
              gap: "20px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#197BBD",
                }}
              >
                $2850.75
              </p>
              <p style={{ color: "#439A86" }}>Current balance</p>
            </div>

            <div>
              <p
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#439A86",
                }}
              >
                $ 1500.50
              </p>
              <p style={{ color: "#439A86" }}>Income</p>
            </div>

            <div>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#BB4430",
                }}
              >
                $ 350.60
              </p>
              <p style={{ color: "#439A86" }}>Outcome</p>
            </div>

            <div>
              <Switch />
              <p style={{ color: "#439A86", paddingTop: "12px" }}>
                Deacivate card
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "22px",
            boxShadow: "0 4px 8px rgba(0, 0, 4, 0.5)",
            borderRadius: "30px",
            width: "550px",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
            Transaction History
          </h2>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
          />
        </div>
      </div>

      <div>
        <div style={{ padding: "10px", width: "800px" }}>
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "14px",
            }}
          >
            Goals <PlusOutlined style={{ color: "#F6AD55" }} />
          </h2>
          <Row gutter={[16, 16]}>
            {goals.map((goal) => (
              <Col key={goal.id} xs={24} sm={12} md={8}>
                <Card
                  style={{
                    textAlign: "center",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {goal.amount}
                  </div>
                  <div style={{ color: "#A0AEC0", marginBottom: "12px" }}>
                    {goal.date}
                  </div>
                  <div>{goal.icon}</div>
                  <div style={{ marginTop: "12px", fontWeight: "500" }}>
                    {goal.title}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div>
          <div style={{ padding: "20px" }}>
            {/* Outcome Statistics */}
            <h2>Outcome Statistics</h2>
            {statistics.map((stat, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <div style={{ marginRight: "12px" }}>{stat.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "500" }}>{stat.label}</div>
                  <Progress
                    percent={stat.percent}
                    showInfo={false}
                    strokeColor={stat.color}
                    trailColor="#E2E8F0"
                  />
                </div>
                <div style={{ marginLeft: "12px", fontWeight: "500" }}>
                  {stat.percent}%
                </div>
              </div>
            ))}

            {/* New Transaction */}
            <Row gutter={[16, 16]} style={{ marginTop: "44px" }}>
              <Col span={16}>
                <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
                  New transaction
                </h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  {users.map((user, index) => (
                    <Avatar  style={{width: "70px",height: "70px"}} key={index} src={user.avatar} alt={user.name} />
                  ))}
                  <Avatar
                    icon={<PlusOutlined />}
                    style={{ backgroundColor: "#E2E8F0", color: "#000" }}
                  />
                </div>
                <div style={{height: "120px"}}>
                  <Input
                    placeholder="0"
                    style={{
                      width: "60%",
                      marginBottom: "12px",
                      borderRadius: "8px",
                    }}
                    suffix="$"
                  />
                  <Button type="primary" style={{ borderRadius: "8px" }}>
                    Send the transfer
                  </Button>
                </div>
              </Col>

              {/* Loan Promotion */}
              <Col span={8}>
                <div
                  style={{
                    backgroundColor: "#F56565",
                    borderRadius: "12px",
                    color: "#fff",
                    padding: "20px",
                    textAlign: "start",
                    fontWeight: "bold",
                    paddingTop: "170px",
                    fontSize: "30px",
                  }}
                >
                  Get great loan!
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
