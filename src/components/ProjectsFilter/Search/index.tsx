import {FormInput} from 'components/Input'
import SearchIcon from 'images/search.svg'
import { useSetRecoilState } from 'recoil'
import { StateSearchQuery } from 'states/searchQuery'

export const Search = () => {

  const setSearchQuery = useSetRecoilState(StateSearchQuery)

  const onInputChange = (ev:React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault()
    setSearchQuery(ev.target.value)
  }

  return(
    <>
      <FormInput onChange={onInputChange} icon={SearchIcon} />
    </>
  )

}