/**
 * Created by ruslan on 23.02.17.
 */

import { COLOR_PICKER } from '../constants/WorkAreaConstants'

// max = Colors.length;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorPicker(min, max) {
    // min === 0 / max === Colors.length
    return {
        type: 'COLOR_PICKER',
        colorIndex: getRandomInt(min, max)
    }
}

