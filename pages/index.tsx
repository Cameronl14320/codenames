import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Container, Button, TextField, Input } from '@material-ui/core'
import { generateWords, generateTiles } from './api/game/generate'
import { useState } from 'react'
import { css, jsx } from '@emotion/react'
import GameDisplay from '../components/game/game'
import Game from './api/game/Game'
import GenerateBoard from '../components/game/board'



export default function Home() {
  var roomCode: String = "";
  const [game, changeGame] = useState(new Game());

  console.log("gamestate: " + game.board.words);
  return (
    <Box css={{
      textAlign: 'center',
    }}>
      <GenerateBoard game={game}/>
    </Box>
  )
}

// <TextField id="roomcode_input" variant="outlined">
// </TextField>
// <Button onClick={() => {generateTiles()} }>
//   Tiles
// </Button>
// <Button onClick={() => {generateWords()}}>
//   Words
// </Button>