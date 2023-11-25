import {ListItem, Button} from './styledComponents'

const ButtonItem = props => {
  const {details, language, changeLanguage} = props
  const {id, buttonText} = details

  const onClickLanguage = () => {
    changeLanguage(id, buttonText)
  }

  return (
    <ListItem>
      <Button
        active={language === buttonText}
        type="button"
        onClick={onClickLanguage}
      >
        {buttonText}
      </Button>
    </ListItem>
  )
}

export default ButtonItem
