import { Box, Container, Button, TextField, Input, Grid } from '@material-ui/core'
import { generateWords, generateTiles, convertTiles } from './api/game/generate'
import { useState } from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { ThemeProvider } from '@material-ui/styles'
import { tileTheme } from '../themes/theme'

// import GenerateBoard from '../components/game/board'
// import GameDisplay from '../components/game/game'

function Home(props: {words: String[], tiles: number[]}) {
  var roomCode: String = "";
  const [words, changeWords] = useState(props.words);
  const [tiles, changeTiles] = useState(props.tiles);

  var word_display: any[] = []
  words.map((word) => {
    let id = words.indexOf(word).toString();
    word_display.push(
      <Button id={id} key={id}>
        {word}
      </Button>
    )
  })

  var tile_display: any[] = []
  // console.log(tiles);
  var converted_tiles: String[] = convertTiles(tiles);
  // console.log(converted_tiles);
  let n = 0;
  converted_tiles.map((tile) => {
    let id = "tile-" + n;
    tile_display.push(
      <ThemeProvider theme={tileTheme}>
        <Button color="primary" id={id} key={id}>
          {tile}
        </Button>
      </ThemeProvider>
    )
    n++;
  })

  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)'
        }}>
          {word_display}
        </div>
        <Button onClick={() => {
          let newWords: String[] = generateWords();
          changeWords(newWords);
        }}>
          Change Words
        </Button>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)'
        }}>
          {tile_display}
        </div>
        <Button onClick={() => {
          let newTiles: number[] = generateTiles();
          changeTiles(newTiles);
        }}>
          Change Tiles
        </Button>
      </Grid>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const words: String[] = generateWords();
  const tiles: number[] = generateTiles();
  // console.log(words);
  // console.log(tiles);
  return {
      props: {
          words,
          tiles,
      },
  }
}

export default Home
