import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch('https://.../data/words')
    const words = await res.json()
    return {
        props: {
            words,
        },
    }
}