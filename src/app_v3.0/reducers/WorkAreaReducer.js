/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {
    COLOR_PICKER, CREATE_ID, ADD_NODE, REMOVE_CHILD, MOVE_SECTION, GRID_INDEX, EXCHANGE_NODE_REMOVE,
    EXCHANGE_NODE_ADD, MOVE_CHANGE_SECTION, MOVE_ROW, IS_OPACITY, ACTIVE_CONTEXT_MENU,
    DELETE_NODE, ELEMENT_TYPE, ACTIVE_TEXT_EDIT, ADD_IMAGE_LINK
} from '../constants/WorkAreaConstants'

// default data state
const initialState = {
    /*id_work_area: {
        id: 'id_work_area',
        childrenIds: []
    },
    opacityId: '',
    isActiveTextEdit: false,
    activeContextMenu: {
        id: '',
        top: 0
    }*/

    id_work_area: {
        id: 'id_work_area',
            childrenIds: [
            'id_0',
            'id_1',
            'id_2'
        ]
    },
    opacityId: '',
        isActiveTextEdit: false,
    activeContextMenu: {
    id: '',
        top: 0
},
    id_0: {
        id: 'id_0',
            parentId: 'id_work_area',
            childrenIds: [
            'id_3',
            'id_5',
            'id_8'
        ],
            opacity: 1,
            colorControlBar: '16A085'
    },
    id_1: {
        id: 'id_1',
            parentId: 'id_work_area',
            childrenIds: [
            'id_10',
            'id_14',
            'id_23'
        ],
            opacity: 1,
            colorControlBar: '8E44AD'
    },
    id_2: {
        id: 'id_2',
            parentId: 'id_work_area',
            childrenIds: [
            'id_18',
            'id_25'
        ],
            opacity: 1,
            colorControlBar: 'CF000F'
    },
    id_3: {
        id: 'id_3',
            parentId: 'id_0',
            childrenIds: [
            'id_4'
        ],
            opacity: 1,
            colorControlBar: '049372'
    },
    id_4: {
        id: 'id_4',
            parentId: 'id_3',
            childrenIds: [
            'id_28'
        ],
            opacity: 1,
            gridIndex: '12'
    },
    id_5: {
        id: 'id_5',
            parentId: 'id_0',
            childrenIds: [
            'id_6',
            'id_7'
        ],
            opacity: 1,
            colorControlBar: '4DAF7C'
    },
    id_6: {
        id: 'id_6',
            parentId: 'id_5',
            childrenIds: [
            'id_30'
        ],
            opacity: 1,
            gridIndex: '6'
    },
    id_7: {
        id: 'id_7',
            parentId: 'id_5',
            childrenIds: [
            'id_29'
        ],
            opacity: 1,
            gridIndex: '6'
    },
    id_8: {
        id: 'id_8',
            parentId: 'id_0',
            childrenIds: [
            'id_9'
        ],
            opacity: 1,
            colorControlBar: 'F4D03F'
    },
    id_9: {
        id: 'id_9',
            parentId: 'id_8',
            childrenIds: [
            'id_31',
            'id_32'
        ],
            opacity: 1,
            gridIndex: '12'
    },
    id_10: {
        id: 'id_10',
            parentId: 'id_1',
            childrenIds: [
            'id_11',
            'id_12',
            'id_13'
        ],
            opacity: 1,
            colorControlBar: '4ECDC4'
    },
    id_11: {
        id: 'id_11',
            parentId: 'id_10',
            childrenIds: [
            'id_35'
        ],
            opacity: 1,
            gridIndex: '4'
    },
    id_12: {
        id: 'id_12',
            parentId: 'id_10',
            childrenIds: [
            'id_34'
        ],
            opacity: 1,
            gridIndex: '4'
    },
    id_13: {
        id: 'id_13',
            parentId: 'id_10',
            childrenIds: [
            'id_33'
        ],
            opacity: 1,
            gridIndex: '4'
    },
    id_14: {
        id: 'id_14',
            parentId: 'id_1',
            childrenIds: [
            'id_15',
            'id_16',
            'id_17'
        ],
            opacity: 1,
            colorControlBar: 'D64541'
    },
    id_15: {
        id: 'id_15',
            parentId: 'id_14',
            childrenIds: [
            'id_38'
        ],
            opacity: 1,
            gridIndex: '4'
    },
    id_16: {
        id: 'id_16',
            parentId: 'id_14',
            childrenIds: [
            'id_36'
        ],
            opacity: 1,
            gridIndex: '4'
    },
    id_17: {
        id: 'id_17',
            parentId: 'id_14',
            childrenIds: [
            'id_37'
        ],
            opacity: 1,
            gridIndex: '4'
    },
    id_18: {
        id: 'id_18',
            parentId: 'id_2',
            childrenIds: [
            'id_19',
            'id_20',
            'id_21',
            'id_22'
        ],
            opacity: 1,
            colorControlBar: '674172'
    },
    id_19: {
        id: 'id_19',
            parentId: 'id_18',
            childrenIds: [
            'id_40',
            'id_41',
            'id_42'
        ],
            opacity: 1,
            gridIndex: '3'
    },
    id_20: {
        id: 'id_20',
            parentId: 'id_18',
            childrenIds: [
            'id_43',
            'id_44',
            'id_45'
        ],
            opacity: 1,
            gridIndex: '3'
    },
    id_21: {
        id: 'id_21',
            parentId: 'id_18',
            childrenIds: [
            'id_46',
            'id_47',
            'id_48'
        ],
            opacity: 1,
            gridIndex: '3'
    },
    id_22: {
        id: 'id_22',
            parentId: 'id_18',
            childrenIds: [
            'id_49'
        ],
            opacity: 1,
            gridIndex: '3'
    },
    id_23: {
        id: 'id_23',
            parentId: 'id_1',
            childrenIds: [
            'id_24'
        ],
            opacity: 1,
            colorControlBar: '65C6BB'
    },
    id_24: {
        id: 'id_24',
            parentId: 'id_23',
            childrenIds: [
            'id_39'
        ],
            opacity: 1,
            gridIndex: '12'
    },
    id_25: {
        id: 'id_25',
            parentId: 'id_2',
            childrenIds: [
            'id_26',
            'id_27'
        ],
            opacity: 1,
            colorControlBar: '36D7B7'
    },
    id_26: {
        id: 'id_26',
            parentId: 'id_25',
            childrenIds: [
            'id_51'
        ],
            opacity: 1,
            gridIndex: '6'
    },
    id_27: {
        id: 'id_27',
            parentId: 'id_25',
            childrenIds: [
            'id_50'
        ],
            opacity: 1,
            gridIndex: '6'
    },
    id_28: {
        id: 'id_28',
            parentId: 'id_4',
            childrenIds: [],
            opacity: 1,
            elementType: 'heading'
    },
    id_29: {
        id: 'id_29',
            parentId: 'id_7',
            childrenIds: [],
            opacity: 1,
            elementType: 'image',
            link: 'data:image/jpeg;base64,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'
    },
    id_30: {
        id: 'id_30',
            parentId: 'id_6',
            childrenIds: [],
            opacity: 1,
            elementType: 'image',
            link: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFhUXFxUVGBgYGBcYFxgYGBUXFxgWFhcYHSggGBolHRUYITEiJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGhAQGi8lHx0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAHsBmgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAECBQAGBwj/xAA5EAABAwIEAwYEBQMEAwAAAAABAAIRAyEEEjFBUWFxBSKBkaHwBhOx0TJCUsHhByPxFDNichUWkv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAAICAgMAAwADAQAAAAAAAAABAhEDIRIxQQQTUSIyYRT/2gAMAwEAAhEDEQA/APlbQrQqgqZldxkSrAqoRA1NCZLUXLZUa1FDh4qkQwc7I4pGAfNCY26eaw2VITYGm0TcFXIF4bHXoj5ANb9PopDZA+nVBFnYZ0eqaLTlaRpHjxVMMIMH3um6RmIgTt76JMlgaUzEbogce9fTgiBgAcTrcwlqZOvFHYhrDMLrg8k2ymePvmlcLWhw6iT0K0zoTbQ+Nys5IkVpVHabjX0081q4LEGSQeH0WOIzCPdp1Wlgom1pM+iUkqA1nYx5i8x5A9dvorYaj8wENs4GQZ1AmR9EtVp2Ph9UHs+u5r9NOPNY8FX8SlLez1NDE1AyQ/vWHGRHo4aLUw1a8kXgnLxIix58PFef7NqgjK7X8NpEjaR4a9OC0aVW7gbg6e+UlcmSH+HVjmbHadYEB0GABpoGGLx1+iHSxQkRABiBtmG3Q+9EmKmak5psY34Tf/HVLYasQ2dATHK0EQojCkVOe7NrEgSdb6cjMET5oQAAmYGhi8XG3WEXC1A8ZXb+5niqVg0Ejz8tY96poHvZD28/+s7g3/YhUZTEHzA+xVi0gQRa0eNx4cFcVcp5H+JCblRNJ9k4ZxiR4m5vp5LSw9IgX8PeyBRsczRqbj1lMsxP8j7LGeQ3hGgGIoFxiIPuYSjsKtU1AYKhzfFR91DeJSM2mwjW49U3QIPI8ER1Pn5/dVNOQTb3z4JOakOMeJctS+JozceIR6Txuh18UBp6lEVK9FT41szy2UFzSr1qh9mUjVqBdSRxOSDvJ9wlqpdw+iVq1o0SVXEO5eX2WqxmbmO1M/6Ss6vUd+l3kVP+qZ+Zh8CmcJToVNGO8ifotFFLszc2Yldz/wBLvIpCsH8HeRX0Ch2FTP5fRMD4ep/pCPugi1Cb8PlVVp4HyKUqlfWcR8LUnC7R4AT5rA7Z7P7Own+7JfEhgLi8zpaYA5mFcc8XpDcJLs+dVHJWq9O9q4xj3k06Yps2Elxji4k69FmuculAkDeUFxVnuQnFBaKvKFKl5VYSGBCuwKgUgpWWEDVamqMKKFSJZZnFc1y5u6IxojRNEl26dNE0ypEeH3S4GoHBXCohhqfeMkowZoh08p5H3b6IrGRbXRBLCBuY8OM20UUA3Ny8kRjdRFvHdQ2g3UEzv/CQhmg8PO95/wA81T5MW3lWwtMQDzP1hMGnfUQJSuiWdhcNA72vDonqBMWjckEbIIfJnWBbhxV2v5EWss27ESxoNyPEckTCNI7w4gG1+qmk0OEaTbx4qGtsbX8R70QBqtcSCI2jXwSsm1riQZG4vf0U0akkEG35p48fYVmgm0XJF+uijoDSoM0cDHE8OvKQm24h0gOEHTlMH/PilxhjTAmYOZs31EA7aHXxTDBIgaxbcDn9Vg6ezbjKDcX2aVN3d7x1+m87yFRoJFRogtBzDnLZEHoHKlBzrzNx4AgQi02EiAOLY0t4a6nqFk1Rd2WwRJgTzHG372WpXpz3tjEnY6fcLKgNvPIjh4rW7MxAcPlu30PHj9fVZN1srHX9WDe4mBtEb6e/oglxgtOlonktE0C29uAM2B2B+/mhPoW/ZT9iLlBg6GILY5K9TETF0pUdsh/NT4J7I+xrQw+sSrU8c5u/gki9Eacw0J5/yq4J6JU3fZpM7VG4XN7Sp8+kLJ+WNz4C5+y7KB+Qnqf2CSwRL/6JofxXaQJ7tgkamJXNpvvDAAeX3U0eyartoWyjGJlKUpMXfWQHulehw3w4PzuWhR7EpD8s9Uc0uilik+zxtLCueYAJT4+HXi5Zm5TB8wvYUcKxv4WgI0KXkkaLCvTBwvYNDKCaQB3BJdHmtJmGaBAAAHBNkKFm232bJRXSAinyQsbiKdJhqVHBrWiST+3E8k4F8w/q3Re2pSqF8tc1zWt/TEZusyPJXjxqcqYpz4q0Z/xD/USu8luHApMkw6znuGxuIb4X5rwmKxDnuLnOLnEySSSSeZOqis5LPcvThjjBaRxuTl2RUegPcpeUJysaKOKG5EJ4aoLwpKRCjxUKEiii4BQrsKmiiWNuiuHBVZqrNsYVIhkDWEWdEEJlmqaEwmGcAZ5GyNh3/hnSR/KBT3nmmaQmOUk+EKiGMVGBrncAYlVySV1cFw6336q1CYvrcIICU2HY6cUamyRrr+6FVpiBqnqTQbGxgDrvKTECMZbWTDaYsSbH3KVozAGvsJmkyMozXkCLaa/skILgTAtxTL3EnlHKLXSeEAnzJE6WOyPTHdG+xUsQfDnzE8ufim3Uy4BwIj1SfyJbPeNiNptfx0V8BWDDrN4ym/8AHsKGA5QpTMW28fcKzHODmu4OA8ZnRN4SHFrgIEyRPI2ibabrI+I+znuc3LUe1rXguyksLhxkXBEyPHkRLd6KjppnpMbXeYzi+Z+lps0W8kSnVAhxHI+Oi8v2Bj6jw8vqPqMFSo2nnIzBgIFyBe4XoaNVuuw+iwjDjFI6flZY5M0pxVJmlRqFroIzNdpyNpB+qLWOQjJOxI3alKo7uulxOvvZEw+KDhcyRA5+ahozUvB2s3PLxrbMNyN7eHokg8sdHLMDx3nkVo0qYMODoI8jyjb1WdinEOnbS35Tw5fwpS8DIvR+njn/AKpHH7poYwmAeET6rCw9SCWnw6J60ZmmW+oH7jmpcF+BGcv0LiHZjOh+qr8r9RDeuvlqVOFqDMCbb++avSoNLv1OJ9SmtCSctk4VuYlrASf1H9gtqj2XMZyXdT+2iewWDDBz3KahDZ0RxJdiTcAwbK4wbOCaXKTSl+Am0QNkQNUrkUM5cuXIA5colcgCVyhQkBMrK+IOwaOLp5KouJyuGrSdxx0FitRUrtcWuDXZXEEB0TBixjeOCabTtA1Z+ce3+zamGrPo1BDmnwI2I4gi6yXrR7bFX59T5zi6pmdmc4ySQYP0WW8r2F0cPpUkILnKzyhkIZaKyqmVxCk2SKBuMKkqSuspKKyuCIykVEJIAlHVS9t11A3UZ5J81RJzRdHaLoDHI420TQmFoDvAHSZRrxbSePvkgjY9fr/KZZBEeQ5ymQyS+x58PBGw47uqSL5ttKapkhoG593QyWh2lBty8SiU6oIIHCRP0Q8DJgcfP3Ypyn2U4xNgAY46g6KW0uyaAQWxG+qLiK2WBoSNYtJ/haFHBt3v1NvIXWnQotEQ0W3gAzHmsZZkilBs8/2bSe9xcKZJmJgwbcTbZaWG7Jqg6BoN+J9FuU6OYfcxptqnaVJrYuB74rCfyH4aLCZuD7KIF3k7wB6SVoYT4epiZEi+pJ9BEIlbtKmyBIIiSdh1OngiUu13GDcA/liD6wfPyWEsmRmixwXYxQ7OpU7ZWidDAnzJJTv+nH6BysPRZ47UFiWg8yLjrurO7bvBaImx4xwvdZPmargjuy8I2mwtjKc9Rx0u5zi5xBgTd3QaJhtNpGjTO0WOgVG9osa05jkBFp1tMwZkhZlX4opCflZniLuIcySN4dcgcUVJg+KHquCaCCwhsbH1F0B2GAcTrF+RH3WY7tWrVcMwgT+JskcYHLaU9h6oMk96CR3Zi1vwnddEIyrZzTcb0PYR48OB6p35YfZ2jrOiOjXHmFkBwaQQZG/GPumuz8QCeunMIlH1BCXjFMfh3MgxpN+I97KpqbjkfAxrxWn2mwxMxG/5SDseHUrGkRGhFo4JxdrZnNUwxxIjgd7I+B7WNJ2cBp6rNzlrct+RN46FCfU4hVxRm507R73s/wCKKL7O7h8x5jRbVKq1wBaQQdCLr5E6otbsLH1mPBYDB/ECDlI5qZY/w3x/IbdM+lLpSXZ/aDaugIcNQQR4idk4sTsWzpXLl0oA5coldKBkqFErpSAlcolRKALLxXxT/UTD4Yvp0h86s21v9tp/5O3I4DzCwP6j/GOIa52GpNdSAJa98993DKR+FpHiQdl8sqO2XXh+Ne5GE8vkRrtftJ1eq+q4NBe4uIbMAkyYm+qznOVnLgyy7qMAJKoTwVnOQ3vSZSOzQhOcucqqWy0S42Q8ylxQyobLSDjEXU1SDff9ku4QbhNPiAbcFMbbE1R1MGJ2VJKK2qIhS1wWtElabLSmi3Q8p9YStM7JtjCQBoIInxnxTRLLUhcN5/Upl+rotGnnCDRowQc2+33T1Ok3SDxnj5oc0iWgFHDy6bH/ACtGlgN3dbfRFo0Jg34e4TrHMAhx9ZhYyyvwfEtSw5bdrI58fEp3DUL94EfTxCzqvbDGaQTxj990A9vnbvGba+UAacli+TKUUemw1Nn6rbbKX9oUqdzln/sfovH1+0Kj7uqtbsL5TfgNUvTf37AyCIP4g43JJHpHml9d9so9m/tdxnK0BmWcxsNOKwcX2s5zwDVluoDRMGN7CfVI1cW9/de9xk/gB1g2kNIgX0J4IbcQ9rv7cNDt4MAAyRe86eHFNQSFZr4WpSpFtSo55IMtB7oB5N4jinf/AGQuBNNmVgF3mHayczWtMxbXksaliXXYCHOeCKk3ygwOFjvG2+oUUMPTa4fMcXudbLckgaAA2Nzp1TcU+xWWb25iah7kkSJJ1jkJga89B47WFxLgJFiYcahl9QOkANl1hJ4C0parSDWzTBAsMxjUR3baDTqAgU2OeR3iReIgXBkgc0qT6QN12MVJJkucTm70gGb/AJnCb8hZM4DA5u86ALuIn8R5nwVjRhkw/MBJzemXY2Oqph8UD3ZvJPSL6q1jMZZPw2AY/DA57W2RgYbmuBr6LMpVXCxMt46+gumWVMzYB4yOY4HZDRmNOq6SQd5G8bFXpuyxckE62sdfVZFPEgHpqP3H2WjTqtcImx99PYQ4jTNuhjfyv0NpHuy832jXPzHSIgxbQgaG3JEdiyzU9Rx4EcZCTxuJbUgx3rXUrHTHOVqhhmKMfspNQG15/lZ2DhziHyLGDwPPihNxMWP3T4UZnu+xvhl7m5pyAgd4jMT/ANGkwBzPkvS9ldjU6ImXPf8AreZPgNGjovm+E+KcUxsCqQBpIDo04p3C/HeJYBmyVADeRBIvu37LOUZs6cc8UfD6culeUwHx3hnj+5NI21BcD0LRPovRYPG06rQ6m9rmm8g/UbeKwcWuzrjOMumMLlEqJUlllEqsqC5AFpXShl6oXp0S5IKXIOIY17S14BB2PIyFUvQ3VE0iHkPJfF3w5XxNTMBSIAhplzXROjwSQ7fzXy/4j+H6mGflqANkSJNnf9XaHpqvvLqiSx+Gp1W5ajGvbwcAR6rpx5nHT6OabXZ+eH0nC50QKlThZfSu2v6cvc6cG9rOLKjnZZ4h0HyK+f8Aa2AqUKrqNenke3XgRs5p/M07ELrjkjLpijtWZziqOVqhG0oLnSUpSNEiSVEqHLiYUllSq5FMqJSGWdWJ1MqweDAn31QC1cIUDHG1Go9OsHDKGzPPS/DdCw+HaROvVP0g0bjortsh0TToEaa+CPTw53uuZWG32+qg1jNvroi2SPUaLPcwiZoMgD+f3WW7EEES4R1UVsezTNPSfrwU0Bsio43dpz/i4VnP0sNfLnfZecb2q6bNmPHxgRwS9XHPc7vuMG50A/wlQ6ZtY6vSE5RLjyFup0QMQzJTh9US5stY0ZiAf1uBDQYGgnUaLPa5zjuWiSAb9Dp3ld876TJEaHp/G6dARRpQ6QARpcGAT4rUNR2UgQAQQcoIkW1JE31iyy2EuMTAtqYA6plrTIBnjyFtSihMbb/aaRY5u7FrTqJ0jibn1VqFN1RwyOcS0GXO7oGXQNvM69beGfXqgtjUbRYm1+N0XB4iq0Op0ycrozZZ2BOWQJ3OhRQDuJwDmjL3Te4aS46XNQwMunVF7Nw1Iuu9hMFwaGuIEEwXEN/EYEHntoloLj+ANAsPxATvIHu60MPSa0uc6JO4ENtoA0WESOd0+LZDkkb2BDaoAN2SSRYFxMWHAePokquHax8E/m7rjAHEA7B0WlU7PxTSba6CfQE+/FX7VztcHQMrw0kSCDfW2m1k4x46MZSch3A9pOyZHOtJAkga7c9UJuIbn0AP4TBESDq3h/KnDVGDNYOpg6HbMLHiYII22ul+1sG1pBYdpI/5bGNVSSsQavXcx2caWPvqrU8ZmkgQY0mx+x4IFXGZqYluV/E6PskHOGxgxp/KKEOVMaDJI73HcFVZizBIJ0jw5pRrw4kuN+uqhxEwJuihDT8RmdJJ89uCaD2xpp97+iRiGg2jjxVqYB/EY/5beJToEM1MTJkaeHoCl6jhNhzFr6KziJkXbvEX5j+EQ0Wt7rhc3aeV7dUhgjIbmNxwB+qE6pe11fDvk5Zte2k9VTGUS3vD8P0TSQUR89Ndm9r1aDw+k8tM34EcHDccllurTdcakiUOKBH2j4T+KmYsFjobWAJLRo4Tq30kL0JcvjnwFhqjsUxwkRJnlvPK/qvrheuHLjUZaOzHlbjsKXKhchGoqGos6G8gYuVC5CNRUNRVRDmEc9Cc5Uc9CfUTSMpTLuclMXjGU2lz3tY0alxAA8Sq4vGNptc97g1rQSSTAAC+L/FvxO/GVOFFjj8psQSNM7uZjwmFrCFkpOR6/tf+plNhc2hTLy0xmccrCNyIufRfP+2u2q+Kd8zEPzROUQAGgmcogTHWVn5o8fpshG/8rZRSN4xS6Je8RylCJXZSuVGhVQpKhAyCqqxVUAcXKYRDTXCkVnQyKT3Ap1uIA2A989Up8tXdOx89UW0JqwzsZwHvwVRinu5RwCj5Ui4Hhuq6CEKVipF3Uzub9QhuAMzwvPFSTEa7yppsG89NDvx2VAXw5y3HgdAPsVLqbSZcZ1mN/GYJVWxce/VWdAEZp14wLpiL4eqWut0P18Ueq8E+dkvhngAl2pkReY5IuFw2Y/iaNbuOUWBN0hMiwFrmbxbURA4hHAkWYTP/AMgeyPNCoskGCBYGCBoYBdrYCeZ5brVrdkhhaPmteYnKC4gDUHSIM6Tb0A2IQa1ofBgAmCGibWmJEjRNVMM1jiKbszCQNIkjrfWfNFdSaKUBgDg8EkfmB4E8Eu+oMpF/stIx/TNyvoYGI8D6JxuJLmd60WBOh8fFZzIcHA6xPkr0WkRq7XKLG8bg2KujOhvBUwXGSWuvcWjhITeQvBPzScsxxja27TGoWVQLcwzfWOd1s4wtcym8tnLbu26TG9o9wpaExRwdP9t8HK20GDBjwTdXFZ2y4EPBHCNNuMwlZYXkC4uQdCWnUc4mVNOoYc3rHEHX9h6p0Jg31hBExJHglnPVqhBM5TE+YKG8ETCGgot8xX+Yeh9F1AgAGLzuPumH0zmAgkaWG3G3glQqIZXMG/QK9N+/mAjUuyKzj3Kdha/vVBqUG03w+o1pBIIHeIPAwhPwKHarIEi4mSLEmUKnUL7GDpYifJxO/DmqP7VpsADS59uTYPDRJO7asQKbBeZuT9Y52Caix0adNjhbKQZMW5G2Y6ozqDgO+QwR+cgTaY5lYj+3axEB2Uad0AGOE6pCtiHvPecXHiSSU1BgjSf8gD/ccSZsG6eaa7Fwb8Q4ChSBcPxOcbN5wET4c+EsTXcHGnkpzd1QEDTZup+i+o9idiUsKCKYALozEACY4+ZUZJxj12AL4S7A/wBMHve8vqvADnEQABo1rRYCVvucgZ1UvXG7k7ZfKlQYvVS5AL1Q1EqJ5BnPQ3VEB1ReP+JvjVlGWUYfUBgkiWNjXfvHkOKpQbItyej1+IxTWiXODQNyQB5leZ7d+NcPRb3HNrPuMrXC1jBceEwF8t7V7arVXudUdmcTN9AOAboEhRdF3Anhw8lqsaNVi9Zpdtds18W8vqOMbNFmNvMAfubrKD+V/FEqVwUJz5WlGyRWo7kqkq7jG3voqPb0QUipjiq1AodwUFBRW64uUlUISGTKhQVCLGONKuHIbVJ0QII4jT9kIjl76ooVnm3mkwAPde0xtx/ld8ziPNMEd0HorPYJ0WTpALPdw9+SrvJkm3so9No71hZTVYAbAC0/X7LRdCKsaDfUzEGzd9wZOyh1SDqCdYH8QidptAygWEfsDfjql8MExB3VNNjvEA9LXB5lFLO8HMGUczPOSTYnwSz3lgJbYpht3GdhZAhsvD3Z6gLi60jK28AAi2kDhdWZWeWxmdBuReHETFt9Vn/6hw0PA7KBiH/qPHVaxikQ3Zu0szmPaRznYxeORgeiDTwVSD3Sedo0WQKzr94+ZUmu+IzGOpV0RxNXC4VzmTw5pij2bUgknLvf662KwGuKkEo4hxPQMwkjNnGwnMNTylP4DD0y2S6HcWP5fmE+4XkQVYFDiLiehrQHNIdTtzAFjeRrMdUejiaHzDmqmL3AJ3iBvePILzIVpT4i4m9isZhQRkzu2NsoPW+qD/5WkIilJHF3TgFjFcUcUPiekZ8UZW5WYekDxILvQpGp27WIIDsoOzQGj0CyVKFCK8FQ47H1TrUffXvFAlUUqgouXJnAYCrWdlpU3PPIWHU6DxTfwnhGVcVTp1G5mmZF7w0nbovs2GwzKbctNrWN4NAA9Flky8dEN0eD7G/p0TldiakDU02a6aF2xmNF7XsvsXDYcf2qTWmILolxEzdxuU5KrK5pTlLtk2MGoqmogEqCVFBYU1FU1EIlDcUUKwpqJfFY1lNpc9wa0akmFDivkPxxi3uxbw5xIbLWjYDkqURwjydGx8V/F3zyKVEvbTBcHmw+ZoBEScuvWV5KoDuYOsTPmlC4397oc2lbaSOpQS0g1Qi8nhwJ8/BDDrdTufJAB3TTxZCLqizhAgx4IIeNOd9ugVaIkwVRuqLCi739FTZQ/VVKCkiQVVyrN1zhBQM4lVUlc5ICFSFaFVIZ/9k='
    },
    id_31: {
        id: 'id_31',
            parentId: 'id_9',
            childrenIds: [],
            opacity: 1,
            elementType: 'text'
    },
    id_32: {
        id: 'id_32',
            parentId: 'id_9',
            childrenIds: [],
            opacity: 1,
            elementType: 'text'
    },
    id_33: {
        id: 'id_33',
            parentId: 'id_13',
            childrenIds: [],
            opacity: 1,
            elementType: 'button'
    },
    id_34: {
        id: 'id_34',
            parentId: 'id_12',
            childrenIds: [],
            opacity: 1,
            elementType: 'button'
    },
    id_35: {
        id: 'id_35',
            parentId: 'id_11',
            childrenIds: [],
            opacity: 1,
            elementType: 'button'
    },
    id_36: {
        id: 'id_36',
            parentId: 'id_16',
            childrenIds: [],
            opacity: 1,
            elementType: 'image',
            link: 'data:image/jpeg;base64,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'
    },
    id_37: {
        id: 'id_37',
            parentId: 'id_17',
            childrenIds: [],
            opacity: 1,
            elementType: 'image',
            link: 'data:image/jpeg;base64,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'
    },
    id_38: {
        id: 'id_38',
            parentId: 'id_15',
            childrenIds: [],
            opacity: 1,
            elementType: 'image',
            link: 'data:image/jpeg;base64,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'
    },
    id_39: {
        id: 'id_39',
            parentId: 'id_24',
            childrenIds: [],
            opacity: 1,
            elementType: 'text'
    },
    id_40: {
        id: 'id_40',
            parentId: 'id_19',
            childrenIds: [],
            opacity: 1,
            elementType: 'text'
    },
    id_41: {
        id: 'id_41',
            parentId: 'id_19',
            childrenIds: [],
            opacity: 1,
            elementType: 'image',
            link: 'data:image/jpeg;base64,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'
    },
    id_42: {
        id: 'id_42',
            parentId: 'id_19',
            childrenIds: [],
            opacity: 1,
            elementType: 'button'
    },
    id_43: {
        id: 'id_43',
            parentId: 'id_20',
            childrenIds: [],
            opacity: 1,
            elementType: 'image',
            link: 'data:image/jpeg;base64,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'
    },
    id_44: {
        id: 'id_44',
            parentId: 'id_20',
            childrenIds: [],
            opacity: 1,
            elementType: 'text'
    },
    id_45: {
        id: 'id_45',
            parentId: 'id_20',
            childrenIds: [],
            opacity: 1,
            elementType: 'button'
    },
    id_46: {
        id: 'id_46',
            parentId: 'id_21',
            childrenIds: [],
            opacity: 1,
            elementType: 'button'
    },
    id_47: {
        id: 'id_47',
            parentId: 'id_21',
            childrenIds: [],
            opacity: 1,
            elementType: 'image',
            link: 'data:image/jpeg;base64,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'
    },
    id_48: {
        id: 'id_48',
            parentId: 'id_21',
            childrenIds: [],
            opacity: 1,
            elementType: 'text'
    },
    id_49: {
        id: 'id_49',
            parentId: 'id_22',
            childrenIds: [],
            opacity: 1,
            elementType: 'heading'
    },
    id_50: {
        id: 'id_50',
            parentId: 'id_27',
            childrenIds: [],
            opacity: 1,
            elementType: 'text'
    },
    id_51: {
        id: 'id_51',
            parentId: 'id_26',
            childrenIds: [],
            opacity: 1,
            elementType: 'heading'
    }

};


function createChildrenIds(state, action) {
    //console.log(action);
    switch (action.type) {
        case ADD_NODE:
            //
            if (typeof action.dropId === 'undefined') {
                return [...state, action.childrenId];
            } else {
                for (let [index, id] of state.entries()) {
                    if (id === action.dropId) {
                        state.splice(++index, 0, action.childrenId);
                        break;
                    }
                }
                return state;
            }

        case REMOVE_CHILD:
            return state.filter(id => id !== action.childId);
        //return state;
        default:
            return state
    }
}

const exchangeNode = (state, action) => {
    const {type, dragId, dropId} = action;
    //console.log(state, dragId, dropId);
    switch (type) {
        case EXCHANGE_NODE_ADD:
            return [...state, dropId];

        case EXCHANGE_NODE_REMOVE:
            return state.filter(id =>
                id !== dragId
            );
        case MOVE_CHANGE_SECTION:
            // dragId, dragIndex, hoverIndex
            state.splice(action.hoverIndex, 0, action.dragId);
            return state;
        default:
            return state
    }
};

const node = (state, action) => {
    switch (action.type) {
        case CREATE_ID:
            return {
                id: action.nodeId,
                parentId: action.parentId,
                childrenIds: [],
                opacity: 1
            };

        case ADD_NODE:
        case REMOVE_CHILD:
            return Object.assign({}, state, {
                childrenIds: createChildrenIds(state.childrenIds, action)
            });
        case COLOR_PICKER:
            return Object.assign({}, state, {
                colorControlBar: action.color
            });
        case GRID_INDEX:
            return Object.assign({}, state, {
                gridIndex: action.gridIndex
            });
        case ELEMENT_TYPE:
            return Object.assign({}, state, {
                elementType: action.elementType
            });
        case MOVE_SECTION:
// todo: refactoring this
            const dragId = state.childrenIds[action.dragIndex];
            const temp = state.childrenIds[action.hoverIndex];
            let newCard = state.childrenIds;
            newCard[action.hoverIndex] = dragId;
            newCard[action.dragIndex] = temp;

            return Object.assign({}, state, {
                childrenIds: newCard
            });

        case MOVE_ROW:
            const dragRowId = state.childrenIds[action.dragIndex];
            const hoverRowId = state.childrenIds[action.hoverIndex];
            let newChildrenIds = state.childrenIds;
            newChildrenIds[action.hoverIndex] = dragRowId;
            newChildrenIds[action.dragIndex] = hoverRowId;

            return Object.assign({}, state, {
                childrenIds: newChildrenIds
            });

        case MOVE_CHANGE_SECTION:
            return Object.assign({}, state, {
                childrenIds: exchangeNode(state.childrenIds, action)
            });

        case EXCHANGE_NODE_ADD:
        case EXCHANGE_NODE_REMOVE:
            return Object.assign({}, state, {
                childrenIds: exchangeNode(state.childrenIds, action)
            });
        case ADD_IMAGE_LINK:
            return Object.assign({}, state, {
                link: action.link
            });

        default:
            return state
    }
};
// Todo: refactoring functions getAllDescendantIds and deleteMany
const getAllDescendantIds = (state, nodeId) => (
    state[nodeId].childrenIds.reduce((acc, childId) => (
        [...acc, childId, ...getAllDescendantIds(state, childId)]
    ), [])
);
const deleteMany = (state, ids) => {
    state = {...state};
    ids.forEach(id => delete state[id]);
    return state
};
export function WorkAreaReducer(state = initialState, action) {
    const {nodeId} = action;

    if (typeof nodeId === 'undefined') {
        switch (action.type) {
            case IS_OPACITY:
                return Object.assign({}, state, {
                    opacityId: action.id
                });
            case ACTIVE_TEXT_EDIT:
                return Object.assign({}, state, {
                    isActiveTextEdit: action.bool
                });
            case ACTIVE_CONTEXT_MENU:
                return Object.assign({}, state, {
                    activeContextMenu: {
                        id: action.id,
                        parentId: action.parentId,
                        top: action.top,
                        left: action.left
                    }
                });


            default:
                return state
        }
    }
    if (action.type === DELETE_NODE) {
        const descendantIds = getAllDescendantIds(state, nodeId);
        return deleteMany(state, [nodeId, ...descendantIds])
    }

    return Object.assign({}, state, {
        [nodeId]: node(state[nodeId], action)
    })
}
