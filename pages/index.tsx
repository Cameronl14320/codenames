import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@material-ui/core'
import { generateWords, generateTiles } from '../game/generate'

export default function Home() {
  return (
    <div>
      <Button onClick={() => {generateTiles()} }>
        Tiles
      </Button>
      <Button onClick={() => {generateWords()}}>
        Words
      </Button>
    </div>
  )
}
