import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Container, Button, TextField, Input } from '@material-ui/core'
import { generateWords, generateTiles } from './api/game/generate'
import { useState } from 'react'
import { css, jsx } from '@emotion/react'
// import GameDisplay from '../components/game/game'
import Game from './api/game/Game'
import Board from './api/game/Board'
import GenerateBoard from '../components/game/board'



function Home(props: {game: Game}) {
  var roomCode: String = "";
  const [words, changeWords] = useState(generateWords());
  const [tiles, changeTiles] = useState(generateTiles());

  return (
    <div className="index-body">
      <TextField id="roomcode_input" variant="outlined">
      </TextField>
      <Button onClick={() => {changeTiles(generateTiles())} }>
        Tiles
      </Button>
      <Button onClick={() => {changeWords(generateWords())}}>
        Words
      </Button>
    </div>
  )
}

export async function getStaticProps() {
  // const res = await fetch('https://.../data')
  const data = {
  }

  return { props: { data } }
}

export default Home

