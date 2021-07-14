import { generateWords } from './api/game/generate'

function Words(props: { words: String[][] }) {

}

export async function GetStaticProps(context: any) {
    const data = {
        words: displayWords(generateWords()),
    }

    return {
        props: {
            data
        }
    }
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

export default Words