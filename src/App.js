import {Component} from 'react'

import ButtonItem from './components/ButtonItem'

import {
  AppContainer,
  AppHeading,
  ButtonContainer,
  Image,
} from './styledComponents'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    image: languageGreetingsList[0],
    language: 'English',
  }

  changeLanguage = (id, language) => {
    const image = languageGreetingsList.find(each => each.id === id)
    this.setState({image, language})
  }

  render() {
    const {image, language} = this.state
    return (
      <AppContainer>
        <AppHeading>Multilingual Greetings</AppHeading>
        <ButtonContainer>
          {languageGreetingsList.map(each => (
            <ButtonItem
              key={each.id}
              details={each}
              language={language}
              changeLanguage={this.changeLanguage}
            />
          ))}
        </ButtonContainer>
        <Image src={image.imageUrl} alt={image.imageAltText} />
      </AppContainer>
    )
  }
}

export default App
