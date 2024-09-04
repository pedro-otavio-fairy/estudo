import React, {useState} from "react";
import { Button, DatePicker, Input, Select, Modal, Table, Menu, Card, Tooltip, Alert, Breadcrumb, Avatar } from "antd";
import { info } from "autoprefixer";

const {Option} = Select;

const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Idade',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Endereço',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'João',
      age: 32,
      address: 'Rua A',
    },
    {
      key: '2',
      name: 'Maria',
      age: 28,
      address: 'Rua B',
    },
  ];

const{SubMenu} = Menu;

const { Meta } = Card;

const Example = () => {

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setVisible(false);
    } ;

    const handleCancel = () => {
        setVisible(false);
    }

    return(
        <div className="text-center">
            <Button type="primary" onClick={showModal}>Botão Primário/Mostrar Modal</Button>
            <Modal
            title="Título Modal"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            >
                <p>Conteúdo no Modal</p>
            </Modal>
            <DatePicker className="px-2 py-2 flex"></DatePicker>
            <Input className="max-w-sm max-auto p-4"placeholder="Digite algo..."></Input>
            <Select defaultValue="opcao1" style={{ width: 120 }}>
                <Option value="opcao1">Opção 1</Option>
                <Option value="opcao2">Opção 2</Option>
            </Select>
            <Table columns={columns} dataSource={data} />
            <Menu mode="inline">
                <Menu.Item key="home">Início</Menu.Item>
                <Menu.Item key="about">Sobre</Menu.Item>
                <SubMenu key="sub1" title="Mais">
                    <Menu.Item key="setting:1">Configuração 1</Menu.Item>
                    <Menu.Item key="setting:2">Configuração 2</Menu.Item>
                </SubMenu>
            </Menu>
            <Tooltip title="Clique aqui - Show Modal">
                <Card
                onClick={showModal}
                hoverable
                cover={<img alt = "example" src="https://via.placeholder.com/150" />}
                >
                    <Meta title="Título do Card" description="Descrição do card"/>
                </Card>
            </Tooltip>

            <Alert message="Informaçao" description="Desc. Info" type="info"></Alert>
            <Alert message="Sucesso" description="Desc. Sucesso" type="success"></Alert>
            <Alert message="Aviso" description="Desc. Aviso" type="warning"></Alert>
            <Alert message="Erro" description="Desc. Erro" type="error"></Alert>

            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Catalog</Breadcrumb.Item>
                <Breadcrumb.Item>Page</Breadcrumb.Item>
            </Breadcrumb>

            <Avatar src="https://via.placeholder.com/40" />
            <Avatar>U</Avatar>

        </div>
    )

};

export default Example;