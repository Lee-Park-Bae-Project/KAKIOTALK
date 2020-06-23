import React from 'react'
import Icon from 'Icon/Icon'
import search from 'assets/baseline_search_black_18dp.png'
import * as S from './styles'

const {
  useState, useEffect, useRef,
} = React
interface Props{
  open: boolean,
  toggleSearchBar: () => void
}
const SearchAccordion: React.FC<Props> = ({
  open, toggleSearchBar,
}) => {
  const [hasContent, setHasContent] = useState(false)
  const searchRef = useRef<HTMLInputElement | null>(null)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setHasContent(true)
      return
    }
    setHasContent(false)
  }

  const handleClearClick = () => {
    if (!searchRef || !searchRef.current) return
    searchRef.current.value = ''
    setHasContent(false)
  }

  useEffect(() => {
    if (!searchRef || !searchRef.current) return

    if (open) searchRef.current.focus()
  }, [open])

  return (
    <S.Container open={open}>
      <S.Wrapper>
        <S.Input
          type='text'
          ref={searchRef}
          placeholder='대화내용 검색'
          onChange={handleSearchChange}
        />
        <S.SearchClearWrapper hasContent={hasContent} onClick={handleClearClick}>
          <Icon icon="Close" size="1rem" color="white"/>
        </S.SearchClearWrapper>
        <Icon icon="ArrowUp" size="1.5rem"/>
        <Icon icon="ArrowDown" size="1.5rem"/>
        <Icon icon="Close" size="1rem" onClick={toggleSearchBar}/>
      </S.Wrapper>
    </S.Container>

  )
}

export default SearchAccordion
