import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #376c78;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>نمونه اولیه سایت فروش لوازم یکبار مصرف</Container>;
};

export default Announcement;
