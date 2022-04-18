import styled from 'styled-components'
import Header from './header'
import Side from './sideElement'
import Footer from './footer'

declare interface AppProps {
  children: JSX.Element;
}

const StyledLayout = styled.div`
  display: flex
  flex-direction: column;
  min-height: 100vh;
`

export default function Layout({ children }: AppProps) {
  return (
    <StyledLayout>
      <Header />
      <Side /> 
      <div id="content">{children}</div>
      <Footer />
    </StyledLayout>
  );
}
