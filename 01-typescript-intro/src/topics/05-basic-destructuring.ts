interface AudioPlayer {
    audioVolume: number,
    soundDuration: number,
    song: string,
    details: Details
}

interface Details {
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 100,
    soundDuration: 360,
    song: 'The Beatles - Hey Jude',
    details: {
        author: 'The Beatles',
        year: 1968
    }
}

const song = 'the beatles - oh darling';

const { song: anotherSong, soundDuration: duration, details: { author: author } } = audioPlayer

console.log('song:', song)
console.log('song:', anotherSong)
console.log('duration:', duration)
console.log('author:', author)

// desestructuración de arrays

const dbz = ['Goku', 'Vegeta', 'Trunks', 'Gohan']

const [goku, vegeta, trunks, gohan] = dbz
// Ignorar el primer elemento, tomar el segundo elemento y si no existe asignar un valor por defecto
const [, p2 = 'Not found'] = dbz 

console.log('goku:', goku)
console.log('vegeta:', vegeta)
console.log('trunks:', trunks)
console.log('gohan:', gohan)
console.log('p2:', p2)