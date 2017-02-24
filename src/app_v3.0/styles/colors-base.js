/**
 * Created by ruslan on 23.02.17.
 */
const Colors = {
    'SOFT_RED': '#EC644B', //236,100,75
    'CHESTNUT_ROSE': '#D24D57',//    210, 77, 87
    'POMEGRANATE': '#F22613',//        242, 38, 19
    'THUNDERBIRD': '#D91E18',//        217, 30, 24
    'OLD_BRIC': '#96281B',//        150, 40, 27
    'FLAMINGO': '#EF4836',//        239, 72, 54
    'VALENCIA': '#D64541',//        214, 69, 65
    'TALL_POPPY': '#C0392B',//        192, 57, 43
    'MONZA': '#CF000F',//        207, 0, 15
    'CINNABAR': '#E74C3C',//        231, 76, 60
    'RAZZMATAZZ': '#DB0A5B',//        219, 10, 91
    'SUNSET_ORANE': '#F64747',//    246,71, 71
    'WAX_FLOWR': '#F1A9A0',//    241,169, 160
    'CABARET': '#D2527F',//        210, 82, 127
    'NEW_YORKPINK': '#E08283',//        24, 130, 131
    'RADICAL_RED': '#F62459',//    246, 6, 89
    'SUNGLO': '#E26A6A',//        226, 106, 106
    'SNUFF': '#DCC6E0',//        220, 198, 224
    'REBECCAPURPLE': '#663399',//        102, 51, 153
    'HONEY_FLOWR': '#674172',//   103, 65, 114
    'WISTFUL': '#AEA8D3',//        174, 168, 211
    'PLUM': '#913D88',//    145, 61, 136
    'SEANCE': '#9A12B3',//    154, 18, 179
    'MEDIUM_PURPE': '#BF55EC',//    191,85, 236
    'LIGHT_WISTRIA': '#BE90D4',//    190,144, 212
    'STUDIO': '#8E44AD',//    142, 68, 173
    'WISTERIA': '#9B59B6',//    155, 89, 182
    'SAN_MARIO': '#446CB3',//       68,108,179
    'ALICE_BLUE': '#E4F1FE',//    228, 41, 254
    'ROYAL_BLUE': '#4183D7',//       65, 131, 215
    'PICTON_BLUE': '#59ABE3',//         89, 171, 227
    'SPRAY': '#81CFE0',//    129, 207, 224
    'SHAKESPEARE': '#52B3D9',//    82, 179, 217
    'HUMMING_BIRD': '#C5EFF7',//    197, 39, 247
    'PICTON_BLUE_2': '#22A7F0',//         34, 167, 240
    'CURIOUS_BLUE': '#3498DB',//       52, 152, 219
    'MADISON': '#2C3E50',//    44, 62, 80
    'DODGER_BLUE': '#19B5FE',//         25, 181, 254
    'MING': '#336E7B',//    51, 110, 123
    'EBONY_CLAY': '#22313F',//       34, 49, 63
    'MALIBU': '#6BB9F0',//    107, 185, 240
    'SUMMER_SKY': '#1E8BC3',//       30, 139, 195
    'CHAMBRAY': '#3A539B',//    58, 83, 155
    'PICKLED_BLUEOOD': '#34495E', //   52, 73, 94
    'HOKI': '#67809F',//    103, 128, 159
    'JELLY_BEAN': '#2574A9',//       37, 116, 169
    'JACKSONS_PURPE': '#1F3A93',    //       31, 58, 147
    'JORDY_BLUE': '#89C4F4',//       137, 196, 244
    'STEEL_BLUE': '#4B77BE',//       75, 119, 190
    'FOUNTAIN_BLUE': '#5C97BF',//       92, 151, 191
    'MEDIUM_TURQOISE': '#4ECDC4',//       78,205,196
    'AQUA_ISLAD': '#A2DED0',//    162,222, 208
    'GOSSIP': '#87D37C',//    135, 211, 124
    'DARK_SEA_REE': '#90C695',//    144,198, 149
    'EUCALYPTUS': '#26A65B',//    38, 166, 91
    'CARIBBEAN_GREE': '#03C9A9',//3, 201, 169
    'SILVER_TREE': '#68C3A3',//104, 195, 163
    'DOWNY': '#65C6BB',//    101, 198, 187
    'MOUNTAIN_MEADW': '#1BBC9B',//27, 188, 155
    'LIGHT_SEA_REE': '#1BA39C',//    27, 63, 156
    'MEDIUM_AQUAARINE': '#66CC99',//       102, 204, 153
    'TURQUOISE': '#36D7B7',//    54, 215, 183
    'MADANG': '#C8F7C5',//        200, 247, 197
    'RIPTIDE': '#86E2D5',//    134, 226, 213
    'SHAMROCK': '#2ECC71',//    46, 204, 113
    'NIAGARA': '#16A085',//    22, 160, 133
    'EMERALD': '#3FC380',//    63, 195, 128
    'GREEN_HAZE': '#019875',  //    , 152, 117
    'FREE_SPEEH_AQUAARINE': '#03A678',//    3, 16, 120
    'OCEAN_GREE': '#4DAF7C',//       77, 175, 124
    'NIAGARA_1': '#2ABB9B',//      42, 187, 155
    'JADE': '#00B16A',//   0, 177, 106
    'SALEM': '#1E824C',//    30, 130, 76
    'OBSERVATORY': '#049372',//        4, 147, 114
    'JUNGLE_GREE': '#26C281',//          38, 194, 129
    'CREAM_CAN': '#F5D76E',//    245, 15, 110
    'RIPE_LEMO': '#F7CA18',//    247,202, 24
    'SAFFRON': '#F4D03F',//        244, 208, 63
    'CONFETTI': '#E9D460',//(233,212,96)
    'CAPE_HONE': '#FDE3A7',//253, 227, 167
    'CALIFORNIA': '#F89406',//248, 148, 6
    'FIRE_BUSHEB': '#EB9532',//235, 149, 50
    'TAHIT_GOLD': '#E87E04',//232, 126, 4
    'CASABLNCA': '#F4B350',//244, 179, 80
    'CRUSTA': '#F2784B',//242, 120, 75
    'SEA_BUCKHORN': '#EB974E',//235, 151, 78
    'LIGHTNING_YELLW': '#F5AB35',//245, 171, 53
    'BURNT_ORANE': '#D35400',//211, 84, 0
    'UTTERCUP': '#F39C12',//243, 156, 18
    'ECSTASY': '#F9690E',//249, 105, 14
    'SANDSTORM': '#F9BF3B',//249, 191, 59
    'JAFFA': '#F27935',//242, 121, 53
    'ZEST': '#E67E22',//230, 126, 34
    'WHITE_SMOK': '#ECECEC',//236,236,236
    'LYNCH': '#6C7A89',//108, 122, 137
    'PUMICE': '#D2D7D3',//210, 215, 211
    'GALLERY': '#EEEEEE',//238, 238, 238
    'SILVER_SAND': '#BDC3C7',//189, 195, 199
    'PORCLAIN': '#ECF0F1',//236, 240, 241
    'CASCADE': '#95A5A6',//149, 165, 166
    'IRON': '#DADFE1',//218, 223, 225
    'EDWARD': '#ABB7B7',//171, 183, 183
    'CARARRA': '#F2F1EF',//242, 241, 239
    'SILVER': '#BFBFBF',//191, 191, 191
};

