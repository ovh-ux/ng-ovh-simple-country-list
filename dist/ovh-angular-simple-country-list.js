angular.module('ovh-angular-simple-country-list', []);


/**
 * @ngdoc service
 * @name ovh-angular-simple-country-list.OvhSimpleCountryList
 * @description
 *
 * Provide information about all countries
 */
angular.module('ovh-angular-simple-country-list').factory('OvhSimpleCountryList', function() {
'use strict';

/* This Object have some lazy builded properties. So we have to keep all of them in a cache,
    another comportment can introduce strange behavior with some framework using double binding
    like Angular. */

    var List = {};
    Object.defineProperties(List, {
        '_data': {
            'enumerable': false,
            'configurable': false,
            'writable': false,
            'value': {
                'list': {
                    'AF': {'lang': {'iso': "AFGHANISTAN"}},
                    'AL': {'lang': {'iso': "ALBANIA"}},
                    'DZ': {'lang': {'iso': "ALGERIA"}},
                    'AS': {'lang': {'iso': "AMERICAN SAMOA"}},
                    'AD': {'lang': {'iso': "ANDORRA"}},
                    'AO': {'lang': {'iso': "ANGOLA"}},
                    'AI': {'lang': {'iso': "ANGUILLA"}},
                    'AG': {'lang': {'iso': "ANTIGUA AND BARBUDA"}},
                    'AQ': {'lang': {'iso': "ANTARCTICA"}},
                    'AR': {'lang': {'iso': "ARGENTINA"}},
                    'AM': {'lang': {'iso': "ARMENIA"}},
                    'AW': {'lang': {'iso': "ARUBA"}},
                    'AU': {'lang': {'iso': "AUSTRALIA"}},
                    'AT': {'lang': {'iso': "AUSTRIA"}},
                    'AZ': {'lang': {'iso': "AZERBAIJAN"}},
                    'BS': {'lang': {'iso': "BAHAMAS"}},
                    'BH': {'lang': {'iso': "BAHRAIN"}},
                    'BD': {'lang': {'iso': "BANGLADESH"}},
                    'BB': {'lang': {'iso': "BARBADOS"}},
                    'BY': {'lang': {'iso': "BELARUS"}},
                    'BZ': {'lang': {'iso': "BELIZE"}},
                    'BE': {'lang': {'iso': "BELGIUM"}},
                    'BJ': {'lang': {'iso': "BENIN"}},
                    'BM': {'lang': {'iso': "BERMUDA"}},
                    'BT': {'lang': {'iso': "BHUTAN"}},
                    'BO': {'lang': {'iso': "BOLIVIA"}},
                    'BA': {'lang': {'iso': "BOSNIA AND HERZEGOVINA"}},
                    'BW': {'lang': {'iso': "BOTSWANA"}},
                    'BV': {'lang': {'iso': "BOUVET ISLAND"}},
                    'BR': {'lang': {'iso': "BRAZIL"}},
                    'IO': {'lang': {'iso': "BRITISH INDIAN OCEAN TERRITORY"}},
                    'BN': {'lang': {'iso': "BRUNEI DARUSSALAM"}},
                    'BG': {'lang': {'iso': "BULGARIA"}},
                    'BF': {'lang': {'iso': "BURKINA FASO"}},
                    'BI': {'lang': {'iso': "BURUNDI"}},
                    'KH': {'lang': {'iso': "CAMBODIA"}},
                    'CM': {'lang': {'iso': "CAMEROON"}},
                    'CA': {'lang': {'iso': "CANADA"}},
                    'CV': {'lang': {'iso': "CAPE VERDE"}},
                    'KY': {'lang': {'iso': "CAYMAN ISLANDS"}},
                    'CF': {'lang': {'iso': "CENTRAL AFRICAN REPUBLIC"}},
                    'TD': {'lang': {'iso': "CHAD"}},
                    'CL': {'lang': {'iso': "CHILE"}},
                    'CN': {'lang': {'iso': "CHINA"}},
                    'CX': {'lang': {'iso': "CHRISTMAS ISLAND"}},
                    'CC': {'lang': {'iso': "COCOS (KEELING) ISLANDS"}},
                    'CO': {'lang': {'iso': "COLOMBIA"}},
                    'KM': {'lang': {'iso': "COMOROS"}},
                    'CD': {'lang': {'iso': "CONGO, THE DEMOCRATIC REPUBLIC OF THE"}},
                    'CG': {'lang': {'iso': "CONGO"}},
                    'CK': {'lang': {'iso': "COOK ISLANDS"}},
                    'CR': {'lang': {'iso': "COSTA RICA"}},
                    'CI': {'lang': {'iso': "CÔTE D'IVOIRE"}},
                    'HR': {'lang': {'iso': "CROATIA"}},
                    'CU': {'lang': {'iso': "CUBA"}},
                    'CY': {'lang': {'iso': "CYPRUS"}},
                    'CZ': {'lang': {'iso': "CZECH REPUBLIC"}},
                    'DJ': {'lang': {'iso': "DJIBOUTI"}},
                    'DK': {'lang': {'iso': "DENMARK"}},
                    'DM': {'lang': {'iso': "DOMINICA"}},
                    'DO': {'lang': {'iso': "DOMINICAN REPUBLIC"}},
                    'TP': {'lang': {'iso': "EAST TIMOR"}},
                    'EC': {'lang': {'iso': "ECUADOR"}},
                    'EG': {'lang': {'iso': "EGYPT"}},
                    'SV': {'lang': {'iso': "EL SALVADOR"}},
                    'GQ': {'lang': {'iso': "EQUATORIAL GUINEA"}},
                    'ER': {'lang': {'iso': "ERITREA"}},
                    'EE': {'lang': {'iso': "ESTONIA"}},
                    'ET': {'lang': {'iso': "ETHIOPIA"}},
                    'FK': {'lang': {'iso': "FALKLAND ISLANDS (MALVINAS)"}},
                    'FO': {'lang': {'iso': "FAROE ISLANDS"}},
                    'FJ': {'lang': {'iso': "FIJI"}},
                    'FI': {'lang': {'iso': "FINLAND"}},
                    'FR': {'lang': {'iso': "FRANCE"}},
                    'GF': {'lang': {'iso': "FRENCH GUIANA"}},
                    'PF': {'lang': {'iso': "FRENCH POLYNESIA"}},
                    'TF': {'lang': {'iso': "FRENCH SOUTHERN TERRITORIES"}},
                    'GA': {'lang': {'iso': "GABON"}},
                    'GM': {'lang': {'iso': "GAMBIA"}},
                    'GE': {'lang': {'iso': "GEORGIA"}},
                    'DE': {'lang': {'iso': "GERMANY"}},
                    'GH': {'lang': {'iso': "GHANA"}},
                    'GI': {'lang': {'iso': "GIBRALTAR"}},
                    'GR': {'lang': {'iso': "GREECE"}},
                    'GL': {'lang': {'iso': "GREENLAND"}},
                    'GD': {'lang': {'iso': "GRENADA"}},
                    'GP': {'lang': {'iso': "GUADELOUPE"}},
                    'GU': {'lang': {'iso': "GUAM"}},
                    'GT': {'lang': {'iso': "GUATEMALA"}},
                    'GN': {'lang': {'iso': "GUINEA"}},
                    'GW': {'lang': {'iso': "GUINEA-BISSAU"}},
                    'GY': {'lang': {'iso': "GUYANA"}},
                    'HT': {'lang': {'iso': "HAITI"}},
                    'HM': {'lang': {'iso': "HEARD ISLAND AND MCDONALD ISLANDS"}},
                    'HN': {'lang': {'iso': "HONDURAS"}},
                    'HK': {'lang': {'iso': "HONG KONG"}},
                    'HU': {'lang': {'iso': "HUNGARY"}},
                    'IS': {'lang': {'iso': "ICELAND"}},
                    'IN': {'lang': {'iso': "INDIA"}},
                    'ID': {'lang': {'iso': "INDONESIA"}},
                    'IE': {'lang': {'iso': "IRELAND"}},
                    'IL': {'lang': {'iso': "ISRAEL"}},
                    'IR': {'lang': {'iso': "IRAN, ISLAMIC REPUBLIC OF"}},
                    'IQ': {'lang': {'iso': "IRAQ"}},
                    'IT': {'lang': {'iso': "ITALY"}},
                    'JM': {'lang': {'iso': "JAMAICA"}},
                    'JP': {'lang': {'iso': "JAPAN"}},
                    'JO': {'lang': {'iso': "JORDAN"}},
                    'KZ': {'lang': {'iso': "KAZAKHSTAN"}},
                    'KE': {'lang': {'iso': "KENYA"}},
                    'KI': {'lang': {'iso': "KIRIBATI"}},
                    'KP': {'lang': {'iso': "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF"}},
                    'KR': {'lang': {'iso': "KOREA, REPUBLIC OF"}},
                    'KW': {'lang': {'iso': "KUWAIT"}},
                    'KG': {'lang': {'iso': "KYRGYZSTAN"}},
                    'LV': {'lang': {'iso': "LATVIA"}},
                    'LA': {'lang': {'iso': "LAO PEOPLE'S DEMOCRATIC REPUBLIC"}},
                    'LB': {'lang': {'iso': "LEBANON"}},
                    'LS': {'lang': {'iso': "LESOTHO"}},
                    'LR': {'lang': {'iso': "LIBERIA"}},
                    'LY': {'lang': {'iso': "LIBYAN ARAB JAMABIRIYA"}},
                    'LI': {'lang': {'iso': "LIECHTENSTEIN"}},
                    'LT': {'lang': {'iso': "LITHUANIA"}},
                    'LU': {'lang': {'iso': "LUXEMBOURG"}},
                    'MO': {'lang': {'iso': "MACAU"}},
                    'MK': {'lang': {'iso': "MACEDONIA, THE FORMER YUGOSLAV REPU8LIC OF"}},
                    'MG': {'lang': {'iso': "MADAGASCAR"}},
                    'MY': {'lang': {'iso': "MALAYSIA"}},
                    'MW': {'lang': {'iso': "MALAWI"}},
                    'MV': {'lang': {'iso': "MALDIVES"}},
                    'MT': {'lang': {'iso': "MALTA"}},
                    'MH': {'lang': {'iso': "MARSHALL ISLANDS"}},
                    'MQ': {'lang': {'iso': "MARTINIQUE"}},
                    'MR': {'lang': {'iso': "MAURITANIA"}},
                    'MU': {'lang': {'iso': "MAURITIUS"}},
                    'YT': {'lang': {'iso': "MAYOTTE"}},
                    'MX': {'lang': {'iso': "MEXICO"}},
                    'FM': {'lang': {'iso': "MICRONESIA, FEDERATED STATES OF"}},
                    'MD': {'lang': {'iso': "MOLDOVA, REPUBLIC OF"}},
                    'MC': {'lang': {'iso': "MONACO"}},
                    'MN': {'lang': {'iso': "MONGOLIA"}},
                    'MS': {'lang': {'iso': "MONTSERRAT"}},
                    'MA': {'lang': {'iso': "MOROCCO"}},
                    'MZ': {'lang': {'iso': "MOZAMBIQUE"}},
                    'MM': {'lang': {'iso': "MYANMAR"}},
                    'NA': {'lang': {'iso': "NAMIBIA"}},
                    'NP': {'lang': {'iso': "NEPAL"}},
                    'NL': {'lang': {'iso': "NETHERLANDS"}},
                    'AN': {'lang': {'iso': "NETHERLANDS ANTILLES"}},
                    'NC': {'lang': {'iso': "NEW CALEDONIA"}},
                    'NZ': {'lang': {'iso': "NEW ZEALAND"}},
                    'NI': {'lang': {'iso': "NICARAGUA"}},
                    'NE': {'lang': {'iso': "NIGER"}},
                    'NG': {'lang': {'iso': "NIGERIA"}},
                    'NU': {'lang': {'iso': "NIUE"}},
                    'NF': {'lang': {'iso': "NORFOLK ISLAND"}},
                    'MP': {'lang': {'iso': "NORTHERN MARIANA ISLANDS"}},
                    'NO': {'lang': {'iso': "NORWAY"}},
                    'OM': {'lang': {'iso': "OMAN"}},
                    'PK': {'lang': {'iso': "PAKISTAN"}},
                    'PW': {'lang': {'iso': "PALAU"}},
                    'PA': {'lang': {'iso': "PANAMA"}},
                    'PG': {'lang': {'iso': "PAPUA NEW GUINEA"}},
                    'PY': {'lang': {'iso': "PARAGUAY"}},
                    'PE': {'lang': {'iso': "PERU"}},
                    'PH': {'lang': {'iso': "PHILIPPINES"}},
                    'PN': {'lang': {'iso': "PITCAIRN"}},
                    'PL': {'lang': {'iso': "POLAND"}},
                    'PT': {'lang': {'iso': "PORTUGAL"}},
                    'PR': {'lang': {'iso': "PUERTO RICO"}},
                    'QA': {'lang': {'iso': "QATAR"}},
                    'RE': {'lang': {'iso': "RÉUNION"}},
                    'RO': {'lang': {'iso': "ROMANIA"}},
                    'RU': {'lang': {'iso': "RUSSIAN FEDERATION"}},
                    'RW': {'lang': {'iso': "RWANDA"}},
                    'SH': {'lang': {'iso': "SAINT HELENA"}},
                    'KN': {'lang': {'iso': "SAINT KITTS AND NEVIS"}},
                    'LC': {'lang': {'iso': "SAINT LUCIA"}},
                    'PM': {'lang': {'iso': "SAINT PIERRE AND MIQUELON"}},
                    'SA': {'lang': {'iso': "SAUDI ARABIA"}},
                    'WS': {'lang': {'iso': "SAMOA"}},
                    'SM': {'lang': {'iso': "SAN MARINO"}},
                    'ST': {'lang': {'iso': "SAO TOME AND PRINCIPE"}},
                    'SC': {'lang': {'iso': "SEYCHELLES"}},
                    'SN': {'lang': {'iso': "SENEGAL"}},
                    'SL': {'lang': {'iso': "SIERRA LEONE"}},
                    'SG': {'lang': {'iso': "SINGAPORE"}},
                    'SK': {'lang': {'iso': "SLOVAKIA"}},
                    'SI': {'lang': {'iso': "SLOVENIA"}},
                    'SB': {'lang': {'iso': "SOLOMON ISLANDS"}},
                    'SO': {'lang': {'iso': "SOMALIA"}},
                    'ZA': {'lang': {'iso': "SOUTH AFRICA"}},
                    'GS': {'lang': {'iso': "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS"}},
                    'ES': {'lang': {'iso': "SPAIN"}},
                    'LK': {'lang': {'iso': "SRI LANKA"}},
                    'SD': {'lang': {'iso': "SUDAN"}},
                    'SR': {'lang': {'iso': "SURINAME"}},
                    'SJ': {'lang': {'iso': "SVALBARD AND JAN MAYEN"}},
                    'SZ': {'lang': {'iso': "SWAZILAND"}},
                    'SE': {'lang': {'iso': "SWEDEN"}},
                    'CH': {'lang': {'iso': "SWITZERLAND"}},
                    'SY': {'lang': {'iso': "SYRIAN ARAB REPUBLIC"}},
                    'TW': {'lang': {'iso': "TAIWAN, PROVINCE OF CHINA"}},
                    'TJ': {'lang': {'iso': "TAJIKISTAN"}},
                    'TZ': {'lang': {'iso': "TANZANIA, UNITED REPUBLIC OF"}},
                    'TH': {'lang': {'iso': "THAILAND"}},
                    'TG': {'lang': {'iso': "TOGO"}},
                    'TK': {'lang': {'iso': "TOKELAU"}},
                    'TO': {'lang': {'iso': "TONGA"}},
                    'TT': {'lang': {'iso': "TRINIDAD AND TOBAGO"}},
                    'TR': {'lang': {'iso': "TURKEY"}},
                    'TM': {'lang': {'iso': "TURKMENISTAN"}},
                    'TC': {'lang': {'iso': "TURKS AND CAICOS ISLANDS"}},
                    'TN': {'lang': {'iso': "TUNISIA"}},
                    'TV': {'lang': {'iso': "TUVALU"}},
                    'UG': {'lang': {'iso': "UGANDA"}},
                    'UA': {'lang': {'iso': "UKRAINE"}},
                    'AE': {'lang': {'iso': "UNITED ARAB EMIRATES"}},
                    'GB': {'lang': {'iso': "UNITED KINGDOM"}},
                    'US': {'lang': {'iso': "UNITED STATES"}},
                    'UM': {'lang': {'iso': "UNITED STATES MINOR OUTLYING ISLANDS"}},
                    'UY': {'lang': {'iso': "URUGUAY"}},
                    'UZ': {'lang': {'iso': "UZBEKISTAN"}},
                    'VU': {'lang': {'iso': "VANUATU"}},
                    'VE': {'lang': {'iso': "VENEZUELA"}},
                    'VN': {'lang': {'iso': "VIET NAM"}},
                    'VG': {'lang': {'iso': "VIRGIN ISLANDS, BRITISH"}},
                    'VI': {'lang': {'iso': "VIRGIN ISLANDS, U.S."}},
                    'WF': {'lang': {'iso': "WALLIS AND FUTUNA"}},
                    'EH': {'lang': {'iso': "WESTERN SARARA"}},
                    'YE': {'lang': {'iso': "YEMEN"}},
                    'YU': {'lang': {'iso': "YUGOSLAVIA"}},
                    'ZM': {'lang': {'iso': "ZAMBIA"}},
                    'ZW': {'lang': {'iso': "ZIMBABWE"}}
                },
                'supportedLanguage': ['iso', 'en_GB', 'en_US'],
                'selectedLanguage': 'iso',
                'asArray': null,
                'asObject': null,
                'asDataForSelect': null
            }
        },
        'value': {
            'enumerable': false,
            'configurable': false,
            'writable': false,
            'value': function() {
                return this._data.list;
            }
        },
        'length': {
            'enumerable': false,
            'configurable': false,
            'set': function() {
                throw new Error('"length" is a read only property.');
            },
            'get': function() {
                return this._data.list.length;
            }
        },
        'asArray': {
            'enumerable': false,
            'configurable': false,
            'set': function() {
                throw new Error('"asArray" is a read only property.');
            },
            'get': function() {
               if (this._data.asArray) {
                    return this._data.asArray;
                }

                this._data.asArray = [];

                for (var key in this._data.list) {
                    if(this._data.list[key].lang[this._data.selectedLanguage]) {
                        this._data.asArray.push(this._data.list[key].lang[this._data.selectedLanguage]);
                    } else {
                        this._data.asArray.push(this._data.list[key].lang.iso);
                    }
                }

                return this._data.asArray;
            }
        },
        'asObject': {
            'enumerable': false,
            'configurable': false,
            'set': function() {
                throw new Error('"asObject" is a read only property.');
            },
            'get': function() {
                if (this._data.asObject) {
                    return this._data.asObject;
                }

                for (var key in this._data.list) {
                    if(this._data.list[key].lang[this._data.selectedLanguage]) {
                        this._data.asObject[key] = this._data.list[key].lang[this._data.selectedLanguage];
                    } else {
                        this._data.asObject[key] = this._data.list[key].lang.iso;
                    }
                }

                return this._data.asObject;
            }
        },
        'asDataForSelect': {
            'enumerable': false,
            'configurable': false,
            'set': function() {
                throw new Error('"asDataForSelect" is a read only property.');
            },
            'get': function() {
                if (this._data.asDataForSelect) {
                    return this._data.asDataForSelect;
                }

                this._data.asDataForSelect = [];

                for (var key in this._data.list) {
                    if(this._data.list[key].lang[this._data.selectedLanguage]) {
                        this._data.asDataForSelect.push({
                            'value': key,
                            'label': this._data.list[key].lang[this._data.selectedLanguage]
                        });
                    } else {
                        this._data.asDataForSelect.push({
                            'value': key,
                            'label': this._data.list[key].lang.iso
                        });
                    }
                }

                return this._data.asDataForSelect;
            }
        },
        'setLanguage': {
            'enumerable': false,
            'configurable': false,
            'writable': false,
            'value': function(lang) {
                var trash;

                if (!lang) {
                    console.error('language is missing as first argument.');
                    console.info('supported languages: "' +
                        this._data.supportedLanguage.join('","') + '"');
                    return;
                }

                if (!~this._data.supportedLanguage.indexOf(lang)) {
                    console.error('"' + lang + '" is not a supported language.');
                    console.info('supported languages: "' +
                        this._data.supportedLanguage.join('","') + '"');
                    return;
                }

                if (this._data.selectedLanguage !== lang) {
                    this._data.selectedLanguage = lang;

                    if (this._data.asArray) {
                        this._data.asArray = null;
                        trash = this.asArray; //force update
                    }

                    if (this._data.asObject) {
                        this._data.asObject = null;
                        trash = this.asObject; //force update
                    }

                    if (this._data.asDataForSelect) {
                        this._data.asDataForSelect = null;
                        trash = this.asDataForSelect; //force update
                    }
                }
            }
        }
    });

    return List;
});

