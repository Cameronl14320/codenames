import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@material-ui/core'
import Tiles from './api/generate'

export default function Home() {
  return (
    <div>
      <Button onClick={() => {Tiles()} }>
        Test
      </Button>
    </div>
  )
}
