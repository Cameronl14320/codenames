import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Container, Button, TextField, Input, Grid } from '@material-ui/core'
import { generateWords, generateTiles, convertTiles } from './api/game/generate'
import { useState } from 'react'
import { css, jsx } from '@emotion/react'
import Game from './api/game/Game'

// import GenerateBoard from '../components/game/board'
// import GameDisplay from '../components/game/game'



export default function Home(props: {game: Game}) {
  var roomCode: String = "";
  const [words, changeWords] = useState(generateWords());
  const [tiles, changeTiles] = useState(generateTiles());

  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <Button onClick={() => {changeTiles(generateTiles())} }>
          Tiles
        </Button>
        <Button onClick={() => {changeWords(generateWords())}}>
          Words
        </Button>

        <Container>
          {displayWords(words)}
        </Container>

        <Container>
          {displayTiles(convertTiles(tiles))}
        </Container>
      </Grid>
    </div>
  )
}

function displayWords(words: String[][]) {
  var display_words: any[] = [];
  for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
          display_words.push(
              <Button key={"word-" + row + "-" + col}>
                  {words[row][col]}
              </Button>
          )
      }
  }
  return display_words;
}

function displayTiles(tiles: String[][]) {
  var display_tiles: any[] = [];
  for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
          display_tiles.push(
              <Button key={"tile-" + row + "-" + col}>
                  {tiles[row][col]}
              </Button>
          )
      }
  }
  return display_tiles;
}
