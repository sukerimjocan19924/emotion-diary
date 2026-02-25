import emotion1 from '../assets/happy_img1.png'
import emotion2 from '../assets/joyful_img1.png'
import emotion3 from '../assets/soso_img1.png'
import emotion4 from '../assets/angry_img1.png'
import emotion5 from '../assets/sad_img1.png'
import emotion6 from '../assets/depressed_img1.png'

export const getEmotionImage = (emotionId) => {
    switch(emotionId) {
        case 1: return emotion1
        case 2: return emotion2
        case 3: return emotion3
        case 4: return emotion4
        case 5: return emotion5
        case 6: return emotion6
        default: return null
    }
  
}
