import React from 'react';
import {
  CustomerServiceOutlined,
  InstagramOutlined,
  UpCircleOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { FloatButton } from 'antd';
import { theme } from '../commons/style/theme';

const FloatButtonService = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const linkToWhatsapp = `https://api.whatsapp.com/send?phone=${theme.numbers.whatsapp}&text=Olá%2C%20vim%20através%20do%20site%20e%20gostaria%20de%20um%20orçamento`;
  const linkToInstagram = `https://www.instagram.com/${theme.links.instagram}/`;
  return (
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{ right: 24, zIndex: 200 }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton
        icon={<InstagramOutlined />}
        tooltip="Acessar Instagram"
        href={linkToInstagram}
        target="_blank"
      />
      <FloatButton
        icon={<WhatsAppOutlined />}
        tooltip="Acessar Whatsapp"
        href={linkToWhatsapp}
        target="_blank"
      />
      <FloatButton
        icon={<UpCircleOutlined />}
        tooltip="Voltar ao topo"
        onClick={scrollToTop}
      />
    </FloatButton.Group>
  );
};

export default FloatButtonService;
