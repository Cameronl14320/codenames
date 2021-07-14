import { generateWords } from './api/game'
import { Button } from '@material-ui/core'

function Words(props: { words: String[] }) {
    return (
        <div>
            {props.words.map((word: String) => (
                <Button>
                    {word}
                </Button>
            ))}
        </div>
    )
}

export default Words