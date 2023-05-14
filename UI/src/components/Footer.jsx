import {
  Telegram,
  Instagram,
  MailOutline,
  Phone,
  Room,
  WhatsApp,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  border-top: 4px solid;
  color = black;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
margin-left: auto;
margin-right: auto;
  ${mobile({ fontSize: "1px" })}
  `;

const Logo2 = styled.h4`
margin-left: auto;
margin-right: auto;
  ${mobile({ fontSize: "1px" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  padding: 20px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-Left: auto; 
  margin-Right: auto;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  text-align: Right;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  text-align: Right;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 5px;
  display: flex;
  text-align: Right;
  padding : 5px;
  direction:rtl
`;


const Footer = () => {
  return (
    <Container>
      <Left>
      <Logo>JahanSaz</Logo>
      <Logo2>جهان ساز</Logo2>
        <Desc style={{marginLeft:"auto" , marginRight:"auto"}}>
           تولیدی ضروف یکبار مصرف آلمینیومی
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Telegram />
          </SocialIcon>
          <SocialIcon color="25D366">
            <WhatsApp />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <MailOutline />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>لینک های مفید</Title>
        <List>
          <ListItem>سبد خرید</ListItem>
          <ListItem>صفحه اصلی</ListItem>
          <ListItem>محصولات</ListItem>
          <ListItem>ارتباط با ما</ListItem>
          <ListItem>107ضرف کد</ListItem>
          <ListItem>105صرف کد</ListItem>
          <ListItem>230ضرف کد </ListItem>
          <ListItem>ضرف کد240</ListItem>
        </List>
      </Center>
      <Right>
        <Title>ارتباط با ما</Title>
        <ContactItem>
        <Room style={{marginLeft:"10px"}}/>
           خیرآباد - خیابان بهرام مصیری - خیابان مهدی خانی - پلاک 16
        </ContactItem>
        <ContactItem>
        <Phone style={{marginLeft:"10px"}}/>
        0919-2128738 حسین جهاندیده
        </ContactItem>
        <ContactItem>
        <Phone style={{marginLeft:"10px"}}/>
          0912-33637544 علی جهاندیده
        </ContactItem>
        <ContactItem>
        <Phone style={{marginLeft:"10px"}}/>
          0919-1121104 جواد ترجمان
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
