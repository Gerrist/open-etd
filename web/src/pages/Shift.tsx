import {useState} from "react";
import moment from "moment";
import Trip from "../types/Trip";
import {useRecoilState} from "recoil";
import {NavigationStates} from "../states/navigation";
import {InfoStates} from "../states/info";

export default function Shift() {
    const [shift, setShift] = useState<Trip[]>([
        {
            "id": 7552,
            "date": "2022-03-25",
            "logical_route": [
                {
                    "id": 7552,
                    "route": [
                        {
                            "code": "AH",
                            "stops": {
                                "actual": true,
                                "planned": true
                            },
                            "platform": {
                                "actual": "10",
                                "planned": "10"
                            },
                            "departure": {
                                "actual": "2022-03-25T14:05:53Z",
                                "planned": "2022-03-25T14:05:00Z"
                            },
                            "location": {
                                "lat": 51.98473057,
                                "lot": 5.90149072
                            }
                        },
                        {
                            "code": "AHB",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.98652049,
                                "lot": 5.88660402
                            }
                        },
                        {
                            "code": "AHWA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.98690134,
                                "lot": 5.87726205
                            }
                        },
                        {
                            "code": "OTB",
                            "stops": {
                                "actual": true,
                                "planned": true
                            },
                            "platform": {
                                "actual": "1",
                                "planned": "1"
                            },
                            "arrival": {
                                "actual": "2022-03-25T14:09:34Z",
                                "planned": "2022-03-25T14:09:00Z"
                            },
                            "departure": {
                                "actual": "2022-03-25T14:09:34Z",
                                "planned": "2022-03-25T14:09:00Z"
                            },
                            "location": {
                                "lat": 51.99453369,
                                "lot": 5.84110463
                            }
                        },
                        {
                            "code": "WF",
                            "stops": {
                                "actual": true,
                                "planned": true
                            },
                            "platform": {
                                "actual": "3",
                                "planned": "3"
                            },
                            "arrival": {
                                "actual": "2022-03-25T14:13:15Z",
                                "planned": "2022-03-25T14:13:00Z"
                            },
                            "departure": {
                                "actual": "2022-03-25T14:13:15Z",
                                "planned": "2022-03-25T14:13:00Z"
                            },
                            "location": {
                                "lat": 52.00512849,
                                "lot": 5.79513203
                            }
                        },
                        {
                            "code": "ED",
                            "stops": {
                                "actual": true,
                                "planned": true
                            },
                            "platform": {
                                "actual": "1b",
                                "planned": "1b"
                            },
                            "arrival": {
                                "actual": "2022-03-25T14:20:00Z",
                                "planned": "2022-03-25T14:20:00Z"
                            },
                            "location": {
                                "lat": 52.02722565,
                                "lot": 5.67521048
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": 7553,
            "date": "2022-03-25",
            "logical_route": [
                {
                    "id": 7553,
                    "route": [
                        {
                            "code": "ED",
                            "stops": {
                                "actual": true,
                                "planned": true
                            },
                            "platform": {
                                "actual": "1b",
                                "planned": "1b"
                            },
                            "departure": {
                                "actual": "2022-03-25T14:42:02Z",
                                "planned": "2022-03-25T14:42:00Z"
                            },
                            "location": {
                                "lat": 52.02722565,
                                "lot": 5.67521048
                            }
                        },
                        {
                            "code": "WF",
                            "stops": {
                                "actual": true,
                                "planned": true
                            },
                            "platform": {
                                "actual": "2",
                                "planned": "1"
                            },
                            "arrival": {
                                "actual": "2022-03-25T14:48:00Z",
                                "planned": "2022-03-25T14:48:00Z"
                            },
                            "departure": {
                                "actual": "2022-03-25T14:49:56Z",
                                "planned": "2022-03-25T14:48:00Z"
                            },
                            "location": {
                                "lat": 52.00512849,
                                "lot": 5.79513203
                            }
                        },
                        {
                            "code": "OTB",
                            "stops": {
                                "actual": true,
                                "planned": true
                            },
                            "platform": {
                                "actual": "2",
                                "planned": "2"
                            },
                            "arrival": {
                                "actual": "2022-03-25T14:53:37Z",
                                "planned": "2022-03-25T14:52:00Z"
                            },
                            "departure": {
                                "actual": "2022-03-25T14:53:37Z",
                                "planned": "2022-03-25T14:52:00Z"
                            },
                            "location": {
                                "lat": 51.99453369,
                                "lot": 5.84110463
                            }
                        },
                        {
                            "code": "AHWA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.98690134,
                                "lot": 5.87726205
                            }
                        },
                        {
                            "code": "AHB",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.98652049,
                                "lot": 5.88660402
                            }
                        },
                        {
                            "code": "AH",
                            "stops": {
                                "actual": true,
                                "planned": true
                            },
                            "platform": {
                                "actual": "10",
                                "planned": "10"
                            },
                            "arrival": {
                                "actual": "2022-03-25T14:57:17Z",
                                "planned": "2022-03-25T14:56:00Z"
                            },
                            "location": {
                                "lat": 51.98473057,
                                "lot": 5.90149072
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": 3652,
            "date": "2022-03-25",
            "logical_route": [
                {
                    "id": 3652,
                    "route": [
                        {
                            "code": "RSD",
                            "stops": {
                                "actual": false,
                                "planned": true
                            },
                            "platform": {
                                "actual": "",
                                "planned": "3a"
                            },
                            "departure": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T13:27:00Z"
                            },
                            "location": {
                                "lat": 51.540632,
                                "lot": 4.45899054
                            }
                        },
                        {
                            "code": "ETN",
                            "stops": {
                                "actual": false,
                                "planned": true
                            },
                            "platform": {
                                "actual": "",
                                "planned": "1"
                            },
                            "arrival": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T13:36:00Z"
                            },
                            "departure": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T13:36:00Z"
                            },
                            "location": {
                                "lat": 51.57522951,
                                "lot": 4.63656164
                            }
                        },
                        {
                            "code": "BDA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.5922868,
                                "lot": 4.75616084
                            }
                        },
                        {
                            "code": "BD",
                            "stops": {
                                "actual": false,
                                "planned": true
                            },
                            "platform": {
                                "actual": "",
                                "planned": "3"
                            },
                            "arrival": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T13:45:00Z"
                            },
                            "departure": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T13:50:00Z"
                            },
                            "location": {
                                "lat": 51.59537092,
                                "lot": 4.78011879
                            }
                        },
                        {
                            "code": "GZ",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.58368786,
                                "lot": 4.92631985
                            }
                        },
                        {
                            "code": "TBR",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.5735538,
                                "lot": 4.99422084
                            }
                        },
                        {
                            "code": "TBU",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.56515414,
                                "lot": 5.05048326
                            }
                        },
                        {
                            "code": "TBGE",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.56373289,
                                "lot": 5.05960847
                            }
                        },
                        {
                            "code": "TB",
                            "stops": {
                                "actual": false,
                                "planned": true
                            },
                            "platform": {
                                "actual": "",
                                "planned": "1"
                            },
                            "arrival": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T14:02:00Z"
                            },
                            "departure": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T14:03:00Z"
                            },
                            "location": {
                                "lat": 51.56070501,
                                "lot": 5.08339606
                            }
                        },
                        {
                            "code": "TBA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.56224286,
                                "lot": 5.10899827
                            }
                        },
                        {
                            "code": "TBI",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.57904436,
                                "lot": 5.12532744
                            }
                        },
                        {
                            "code": "VGA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.66263957,
                                "lot": 5.29078347
                            }
                        },
                        {
                            "code": "HT",
                            "stops": {
                                "actual": false,
                                "planned": true
                            },
                            "platform": {
                                "actual": "",
                                "planned": "1"
                            },
                            "arrival": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T14:19:00Z"
                            },
                            "departure": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T14:24:00Z"
                            },
                            "location": {
                                "lat": 51.69066815,
                                "lot": 5.29376092
                            }
                        },
                        {
                            "code": "HTDA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.69955217,
                                "lot": 5.29811107
                            }
                        },
                        {
                            "code": "HTO",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.70050008,
                                "lot": 5.3174929
                            }
                        },
                        {
                            "code": "RS",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.71512569,
                                "lot": 5.36949047
                            }
                        },
                        {
                            "code": "OW",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.75839915,
                                "lot": 5.50679634
                            }
                        },
                        {
                            "code": "O",
                            "stops": {
                                "actual": false,
                                "planned": true
                            },
                            "platform": {
                                "actual": "",
                                "planned": "2"
                            },
                            "arrival": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T14:35:00Z"
                            },
                            "departure": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T14:35:00Z"
                            },
                            "location": {
                                "lat": 51.76522096,
                                "lot": 5.53112226
                            }
                        },
                        {
                            "code": "OELZ",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.7664907,
                                "lot": 5.54991544
                            }
                        },
                        {
                            "code": "RVS",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.79448095,
                                "lot": 5.63664228
                            }
                        },
                        {
                            "code": "MBRVO",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.80556628,
                                "lot": 5.67106676
                            }
                        },
                        {
                            "code": "WC",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.81140394,
                                "lot": 5.73005053
                            }
                        },
                        {
                            "code": "NMD",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.8240054,
                                "lot": 5.79478162
                            }
                        },
                        {
                            "code": "NMGO",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.82730328,
                                "lot": 5.82254751
                            }
                        },
                        {
                            "code": "NM",
                            "stops": {
                                "actual": false,
                                "planned": true
                            },
                            "platform": {
                                "actual": "",
                                "planned": "1a"
                            },
                            "arrival": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T14:52:00Z"
                            },
                            "departure": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T14:54:00Z"
                            },
                            "location": {
                                "lat": 51.84342992,
                                "lot": 5.85264071
                            }
                        },
                        {
                            "code": "NML",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.86320365,
                                "lot": 5.85961059
                            }
                        },
                        {
                            "code": "RSA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.89330684,
                                "lot": 5.85713759
                            }
                        },
                        {
                            "code": "EBTWA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.90229847,
                                "lot": 5.85633072
                            }
                        },
                        {
                            "code": "ESTA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.9082239,
                                "lot": 5.85581128
                            }
                        },
                        {
                            "code": "EST",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.91715236,
                                "lot": 5.85506137
                            }
                        },
                        {
                            "code": "AHZ",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.954862,
                                "lot": 5.85191943
                            }
                        },
                        {
                            "code": "AHWA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.98690134,
                                "lot": 5.87726205
                            }
                        },
                        {
                            "code": "AHB",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.98652049,
                                "lot": 5.88660402
                            }
                        },
                        {
                            "code": "AH",
                            "stops": {
                                "actual": false,
                                "planned": true
                            },
                            "platform": {
                                "actual": "",
                                "planned": "3"
                            },
                            "arrival": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T15:07:00Z"
                            },
                            "departure": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T15:11:00Z"
                            },
                            "location": {
                                "lat": 51.98473057,
                                "lot": 5.90149072
                            }
                        },
                        {
                            "code": "AHP",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.98518933,
                                "lot": 5.91959086
                            }
                        },
                        {
                            "code": "VA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.98369634,
                                "lot": 5.92571617
                            }
                        },
                        {
                            "code": "AHPR",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.98799843,
                                "lot": 5.94380566
                            }
                        },
                        {
                            "code": "VP",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 51.99498074,
                                "lot": 5.98090557
                            }
                        },
                        {
                            "code": "RH",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 52.01001647,
                                "lot": 6.03081718
                            }
                        },
                        {
                            "code": "DR",
                            "stops": {
                                "actual": false,
                                "planned": true
                            },
                            "platform": {
                                "actual": "",
                                "planned": "1"
                            },
                            "arrival": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T15:22:00Z"
                            },
                            "departure": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T15:23:00Z"
                            },
                            "location": {
                                "lat": 52.04469067,
                                "lot": 6.10293229
                            }
                        },
                        {
                            "code": "BMN",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 52.09083999,
                                "lot": 6.14693662
                            }
                        },
                        {
                            "code": "IJBZA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 52.14147069,
                                "lot": 6.17979129
                            }
                        },
                        {
                            "code": "IJBZ",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 52.14327826,
                                "lot": 6.18763936
                            }
                        },
                        {
                            "code": "ZP",
                            "stops": {
                                "actual": false,
                                "planned": true
                            },
                            "platform": {
                                "actual": "",
                                "planned": "3"
                            },
                            "arrival": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T15:32:00Z"
                            },
                            "departure": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T15:33:00Z"
                            },
                            "location": {
                                "lat": 52.1448164,
                                "lot": 6.19406605
                            }
                        },
                        {
                            "code": "ZPGE",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 52.15077782,
                                "lot": 6.20289707
                            }
                        },
                        {
                            "code": "ZPGEA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 52.15561679764195,
                                "lot": 6.209115386009217
                            }
                        },
                        {
                            "code": "ZPTA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 52.15961036,
                                "lot": 6.21365422
                            }
                        },
                        {
                            "code": "SPA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 52.25241417,
                                "lot": 6.19546023
                            }
                        },
                        {
                            "code": "DVGEA",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 52.25781901,
                                "lot": 6.1817757
                            }
                        },
                        {
                            "code": "DVGE",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 52.25621733,
                                "lot": 6.17263705
                            }
                        },
                        {
                            "code": "DV",
                            "stops": {
                                "actual": false,
                                "planned": true
                            },
                            "platform": {
                                "actual": "",
                                "planned": "4"
                            },
                            "arrival": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T15:45:00Z"
                            },
                            "departure": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T15:46:00Z"
                            },
                            "location": {
                                "lat": 52.25704688,
                                "lot": 6.16134451
                            }
                        },
                        {
                            "code": "OST",
                            "stops": {
                                "actual": false,
                                "planned": true
                            },
                            "platform": {
                                "actual": "",
                                "planned": "3"
                            },
                            "arrival": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T15:53:00Z"
                            },
                            "departure": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T15:53:00Z"
                            },
                            "location": {
                                "lat": 52.33559157,
                                "lot": 6.11347338
                            }
                        },
                        {
                            "code": "WH",
                            "stops": {
                                "actual": false,
                                "planned": true
                            },
                            "platform": {
                                "actual": "",
                                "planned": "2"
                            },
                            "arrival": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T15:59:00Z"
                            },
                            "departure": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T15:59:00Z"
                            },
                            "location": {
                                "lat": 52.39104509,
                                "lot": 6.14107542
                            }
                        },
                        {
                            "code": "ZLO",
                            "stops": {
                                "actual": false,
                                "planned": false
                            },
                            "location": {
                                "lat": 52.50162276,
                                "lot": 6.10019341
                            }
                        },
                        {
                            "code": "ZL",
                            "stops": {
                                "actual": false,
                                "planned": true
                            },
                            "platform": {
                                "actual": "",
                                "planned": "10"
                            },
                            "arrival": {
                                "actual": "0001-01-01T00:00:00Z",
                                "planned": "2022-03-25T16:11:00Z"
                            },
                            "location": {
                                "lat": 52.5046821,
                                "lot": 6.09208319
                            }
                        }
                    ]
                }
            ]
        }
    ]);
    const [page, setPage] = useRecoilState(NavigationStates.page);
    const [currentTrip, setCurrentTrip] = useRecoilState(InfoStates.currentTrip);

    return (
        <div className={`p-2 flex flex-col`}>
            <div className={`p-2 text-3xl font-semibold text-blue-500`}>
                Mijn dienst
            </div>
            {
                shift?.map(trip => {
                    return <div
                        key={`${trip.id}-${trip.date}`}
                        onClick={() => {
                            setPage('trip');
                            setCurrentTrip({
                                id: trip.id,
                                date: trip.date
                            });
                        }}
                        className={`border-2 border-gray-200 m-1 p-1 rounded flex flex-row`}
                    >
                        <div className={'p-2 m-1 rounded text-white bg-blue-500'}>{trip.id}</div>
                        <div className={'p-2 m-1'}>
                            {trip.logical_route[0].route[0].code} - {trip.logical_route[trip.logical_route.length -1 ].route[trip.logical_route[trip.logical_route.length -1 ].route.length - 1].code}
                        </div>
                    </div>
                })
            }
        </div>
    )
}