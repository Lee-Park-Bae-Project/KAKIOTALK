import React. {useEffect} from 'react' 
import * as S from './styles'

interface Props{
  open: boolean
  toggleDrawer: () => void
}

const Drawer: React.FC<Props> = ({
  open, toggleDrawer, children,
}) => (
<S.Container open={open}>
  <S.Background/>
  <S.Section open={open}>
    {children}
  </S.Section>
</S.Container>)

export default Drawer
