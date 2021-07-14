import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Container, Button, TextField, Input, Grid } from '@material-ui/core'
import { generateWords, generateTiles, convertTiles } from './api/game/generate'
import { useState } from 'react'
import Game from './api/game/Game'
import { GetStaticProps, GetStaticPropsContext } from 'next'

// import GenerateBoard from '../components/game/board'
// import GameDisplay from '../components/game/game'

function Home(props: {words: String[]}) {
  var roomCode: String = "";
  const [words, changeWords] = useState(props.words);
  const [tiles, changeTiles] = useState(generateTiles());


  var word_display = words.map((word) => {
    <Button>
      {word}
    </Button>
  })
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <Container>
          {word_display}
        </Container>
      </Grid>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const words: String[] = generateWords();
  console.log(words);
  return {
      props: {
          words,
      },
  }
}

function convertWords() {

}

export default Home
