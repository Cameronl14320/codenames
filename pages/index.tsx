import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, TextField, Input } from '@material-ui/core'
import { generateWords, generateTiles } from '../game/generate'
import { useState } from 'react'

export default function Home() {
  var roomCode: String = "";
  return (
    <div>
      <TextField value = {roomCode}>
      </TextField>
      <Button onClick={() => {generateTiles()} }>
        Tiles
      </Button>
      <Button onClick={() => {generateWords()}}>
        Words
      </Button>
    </div>
  )
}
