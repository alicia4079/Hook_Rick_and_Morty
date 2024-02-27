import './Character.css'
import React, { useState, useEffect } from 'react'

const Character = ({ filter }) => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacterFiltered = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${filter}`
        )

        const charactersJSON = await response.json()

        setCharacters(
          charactersJSON.results.map((character) => ({
            id: character.id,
            name: character.name,
            image: character.image,
            rotated: false
          }))
        )
      } catch (error) {
        console.error('Error:', error)
        throw error
      }
    }

    getCharacterFiltered()
  }, [filter])

  const handleImageClick = (index) => {
    setCharacters((prevCharacters) => {
      const updatedCharacters = [...prevCharacters]
      updatedCharacters[index].rotated = !updatedCharacters[index].rotated
      return updatedCharacters
    })
  }

  return (
    <div className='divChar'>
      <ul>
        {characters.map((char, index) => (
          <li key={index}>
            <h3>{char.name}</h3>
            <img
              src={char.image}
              alt={char.name}
              onClick={() => handleImageClick(index)}
              style={{ transform: char.rotated ? 'rotate(180deg)' : 'none' }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Character
