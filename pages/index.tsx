import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@material-ui/core'
import { Tiles, Words } from './api/generate'

export default function Home() {
  return (
    <div>
      <Button onClick={() => {Tiles()} }>
        Tiles
      </Button>
      <Button onClick={() => {Words()}}>
        Words
      </Button>
    </div>
  )
}
