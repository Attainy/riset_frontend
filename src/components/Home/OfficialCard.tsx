import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  align-items: center;
  text-indent: 7px;
  width: 150px;
  height: 20px;
  border-radius: 12px;
  background-color: var(--color-brand-main);
  color: var(--color-black);
  font-size: 0.9rem;

  @media screen and (max-width: 599px) {
    width: 100%;
  }
`;

export default function OfficialCard() {
  return <Layout>OfficialCard</Layout>;
}
