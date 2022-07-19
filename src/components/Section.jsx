import styled from 'styled-components';

const SectionStyled = styled.section`
  padding: 20px;
  background-color: #fff;
  color: #707070;
  width: 100%;
  h2 {
    margin-top: 0;
  }
`;

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      {title && <h2>{title}</h2>}
      {children}
    </SectionStyled>
  );
};

export default Section;
