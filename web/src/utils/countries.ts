const countries = [
  {
    name: 'Afghanistan',
    regions: [
      {
        name: 'Badakhshan',
      },
      {
        name: 'Badghis',
      },
      {
        name: 'Baghlan',
      },
      {
        name: 'Balkh',
      },
      {
        name: 'Bamyan',
      },
      {
        name: 'Daykundi',
      },
      {
        name: 'Farah',
      },
      {
        name: 'Faryab',
      },
      {
        name: 'Ghazni',
      },
      {
        name: 'Ghor',
      },
      {
        name: 'Helmand',
      },
      {
        name: 'Herat',
      },
      {
        name: 'Jowzjan',
      },
      {
        name: 'Kabul',
      },
      {
        name: 'Kandahar',
      },
      {
        name: 'Kapisa',
      },
      {
        name: 'Khost',
      },
      {
        name: 'Kunar',
      },
      {
        name: 'Kunduz',
      },
      {
        name: 'Laghman',
      },
      {
        name: 'Logar',
      },
      {
        name: 'Maidan Wardak',
      },
      {
        name: 'Nangarhar',
      },
      {
        name: 'Nimruz',
      },
      {
        name: 'Nuristan',
      },
      {
        name: 'Paktia',
      },
      {
        name: 'Paktika',
      },
      {
        name: 'Panjshir',
      },
      {
        name: 'Parwan',
      },
      {
        name: 'Samangan',
      },
      {
        name: 'Sar-e Pol',
      },
      {
        name: 'Takhar',
      },
      {
        name: 'Urozgan',
      },
      {
        name: 'Zabul',
      },
    ],
  },
  {
    name: 'Åland Islands',
    regions: [
      {
        name: 'Brändö',
      },
      {
        name: 'Eckerö',
      },
      {
        name: 'Finström',
      },
      {
        name: 'Föglö',
      },
      {
        name: 'Geta',
      },
      {
        name: 'Hammarland',
      },
      {
        name: 'Jomala',
      },
      {
        name: 'Kumlinge',
      },
      {
        name: 'Kökar',
      },
      {
        name: 'Lemland',
      },
      {
        name: 'Lumparland',
      },
      {
        name: 'Mariehamn',
      },
      {
        name: 'Saltvik',
      },
      {
        name: 'Sottunga',
      },
      {
        name: 'Sund',
      },
      {
        name: 'Vårdö',
      },
    ],
  },
  {
    name: 'Albania',
    regions: [
      {
        name: 'Berat',
      },
      {
        name: 'Dibër',
      },
      {
        name: 'Durrës',
      },
      {
        name: 'Elbasan',
      },
      {
        name: 'Fier',
      },
      {
        name: 'Gjirokastër',
      },
      {
        name: 'Korçë',
      },
      {
        name: 'Kukës',
      },
      {
        name: 'Lezhë',
      },
      {
        name: 'Shkodër',
      },
      {
        name: 'Tirana',
      },
      {
        name: 'Vlorë',
      },
    ],
  },
  {
    name: 'Algeria',
    regions: [
      {
        name: 'Adrar',
      },
      {
        name: 'Aïn Defla',
      },
      {
        name: 'Aïn Témouchent',
      },
      {
        name: 'Algiers',
      },
      {
        name: 'Annaba',
      },
      {
        name: 'Batna',
      },
      {
        name: 'Béchar',
      },
      {
        name: 'Béjaïa',
      },
      {
        name: 'Biskra',
      },
      {
        name: 'Blida',
      },
      {
        name: 'Bordj Bou Arréridj',
      },
      {
        name: 'Bouïra',
      },
      {
        name: 'Boumerdès',
      },
      {
        name: 'Chlef',
      },
      {
        name: 'Constantine',
      },
      {
        name: 'Djelfa',
      },
      {
        name: 'El Bayadh',
      },
      {
        name: 'El Oued',
      },
      {
        name: 'El Tarf',
      },
      {
        name: 'Ghardaïa',
      },
      {
        name: 'Guelma',
      },
      {
        name: 'Illizi',
      },
      {
        name: 'Jijel',
      },
      {
        name: 'Khenchela',
      },
      {
        name: 'Laghouat',
      },
      {
        name: 'Mascara',
      },
      {
        name: 'Médéa',
      },
      {
        name: 'Mila',
      },
      {
        name: 'Mostaganem',
      },
      {
        name: 'Msila',
      },
      {
        name: 'Naâma',
      },
      {
        name: 'Oran',
      },
      {
        name: 'Ouargla',
      },
      {
        name: 'Oum el Bouaghi',
      },
      {
        name: 'Relizane',
      },
      {
        name: 'Saïda',
      },
      {
        name: 'Sétif',
      },
      {
        name: 'Sidi Bel Abbès',
      },
      {
        name: 'Skikda',
      },
      {
        name: 'Souk Ahras',
      },
      {
        name: 'Tamanghasset',
      },
      {
        name: 'Tébessa',
      },
      {
        name: 'Tiaret',
      },
      {
        name: 'Tindouf',
      },
      {
        name: 'Tipaza',
      },
      {
        name: 'Tissemsilt',
      },
      {
        name: 'Tizi Ouzou',
      },
      {
        name: 'Tlemcen',
      },
    ],
  },
  {
    name: 'American Samoa',
    regions: [
      {
        name: 'Tutuila',
      },
      {
        name: "Aunu'u",
      },
      {
        name: "Ta'ū",
      },
      {
        name: 'Ofu‑Olosega',
      },
      {
        name: 'Rose Atoll',
      },
      {
        name: 'Swains Island',
      },
    ],
  },
  {
    name: 'Andorra',
    regions: [
      {
        name: 'Andorra la Vella',
      },
      {
        name: 'Canillo',
      },
      {
        name: 'Encamp',
      },
      {
        name: 'Escaldes-Engordany',
      },
      {
        name: 'La Massana',
      },
      {
        name: 'Ordino',
      },
      {
        name: 'Sant Julià de Lòria',
      },
    ],
  },
  {
    name: 'Angola',
    regions: [
      {
        name: 'Bengo',
      },
      {
        name: 'Benguela',
      },
      {
        name: 'Bié',
      },
      {
        name: 'Cabinda',
      },
      {
        name: 'Cuando Cubango',
      },
      {
        name: 'Cuanza Norte',
      },
      {
        name: 'Cuanza Sul',
      },
      {
        name: 'Cunene',
      },
      {
        name: 'Huambo',
      },
      {
        name: 'Huíla',
      },
      {
        name: 'Luanda',
      },
      {
        name: 'Lunda Norte',
      },
      {
        name: 'Lunda Sul',
      },
      {
        name: 'Malanje',
      },
      {
        name: 'Moxico',
      },
      {
        name: 'Namibe',
      },
      {
        name: 'Uíge',
      },
      {
        name: 'Zaire',
      },
    ],
  },
  {
    name: 'Anguilla',
    regions: [
      {
        name: 'Anguilla',
      },
      {
        name: 'Anguillita Island',
      },
      {
        name: 'Blowing Rock',
      },
      {
        name: 'Cove Cay',
      },
      {
        name: 'Crocus Cay',
      },
      {
        name: "Deadman's Cay",
      },
      {
        name: 'Dog Island',
      },
      {
        name: 'East Cay',
      },
      {
        name: 'Little Island',
      },
      {
        name: 'Little Scrub Island',
      },
      {
        name: 'Mid Cay',
      },
      {
        name: 'North Cay',
      },
      {
        name: 'Prickly Pear Cays',
      },
      {
        name: 'Rabbit Island',
      },
      {
        name: 'Sandy Island/Sand Island',
      },
      {
        name: 'Scilly Cay',
      },
      {
        name: 'Scrub Island',
      },
      {
        name: 'Seal Island',
      },
      {
        name: 'Sombrero/Hat Island',
      },
      {
        name: 'South Cay',
      },
      {
        name: 'South Wager Island',
      },
      {
        name: 'West Cay',
      },
    ],
  },
  {
    name: 'Antarctica',
    regions: [
      {
        name: 'Antarctica',
      },
    ],
  },
  {
    name: 'Antigua and Barbuda',
    regions: [
      {
        name: 'Antigua Island',
      },
      {
        name: 'Barbuda Island',
      },
      {
        name: 'Bird Island',
      },
      {
        name: 'Bishop Island',
      },
      {
        name: 'Blake Island',
      },
      {
        name: 'Crump Island',
      },
      {
        name: 'Dulcina Island',
      },
      {
        name: 'Exchange Island',
      },
      {
        name: 'Five Islands',
      },
      {
        name: 'Great Bird Island',
      },
      {
        name: 'Green Island',
      },
      {
        name: 'Guiana Island',
      },
      {
        name: 'Hawes Island',
      },
      {
        name: 'Hells Gate Island',
      },
      {
        name: 'Henry Island',
      },
      {
        name: 'Johnson Island',
      },
      {
        name: 'Kid Island',
      },
      {
        name: 'Lobster Island',
      },
      {
        name: 'Maiden Island',
      },
      {
        name: 'Moor Island',
      },
      {
        name: 'Nanny Island',
      },
      {
        name: 'Pelican Island',
      },
      {
        name: 'Prickly Pear Island',
      },
      {
        name: 'Rabbit Island',
      },
      {
        name: 'Red Head Island',
      },
      {
        name: 'Redonda Island',
      },
      {
        name: 'Sandy Island',
      },
      {
        name: 'Smith Island',
      },
      {
        name: 'The Sisters',
      },
      {
        name: 'Vernon Island',
      },
      {
        name: 'Wicked Will Island',
      },
      {
        name: 'York Island',
      },
    ],
  },
  {
    name: 'Argentina',
    regions: [
      {
        name: 'Buenos Aires',
      },
      {
        name: 'Capital Federal',
      },
      {
        name: 'Catamarca',
      },
      {
        name: 'Chaco',
      },
      {
        name: 'Chubut',
      },
      {
        name: 'Córdoba',
      },
      {
        name: 'Corrientes',
      },
      {
        name: 'Entre Ríos',
      },
      {
        name: 'Formosa',
      },
      {
        name: 'Jujuy',
      },
      {
        name: 'La Pampa',
      },
      {
        name: 'La Rioja',
      },
      {
        name: 'Mendoza',
      },
      {
        name: 'Misiones',
      },
      {
        name: 'Neuquén',
      },
      {
        name: 'Río Negro',
      },
      {
        name: 'Salta',
      },
      {
        name: 'San Juan',
      },
      {
        name: 'San Luis',
      },
      {
        name: 'Santa Cruz',
      },
      {
        name: 'Santa Fe',
      },
      {
        name: 'Santiago del Estero',
      },
      {
        name: 'Tierra del Fuego',
      },
      {
        name: 'Tucumán',
      },
    ],
  },
  {
    name: 'Armenia',
    regions: [
      {
        name: 'Aragatsotn',
      },
      {
        name: 'Ararat',
      },
      {
        name: 'Armavir',
      },
      {
        name: 'Gegharkunik',
      },
      {
        name: 'Kotayk',
      },
      {
        name: 'Lori',
      },
      {
        name: 'Shirak',
      },
      {
        name: 'Syunik',
      },
      {
        name: 'Tavush',
      },
      {
        name: 'Vayots Dzor',
      },
      {
        name: 'Yerevan',
      },
    ],
  },
  {
    name: 'Aruba',
    regions: [
      {
        name: 'Aruba',
      },
    ],
  },
  {
    name: 'Australia',
    regions: [
      {
        name: 'Australian Capital Territory',
      },
      {
        name: 'New South Wales',
      },
      {
        name: 'Northern Territory',
      },
      {
        name: 'Queensland',
      },
      {
        name: 'South Australia',
      },
      {
        name: 'Tasmania',
      },
      {
        name: 'Victoria',
      },
      {
        name: 'Western Australia',
      },
    ],
  },
  {
    name: 'Austria',
    regions: [
      {
        name: 'Burgenland',
      },
      {
        name: 'Kärnten',
      },
      {
        name: 'Niederösterreich',
      },
      {
        name: 'Oberösterreich',
      },
      {
        name: 'Salzburg',
      },
      {
        name: 'Steiermark',
      },
      {
        name: 'Tirol',
      },
      {
        name: 'Vorarlberg',
      },
      {
        name: 'Wien',
      },
    ],
  },
  {
    name: 'Azerbaijan',
    regions: [
      {
        name: 'Abşeron',
      },
      {
        name: 'Ağcabədi',
      },
      {
        name: 'Ağdam',
      },
      {
        name: 'Ağdaş',
      },
      {
        name: 'Ağstafa',
      },
      {
        name: 'Ağsu',
      },
      {
        name: 'Astara',
      },
      {
        name: 'Bakı',
      },
      {
        name: 'Babək',
      },
      {
        name: 'Balakən',
      },
      {
        name: 'Bərdə',
      },
      {
        name: 'Beyləqan',
      },
      {
        name: 'Biləsuvar',
      },
      {
        name: 'Cəbrayıl',
      },
      {
        name: 'Cəlilabad',
      },
      {
        name: 'Culfa',
      },
      {
        name: 'Daşkəsən',
      },
      {
        name: 'Füzuli',
      },
      {
        name: 'Gədəbəy',
      },
      {
        name: 'Goranboy',
      },
      {
        name: 'Göyçay',
      },
      {
        name: 'Göygöl',
      },
      {
        name: 'Hacıqabul',
      },
      {
        name: 'İmişli',
      },
      {
        name: 'İsmayıllı',
      },
      {
        name: 'Kəlbəcər',
      },
      {
        name: 'Kǝngǝrli',
      },
      {
        name: 'Kürdəmir',
      },
      {
        name: 'Laçın',
      },
      {
        name: 'Lənkəran',
      },
      {
        name: 'Lerik',
      },
      {
        name: 'Masallı',
      },
      {
        name: 'Neftçala',
      },
      {
        name: 'Oğuz',
      },
      {
        name: 'Ordubad',
      },
      {
        name: 'Qəbələ',
      },
      {
        name: 'Qax',
      },
      {
        name: 'Qazax',
      },
      {
        name: 'Qobustan',
      },
      {
        name: 'Quba',
      },
      {
        name: 'Qubadli',
      },
      {
        name: 'Qusar',
      },
      {
        name: 'Saatlı',
      },
      {
        name: 'Sabirabad',
      },
      {
        name: 'Şabran',
      },
      {
        name: 'Sədərək',
      },
      {
        name: 'Şahbuz',
      },
      {
        name: 'Şəki',
      },
      {
        name: 'Salyan',
      },
      {
        name: 'Şamaxı',
      },
      {
        name: 'Şəmkir',
      },
      {
        name: 'Samux',
      },
      {
        name: 'Şərur',
      },
      {
        name: 'Siyəzən',
      },
      {
        name: 'Şuşa',
      },
      {
        name: 'Tərtər',
      },
      {
        name: 'Tovuz',
      },
      {
        name: 'Ucar',
      },
      {
        name: 'Xaçmaz',
      },
      {
        name: 'Xızı',
      },
      {
        name: 'Xocalı',
      },
      {
        name: 'Xocavənd',
      },
      {
        name: 'Yardımlı',
      },
      {
        name: 'Yevlax',
      },
      {
        name: 'Zəngilan',
      },
      {
        name: 'Zaqatala',
      },
      {
        name: 'Zərdab',
      },
    ],
  },
  {
    name: 'Bahamas',
    regions: [
      {
        name: 'Acklins Island',
      },
      {
        name: 'Berry Islands',
      },
      {
        name: 'Bimini',
      },
      {
        name: 'Black Point',
      },
      {
        name: 'Cat Island',
      },
      {
        name: 'Central Abaco',
      },
      {
        name: 'Crooked Island and Long Cay',
      },
      {
        name: 'East Grand Bahama',
      },
      {
        name: 'Exuma',
      },
      {
        name: 'Freeport',
      },
      {
        name: 'Fresh Creek',
      },
      {
        name: "Governor's Harbour",
      },
      {
        name: 'Green Turtle Cay',
      },
      {
        name: 'Harbour Island',
      },
      {
        name: 'High Rock',
      },
      {
        name: 'Inagua',
      },
      {
        name: 'Kemps Bay',
      },
      {
        name: 'Long Island',
      },
      {
        name: 'Marsh Harbour',
      },
      {
        name: 'Mayaguana',
      },
      {
        name: 'Moore’s Island',
      },
      {
        name: 'New Providence',
      },
      {
        name: 'Nichollstown and Berry Islands',
      },
      {
        name: 'North Abaco',
      },
      {
        name: 'North Andros',
      },
      {
        name: 'North Eleuthera',
      },
      {
        name: 'Ragged Island',
      },
      {
        name: 'Rock Sound',
      },
      {
        name: 'San Salvador and Rum Cay',
      },
      {
        name: 'Sandy Point',
      },
      {
        name: 'South Abaco',
      },
      {
        name: 'South Andros',
      },
      {
        name: 'South Eleuthera',
      },
      {
        name: 'West Grand Bahama',
      },
    ],
  },
  {
    name: 'Bahrain',
    regions: [
      {
        name: 'Al Janūbīyah',
      },
      {
        name: 'Al Manāmah',
      },
      {
        name: 'Al Muḩarraq',
      },
      {
        name: 'Al Wusţá',
      },
      {
        name: 'Ash Shamālīyah',
      },
    ],
  },
  {
    name: 'Bangladesh',
    regions: [
      {
        name: 'Barisal',
      },
      {
        name: 'Chittagong',
      },
      {
        name: 'Dhaka',
      },
      {
        name: 'Khulna',
      },
      {
        name: 'Mymensingh',
      },
      {
        name: 'Rajshahi',
      },
      {
        name: 'Rangpur',
      },
      {
        name: 'Sylhet',
      },
    ],
  },
  {
    name: 'Barbados',
    regions: [
      {
        name: 'Christ Church',
      },
      {
        name: 'Saint Andrew',
      },
      {
        name: 'Saint George',
      },
      {
        name: 'Saint James',
      },
      {
        name: 'Saint John',
      },
      {
        name: 'Saint Joseph',
      },
      {
        name: 'Saint Lucy',
      },
      {
        name: 'Saint Michael',
      },
      {
        name: 'Saint Peter',
      },
      {
        name: 'Saint Philip',
      },
      {
        name: 'Saint Thomas',
      },
    ],
  },
  {
    name: 'Belarus',
    regions: [
      {
        name: 'Brest voblast',
      },
      {
        name: 'Gorod Minsk',
      },
      {
        name: 'Homiel voblast',
      },
      {
        name: 'Hrodna voblast',
      },
      {
        name: 'Mahilyow voblast',
      },
      {
        name: 'Minsk voblast',
      },
      {
        name: 'Vitsebsk voblast',
      },
    ],
  },
  {
    name: 'Belgium',
    regions: [
      {
        name: 'Brussels',
      },
      {
        name: 'Flanders',
      },
      {
        name: 'Wallonia',
      },
    ],
  },
  {
    name: 'Belize',
    regions: [
      {
        name: 'Belize District',
      },
      {
        name: 'Cayo District',
      },
      {
        name: 'Corozal District',
      },
      {
        name: 'Orange Walk District',
      },
      {
        name: 'Stann Creek District',
      },
      {
        name: 'Toledo District',
      },
    ],
  },
  {
    name: 'Benin',
    regions: [
      {
        name: 'Alibori',
      },
      {
        name: 'Atakora',
      },
      {
        name: 'Atlantique',
      },
      {
        name: 'Borgou',
      },
      {
        name: 'Collines Department',
      },
      {
        name: 'Donga',
      },
      {
        name: 'Kouffo',
      },
      {
        name: 'Littoral Department',
      },
      {
        name: 'Mono Department',
      },
      {
        name: 'Ouémé',
      },
      {
        name: 'Plateau',
      },
      {
        name: 'Zou',
      },
    ],
  },
  {
    name: 'Bermuda',
    regions: [
      {
        name: 'City of Hamilton',
      },
      {
        name: 'Devonshire Parish',
      },
      {
        name: 'Hamilton Parish',
      },
      {
        name: 'Paget Parish',
      },
      {
        name: 'Pembroke Parish',
      },
      {
        name: 'Sandys Parish',
      },
      {
        name: "Smith's Parish",
      },
      {
        name: 'Southampton Parish',
      },
      {
        name: "St. George's Parish",
      },
      {
        name: 'Town of St. George',
      },
      {
        name: 'Warwick Parish',
      },
    ],
  },
  {
    name: 'Bhutan',
    regions: [
      {
        name: 'Bumthang',
      },
      {
        name: 'Chhukha',
      },
      {
        name: 'Dagana',
      },
      {
        name: 'Gasa',
      },
      {
        name: 'Haa',
      },
      {
        name: 'Lhuntse',
      },
      {
        name: 'Mongar',
      },
      {
        name: 'Paro',
      },
      {
        name: 'Pemagatshel',
      },
      {
        name: 'Punakha',
      },
      {
        name: 'Samdrup Jongkhar',
      },
      {
        name: 'Samtse',
      },
      {
        name: 'Sarpang',
      },
      {
        name: 'Thimphu',
      },
      {
        name: 'Trashigang',
      },
      {
        name: 'Trashiyangtse',
      },
      {
        name: 'Trongsa',
      },
      {
        name: 'Tsirang',
      },
      {
        name: 'Wangdue Phodrang',
      },
      {
        name: 'Zhemgang',
      },
    ],
  },
  {
    name: 'Bolivia',
    regions: [
      {
        name: 'Beni',
      },
      {
        name: 'Chuquisaca',
      },
      {
        name: 'Cochabamba',
      },
      {
        name: 'La Paz',
      },
      {
        name: 'Oruro',
      },
      {
        name: 'Pando',
      },
      {
        name: 'Potosí',
      },
      {
        name: 'Santa Cruz',
      },
      {
        name: 'Tarija',
      },
    ],
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    regions: [
      {
        name: 'Bonaire',
      },
      {
        name: 'Saba Isand',
      },
      {
        name: 'Sint Eustatius',
      },
    ],
  },
  {
    name: 'Bosnia and Herzegovina',
    regions: [
      {
        name: 'Brčko Distrikt',
      },
      {
        name: 'Federacija Bosne i Hercegovine',
      },
      {
        name: 'Republika Srpska',
      },
    ],
  },
  {
    name: 'Botswana',
    regions: [
      {
        name: 'Central',
      },
      {
        name: 'Ghanzi',
      },
      {
        name: 'Kgalagadi',
      },
      {
        name: 'Kgatleng',
      },
      {
        name: 'Kweneng',
      },
      {
        name: 'North West',
      },
      {
        name: 'North-East',
      },
      {
        name: 'South East',
      },
      {
        name: 'Southern',
      },
    ],
  },
  {
    name: 'Bouvet Island',
    regions: [
      {
        name: 'Bouvet Island',
      },
    ],
  },
  {
    name: 'Brazil',
    regions: [
      {
        name: 'Acre',
      },
      {
        name: 'Alagoas',
      },
      {
        name: 'Amapá',
      },
      {
        name: 'Amazonas',
      },
      {
        name: 'Bahia',
      },
      {
        name: 'Ceará',
      },
      {
        name: 'Distrito Federal',
      },
      {
        name: 'Espírito Santo',
      },
      {
        name: 'Goiás',
      },
      {
        name: 'Maranhão',
      },
      {
        name: 'Mato Grosso',
      },
      {
        name: 'Mato Grosso do Sul',
      },
      {
        name: 'Minas Gerais',
      },
      {
        name: 'Pará',
      },
      {
        name: 'Paraíba',
      },
      {
        name: 'Paraná',
      },
      {
        name: 'Pernambuco',
      },
      {
        name: 'Piauí',
      },
      {
        name: 'Rio de Janeiro',
      },
      {
        name: 'Rio Grande do Norte',
      },
      {
        name: 'Rio Grande do Sul',
      },
      {
        name: 'Rondônia',
      },
      {
        name: 'Roraima',
      },
      {
        name: 'Santa Catarina',
      },
      {
        name: 'São Paulo',
      },
      {
        name: 'Sergipe',
      },
      {
        name: 'Tocantins',
      },
    ],
  },
  {
    name: 'British Indian Ocean Territory',
    regions: [
      {
        name: 'British Indian Ocean Territory',
      },
    ],
  },
  {
    name: 'Brunei Darussalam',
    regions: [
      {
        name: 'Belait',
      },
      {
        name: 'Brunei Muara',
      },
      {
        name: 'Temburong',
      },
      {
        name: 'Tutong',
      },
    ],
  },
  {
    name: 'Bulgaria',
    regions: [
      {
        name: 'Blagoevgrad',
      },
      {
        name: 'Burgas',
      },
      {
        name: 'Dobrich',
      },
      {
        name: 'Gabrovo',
      },
      {
        name: 'Jambol',
      },
      {
        name: 'Khaskovo',
      },
      {
        name: 'Kjustendil',
      },
      {
        name: 'Kurdzhali',
      },
      {
        name: 'Lovech',
      },
      {
        name: 'Montana',
      },
      {
        name: 'Pazardzhik',
      },
      {
        name: 'Pernik',
      },
      {
        name: 'Pleven',
      },
      {
        name: 'Plovdiv',
      },
      {
        name: 'Razgrad',
      },
      {
        name: 'Ruse',
      },
      {
        name: 'Shumen',
      },
      {
        name: 'Silistra',
      },
      {
        name: 'Sliven',
      },
      {
        name: 'Smoljan',
      },
      {
        name: 'Sofija',
      },
      {
        name: 'Sofija-Grad',
      },
      {
        name: 'Stara Zagora',
      },
      {
        name: 'Turgovishhe',
      },
      {
        name: 'Varna',
      },
      {
        name: 'Veliko Turnovo',
      },
      {
        name: 'Vidin',
      },
      {
        name: 'Vraca',
      },
    ],
  },
  {
    name: 'Burkina Faso',
    regions: [
      {
        name: 'Balé',
      },
      {
        name: 'Bam/Lake Bam',
      },
      {
        name: 'Banwa Province',
      },
      {
        name: 'Bazèga',
      },
      {
        name: 'Bougouriba',
      },
      {
        name: 'Boulgou Province',
      },
      {
        name: 'Boulkiemdé',
      },
      {
        name: 'Comoé/Komoe',
      },
      {
        name: 'Ganzourgou Province',
      },
      {
        name: 'Gnagna',
      },
      {
        name: 'Gourma Province',
      },
      {
        name: 'Houet',
      },
      {
        name: 'Ioba',
      },
      {
        name: 'Kadiogo',
      },
      {
        name: 'Kénédougou',
      },
      {
        name: 'Komondjari',
      },
      {
        name: 'Kompienga',
      },
      {
        name: 'Kossi Province',
      },
      {
        name: 'Koulpélogo',
      },
      {
        name: 'Kouritenga',
      },
      {
        name: 'Kourwéogo',
      },
      {
        name: 'Léraba',
      },
      {
        name: 'Loroum',
      },
      {
        name: 'Mouhoun',
      },
      {
        name: 'Namentenga',
      },
      {
        name: 'Naouri/Nahouri',
      },
      {
        name: 'Nayala',
      },
      {
        name: 'Noumbiel',
      },
      {
        name: 'Oubritenga',
      },
      {
        name: 'Oudalan',
      },
      {
        name: 'Passoré',
      },
      {
        name: 'Poni',
      },
      {
        name: 'Sanguié',
      },
      {
        name: 'Sanmatenga',
      },
      {
        name: 'Séno',
      },
      {
        name: 'Sissili',
      },
      {
        name: 'Soum',
      },
      {
        name: 'Sourou',
      },
      {
        name: 'Tapoa',
      },
      {
        name: 'Tui/Tuy',
      },
      {
        name: 'Yagha',
      },
      {
        name: 'Yatenga',
      },
      {
        name: 'Ziro',
      },
      {
        name: 'Zondoma',
      },
      {
        name: 'Zoundwéogo',
      },
    ],
  },
  {
    name: 'Burundi',
    regions: [
      {
        name: 'Bubanza',
      },
      {
        name: 'Bujumbura Mairie',
      },
      {
        name: 'Bujumbura Rural',
      },
      {
        name: 'Bururi',
      },
      {
        name: 'Cankuzo',
      },
      {
        name: 'Cibitoke',
      },
      {
        name: 'Gitega',
      },
      {
        name: 'Karuzi',
      },
      {
        name: 'Kayanza',
      },
      {
        name: 'Kirundo',
      },
      {
        name: 'Makamba',
      },
      {
        name: 'Muramvya',
      },
      {
        name: 'Muyinga',
      },
      {
        name: 'Mwaro',
      },
      {
        name: 'Ngozi',
      },
      {
        name: 'Rutana',
      },
      {
        name: 'Ruyigi',
      },
    ],
  },
  {
    name: 'Cambodia',
    regions: [
      {
        name: 'Baat Dambang',
      },
      {
        name: 'Banteay Mean Chey',
      },
      {
        name: 'Kampong Chaam',
      },
      {
        name: 'Kampong Chhnang',
      },
      {
        name: 'Kampong Spueu',
      },
      {
        name: 'Kampong Thum',
      },
      {
        name: 'Kampot',
      },
      {
        name: 'Kandaal',
      },
      {
        name: 'Kaoh Kong',
      },
      {
        name: 'Kracheh',
      },
      {
        name: 'Krong Kaeb',
      },
      {
        name: 'Krong Pailin',
      },
      {
        name: 'Krong Preah Sihanouk',
      },
      {
        name: 'Mondol Kiri',
      },
      {
        name: 'Otdar Mean Chey',
      },
      {
        name: 'Phnom Penh',
      },
      {
        name: 'Pousaat',
      },
      {
        name: 'Preah Vihear',
      },
      {
        name: 'Prey Veaeng',
      },
      {
        name: 'Rotanah Kiri',
      },
      {
        name: 'Siem Reab',
      },
      {
        name: 'Stueng Treng',
      },
      {
        name: 'Svaay Rieng',
      },
      {
        name: 'Taakaev',
      },
      {
        name: 'Tbong Khmum',
      },
    ],
  },
  {
    name: 'Cameroon',
    regions: [
      {
        name: 'Adamaoua',
      },
      {
        name: 'Centre',
      },
      {
        name: 'Est',
      },
      {
        name: 'Extrême-Nord',
      },
      {
        name: 'Littoral',
      },
      {
        name: 'Nord',
      },
      {
        name: 'Nord-Ouest',
      },
      {
        name: 'Ouest',
      },
      {
        name: 'Sud',
      },
      {
        name: 'Sud-Ouest',
      },
    ],
  },
  {
    name: 'Canada',
    regions: [
      {
        name: 'Alberta',
      },
      {
        name: 'British Columbia',
      },
      {
        name: 'Manitoba',
      },
      {
        name: 'New Brunswick',
      },
      {
        name: 'Newfoundland and Labrador',
      },
      {
        name: 'Northwest Territories',
      },
      {
        name: 'Nova Scotia',
      },
      {
        name: 'Nunavut',
      },
      {
        name: 'Ontario',
      },
      {
        name: 'Prince Edward Island',
      },
      {
        name: 'Quebec',
      },
      {
        name: 'Saskatchewan',
      },
      {
        name: 'Yukon',
      },
    ],
  },
  {
    name: 'Cape Verde',
    regions: [
      {
        name: 'Boa Vista',
      },
      {
        name: 'Brava',
      },
      {
        name: 'Calheta de São Miguel',
      },
      {
        name: 'Maio',
      },
      {
        name: 'Mosteiros',
      },
      {
        name: 'Paúl',
      },
      {
        name: 'Porto Novo',
      },
      {
        name: 'Praia',
      },
      {
        name: 'Ribeira Brava',
      },
      {
        name: 'Ribeira Grande',
      },
      {
        name: 'Sal',
      },
      {
        name: 'Santa Catarina',
      },
      {
        name: 'Santa Cruz',
      },
      {
        name: 'São Domingos',
      },
      {
        name: 'São Filipe',
      },
      {
        name: 'São Nicolau',
      },
      {
        name: 'São Vicente',
      },
      {
        name: 'Tarrafal',
      },
      {
        name: 'Tarrafal de São Nicolau',
      },
    ],
  },
  {
    name: 'Cayman Islands',
    regions: [
      {
        name: 'Creek',
      },
      {
        name: 'Eastern',
      },
      {
        name: 'Midland',
      },
      {
        name: 'South Town',
      },
      {
        name: 'Spot Bay',
      },
      {
        name: 'Stake Bay',
      },
      {
        name: 'West End',
      },
      {
        name: 'Western',
      },
    ],
  },
  {
    name: 'Central African Republic',
    regions: [
      {
        name: 'Bamingui-Bangoran',
      },
      {
        name: 'Bangui',
      },
      {
        name: 'Basse-Kotto',
      },
      {
        name: 'Haute-Kotto',
      },
      {
        name: 'Haut-Mbomou',
      },
      {
        name: 'Kémo',
      },
      {
        name: 'Lobaye',
      },
      {
        name: 'Mambéré-Kadéï',
      },
      {
        name: 'Mbomou',
      },
      {
        name: 'Nana-Grebizi',
      },
      {
        name: 'Nana-Mambéré',
      },
      {
        name: "Ombella-M'Poko",
      },
      {
        name: 'Ouaka',
      },
      {
        name: 'Ouham',
      },
      {
        name: 'Ouham Péndé',
      },
      {
        name: 'Sangha-Mbaéré',
      },
      {
        name: 'Vakaga',
      },
    ],
  },
  {
    name: 'Chad',
    regions: [
      {
        name: 'Bahr el Ghazal',
      },
      {
        name: 'Batha',
      },
      {
        name: 'Borkou',
      },
      {
        name: 'Chari-Baguirmi',
      },
      {
        name: 'Ennedi-Est',
      },
      {
        name: 'Ennedi-Ouest',
      },
      {
        name: 'Guéra',
      },
      {
        name: 'Hadjer Lamis',
      },
      {
        name: 'Kanem',
      },
      {
        name: 'Lac',
      },
      {
        name: 'Logone Occidental',
      },
      {
        name: 'Logone Oriental',
      },
      {
        name: 'Mondoul',
      },
      {
        name: 'Mayo-Kébbi-Est',
      },
      {
        name: 'Moyen-Chari',
      },
      {
        name: 'Ouaddai',
      },
      {
        name: 'Salamat',
      },
      {
        name: 'Sila',
      },
      {
        name: 'Tandjilé',
      },
      {
        name: 'Tibesti',
      },
      {
        name: 'Ville de Ndjamena',
      },
      {
        name: 'Wadi Fira',
      },
    ],
  },
  {
    name: 'Chile',
    regions: [
      {
        name: 'Aisén del General Carlos Ibáñez del Campo',
      },
      {
        name: 'Antofagasta',
      },
      {
        name: 'Araucanía',
      },
      {
        name: 'Arica y Parinacota',
      },
      {
        name: 'Atacama',
      },
      {
        name: 'Bío-Bío',
      },
      {
        name: 'Coquimbo',
      },
      {
        name: "Libertador General Bernardo O'Higgins",
      },
      {
        name: 'Los Lagos',
      },
      {
        name: 'Los Ríos',
      },
      {
        name: 'Magallanes y Antartica Chilena',
      },
      {
        name: 'Marga-Marga',
      },
      {
        name: 'Maule',
      },
      {
        name: 'Ñuble',
      },
      {
        name: 'Región Metropolitana de Santiago',
      },
      {
        name: 'Tarapacá',
      },
      {
        name: 'Valparaíso',
      },
    ],
  },
  {
    name: 'China',
    regions: [
      {
        name: 'Anhui',
      },
      {
        name: 'Beijing',
      },
      {
        name: 'Chongqing',
      },
      {
        name: 'Fujian',
      },
      {
        name: 'Gansu',
      },
      {
        name: 'Guangdong',
      },
      {
        name: 'Guangxi',
      },
      {
        name: 'Guizhou',
      },
      {
        name: 'Hainan',
      },
      {
        name: 'Hebei',
      },
      {
        name: 'Heilongjiang',
      },
      {
        name: 'Henan',
      },
      {
        name: 'Hong Kong',
      },
      {
        name: 'Hubei',
      },
      {
        name: 'Hunan',
      },
      {
        name: 'Inner Mongolia',
      },
      {
        name: 'Jiangsu',
      },
      {
        name: 'Jiangxi',
      },
      {
        name: 'Jilin',
      },
      {
        name: 'Liaoning',
      },
      {
        name: 'Macau',
      },
      {
        name: 'Ningxia',
      },
      {
        name: 'Qinghai',
      },
      {
        name: 'Shaanxi',
      },
      {
        name: 'Shandong',
      },
      {
        name: 'Shanghai',
      },
      {
        name: 'Shanxi',
      },
      {
        name: 'Sichuan',
      },
      {
        name: 'Tianjin',
      },
      {
        name: 'Tibet',
      },
      {
        name: 'Xinjiang',
      },
      {
        name: 'Yunnan',
      },
      {
        name: 'Zhejiang',
      },
    ],
  },
  {
    name: 'Christmas Island',
    regions: [
      {
        name: 'Christmas Island',
      },
    ],
  },
  {
    name: 'Cocos (Keeling) Islands',
    regions: [
      {
        name: 'Direction Island',
      },
      {
        name: 'Home Island',
      },
      {
        name: 'Horsburgh Island',
      },
      {
        name: 'North Keeling Island',
      },
      {
        name: 'South Island',
      },
      {
        name: 'West Island',
      },
    ],
  },
  {
    name: 'Colombia',
    regions: [
      {
        name: 'Amazonas',
      },
      {
        name: 'Antioquia',
      },
      {
        name: 'Arauca',
      },
      {
        name: 'Archipiélago de San Andrés',
      },
      {
        name: 'Atlántico',
      },
      {
        name: 'Bogotá D.C.',
      },
      {
        name: 'Bolívar',
      },
      {
        name: 'Boyacá',
      },
      {
        name: 'Caldas',
      },
      {
        name: 'Caquetá',
      },
      {
        name: 'Casanare',
      },
      {
        name: 'Cauca',
      },
      {
        name: 'Cesar',
      },
      {
        name: 'Chocó',
      },
      {
        name: 'Córdoba',
      },
      {
        name: 'Cundinamarca',
      },
      {
        name: 'Guainía',
      },
      {
        name: 'Guaviare',
      },
      {
        name: 'Huila',
      },
      {
        name: 'La Guajira',
      },
      {
        name: 'Magdalena',
      },
      {
        name: 'Meta',
      },
      {
        name: 'Nariño',
      },
      {
        name: 'Norte de Santander',
      },
      {
        name: 'Putumayo',
      },
      {
        name: 'Quindío',
      },
      {
        name: 'Risaralda',
      },
      {
        name: 'Santander',
      },
      {
        name: 'Sucre',
      },
      {
        name: 'Tolima',
      },
      {
        name: 'Valle del Cauca',
      },
      {
        name: 'Vaupés',
      },
      {
        name: 'Vichada',
      },
    ],
  },
  {
    name: 'Comoros',
    regions: [
      {
        name: 'Andjazîdja',
      },
      {
        name: 'Andjouân',
      },
      {
        name: 'Moûhîlî',
      },
    ],
  },
  {
    name: 'Congo, Republic of the (Brazzaville)',
    regions: [
      {
        name: 'Bouenza',
      },
      {
        name: 'Brazzaville',
      },
      {
        name: 'Cuvette',
      },
      {
        name: 'Cuvette-Ouest',
      },
      {
        name: 'Kouilou',
      },
      {
        name: 'Lékoumou',
      },
      {
        name: 'Likouala',
      },
      {
        name: 'Niari',
      },
      {
        name: 'Plateaux',
      },
      {
        name: 'Pointe-Noire',
      },
      {
        name: 'Pool',
      },
      {
        name: 'Sangha',
      },
    ],
  },
  {
    name: 'Congo, the Democratic Republic of the (Kinshasa)',
    regions: [
      {
        name: 'Bandundu',
      },
      {
        name: 'Bas-Congo',
      },
      {
        name: 'Équateur',
      },
      {
        name: 'Kasaï-Occidental',
      },
      {
        name: 'Kasaï-Oriental',
      },
      {
        name: 'Katanga',
      },
      {
        name: 'Kinshasa',
      },
      {
        name: 'Maniema',
      },
      {
        name: 'Nord-Kivu',
      },
      {
        name: 'Orientale',
      },
      {
        name: 'Sud-Kivu',
      },
    ],
  },
  {
    name: 'Cook Islands',
    regions: [
      {
        name: 'Aitutaki',
      },
      {
        name: 'Atiu',
      },
      {
        name: 'Avarua',
      },
      {
        name: 'Mangaia',
      },
      {
        name: 'Manihiki',
      },
      {
        name: "Ma'uke",
      },
      {
        name: 'Mitiaro',
      },
      {
        name: 'Nassau',
      },
      {
        name: 'Palmerston',
      },
      {
        name: 'Penrhyn',
      },
      {
        name: 'Pukapuka',
      },
      {
        name: 'Rakahanga',
      },
    ],
  },
  {
    name: 'Costa Rica',
    regions: [
      {
        name: 'Alajuela',
      },
      {
        name: 'Cartago',
      },
      {
        name: 'Guanacaste',
      },
      {
        name: 'Heredia',
      },
      {
        name: 'Limón',
      },
      {
        name: 'Puntarenas',
      },
      {
        name: 'San José',
      },
    ],
  },
  {
    name: "Côte d'Ivoire, Republic of",
    regions: [
      {
        name: 'Agnéby',
      },
      {
        name: 'Bafing',
      },
      {
        name: 'Bas-Sassandra',
      },
      {
        name: 'Denguélé',
      },
      {
        name: 'Dix-Huit Montagnes',
      },
      {
        name: 'Fromager',
      },
      {
        name: 'Haut-Sassandra',
      },
      {
        name: 'Lacs',
      },
      {
        name: 'Lagunes',
      },
      {
        name: 'Marahoué',
      },
      {
        name: 'Moyen-Cavally',
      },
      {
        name: 'Moyen-Comoé',
      },
      {
        name: "N'zi-Comoé",
      },
      {
        name: 'Savanes',
      },
      {
        name: 'Sud-Bandama',
      },
      {
        name: 'Sud-Comoé',
      },
      {
        name: 'Vallée du Bandama',
      },
      {
        name: 'Worodougou',
      },
      {
        name: 'Zanzan',
      },
    ],
  },
  {
    name: 'Croatia',
    regions: [
      {
        name: 'Bjelovarsko-bilogorska županija',
      },
      {
        name: 'Brodsko-posavska županija',
      },
      {
        name: 'Dubrovačko-neretvanska županija',
      },
      {
        name: 'Grad Zagreb',
      },
      {
        name: 'Istarska županija',
      },
      {
        name: 'Karlovačka županija',
      },
      {
        name: 'Koprivničko-križevačka županija',
      },
      {
        name: 'Krapinsko-zagorska županija',
      },
      {
        name: 'Ličko-senjska županija',
      },
      {
        name: 'Međimurska županija',
      },
      {
        name: 'Osječko-baranjska županija',
      },
      {
        name: 'Požeško-slavonska županija',
      },
      {
        name: 'Primorsko-goranska županija',
      },
      {
        name: 'Sisačko-moslavačka županija',
      },
      {
        name: 'Splitsko-dalmatinska županija',
      },
      {
        name: 'Šibensko-kninska županija',
      },
      {
        name: 'Varaždinska županija',
      },
      {
        name: 'Virovitičko-podravska županija',
      },
      {
        name: 'Vukovarsko-srijemska županija',
      },
      {
        name: 'Zadarska županija',
      },
      {
        name: 'Zagrebačka županija',
      },
    ],
  },
  {
    name: 'Cuba',
    regions: [
      {
        name: 'Artemisa',
      },
      {
        name: 'Camagüey',
      },
      {
        name: 'Ciego de Ávila',
      },
      {
        name: 'Cienfuegos',
      },
      {
        name: 'Granma',
      },
      {
        name: 'Guantánamo',
      },
      {
        name: 'Holguín',
      },
      {
        name: 'Isla de la Juventud',
      },
      {
        name: 'La Habana',
      },
      {
        name: 'Las Tunas',
      },
      {
        name: 'Matanzas',
      },
      {
        name: 'Mayabeque',
      },
      {
        name: 'Pinar del Río',
      },
      {
        name: 'Sancti Spíritus',
      },
      {
        name: 'Santiago de Cuba',
      },
      {
        name: 'Villa Clara',
      },
    ],
  },
  {
    name: 'Curaçao',
    regions: [
      {
        name: 'Curaçao',
      },
    ],
  },
  {
    name: 'Cyprus',
    regions: [
      {
        name: 'Ammochostos',
      },
      {
        name: 'Keryneia',
      },
      {
        name: 'Larnaka',
      },
      {
        name: 'Lefkosia',
      },
      {
        name: 'Lemesos',
      },
      {
        name: 'Pafos',
      },
    ],
  },
  {
    name: 'Czech Republic',
    regions: [
      {
        name: 'Hlavní město Praha',
      },
      {
        name: 'Jihočeský kraj',
      },
      {
        name: 'Jihomoravský kraj',
      },
      {
        name: 'Karlovarský kraj',
      },
      {
        name: 'Královéhradecký kraj',
      },
      {
        name: 'Liberecký kraj',
      },
      {
        name: 'Moravskoslezský kraj',
      },
      {
        name: 'Olomoucký kraj',
      },
      {
        name: 'Pardubický kraj',
      },
      {
        name: 'Plzeňský kraj',
      },
      {
        name: 'Středočeský kraj',
      },
      {
        name: 'Ústecký kraj',
      },
      {
        name: 'Vysočina',
      },
      {
        name: 'Zlínský kraj',
      },
    ],
  },
  {
    name: 'Denmark',
    regions: [
      {
        name: 'Hovedstaden',
      },
      {
        name: 'Kujalleq',
      },
      {
        name: 'Midtjylland',
      },
      {
        name: 'Norderøerne',
      },
      {
        name: 'Nordjylland',
      },
      {
        name: 'Østerø',
      },
      {
        name: 'Qaasuitsup',
      },
      {
        name: 'Qeqqata',
      },
      {
        name: 'Sandø',
      },
      {
        name: 'Sermersooq',
      },
      {
        name: 'Sjælland',
      },
      {
        name: 'Strømø',
      },
      {
        name: 'Suderø',
      },
      {
        name: 'Syddanmark',
      },
      {
        name: 'Vågø',
      },
    ],
  },
  {
    name: 'Djibouti',
    regions: [
      {
        name: 'Ali Sabieh',
      },
      {
        name: 'Arta',
      },
      {
        name: 'Dikhil',
      },
      {
        name: 'Obock',
      },
      {
        name: 'Tadjourah',
      },
    ],
  },
  {
    name: 'Dominica',
    regions: [
      {
        name: 'Saint Andrew Parish',
      },
      {
        name: 'Saint David Parish',
      },
      {
        name: 'Saint George Parish',
      },
      {
        name: 'Saint John Parish',
      },
      {
        name: 'Saint Joseph Parish',
      },
      {
        name: 'Saint Luke Parish',
      },
      {
        name: 'Saint Mark Parish',
      },
      {
        name: 'Saint Patrick Parish',
      },
      {
        name: 'Saint Paul Parish',
      },
      {
        name: 'Saint Peter Parish',
      },
    ],
  },
  {
    name: 'Dominican Republic',
    regions: [
      {
        name: 'Cibao Central',
      },
      {
        name: 'Del Valle',
      },
      {
        name: 'Distrito Nacional',
      },
      {
        name: 'Enriquillo',
      },
      {
        name: 'Norcentral',
      },
      {
        name: 'Nordeste',
      },
      {
        name: 'Noroeste',
      },
      {
        name: 'Norte',
      },
      {
        name: 'Valdesia',
      },
    ],
  },
  {
    name: 'Ecuador',
    regions: [
      {
        name: 'Azuay',
      },
      {
        name: 'Bolívar',
      },
      {
        name: 'Cañar',
      },
      {
        name: 'Carchi',
      },
      {
        name: 'Chimborazo',
      },
      {
        name: 'Cotopaxi',
      },
      {
        name: 'El Oro',
      },
      {
        name: 'Esmeraldas',
      },
      {
        name: 'Galápagos',
      },
      {
        name: 'Guayas',
      },
      {
        name: 'Imbabura',
      },
      {
        name: 'Loja',
      },
      {
        name: 'Los Ríos',
      },
      {
        name: 'Manabí',
      },
      {
        name: 'Morona-Santiago',
      },
      {
        name: 'Napo',
      },
      {
        name: 'Orellana',
      },
      {
        name: 'Pastaza',
      },
      {
        name: 'Pichincha',
      },
      {
        name: 'Santa Elena',
      },
      {
        name: 'Santo Domingo de los Tsáchilas',
      },
      {
        name: 'Sucumbíos',
      },
      {
        name: 'Tungurahua',
      },
      {
        name: 'Zamora-Chinchipe',
      },
    ],
  },
  {
    name: 'Egypt',
    regions: [
      {
        name: 'Alexandria',
      },
      {
        name: 'Aswan',
      },
      {
        name: 'Asyout',
      },
      {
        name: 'Bani Sueif',
      },
      {
        name: 'Beheira',
      },
      {
        name: 'Cairo',
      },
      {
        name: 'Daqahlia',
      },
      {
        name: 'Dumiat',
      },
      {
        name: 'El Bahr El Ahmar',
      },
      {
        name: 'El Ismailia',
      },
      {
        name: 'El Suez',
      },
      {
        name: 'El Wadi El Gedeed',
      },
      {
        name: 'Fayoum',
      },
      {
        name: 'Gharbia',
      },
      {
        name: 'Giza',
      },
      {
        name: 'Helwan',
      },
      {
        name: 'Kafr El Sheikh',
      },
      {
        name: 'Luxor',
      },
      {
        name: 'Matrouh',
      },
      {
        name: 'Menia',
      },
      {
        name: 'Menofia',
      },
      {
        name: 'North Sinai',
      },
      {
        name: 'Port Said',
      },
      {
        name: 'Qalubia',
      },
      {
        name: 'Qena',
      },
      {
        name: 'Sharqia',
      },
      {
        name: 'Sixth of October',
      },
      {
        name: 'Sohag',
      },
      {
        name: 'South Sinai',
      },
    ],
  },
  {
    name: 'El Salvador',
    regions: [
      {
        name: 'Ahuachapán',
      },
      {
        name: 'Cabañas',
      },
      {
        name: 'Cuscatlán',
      },
      {
        name: 'Chalatenango',
      },
      {
        name: 'La Libertad',
      },
      {
        name: 'La Paz',
      },
      {
        name: 'La Unión',
      },
      {
        name: 'Morazán',
      },
      {
        name: 'San Miguel',
      },
      {
        name: 'San Salvador',
      },
      {
        name: 'Santa Ana',
      },
      {
        name: 'San Vicente',
      },
      {
        name: 'Sonsonate',
      },
      {
        name: 'Usulután',
      },
    ],
  },
  {
    name: 'Equatorial Guinea',
    regions: [
      {
        name: 'Annobón',
      },
      {
        name: 'Bioko Norte',
      },
      {
        name: 'Bioko Sur',
      },
      {
        name: 'Centro Sur',
      },
      {
        name: 'Kié-Ntem',
      },
      {
        name: 'Litoral',
      },
      {
        name: 'Wele-Nzas',
      },
    ],
  },
  {
    name: 'Eritrea',
    regions: [
      {
        name: 'Anseba',
      },
      {
        name: 'Debub',
      },
      {
        name: 'Debub-Keih-Bahri',
      },
      {
        name: 'Gash-Barka',
      },
      {
        name: 'Maekel',
      },
      {
        name: 'Semien-Keih-Bahri',
      },
    ],
  },
  {
    name: 'Estonia',
    regions: [
      {
        name: 'Harjumaa (Tallinn)',
      },
      {
        name: 'Hiiumaa (Kardla)',
      },
      {
        name: 'Ida-Virumaa (Johvi)',
      },
      {
        name: 'Järvamaa (Paide)',
      },
      {
        name: 'Jõgevamaa (Jogeva)',
      },
      {
        name: 'Läänemaa',
      },
      {
        name: 'Lääne-Virumaa (Rakvere)',
      },
      {
        name: 'Pärnumaa (Parnu)',
      },
      {
        name: 'Põlvamaa (Polva)',
      },
      {
        name: 'Raplamaa (Rapla)',
      },
      {
        name: 'Saaremaa (Kuessaare)',
      },
      {
        name: 'Tartumaa (Tartu)',
      },
      {
        name: 'Valgamaa (Valga)',
      },
      {
        name: 'Viljandimaa (Viljandi)',
      },
      {
        name: 'Võrumaa (Voru)',
      },
    ],
  },
  {
    name: 'Ethiopia',
    regions: [
      {
        name: 'Addis Ababa',
      },
      {
        name: 'Afar',
      },
      {
        name: 'Amhara',
      },
      {
        name: 'Benshangul-Gumaz',
      },
      {
        name: 'Dire Dawa',
      },
      {
        name: 'Gambela',
      },
      {
        name: 'Harari',
      },
      {
        name: 'Oromia',
      },
      {
        name: 'Somali',
      },
      {
        name: "Southern Nations Nationalities and People's Region",
      },
      {
        name: 'Tigray',
      },
    ],
  },
  {
    name: 'Falkland Islands (Islas Malvinas)',
    regions: [
      {
        name: 'Falkland Islands (Islas Malvinas)',
      },
    ],
  },
  {
    name: 'Faroe Islands',
    regions: [
      {
        name: 'Bordoy',
      },
      {
        name: 'Eysturoy',
      },
      {
        name: 'Mykines',
      },
      {
        name: 'Sandoy',
      },
      {
        name: 'Skuvoy',
      },
      {
        name: 'Streymoy',
      },
      {
        name: 'Suduroy',
      },
      {
        name: 'Tvoroyri',
      },
      {
        name: 'Vagar',
      },
    ],
  },
  {
    name: 'Fiji',
    regions: [
      {
        name: 'Ba',
      },
      {
        name: 'Bua',
      },
      {
        name: 'Cakaudrove',
      },
      {
        name: 'Kadavu',
      },
      {
        name: 'Lau',
      },
      {
        name: 'Lomaiviti',
      },
      {
        name: 'Macuata',
      },
      {
        name: 'Nadroga and Navosa',
      },
      {
        name: 'Naitasiri',
      },
      {
        name: 'Namosi',
      },
      {
        name: 'Ra',
      },
      {
        name: 'Rewa',
      },
      {
        name: 'Rotuma',
      },
      {
        name: 'Serua',
      },
      {
        name: 'Tailevu',
      },
    ],
  },
  {
    name: 'Finland',
    regions: [
      {
        name: 'Ahvenanmaan maakunta',
      },
      {
        name: 'Etelä-Karjala',
      },
      {
        name: 'Etelä-Pohjanmaa',
      },
      {
        name: 'Etelä-Savo',
      },
      {
        name: 'Kainuu',
      },
      {
        name: 'Kanta-Häme',
      },
      {
        name: 'Keski-Pohjanmaa',
      },
      {
        name: 'Keski-Suomi',
      },
      {
        name: 'Kymenlaakso',
      },
      {
        name: 'Lappi',
      },
      {
        name: 'Pirkanmaa',
      },
      {
        name: 'Pohjanmaa',
      },
      {
        name: 'Pohjois-Karjala',
      },
      {
        name: 'Pohjois-Pohjanmaa',
      },
      {
        name: 'Pohjois-Savo',
      },
      {
        name: 'Päijät-Häme',
      },
      {
        name: 'Satakunta',
      },
      {
        name: 'Uusimaa',
      },
      {
        name: 'Varsinais-Suomi',
      },
    ],
  },
  {
    name: 'France',
    regions: [
      {
        name: 'Auvergne-Rhône-Alpes',
      },
      {
        name: 'Bourgogne-Franche-Comté',
      },
      {
        name: 'Bretagne',
      },
      {
        name: 'Centre-Val de Loire',
      },
      {
        name: 'Corse',
      },
      {
        name: 'Grand Est',
      },
      {
        name: 'Hauts-de-France',
      },
      {
        name: 'Île-de-France',
      },
      {
        name: 'Normandie',
      },
      {
        name: 'Nouvelle-Aquitaine',
      },
      {
        name: 'Occitanie',
      },
      {
        name: 'Pays de la Loire',
      },
      {
        name: "Provence-Alpes-Cote d'Azur",
      },
      {
        name: 'Clipperton',
      },
      {
        name: 'Guadeloupe',
      },
      {
        name: 'Guyane',
      },
      {
        name: 'Martinique',
      },
      {
        name: 'Mayotte',
      },
      {
        name: 'Nouvelle-Calédonie',
      },
      {
        name: 'Polynésie',
      },
      {
        name: 'Saint-Pierre-et-Miquelon',
      },
      {
        name: 'Saint Barthélemy',
      },
      {
        name: 'Saint Martin',
      },
      {
        name: 'Réunion',
      },
      {
        name: 'Terres Australes Françaises',
      },
      {
        name: 'Wallis-et-Futuna',
      },
    ],
  },
  {
    name: 'French Guiana',
    regions: [
      {
        name: 'French Guiana',
      },
    ],
  },
  {
    name: 'French Polynesia',
    regions: [
      {
        name: 'Archipel des Marquises',
      },
      {
        name: 'Archipel des Tuamotu',
      },
      {
        name: 'Archipel des Tubuai',
      },
      {
        name: 'Iles du Vent',
      },
      {
        name: 'Iles Sous-le-Vent',
      },
    ],
  },
  {
    name: 'French Southern and Antarctic Lands',
    regions: [
      {
        name: 'Adelie Land',
      },
      {
        name: 'Ile Crozet',
      },
      {
        name: 'Iles Kerguelen',
      },
      {
        name: 'Iles Saint-Paul et Amsterdam',
      },
    ],
  },
  {
    name: 'Gabon',
    regions: [
      {
        name: 'Estuaire',
      },
      {
        name: 'Haut-Ogooué',
      },
      {
        name: 'Moyen-Ogooué',
      },
      {
        name: 'Ngounié',
      },
      {
        name: 'Nyanga',
      },
      {
        name: 'Ogooué-Ivindo',
      },
      {
        name: 'Ogooué-Lolo',
      },
      {
        name: 'Ogooué-Maritime',
      },
      {
        name: 'Woleu-Ntem',
      },
    ],
  },
  {
    name: 'Gambia, The',
    regions: [
      {
        name: 'Banjul',
      },
      {
        name: 'Central River',
      },
      {
        name: 'Lower River',
      },
      {
        name: 'North Bank',
      },
      {
        name: 'Upper River',
      },
      {
        name: 'Western',
      },
    ],
  },
  {
    name: 'Georgia',
    regions: [
      {
        name: 'Abkhazia (Sokhumi)',
      },
      {
        name: "Ajaria (Bat'umi)",
      },
      {
        name: 'Guria',
      },
      {
        name: 'Imereti',
      },
      {
        name: "K'akheti",
      },
      {
        name: 'Kvemo Kartli',
      },
      {
        name: 'Mtshkheta-Mtianeti',
      },
      {
        name: "Rach'a-Lexhkumi-KvemoSvaneti",
      },
      {
        name: 'Samegrelo-Zemo Svaneti',
      },
      {
        name: 'Samtskhe-Javakheti',
      },
      {
        name: 'Shida Kartli',
      },
      {
        name: 'Tbilisi',
      },
    ],
  },
  {
    name: 'Germany',
    regions: [
      {
        name: 'Baden-Württemberg',
      },
      {
        name: 'Bayern',
      },
      {
        name: 'Berlin',
      },
      {
        name: 'Brandenburg',
      },
      {
        name: 'Bremen',
      },
      {
        name: 'Hamburg',
      },
      {
        name: 'Hessen',
      },
      {
        name: 'Mecklenburg-Vorpommern',
      },
      {
        name: 'Niedersachsen',
      },
      {
        name: 'Nordrhein-Westfalen',
      },
      {
        name: 'Rheinland-Pfalz',
      },
      {
        name: 'Saarland',
      },
      {
        name: 'Sachsen',
      },
      {
        name: 'Sachsen-Anhalt',
      },
      {
        name: 'Schleswig-Holstein',
      },
      {
        name: 'Thüringen',
      },
    ],
  },
  {
    name: 'Ghana',
    regions: [
      {
        name: 'Ahafo',
      },
      {
        name: 'Ashanti',
      },
      {
        name: 'Bono',
      },
      {
        name: 'Bono East',
      },
      {
        name: 'Central',
      },
      {
        name: 'Eastern',
      },
      {
        name: 'Greater Accra',
      },
      {
        name: 'Northern',
      },
      {
        name: 'North East',
      },
      {
        name: 'Oti',
      },
      {
        name: 'Savannah',
      },
      {
        name: 'Upper East',
      },
      {
        name: 'Upper West',
      },
      {
        name: 'Volta',
      },
      {
        name: 'Western',
      },
      {
        name: 'Western North',
      },
    ],
  },
  {
    name: 'Gibraltar',
    regions: [
      {
        name: 'Gibraltar',
      },
    ],
  },
  {
    name: 'Greece',
    regions: [
      {
        name: 'Anatolikí Makedonía kai Thráki',
      },
      {
        name: 'Attikḯ',
      },
      {
        name: 'Dytikí Elláda',
      },
      {
        name: 'Dytikí Makedonía',
      },
      {
        name: 'Ionía Nísia',
      },
      {
        name: 'Kentrikí Makedonía',
      },
      {
        name: 'Krítí',
      },
      {
        name: 'Notío Aigaío',
      },
      {
        name: 'Peloponnísos',
      },
      {
        name: 'Stereá Elláda',
      },
      {
        name: 'Thessalía',
      },
      {
        name: 'Voreío Aigaío',
      },
      {
        name: 'Ípeiros',
      },
      {
        name: 'Ágion Óros',
      },
    ],
  },
  {
    name: 'Greenland',
    regions: [
      {
        name: 'Kommune Kujalleq',
      },
      {
        name: 'Kommuneqarfik Sermersooq',
      },
      {
        name: 'Qaasuitsup Kommunia',
      },
      {
        name: 'Qeqqata Kommunia',
      },
    ],
  },
  {
    name: 'Grenada',
    regions: [
      {
        name: 'Saint Andrew',
      },
      {
        name: 'Saint David',
      },
      {
        name: 'Saint George',
      },
      {
        name: 'Saint John',
      },
      {
        name: 'Saint Mark',
      },
      {
        name: 'Saint Patrick',
      },
      {
        name: 'Southern Grenadine Islands',
      },
    ],
  },
  {
    name: 'Guadeloupe',
    regions: [
      {
        name: 'Guadeloupe',
      },
    ],
  },
  {
    name: 'Guam',
    regions: [
      {
        name: 'Guam',
      },
    ],
  },
  {
    name: 'Guatemala',
    regions: [
      {
        name: 'Alta Verapaz',
      },
      {
        name: 'Baja Verapaz',
      },
      {
        name: 'Chimaltenango',
      },
      {
        name: 'Chiquimula',
      },
      {
        name: 'El Progreso',
      },
      {
        name: 'Escuintla',
      },
      {
        name: 'Guatemala',
      },
      {
        name: 'Huehuetenango',
      },
      {
        name: 'Izabal',
      },
      {
        name: 'Jalapa',
      },
      {
        name: 'Jutiapa',
      },
      {
        name: 'Petén',
      },
      {
        name: 'Quetzaltenango',
      },
      {
        name: 'Quiché',
      },
      {
        name: 'Retalhuleu',
      },
      {
        name: 'Sacatepéquez',
      },
      {
        name: 'San Marcos',
      },
      {
        name: 'Santa Rosa',
      },
      {
        name: 'Sololá',
      },
      {
        name: 'Suchitepéquez',
      },
      {
        name: 'Totonicapán',
      },
      {
        name: 'Zacapa',
      },
    ],
  },
  {
    name: 'Guernsey',
    regions: [
      {
        name: 'Castel',
      },
      {
        name: 'Forest',
      },
      {
        name: 'St. Andrew',
      },
      {
        name: 'St. Martin',
      },
      {
        name: 'St. Peter Port',
      },
      {
        name: 'St. Pierre du Bois',
      },
      {
        name: 'St. Sampson',
      },
      {
        name: 'St. Saviour',
      },
      {
        name: 'Torteval',
      },
      {
        name: 'Vale',
      },
    ],
  },
  {
    name: 'Guinea',
    regions: [
      {
        name: 'Boké',
      },
      {
        name: 'Conakry',
      },
      {
        name: 'Faranah',
      },
      {
        name: 'Kankan',
      },
      {
        name: 'Kindia',
      },
      {
        name: 'Labé',
      },
      {
        name: 'Mamou',
      },
      {
        name: 'Nzérékoré',
      },
    ],
  },
  {
    name: 'Guinea-Bissau',
    regions: [
      {
        name: 'Bafatá',
      },
      {
        name: 'Biombo',
      },
      {
        name: 'Bissau',
      },
      {
        name: 'Bolama-Bijagos',
      },
      {
        name: 'Cacheu',
      },
      {
        name: 'Gabú',
      },
      {
        name: 'Oio',
      },
      {
        name: 'Quinara',
      },
      {
        name: 'Tombali',
      },
    ],
  },
  {
    name: 'Guyana',
    regions: [
      {
        name: 'Barima-Waini',
      },
      {
        name: 'Cuyuni-Mazaruni',
      },
      {
        name: 'Demerara-Mahaica',
      },
      {
        name: 'East Berbice-Corentyne',
      },
      {
        name: 'Essequibo Islands-West Demerara',
      },
      {
        name: 'Mahaica-Berbice',
      },
      {
        name: 'Pomeroon-Supenaam',
      },
      {
        name: 'Potaro-Siparuni',
      },
      {
        name: 'Upper Demerara-Berbice',
      },
      {
        name: 'Upper Takutu-Upper Essequibo',
      },
    ],
  },
  {
    name: 'Haiti',
    regions: [
      {
        name: 'Artibonite',
      },
      {
        name: 'Centre',
      },
      {
        name: "Grand'Anse",
      },
      {
        name: 'Nippes',
      },
      {
        name: 'Nord',
      },
      {
        name: 'Nord-Est',
      },
      {
        name: 'Nord-Ouest',
      },
      {
        name: 'Ouest',
      },
      {
        name: 'Sud',
      },
      {
        name: 'Sud-Est',
      },
    ],
  },
  {
    name: 'Heard Island and McDonald Islands',
    regions: [
      {
        name: 'Heard Island and McDonald Islands',
      },
    ],
  },
  {
    name: 'Holy See (Vatican City)',
    regions: [
      {
        name: 'Holy See (Vatican City)',
      },
    ],
  },
  {
    name: 'Honduras',
    regions: [
      {
        name: 'Atlántida',
      },
      {
        name: 'Choluteca',
      },
      {
        name: 'Colón',
      },
      {
        name: 'Comayagua',
      },
      {
        name: 'Copán',
      },
      {
        name: 'Cortés',
      },
      {
        name: 'El Paraíso',
      },
      {
        name: 'Francisco Morazán',
      },
      {
        name: 'Gracias a Dios',
      },
      {
        name: 'Intibucá',
      },
      {
        name: 'Islas de la Bahía',
      },
      {
        name: 'La Paz',
      },
      {
        name: 'Lempira',
      },
      {
        name: 'Ocotepeque',
      },
      {
        name: 'Olancho',
      },
      {
        name: 'Santa Bárbara',
      },
      {
        name: 'Valle',
      },
      {
        name: 'Yoro',
      },
    ],
  },
  {
    name: 'Hong Kong',
    regions: [
      {
        name: 'Hong Kong',
      },
    ],
  },
  {
    name: 'Hungary',
    regions: [
      {
        name: 'Bács-Kiskun',
      },
      {
        name: 'Baranya',
      },
      {
        name: 'Békés',
      },
      {
        name: 'Békéscsaba',
      },
      {
        name: 'Borsod-Abauj-Zemplen',
      },
      {
        name: 'Budapest',
      },
      {
        name: 'Csongrád',
      },
      {
        name: 'Debrecen',
      },
      {
        name: 'Dunaújváros',
      },
      {
        name: 'Eger',
      },
      {
        name: 'Érd',
      },
      {
        name: 'Fejér',
      },
      {
        name: 'Győr',
      },
      {
        name: 'Győr-Moson-Sopron',
      },
      {
        name: 'Hajdú-Bihar',
      },
      {
        name: 'Heves',
      },
      {
        name: 'Hódmezővásárhely',
      },
      {
        name: 'Jász-Nagykun-Szolnok',
      },
      {
        name: 'Kaposvár',
      },
      {
        name: 'Kecskemét',
      },
      {
        name: 'Komárom-Esztergom',
      },
      {
        name: 'Miskolc',
      },
      {
        name: 'Nagykanizsa',
      },
      {
        name: 'Nógrád',
      },
      {
        name: 'Nyíregyháza',
      },
      {
        name: 'Pécs',
      },
      {
        name: 'Pest',
      },
      {
        name: 'Salgótarján',
      },
      {
        name: 'Somogy',
      },
      {
        name: 'Sopron',
      },
      {
        name: 'Szabolcs-á-Bereg',
      },
      {
        name: 'Szeged',
      },
      {
        name: 'Székesfehérvár',
      },
      {
        name: 'Szekszárd',
      },
      {
        name: 'Szolnok',
      },
      {
        name: 'Szombathely',
      },
      {
        name: 'Tatabánya',
      },
      {
        name: 'Tolna',
      },
      {
        name: 'Vas',
      },
      {
        name: 'Veszprém',
      },
      {
        name: 'Veszprém (City)',
      },
      {
        name: 'Zala',
      },
      {
        name: 'Zalaegerszeg',
      },
    ],
  },
  {
    name: 'Iceland',
    regions: [
      {
        name: 'Austurland',
      },
      {
        name: 'Höfuðborgarsvæði',
      },
      {
        name: 'Norðurland eystra',
      },
      {
        name: 'Norðurland vestra',
      },
      {
        name: 'Suðurland',
      },
      {
        name: 'Suðurnes',
      },
      {
        name: 'Vestfirðir',
      },
      {
        name: 'Vesturland',
      },
    ],
  },
  {
    name: 'India',
    regions: [
      {
        name: 'Andaman and Nicobar Islands',
      },
      {
        name: 'Andhra Pradesh',
      },
      {
        name: 'Arunachal Pradesh',
      },
      {
        name: 'Assam',
      },
      {
        name: 'Bihar',
      },
      {
        name: 'Chandigarh',
      },
      {
        name: 'Chhattisgarh',
      },
      {
        name: 'Dadra and Nagar Haveli and Daman and Diu',
      },
      {
        name: 'Delhi',
      },
      {
        name: 'Goa',
      },
      {
        name: 'Gujarat',
      },
      {
        name: 'Haryana',
      },
      {
        name: 'Himachal Pradesh',
      },
      {
        name: 'Jammu and Kashmir',
      },
      {
        name: 'Jharkhand',
      },
      {
        name: 'Karnataka',
      },
      {
        name: 'Kerala',
      },
      {
        name: 'Ladakh',
      },
      {
        name: 'Lakshadweep',
      },
      {
        name: 'Madhya Pradesh',
      },
      {
        name: 'Maharashtra',
      },
      {
        name: 'Manipur',
      },
      {
        name: 'Meghalaya',
      },
      {
        name: 'Mizoram',
      },
      {
        name: 'Nagaland',
      },
      {
        name: 'Odisha',
      },
      {
        name: 'Puducherry',
      },
      {
        name: 'Punjab',
      },
      {
        name: 'Rajasthan',
      },
      {
        name: 'Sikkim',
      },
      {
        name: 'Tamil Nadu',
      },
      {
        name: 'Telangana',
      },
      {
        name: 'Tripura',
      },
      {
        name: 'Uttarakhand',
      },
      {
        name: 'Uttar Pradesh',
      },
      {
        name: 'West Bengal',
      },
    ],
  },
  {
    name: 'Indonesia',
    regions: [
      {
        name: 'Aceh',
      },
      {
        name: 'Bali',
      },
      {
        name: 'Bangka Belitung',
      },
      {
        name: 'Banten',
      },
      {
        name: 'Bengkulu',
      },
      {
        name: 'Gorontalo',
      },
      {
        name: 'Jakarta Raya',
      },
      {
        name: 'Jambi',
      },
      {
        name: 'Jawa Barat',
      },
      {
        name: 'Jawa Tengah',
      },
      {
        name: 'Jawa Timur',
      },
      {
        name: 'Kalimantan Barat',
      },
      {
        name: 'Kalimantan Selatan',
      },
      {
        name: 'Kalimantan Tengah',
      },
      {
        name: 'Kalimantan Timur',
      },
      {
        name: 'Kalimantan Utara',
      },
      {
        name: 'Kepulauan Riau',
      },
      {
        name: 'Lampung',
      },
      {
        name: 'Maluku',
      },
      {
        name: 'Maluku Utara',
      },
      {
        name: 'Nusa Tenggara Barat',
      },
      {
        name: 'Nusa Tenggara Timur',
      },
      {
        name: 'Papua',
      },
      {
        name: 'Papua Barat',
      },
      {
        name: 'Riau',
      },
      {
        name: 'Sulawesi Selatan',
      },
      {
        name: 'Sulawesi Tengah',
      },
      {
        name: 'Sulawesi Tenggara',
      },
      {
        name: 'Sulawesi Utara',
      },
      {
        name: 'Sumatera Barat',
      },
      {
        name: 'Sumatera Selatan',
      },
      {
        name: 'Sumatera Utara',
      },
      {
        name: 'Yogyakarta',
      },
    ],
  },
  {
    name: 'Iran, Islamic Republic of',
    regions: [
      {
        name: 'Alborz',
      },
      {
        name: 'Ardabīl',
      },
      {
        name: 'Āz̄arbāyjān-e Gharbī',
      },
      {
        name: 'Āz̄arbāyjān-e Sharqī',
      },
      {
        name: 'Būshehr',
      },
      {
        name: 'Chahār Maḩāl va Bakhtīārī',
      },
      {
        name: 'Eşfahān',
      },
      {
        name: 'Fārs',
      },
      {
        name: 'Gīlān',
      },
      {
        name: 'Golestān',
      },
      {
        name: 'Hamadān',
      },
      {
        name: 'Hormozgān',
      },
      {
        name: 'Īlām',
      },
      {
        name: 'Kermān',
      },
      {
        name: 'Kermānshāh',
      },
      {
        name: 'Khorāsān-e Jonūbī',
      },
      {
        name: 'Khorāsān-e Raẕavī',
      },
      {
        name: 'Khorāsān-e Shomālī',
      },
      {
        name: 'Khūzestān',
      },
      {
        name: 'Kohgīlūyeh va Bowyer Aḩmad',
      },
      {
        name: 'Kordestān',
      },
      {
        name: 'Lorestān',
      },
      {
        name: 'Markazi',
      },
      {
        name: 'Māzandarān',
      },
      {
        name: 'Qazvīn',
      },
      {
        name: 'Qom',
      },
      {
        name: 'Semnān',
      },
      {
        name: 'Sīstān va Balūchestān',
      },
      {
        name: 'Tehrān',
      },
      {
        name: 'Yazd',
      },
      {
        name: 'Zanjān',
      },
    ],
  },
  {
    name: 'Iraq',
    regions: [
      {
        name: 'Al Anbār',
      },
      {
        name: 'Al Başrah',
      },
      {
        name: 'Al Muthanná',
      },
      {
        name: 'Al Qādisīyah',
      },
      {
        name: 'An Najaf',
      },
      {
        name: 'Arbīl',
      },
      {
        name: 'As Sulaymānīyah',
      },
      {
        name: 'Bābil',
      },
      {
        name: 'Baghdād',
      },
      {
        name: 'Dohuk',
      },
      {
        name: 'Dhī Qār',
      },
      {
        name: 'Diyālá',
      },
      {
        name: "Karbalā'",
      },
      {
        name: 'Kirkuk',
      },
      {
        name: 'Maysān',
      },
      {
        name: 'Nīnawá',
      },
      {
        name: 'Şalāḩ ad Dīn',
      },
      {
        name: 'Wāsiţ',
      },
    ],
  },
  {
    name: 'Ireland',
    regions: [
      {
        name: 'Carlow',
      },
      {
        name: 'Cavan',
      },
      {
        name: 'Clare',
      },
      {
        name: 'Cork',
      },
      {
        name: 'Donegal',
      },
      {
        name: 'Dublin',
      },
      {
        name: 'Galway',
      },
      {
        name: 'Kerry',
      },
      {
        name: 'Kildare',
      },
      {
        name: 'Kilkenny',
      },
      {
        name: 'Laois',
      },
      {
        name: 'Leitrim',
      },
      {
        name: 'Limerick',
      },
      {
        name: 'Longford',
      },
      {
        name: 'Louth',
      },
      {
        name: 'Mayo',
      },
      {
        name: 'Meath',
      },
      {
        name: 'Monaghan',
      },
      {
        name: 'Offaly',
      },
      {
        name: 'Roscommon',
      },
      {
        name: 'Sligo',
      },
      {
        name: 'Tipperary',
      },
      {
        name: 'Waterford',
      },
      {
        name: 'Westmeath',
      },
      {
        name: 'Wexford',
      },
      {
        name: 'Wicklow',
      },
    ],
  },
  {
    name: 'Isle of Man',
    regions: [
      {
        name: 'Isle of Man',
      },
    ],
  },
  {
    name: 'Israel',
    regions: [
      {
        name: 'HaDarom',
      },
      {
        name: 'HaMerkaz',
      },
      {
        name: 'HaTsafon',
      },
      {
        name: 'H̱efa',
      },
      {
        name: 'Tel-Aviv',
      },
      {
        name: 'Yerushalayim',
      },
    ],
  },
  {
    name: 'Italy',
    regions: [
      {
        name: 'Abruzzo',
      },
      {
        name: 'Basilicata',
      },
      {
        name: 'Calabria',
      },
      {
        name: 'Campania',
      },
      {
        name: 'Emilia-Romagna',
      },
      {
        name: 'Friuli-Venezia Giulia',
      },
      {
        name: 'Lazio',
      },
      {
        name: 'Liguria',
      },
      {
        name: 'Lombardia',
      },
      {
        name: 'Marche',
      },
      {
        name: 'Molise',
      },
      {
        name: 'Piemonte',
      },
      {
        name: 'Puglia',
      },
      {
        name: 'Sardegna',
      },
      {
        name: 'Sicilia',
      },
      {
        name: 'Toscana',
      },
      {
        name: 'Trentino-Alto Adige',
      },
      {
        name: 'Umbria',
      },
      {
        name: "Valle d'Aosta",
      },
      {
        name: 'Veneto',
      },
    ],
  },
  {
    name: 'Jamaica',
    regions: [
      {
        name: 'Clarendon',
      },
      {
        name: 'Hanover',
      },
      {
        name: 'Kingston',
      },
      {
        name: 'Manchester',
      },
      {
        name: 'Portland',
      },
      {
        name: 'Saint Andrew',
      },
      {
        name: 'Saint Ann',
      },
      {
        name: 'Saint Catherine',
      },
      {
        name: 'Saint Elizabeth',
      },
      {
        name: 'Saint James',
      },
      {
        name: 'Saint Mary',
      },
      {
        name: 'Saint Thomas',
      },
      {
        name: 'Trelawny',
      },
      {
        name: 'Westmoreland',
      },
    ],
  },
  {
    name: 'Japan',
    regions: [
      {
        name: 'Aichi',
      },
      {
        name: 'Akita',
      },
      {
        name: 'Aomori',
      },
      {
        name: 'Chiba',
      },
      {
        name: 'Ehime',
      },
      {
        name: 'Fukui',
      },
      {
        name: 'Fukuoka',
      },
      {
        name: 'Fukushima',
      },
      {
        name: 'Gifu',
      },
      {
        name: 'Gunma',
      },
      {
        name: 'Hiroshima',
      },
      {
        name: 'Hokkaido',
      },
      {
        name: 'Hyogo',
      },
      {
        name: 'Ibaraki',
      },
      {
        name: 'Ishikawa',
      },
      {
        name: 'Iwate',
      },
      {
        name: 'Kagawa',
      },
      {
        name: 'Kagoshima',
      },
      {
        name: 'Kanagawa',
      },
      {
        name: 'Kochi',
      },
      {
        name: 'Kumamoto',
      },
      {
        name: 'Kyoto',
      },
      {
        name: 'Mie',
      },
      {
        name: 'Miyagi',
      },
      {
        name: 'Miyazaki',
      },
      {
        name: 'Nagano',
      },
      {
        name: 'Nagasaki',
      },
      {
        name: 'Nara',
      },
      {
        name: 'Niigata',
      },
      {
        name: 'Oita',
      },
      {
        name: 'Okayama',
      },
      {
        name: 'Okinawa',
      },
      {
        name: 'Osaka',
      },
      {
        name: 'Saga',
      },
      {
        name: 'Saitama',
      },
      {
        name: 'Shiga',
      },
      {
        name: 'Shimane',
      },
      {
        name: 'Shizuoka',
      },
      {
        name: 'Tochigi',
      },
      {
        name: 'Tokushima',
      },
      {
        name: 'Tokyo',
      },
      {
        name: 'Tottori',
      },
      {
        name: 'Toyama',
      },
      {
        name: 'Wakayama',
      },
      {
        name: 'Yamagata',
      },
      {
        name: 'Yamaguchi',
      },
      {
        name: 'Yamanashi',
      },
    ],
  },
  {
    name: 'Jersey',
    regions: [
      {
        name: 'Jersey',
      },
    ],
  },
  {
    name: 'Jordan',
    regions: [
      {
        name: '‘Ajlūn',
      },
      {
        name: "Al 'Aqabah",
      },
      {
        name: 'Al Balqā’',
      },
      {
        name: 'Al Karak',
      },
      {
        name: 'Al Mafraq',
      },
      {
        name: 'Al ‘A̅şimah',
      },
      {
        name: 'Aţ Ţafīlah',
      },
      {
        name: 'Az Zarqā’',
      },
      {
        name: 'Irbid',
      },
      {
        name: 'Jarash',
      },
      {
        name: 'Ma‘ān',
      },
      {
        name: 'Mādabā',
      },
    ],
  },
  {
    name: 'Kazakhstan',
    regions: [
      {
        name: 'Almaty',
      },
      {
        name: 'Aqmola',
      },
      {
        name: 'Aqtobe',
      },
      {
        name: 'Astana',
      },
      {
        name: 'Atyrau',
      },
      {
        name: 'Batys Qazaqstan',
      },
      {
        name: 'Bayqongyr',
      },
      {
        name: 'Mangghystau',
      },
      {
        name: 'Ongtustik Qazaqstan',
      },
      {
        name: 'Pavlodar',
      },
      {
        name: 'Qaraghandy',
      },
      {
        name: 'Qostanay',
      },
      {
        name: 'Qyzylorda',
      },
      {
        name: 'Shyghys Qazaqstan',
      },
      {
        name: 'Soltustik Qazaqstan',
      },
      {
        name: 'Zhambyl',
      },
    ],
  },
  {
    name: 'Kenya',
    regions: [
      {
        name: 'Baringo',
      },
      {
        name: 'Bomet',
      },
      {
        name: 'Bungoma',
      },
      {
        name: 'Busia',
      },
      {
        name: 'Eleyo/Marakwet',
      },
      {
        name: 'Embu',
      },
      {
        name: 'Garissa',
      },
      {
        name: 'Homa Bay',
      },
      {
        name: 'Isiolo',
      },
      {
        name: 'Kajiado',
      },
      {
        name: 'Kakamega',
      },
      {
        name: 'Kericho',
      },
      {
        name: 'Kiambu',
      },
      {
        name: 'Kilifi',
      },
      {
        name: 'Kirinyaga',
      },
      {
        name: 'Kisii',
      },
      {
        name: 'Kisumu',
      },
      {
        name: 'Kitui',
      },
      {
        name: 'Kwale',
      },
      {
        name: 'Laikipia',
      },
      {
        name: 'Lamu',
      },
      {
        name: 'Machakos',
      },
      {
        name: 'Makueni',
      },
      {
        name: 'Mandera',
      },
      {
        name: 'Marsabit',
      },
      {
        name: 'Meru',
      },
      {
        name: 'Migori',
      },
      {
        name: 'Mombasa',
      },
      {
        name: "Murang'a",
      },
      {
        name: 'Nairobi City',
      },
      {
        name: 'Nakuru',
      },
      {
        name: 'Nandi',
      },
      {
        name: 'Narok',
      },
      {
        name: 'Nyamira',
      },
      {
        name: 'Nyandarua',
      },
      {
        name: 'Nyeri',
      },
      {
        name: 'Samburu',
      },
      {
        name: 'Siaya',
      },
      {
        name: 'Taita/Taveta',
      },
      {
        name: 'Tana River',
      },
      {
        name: 'Tharaka-Nithi',
      },
      {
        name: 'Trans Nzoia',
      },
      {
        name: 'Turkana',
      },
      {
        name: 'Uasin Gishu',
      },
      {
        name: 'Vihiga',
      },
      {
        name: 'Wajir',
      },
      {
        name: 'West Pokot',
      },
    ],
  },
  {
    name: 'Kiribati',
    regions: [
      {
        name: 'Abaiang',
      },
      {
        name: 'Abemama',
      },
      {
        name: 'Aranuka',
      },
      {
        name: 'Arorae',
      },
      {
        name: 'Banaba',
      },
      {
        name: 'Beru',
      },
      {
        name: 'Butaritari',
      },
      {
        name: 'Central Gilberts',
      },
      {
        name: 'Gilbert Islands',
      },
      {
        name: 'Kanton',
      },
      {
        name: 'Kiritimati',
      },
      {
        name: 'Kuria',
      },
      {
        name: 'Line Islands',
      },
      {
        name: 'Maiana',
      },
      {
        name: 'Makin',
      },
      {
        name: 'Marakei',
      },
      {
        name: 'Nikunau',
      },
      {
        name: 'Nonouti',
      },
      {
        name: 'Northern Gilberts',
      },
      {
        name: 'Onotoa',
      },
      {
        name: 'Phoenix Islands',
      },
      {
        name: 'Southern Gilberts',
      },
      {
        name: 'Tabiteuea',
      },
      {
        name: 'Tabuaeran',
      },
      {
        name: 'Tamana',
      },
      {
        name: 'Tarawa',
      },
      {
        name: 'Teraina',
      },
    ],
  },
  {
    name: "Korea, Democratic People's Republic of",
    regions: [
      {
        name: 'Chagang-do (Chagang Province)',
      },
      {
        name: 'Hamgyong-bukto (North Hamgyong Province)',
      },
      {
        name: 'Hamgyong-namdo (South Hamgyong Province)',
      },
      {
        name: 'Hwanghae-bukto (North Hwanghae Province)',
      },
      {
        name: 'Hwanghae-namdo (South Hwanghae Province)',
      },
      {
        name: 'Kangwon-do (Kangwon Province)',
      },
      {
        name: 'Nasŏn (Najin-Sŏnbong)',
      },
      {
        name: "P'yongan-bukto (North P'yongan Province)",
      },
      {
        name: "P'yongan-namdo (South P'yongan Province)",
      },
      {
        name: "P'yongyang-si (P'yongyang City)",
      },
      {
        name: 'Yanggang-do (Yanggang Province)',
      },
    ],
  },
  {
    name: 'Korea, Republic of',
    regions: [
      {
        name: "Ch'ungch'ongbuk-do",
      },
      {
        name: "Ch'ungch'ongnam-do",
      },
      {
        name: 'Cheju-do',
      },
      {
        name: 'Chollabuk-do',
      },
      {
        name: 'Chollanam-do',
      },
      {
        name: "Inch'on-Kwangyokhi",
      },
      {
        name: 'Kang-won-do',
      },
      {
        name: 'Kwangju-Kwangyokshi',
      },
      {
        name: 'Kyonggi-do',
      },
      {
        name: 'Kyongsangbuk-do',
      },
      {
        name: 'Kyongsangnam-do',
      },
      {
        name: 'Pusan-Kwangyokshi',
      },
      {
        name: "Seoul-T'ukpyolshi",
      },
      {
        name: 'Sejong',
      },
      {
        name: 'Taegu-Kwangyokshi',
      },
      {
        name: 'Taejon-Kwangyokshi',
      },
      {
        name: 'Ulsan-Kwangyokshi',
      },
    ],
  },
  {
    name: 'Kosovo',
    regions: [
      {
        name: 'Farizaj',
      },
      {
        name: 'Gjakova',
      },
      {
        name: 'Gjilan',
      },
      {
        name: 'Mitrovica',
      },
      {
        name: 'Peja/Peć',
      },
      {
        name: 'Pristina',
      },
      {
        name: 'Prizren',
      },
    ],
  },
  {
    name: 'Kuwait',
    regions: [
      {
        name: 'Al Aḩmadi',
      },
      {
        name: 'Al Farwānīyah',
      },
      {
        name: 'Al Jahrā’',
      },
      {
        name: 'Al ‘Āşimah',
      },
      {
        name: 'Ḩawallī',
      },
      {
        name: 'Mubārak al Kabir',
      },
    ],
  },
  {
    name: 'Kyrgyzstan',
    regions: [
      {
        name: 'Batken Oblasty',
      },
      {
        name: 'Bishkek Shaary',
      },
      {
        name: 'Chuy Oblasty (Bishkek)',
      },
      {
        name: 'Jalal-Abad Oblasty',
      },
      {
        name: 'Naryn Oblasty',
      },
      {
        name: 'Osh Oblasty',
      },
      {
        name: 'Talas Oblasty',
      },
      {
        name: 'Ysyk-Kol Oblasty (Karakol)',
      },
    ],
  },
  {
    name: 'Laos',
    regions: [
      {
        name: 'Attapu',
      },
      {
        name: 'Bokèo',
      },
      {
        name: 'Bolikhamxai',
      },
      {
        name: 'Champasak',
      },
      {
        name: 'Houaphan',
      },
      {
        name: 'Khammouan',
      },
      {
        name: 'Louang Namtha',
      },
      {
        name: 'Louangphabang',
      },
      {
        name: 'Oudômxai',
      },
      {
        name: 'Phôngsali',
      },
      {
        name: 'Salavan',
      },
      {
        name: 'Savannakhét',
      },
      {
        name: 'Vientiane',
      },
      {
        name: 'Xaignabouli',
      },
      {
        name: 'Xékong',
      },
      {
        name: 'Xaisomboun',
      },
      {
        name: 'Xiangkhouang',
      },
    ],
  },
  {
    name: 'Latvia',
    regions: [
      {
        name: 'Aglona',
      },
      {
        name: 'Aizkraukle',
      },
      {
        name: 'Aizpute',
      },
      {
        name: 'Aknīste',
      },
      {
        name: 'Aloja',
      },
      {
        name: 'Alsunga',
      },
      {
        name: 'Alūksne',
      },
      {
        name: 'Amata',
      },
      {
        name: 'Ape',
      },
      {
        name: 'Auce',
      },
      {
        name: 'Ādaži',
      },
      {
        name: 'Babīte',
      },
      {
        name: 'Baldone',
      },
      {
        name: 'Baltinava',
      },
      {
        name: 'Balvi',
      },
      {
        name: 'Bauska',
      },
      {
        name: 'Beverīna',
      },
      {
        name: 'Brocēni',
      },
      {
        name: 'Burtnieki',
      },
      {
        name: 'Carnikava',
      },
      {
        name: 'Cesvaine',
      },
      {
        name: 'Cēsis',
      },
      {
        name: 'Cibla',
      },
      {
        name: 'Dagda',
      },
      {
        name: 'Daugavpils',
      },
      {
        name: 'Daugavpils (City)',
      },
      {
        name: 'Dobele',
      },
      {
        name: 'Dundaga',
      },
      {
        name: 'Durbe',
      },
      {
        name: 'Engure',
      },
      {
        name: 'Ērgļi',
      },
      {
        name: 'Garkalne',
      },
      {
        name: 'Grobiņa',
      },
      {
        name: 'Gulbene',
      },
      {
        name: 'Iecava',
      },
      {
        name: 'Ikšķile',
      },
      {
        name: 'Ilūkste',
      },
      {
        name: 'Inčukalns',
      },
      {
        name: 'Jaunjelgava',
      },
      {
        name: 'Jaunpiebalga',
      },
      {
        name: 'Jaunpils',
      },
      {
        name: 'Jelgava',
      },
      {
        name: 'Jelgava (City)',
      },
      {
        name: 'Jēkabpils',
      },
      {
        name: 'Jēkabpils (City)',
      },
      {
        name: 'Jūrmala (City)',
      },
      {
        name: 'Kandava',
      },
      {
        name: 'Kārsava',
      },
      {
        name: 'Kocēni',
      },
      {
        name: 'Koknese',
      },
      {
        name: 'Krāslava',
      },
      {
        name: 'Krimulda',
      },
      {
        name: 'Krustpils',
      },
      {
        name: 'Kuldīga',
      },
      {
        name: 'Ķegums',
      },
      {
        name: 'Ķekava',
      },
      {
        name: 'Lielvārde',
      },
      {
        name: 'Liepāja',
      },
      {
        name: 'Limbaži',
      },
      {
        name: 'Līgatne',
      },
      {
        name: 'Līvāni',
      },
      {
        name: 'Lubāna',
      },
      {
        name: 'Ludza',
      },
      {
        name: 'Madona',
      },
      {
        name: 'Mazsalaca',
      },
      {
        name: 'Mālpils',
      },
      {
        name: 'Mārupe',
      },
      {
        name: 'Mērsrags',
      },
      {
        name: 'Naukšēni',
      },
      {
        name: 'Nereta',
      },
      {
        name: 'Nīca',
      },
      {
        name: 'Ogre',
      },
      {
        name: 'Olaine',
      },
      {
        name: 'Ozolnieki',
      },
      {
        name: 'Pārgauja',
      },
      {
        name: 'Pāvilosta',
      },
      {
        name: 'Pļaviņas',
      },
      {
        name: 'Preiļi',
      },
      {
        name: 'Priekule',
      },
      {
        name: 'Priekuļi',
      },
      {
        name: 'Rauna',
      },
      {
        name: 'Rēzekne',
      },
      {
        name: 'Rēzekne (City)',
      },
      {
        name: 'Riebiņi',
      },
      {
        name: 'Rīga',
      },
      {
        name: 'Roja',
      },
      {
        name: 'Ropaži',
      },
      {
        name: 'Rucava',
      },
      {
        name: 'Rugāji',
      },
      {
        name: 'Rundāle',
      },
      {
        name: 'Rūjiena',
      },
      {
        name: 'Sala',
      },
      {
        name: 'Salacgrīva',
      },
      {
        name: 'Salaspils',
      },
      {
        name: 'Saldus',
      },
      {
        name: 'Saulkrasti',
      },
      {
        name: 'Sēja',
      },
      {
        name: 'Sigulda',
      },
      {
        name: 'Skrīveri',
      },
      {
        name: 'Skrunda',
      },
      {
        name: 'Smiltene',
      },
      {
        name: 'Stopiņi',
      },
      {
        name: 'Strenči',
      },
      {
        name: 'Talsi',
      },
      {
        name: 'Tērvete',
      },
      {
        name: 'Tukums',
      },
      {
        name: 'Vaiņode',
      },
      {
        name: 'Valka',
      },
      {
        name: 'Valmiera',
      },
      {
        name: 'Varakļāni',
      },
      {
        name: 'Vārkava',
      },
      {
        name: 'Vecpiebalga',
      },
      {
        name: 'Vecumnieki',
      },
      {
        name: 'Ventspils',
      },
      {
        name: 'Ventspils (City)',
      },
      {
        name: 'Viesīte',
      },
      {
        name: 'Viļaka',
      },
      {
        name: 'Viļāni',
      },
      {
        name: 'Zilupe',
      },
    ],
  },
  {
    name: 'Lebanon',
    regions: [
      {
        name: 'Aakkâr',
      },
      {
        name: 'Baalbelk-Hermel',
      },
      {
        name: 'Béqaa',
      },
      {
        name: 'Beyrouth',
      },
      {
        name: 'Liban-Nord',
      },
      {
        name: 'Liban-Sud',
      },
      {
        name: 'Mont-Liban',
      },
      {
        name: 'Nabatîyé',
      },
    ],
  },
  {
    name: 'Lesotho',
    regions: [
      {
        name: 'Berea',
      },
      {
        name: 'Butha-Buthe',
      },
      {
        name: 'Leribe',
      },
      {
        name: 'Mafeteng',
      },
      {
        name: 'Maseru',
      },
      {
        name: 'Mohales Hoek',
      },
      {
        name: 'Mokhotlong',
      },
      {
        name: "Qacha's Nek",
      },
      {
        name: 'Quthing',
      },
      {
        name: 'Thaba-Tseka',
      },
    ],
  },
  {
    name: 'Liberia',
    regions: [
      {
        name: 'Bomi',
      },
      {
        name: 'Bong',
      },
      {
        name: 'Gbarpolu',
      },
      {
        name: 'Grand Bassa',
      },
      {
        name: 'Grand Cape Mount',
      },
      {
        name: 'Grand Gedeh',
      },
      {
        name: 'Grand Kru',
      },
      {
        name: 'Lofa',
      },
      {
        name: 'Margibi',
      },
      {
        name: 'Maryland',
      },
      {
        name: 'Montserrado',
      },
      {
        name: 'Nimba',
      },
      {
        name: 'River Cess',
      },
      {
        name: 'River Geee',
      },
      {
        name: 'Sinoe',
      },
    ],
  },
  {
    name: 'Libya',
    regions: [
      {
        name: 'Al Buţnān',
      },
      {
        name: 'Al Jabal al Akhḑar',
      },
      {
        name: 'Al Jabal al Gharbī',
      },
      {
        name: 'Al Jafārah',
      },
      {
        name: 'Al Jufrah',
      },
      {
        name: 'Al Kufrah',
      },
      {
        name: 'Al Marj',
      },
      {
        name: 'Al Marquab',
      },
      {
        name: 'Al Wāḩāt',
      },
      {
        name: 'An Nuqaţ al Khams',
      },
      {
        name: 'Az Zāwiyah',
      },
      {
        name: 'Banghāzī',
      },
      {
        name: 'Darnah',
      },
      {
        name: 'Ghāt',
      },
      {
        name: 'Mişrātah',
      },
      {
        name: 'Murzuq',
      },
      {
        name: 'Nālūt',
      },
      {
        name: 'Sabhā',
      },
      {
        name: 'Surt',
      },
      {
        name: 'Ţarābulus',
      },
      {
        name: 'Yafran',
      },
      {
        name: 'Wādī ash Shāţiʾ',
      },
    ],
  },
  {
    name: 'Liechtenstein',
    regions: [
      {
        name: 'Balzers',
      },
      {
        name: 'Eschen',
      },
      {
        name: 'Gamprin',
      },
      {
        name: 'Mauren',
      },
      {
        name: 'Planken',
      },
      {
        name: 'Ruggell',
      },
      {
        name: 'Schaan',
      },
      {
        name: 'Schellenberg',
      },
      {
        name: 'Triesen',
      },
      {
        name: 'Triesenberg',
      },
      {
        name: 'Vaduz',
      },
    ],
  },
  {
    name: 'Lithuania',
    regions: [
      {
        name: 'Alytaus',
      },
      {
        name: 'Kauno',
      },
      {
        name: 'Klaipėdos',
      },
      {
        name: 'Marijampolės',
      },
      {
        name: 'Panevėžio',
      },
      {
        name: 'Šiaulių',
      },
      {
        name: 'Tauragės',
      },
      {
        name: 'Telšių',
      },
      {
        name: 'Utenos',
      },
      {
        name: 'Vilniaus',
      },
    ],
  },
  {
    name: 'Luxembourg',
    regions: [
      {
        name: 'Capellen',
      },
      {
        name: 'Clevaux',
      },
      {
        name: 'Diekirch',
      },
      {
        name: 'Echternach',
      },
      {
        name: 'Esch-sur-Alzette',
      },
      {
        name: 'Grevenmacher',
      },
      {
        name: 'Luxembourg',
      },
      {
        name: 'Mersch',
      },
      {
        name: 'Redange',
      },
      {
        name: 'Remich',
      },
      {
        name: 'Vianden',
      },
      {
        name: 'Wiltz',
      },
    ],
  },
  {
    name: 'Macao',
    regions: [
      {
        name: 'Macao',
      },
    ],
  },
  {
    name: 'Macedonia, Republic of',
    regions: [
      {
        name: 'Aračinovo',
      },
      {
        name: 'Berovo',
      },
      {
        name: 'Bitola',
      },
      {
        name: 'Bogdanci',
      },
      {
        name: 'Bogovinje',
      },
      {
        name: 'Bosilovo',
      },
      {
        name: 'Brvenica',
      },
      {
        name: 'Centar Župa',
      },
      {
        name: 'Čaška',
      },
      {
        name: 'Češinovo-Obleševo',
      },
      {
        name: 'Čučer Sandevo',
      },
      {
        name: 'Debar',
      },
      {
        name: 'Debarca',
      },
      {
        name: 'Delčevo',
      },
      {
        name: 'Demir Hisar',
      },
      {
        name: 'Demir Kapija',
      },
      {
        name: 'Doran',
      },
      {
        name: 'Dolneni',
      },
      {
        name: 'Gevgelija',
      },
      {
        name: 'Gostivar',
      },
      {
        name: 'Gradsko',
      },
      {
        name: 'Ilinden',
      },
      {
        name: 'Jegunovce',
      },
      {
        name: 'Karbinci',
      },
      {
        name: 'Kavadarci',
      },
      {
        name: 'Kičevo',
      },
      {
        name: 'Kočani',
      },
      {
        name: 'Konče',
      },
      {
        name: 'Kratovo',
      },
      {
        name: 'Kriva Palanka',
      },
      {
        name: 'Krivogaštani',
      },
      {
        name: 'Kruševo',
      },
      {
        name: 'Kumanovo',
      },
      {
        name: 'Lipkovo',
      },
      {
        name: 'Lozovo',
      },
      {
        name: 'Makedonska Kamenica',
      },
      {
        name: 'Makedonski Brod',
      },
      {
        name: 'Mavrovo i Rostuša',
      },
      {
        name: 'Mogila',
      },
      {
        name: 'Negotino',
      },
      {
        name: 'Novaci',
      },
      {
        name: 'Novo Selo',
      },
      {
        name: 'Ohrid',
      },
      {
        name: 'Pehčevo',
      },
      {
        name: 'Petrovec',
      },
      {
        name: 'Plasnica',
      },
      {
        name: 'Prilep',
      },
      {
        name: 'Probištip',
      },
      {
        name: 'Radoviš',
      },
      {
        name: 'Rankovce',
      },
      {
        name: 'Resen',
      },
      {
        name: 'Rosoman',
      },
      {
        name: 'Skopje',
      },
      {
        name: 'Sopište',
      },
      {
        name: 'Staro Nagoričane',
      },
      {
        name: 'Struga',
      },
      {
        name: 'Strumica',
      },
      {
        name: 'Studeničani',
      },
      {
        name: 'Sveti Nikole',
      },
      {
        name: 'Štip',
      },
      {
        name: 'Tearce',
      },
      {
        name: 'Tetovo',
      },
      {
        name: 'Valandovo',
      },
      {
        name: 'Vasilevo',
      },
      {
        name: 'Veles',
      },
      {
        name: 'Vevčani',
      },
      {
        name: 'Vinica',
      },
      {
        name: 'Vrapčište',
      },
      {
        name: 'Zelenikovo',
      },
      {
        name: 'Zrnovci',
      },
      {
        name: 'Želino',
      },
    ],
  },
  {
    name: 'Madagascar',
    regions: [
      {
        name: 'Antananarivo',
      },
      {
        name: 'Antsiranana',
      },
      {
        name: 'Fianarantsoa',
      },
      {
        name: 'Mahajanga',
      },
      {
        name: 'Toamasina',
      },
      {
        name: 'Toliara',
      },
    ],
  },
  {
    name: 'Malawi',
    regions: [
      {
        name: 'Balaka',
      },
      {
        name: 'Blantyre',
      },
      {
        name: 'Chikwawa',
      },
      {
        name: 'Chiradzulu',
      },
      {
        name: 'Chitipa',
      },
      {
        name: 'Dedza',
      },
      {
        name: 'Dowa',
      },
      {
        name: 'Karonga',
      },
      {
        name: 'Kasungu',
      },
      {
        name: 'Likoma',
      },
      {
        name: 'Lilongwe',
      },
      {
        name: 'Machinga',
      },
      {
        name: 'Mangochi',
      },
      {
        name: 'Mchinji',
      },
      {
        name: 'Mulanje',
      },
      {
        name: 'Mwanza',
      },
      {
        name: 'Mzimba',
      },
      {
        name: 'Nkhata Bay',
      },
      {
        name: 'Nkhotakota',
      },
      {
        name: 'Nsanje',
      },
      {
        name: 'Ntcheu',
      },
      {
        name: 'Ntchisi',
      },
      {
        name: 'Phalombe',
      },
      {
        name: 'Rumphi',
      },
      {
        name: 'Salima',
      },
      {
        name: 'Thyolo',
      },
      {
        name: 'Zomba',
      },
    ],
  },
  {
    name: 'Malaysia',
    regions: [
      {
        name: 'Johor',
      },
      {
        name: 'Kedah',
      },
      {
        name: 'Kelantan',
      },
      {
        name: 'Melaka',
      },
      {
        name: 'Negeri Sembilan',
      },
      {
        name: 'Pahang',
      },
      {
        name: 'Perak',
      },
      {
        name: 'Perlis',
      },
      {
        name: 'Pulau Pinang',
      },
      {
        name: 'Sabah',
      },
      {
        name: 'Sarawak',
      },
      {
        name: 'Selangor',
      },
      {
        name: 'Terengganu',
      },
      {
        name: 'Wilayah Persekutuan (Kuala Lumpur)',
      },
      {
        name: 'Wilayah Persekutuan (Labuan)',
      },
      {
        name: 'Wilayah Persekutuan (Putrajaya)',
      },
    ],
  },
  {
    name: 'Maldives',
    regions: [
      {
        name: 'Alifu Alifu',
      },
      {
        name: 'Alifu Dhaalu',
      },
      {
        name: 'Baa',
      },
      {
        name: 'Dhaalu',
      },
      {
        name: 'Faafu',
      },
      {
        name: 'Gaafu Alifu',
      },
      {
        name: 'Gaafu Dhaalu',
      },
      {
        name: 'Gnaviyani',
      },
      {
        name: 'Haa Alifu',
      },
      {
        name: 'Haa Dhaalu',
      },
      {
        name: 'Kaafu',
      },
      {
        name: 'Laamu',
      },
      {
        name: 'Lhaviyani',
      },
      {
        name: 'Malé',
      },
      {
        name: 'Meemu',
      },
      {
        name: 'Noonu',
      },
      {
        name: 'Raa',
      },
      {
        name: 'Seenu',
      },
      {
        name: 'Shaviyani',
      },
      {
        name: 'Thaa',
      },
      {
        name: 'Vaavu',
      },
    ],
  },
  {
    name: 'Mali',
    regions: [
      {
        name: 'Bamako',
      },
      {
        name: 'Gao',
      },
      {
        name: 'Kayes',
      },
      {
        name: 'Kidal',
      },
      {
        name: 'Koulikoro',
      },
      {
        name: 'Mopti',
      },
      {
        name: 'Segou',
      },
      {
        name: 'Sikasso',
      },
      {
        name: 'Tombouctou',
      },
      {
        name: 'Taoudénit',
      },
      {
        name: 'Ménaka',
      },
    ],
  },
  {
    name: 'Malta',
    regions: [
      {
        name: 'Attard',
      },
      {
        name: 'Balzan',
      },
      {
        name: 'Birgu',
      },
      {
        name: 'Birkirkara',
      },
      {
        name: 'Birżebbuġa',
      },
      {
        name: 'Bormla',
      },
      {
        name: 'Dingli',
      },
      {
        name: 'Fgura',
      },
      {
        name: 'Floriana',
      },
      {
        name: 'Fontana',
      },
      {
        name: 'Guda',
      },
      {
        name: 'Gżira',
      },
      {
        name: 'Għajnsielem',
      },
      {
        name: 'Għarb',
      },
      {
        name: 'Għargħur',
      },
      {
        name: 'Għasri',
      },
      {
        name: 'Għaxaq',
      },
      {
        name: 'Ħamrun',
      },
      {
        name: 'Iklin',
      },
      {
        name: 'Isla',
      },
      {
        name: 'Kalkara',
      },
      {
        name: 'Kerċem',
      },
      {
        name: 'Kirkop',
      },
      {
        name: 'Lija',
      },
      {
        name: 'Luqa',
      },
      {
        name: 'Marsa',
      },
      {
        name: 'Marsaskala',
      },
      {
        name: 'Marsaxlokk',
      },
      {
        name: 'Mdina',
      },
      {
        name: 'Mellieħa',
      },
      {
        name: 'Mġarr',
      },
      {
        name: 'Mosta',
      },
      {
        name: 'Mqabba',
      },
      {
        name: 'Msida',
      },
      {
        name: 'Mtarfa',
      },
      {
        name: 'Munxar',
      },
      {
        name: 'Nadur',
      },
      {
        name: 'Naxxar',
      },
      {
        name: 'Paola',
      },
      {
        name: 'Pembroke',
      },
      {
        name: 'Pietà',
      },
      {
        name: 'Qala',
      },
      {
        name: 'Qormi',
      },
      {
        name: 'Qrendi',
      },
      {
        name: 'Rabat Għawdex',
      },
      {
        name: 'Rabat Malta',
      },
      {
        name: 'Safi',
      },
      {
        name: 'San Ġiljan',
      },
      {
        name: 'San Ġwann',
      },
      {
        name: 'San Lawrenz',
      },
      {
        name: 'San Pawl il-Baħar',
      },
      {
        name: 'Sannat',
      },
      {
        name: 'Santa Luċija',
      },
      {
        name: 'Santa Venera',
      },
      {
        name: 'Siġġiewi',
      },
      {
        name: 'Sliema',
      },
      {
        name: 'Swieqi',
      },
      {
        name: 'Tai Xbiex',
      },
      {
        name: 'Tarzien',
      },
      {
        name: 'Valletta',
      },
      {
        name: 'Xagħra',
      },
      {
        name: 'Xewkija',
      },
      {
        name: 'Xgħajra',
      },
      {
        name: 'Żabbar',
      },
      {
        name: 'Żebbuġ Għawde',
      },
      {
        name: 'Żebbuġ Malta',
      },
      {
        name: 'Żejtun',
      },
      {
        name: 'Żurrieq',
      },
    ],
  },
  {
    name: 'Marshall Islands',
    regions: [
      {
        name: 'Ailinglaplap',
      },
      {
        name: 'Ailuk',
      },
      {
        name: 'Arno',
      },
      {
        name: 'Aur',
      },
      {
        name: 'Bikini and Kili',
      },
      {
        name: 'Ebon',
      },
      {
        name: 'Jabat',
      },
      {
        name: 'Jaluit',
      },
      {
        name: 'Kwajalein',
      },
      {
        name: 'Lae',
      },
      {
        name: 'Lib',
      },
      {
        name: 'Likiep',
      },
      {
        name: 'Majuro',
      },
      {
        name: 'Maloelap',
      },
      {
        name: 'Mejit',
      },
      {
        name: 'Namdrik',
      },
      {
        name: 'Namu',
      },
      {
        name: 'Rongelap',
      },
      {
        name: 'Ujae',
      },
      {
        name: 'Utrik',
      },
      {
        name: 'Wotho',
      },
      {
        name: 'Wotje',
      },
    ],
  },
  {
    name: 'Martinique',
    regions: [
      {
        name: 'Martinique',
      },
    ],
  },
  {
    name: 'Mauritania',
    regions: [
      {
        name: 'Adrar',
      },
      {
        name: 'Assaba',
      },
      {
        name: 'Brakna',
      },
      {
        name: 'Dakhlet Nouadhibou',
      },
      {
        name: 'Gorgol',
      },
      {
        name: 'Guidimaka',
      },
      {
        name: 'Hodh Ech Chargui',
      },
      {
        name: 'Hodh El Gharbi',
      },
      {
        name: 'Inchiri',
      },
      {
        name: 'Nouakchott Nord',
      },
      {
        name: 'Nouakchott Ouest',
      },
      {
        name: 'Nouakchott Sud',
      },
      {
        name: 'Tagant',
      },
      {
        name: 'Tiris Zemmour',
      },
      {
        name: 'Trarza',
      },
    ],
  },
  {
    name: 'Mauritius',
    regions: [
      {
        name: 'Agalega Islands',
      },
      {
        name: 'Beau Bassin-Rose Hill',
      },
      {
        name: 'Black River',
      },
      {
        name: 'Cargados Carajos Shoals',
      },
      {
        name: 'Curepipe',
      },
      {
        name: 'Flacq',
      },
      {
        name: 'Grand Port',
      },
      {
        name: 'Moka',
      },
      {
        name: 'Pamplemousses',
      },
      {
        name: 'Plaines Wilhems',
      },
      {
        name: 'Port Louis (City)',
      },
      {
        name: 'Port Louis',
      },
      {
        name: 'Riviere du Rempart',
      },
      {
        name: 'Rodrigues Island',
      },
      {
        name: 'Savanne',
      },
      {
        name: 'Vacoas-Phoenix',
      },
    ],
  },
  {
    name: 'Mayotte',
    regions: [
      {
        name: 'Dzaoudzi',
      },
      {
        name: 'Pamandzi',
      },
      {
        name: 'Mamoudzou',
      },
      {
        name: 'Dembeni',
      },
      {
        name: 'Bandrélé',
      },
      {
        name: 'Kani-Kéli',
      },
      {
        name: 'Bouéni',
      },
      {
        name: 'Chirongui',
      },
      {
        name: 'Sada',
      },
      {
        name: 'Ouangani',
      },
      {
        name: 'Chiconi',
      },
      {
        name: 'Tsingoni',
      },
      {
        name: "M'Tsangamouji",
      },
      {
        name: 'Acoua',
      },
      {
        name: 'Mtsamboro',
      },
      {
        name: 'Bandraboua',
      },
      {
        name: 'Koungou',
      },
    ],
  },
  {
    name: 'Mexico',
    regions: [
      {
        name: 'Aguascalientes',
      },
      {
        name: 'Baja California',
      },
      {
        name: 'Baja California Sur',
      },
      {
        name: 'Campeche',
      },
      {
        name: 'Ciudad de México',
      },
      {
        name: 'Chiapas',
      },
      {
        name: 'Chihuahua',
      },
      {
        name: 'Coahuila de Zaragoza',
      },
      {
        name: 'Colima',
      },
      {
        name: 'Durango',
      },
      {
        name: 'Estado de México',
      },
      {
        name: 'Guanajuato',
      },
      {
        name: 'Guerrero',
      },
      {
        name: 'Hidalgo',
      },
      {
        name: 'Jalisco',
      },
      {
        name: 'Michoacán de Ocampo',
      },
      {
        name: 'Morelos',
      },
      {
        name: 'Nayarit',
      },
      {
        name: 'Nuevo León',
      },
      {
        name: 'Oaxaca',
      },
      {
        name: 'Puebla',
      },
      {
        name: 'Querétaro de Arteaga',
      },
      {
        name: 'Quintana Roo',
      },
      {
        name: 'San Luis Potosí',
      },
      {
        name: 'Sinaloa',
      },
      {
        name: 'Sonora',
      },
      {
        name: 'Tabasco',
      },
      {
        name: 'Tamaulipas',
      },
      {
        name: 'Tlaxcala',
      },
      {
        name: 'Veracruz',
      },
      {
        name: 'Yucatán',
      },
      {
        name: 'Zacatecas',
      },
    ],
  },
  {
    name: 'Micronesia, Federated States of',
    regions: [
      {
        name: 'Chuuk (Truk)',
      },
      {
        name: 'Kosrae',
      },
      {
        name: 'Pohnpei',
      },
      {
        name: 'Yap',
      },
    ],
  },
  {
    name: 'Moldova',
    regions: [
      {
        name: 'Aenii Noi',
      },
      {
        name: 'Basarabeasca',
      },
      {
        name: 'Bălți',
      },
      {
        name: 'Bender',
      },
      {
        name: 'Briceni',
      },
      {
        name: 'Cahul',
      },
      {
        name: 'Cantemir',
      },
      {
        name: 'Călărași',
      },
      {
        name: 'Căușeni',
      },
      {
        name: 'Chișinău',
      },
      {
        name: 'Cimișlia',
      },
      {
        name: 'Criuleni',
      },
      {
        name: 'Dondușeni',
      },
      {
        name: 'Drochia',
      },
      {
        name: 'Dubăsari',
      },
      {
        name: 'Edineț',
      },
      {
        name: 'Fălești',
      },
      {
        name: 'Florești',
      },
      {
        name: 'Găgăuzia',
      },
      {
        name: 'Glodeni',
      },
      {
        name: 'Hîncești',
      },
      {
        name: 'Ialoveni',
      },
      {
        name: 'Leova',
      },
      {
        name: 'Nisporeni',
      },
      {
        name: 'Ocnița',
      },
      {
        name: 'Orhei',
      },
      {
        name: 'Rezina',
      },
      {
        name: 'Rîșcani',
      },
      {
        name: 'Sîngerei',
      },
      {
        name: 'Soroca',
      },
      {
        name: 'Stânga Nistrului',
      },
      {
        name: 'Strășeni',
      },
      {
        name: 'Șoldănești',
      },
      {
        name: 'Ștefan Vodă',
      },
      {
        name: 'Taraclia',
      },
      {
        name: 'Telenești',
      },
      {
        name: 'Ungheni',
      },
    ],
  },
  {
    name: 'Monaco',
    regions: [
      {
        name: 'Colle',
      },
      {
        name: 'Condamine',
      },
      {
        name: 'Fontvieille',
      },
      {
        name: 'Gare',
      },
      {
        name: 'Jardin Exotique',
      },
      {
        name: 'Larvotto',
      },
      {
        name: 'Malbousquet',
      },
      {
        name: 'Monaco-Ville',
      },
      {
        name: 'Moneghetti',
      },
      {
        name: 'Monte-Carlo',
      },
      {
        name: 'Moulins',
      },
      {
        name: 'Port-Hercule',
      },
      {
        name: 'Saint-Roman',
      },
      {
        name: 'Sainte-Dévote',
      },
      {
        name: 'Source',
      },
      {
        name: 'Spélugues',
      },
      {
        name: 'Vallon de la Rousse',
      },
    ],
  },
  {
    name: 'Mongolia',
    regions: [
      {
        name: 'Arhangay',
      },
      {
        name: 'Bayan-Olgiy',
      },
      {
        name: 'Bayanhongor',
      },
      {
        name: 'Bulgan',
      },
      {
        name: 'Darhan',
      },
      {
        name: 'Dornod',
      },
      {
        name: 'Dornogovi',
      },
      {
        name: 'Dundgovi',
      },
      {
        name: 'Dzavhan',
      },
      {
        name: 'Govi-Altay',
      },
      {
        name: 'Govi-Sumber',
      },
      {
        name: 'Hovd',
      },
      {
        name: 'Hovsgol',
      },
      {
        name: 'Omnogovi',
      },
      {
        name: 'Ovorhangay',
      },
      {
        name: 'Selenge',
      },
      {
        name: 'Suhbaatar',
      },
      {
        name: 'Tov',
      },
      {
        name: 'Ulaanbaatar',
      },
      {
        name: 'Uvs',
      },
      {
        name: 'Erdenet',
      },
    ],
  },
  {
    name: 'Montenegro',
    regions: [
      {
        name: 'Andrijevica',
      },
      {
        name: 'Bar',
      },
      {
        name: 'Berane',
      },
      {
        name: 'Bijelo Polje',
      },
      {
        name: 'Budva',
      },
      {
        name: 'Cetinje',
      },
      {
        name: 'Danilovgrad',
      },
      {
        name: 'Gusinje',
      },
      {
        name: 'Herceg Novi',
      },
      {
        name: 'Kolašin',
      },
      {
        name: 'Kotor',
      },
      {
        name: 'Mojkovac',
      },
      {
        name: 'Nikšić',
      },
      {
        name: 'Petnica',
      },
      {
        name: 'Plav',
      },
      {
        name: 'Plužine',
      },
      {
        name: 'Pljevlja',
      },
      {
        name: 'Podgorica',
      },
      {
        name: 'Rožaje',
      },
      {
        name: 'Šavnik',
      },
      {
        name: 'Tivat',
      },
      {
        name: 'Ulcinj',
      },
      {
        name: 'Žabljak',
      },
    ],
  },
  {
    name: 'Montserrat',
    regions: [
      {
        name: 'Saint Anthony',
      },
      {
        name: 'Saint Georges',
      },
      {
        name: "Saint Peter's",
      },
    ],
  },
  {
    name: 'Morocco',
    regions: [
      {
        name: 'Tanger-Tétouan-Al Hoceïma',
      },
      {
        name: "L'Oriental",
      },
      {
        name: 'Fès-Meknès',
      },
      {
        name: 'Rabat-Salé-Kénitra',
      },
      {
        name: 'Béni Mellal-Khénifra',
      },
      {
        name: 'Casablanca-Settat',
      },
      {
        name: 'Marrakech-Safi',
      },
      {
        name: 'Drâa-Tafilalet',
      },
      {
        name: 'Souss-Massa',
      },
      {
        name: 'Guelmim-Oued Noun',
      },
      {
        name: 'Laâyoune-Sakia El Hamra',
      },
      {
        name: 'Dakhla-Oued Ed-Dahab',
      },
    ],
  },
  {
    name: 'Mozambique',
    regions: [
      {
        name: 'Cabo Delgado',
      },
      {
        name: 'Gaza',
      },
      {
        name: 'Inhambane',
      },
      {
        name: 'Manica',
      },
      {
        name: 'Maputo',
      },
      {
        name: 'Maputo (City)',
      },
      {
        name: 'Nampula',
      },
      {
        name: 'Niassa',
      },
      {
        name: 'Sofala',
      },
      {
        name: 'Tete',
      },
      {
        name: 'Zambezia',
      },
    ],
  },
  {
    name: 'Myanmar',
    regions: [
      {
        name: 'Ayeyarwady',
      },
      {
        name: 'Bago',
      },
      {
        name: 'Chin',
      },
      {
        name: 'Kachin',
      },
      {
        name: 'Kayah',
      },
      {
        name: 'Kayin',
      },
      {
        name: 'Magway',
      },
      {
        name: 'Mandalay',
      },
      {
        name: 'Mon',
      },
      {
        name: 'Nay Pyi Taw',
      },
      {
        name: 'Rakhine',
      },
      {
        name: 'Sagaing',
      },
      {
        name: 'Shan',
      },
      {
        name: 'Tanintharyi',
      },
      {
        name: 'Yangon',
      },
    ],
  },
  {
    name: 'Namibia',
    regions: [
      {
        name: 'Erongo',
      },
      {
        name: 'Hardap',
      },
      {
        name: 'Kavango East',
      },
      {
        name: 'Kavango West',
      },
      {
        name: 'Karas',
      },
      {
        name: 'Khomas',
      },
      {
        name: 'Kunene',
      },
      {
        name: 'Ohangwena',
      },
      {
        name: 'Omaheke',
      },
      {
        name: 'Omusati',
      },
      {
        name: 'Oshana',
      },
      {
        name: 'Oshikoto',
      },
      {
        name: 'Otjozondjupa',
      },
      {
        name: 'Zambezi',
      },
    ],
  },
  {
    name: 'Nauru',
    regions: [
      {
        name: 'Aiwo',
      },
      {
        name: 'Anabar',
      },
      {
        name: 'Anetan',
      },
      {
        name: 'Anibare',
      },
      {
        name: 'Baiti',
      },
      {
        name: 'Boe',
      },
      {
        name: 'Buada',
      },
      {
        name: 'Denigomodu',
      },
      {
        name: 'Ewa',
      },
      {
        name: 'Ijuw',
      },
      {
        name: 'Meneng',
      },
      {
        name: 'Nibok',
      },
      {
        name: 'Uaboe',
      },
      {
        name: 'Yaren',
      },
    ],
  },
  {
    name: 'Nepal',
    regions: [
      {
        name: 'Province No. 1',
      },
      {
        name: 'Madhesh Province',
      },
      {
        name: 'Bagmati Province',
      },
      {
        name: 'Gandaki Province',
      },
      {
        name: 'Lumbini Province',
      },
      {
        name: 'Karnali Province',
      },
      {
        name: 'Sudurpashchim Province',
      },
    ],
  },
  {
    name: 'Netherlands',
    regions: [
      {
        name: 'Drenthe',
      },
      {
        name: 'Flevoland',
      },
      {
        name: 'Friesland',
      },
      {
        name: 'Gelderland',
      },
      {
        name: 'Groningen',
      },
      {
        name: 'Limburg',
      },
      {
        name: 'Noord-Brabant',
      },
      {
        name: 'Noord-Holland',
      },
      {
        name: 'Overijssel',
      },
      {
        name: 'Utrecht',
      },
      {
        name: 'Zeeland',
      },
      {
        name: 'Zuid-Holland',
      },
    ],
  },
  {
    name: 'New Caledonia',
    regions: [
      {
        name: 'Iles Loyaute',
      },
      {
        name: 'Nord',
      },
      {
        name: 'Sud',
      },
    ],
  },
  {
    name: 'New Zealand',
    regions: [
      {
        name: 'Auckland',
      },
      {
        name: 'Bay of Plenty',
      },
      {
        name: 'Canterbury',
      },
      {
        name: 'Gisborne',
      },
      {
        name: "Hawke's Bay",
      },
      {
        name: 'Marlborough',
      },
      {
        name: 'Manawatu-Wanganui',
      },
      {
        name: 'Northland',
      },
      {
        name: 'Nelson',
      },
      {
        name: 'Otago',
      },
      {
        name: 'Southland',
      },
      {
        name: 'Taranaki',
      },
      {
        name: 'Tasman',
      },
      {
        name: 'Waikato',
      },
      {
        name: 'Wellington',
      },
      {
        name: 'West Coast',
      },
      {
        name: 'Chatham Islands Territory',
      },
    ],
  },
  {
    name: 'Nicaragua',
    regions: [
      {
        name: 'Boaco',
      },
      {
        name: 'Carazo',
      },
      {
        name: 'Chinandega',
      },
      {
        name: 'Chontales',
      },
      {
        name: 'Estelí',
      },
      {
        name: 'Granada',
      },
      {
        name: 'Jinotega',
      },
      {
        name: 'León',
      },
      {
        name: 'Madriz',
      },
      {
        name: 'Managua',
      },
      {
        name: 'Masaya',
      },
      {
        name: 'Matagalpa',
      },
      {
        name: 'Nueva Segovia',
      },
      {
        name: 'Río San Juan',
      },
      {
        name: 'Rivas',
      },
      {
        name: 'Atlántico Norte',
      },
      {
        name: 'Atlántico Sur',
      },
    ],
  },
  {
    name: 'Niger',
    regions: [
      {
        name: 'Agadez',
      },
      {
        name: 'Diffa',
      },
      {
        name: 'Dosso',
      },
      {
        name: 'Maradi',
      },
      {
        name: 'Niamey',
      },
      {
        name: 'Tahoua',
      },
      {
        name: 'Tillabéri',
      },
      {
        name: 'Zinder',
      },
    ],
  },
  {
    name: 'Nigeria',
    regions: [
      {
        name: 'Abia',
      },
      {
        name: 'Abuja Federal Capital Territory',
      },
      {
        name: 'Adamawa',
      },
      {
        name: 'Akwa Ibom',
      },
      {
        name: 'Anambra',
      },
      {
        name: 'Bauchi',
      },
      {
        name: 'Bayelsa',
      },
      {
        name: 'Benue',
      },
      {
        name: 'Borno',
      },
      {
        name: 'Cross River',
      },
      {
        name: 'Delta',
      },
      {
        name: 'Ebonyi',
      },
      {
        name: 'Edo',
      },
      {
        name: 'Ekiti',
      },
      {
        name: 'Enugu',
      },
      {
        name: 'Gombe',
      },
      {
        name: 'Imo',
      },
      {
        name: 'Jigawa',
      },
      {
        name: 'Kaduna',
      },
      {
        name: 'Kano',
      },
      {
        name: 'Katsina',
      },
      {
        name: 'Kebbi',
      },
      {
        name: 'Kogi',
      },
      {
        name: 'Kwara',
      },
      {
        name: 'Lagos',
      },
      {
        name: 'Nassarawa',
      },
      {
        name: 'Niger',
      },
      {
        name: 'Ogun',
      },
      {
        name: 'Ondo',
      },
      {
        name: 'Osun',
      },
      {
        name: 'Oyo',
      },
      {
        name: 'Plateau',
      },
      {
        name: 'Rivers',
      },
      {
        name: 'Sokoto',
      },
      {
        name: 'Taraba',
      },
      {
        name: 'Yobe',
      },
      {
        name: 'Zamfara',
      },
    ],
  },
  {
    name: 'Niue',
    regions: [
      {
        name: 'Niue',
      },
    ],
  },
  {
    name: 'Norfolk Island',
    regions: [
      {
        name: 'Norfolk Island',
      },
    ],
  },
  {
    name: 'Northern Mariana Islands',
    regions: [
      {
        name: 'Northern Islands',
      },
      {
        name: 'Rota',
      },
      {
        name: 'Saipan',
      },
      {
        name: 'Tinian',
      },
    ],
  },
  {
    name: 'Norway',
    regions: [
      {
        name: 'Akershus',
      },
      {
        name: 'Aust-Agder',
      },
      {
        name: 'Buskerud',
      },
      {
        name: 'Finnmark',
      },
      {
        name: 'Hedmark',
      },
      {
        name: 'Hordaland',
      },
      {
        name: 'Møre og Romsdal',
      },
      {
        name: 'Nordland',
      },
      {
        name: 'Nord-Trøndelag',
      },
      {
        name: 'Oppland',
      },
      {
        name: 'Oslo',
      },
      {
        name: 'Rogaland',
      },
      {
        name: 'Sogn og Fjordane',
      },
      {
        name: 'Sør-Trøndelag',
      },
      {
        name: 'Telemark',
      },
      {
        name: 'Troms',
      },
      {
        name: 'Vest-Agder',
      },
      {
        name: 'Vestfold',
      },
      {
        name: 'Østfold',
      },
      {
        name: 'Jan Mayen',
      },
      {
        name: 'Svalbard',
      },
    ],
  },
  {
    name: 'Oman',
    regions: [
      {
        name: 'Ad Dakhiliyah',
      },
      {
        name: 'Al Buraymi',
      },
      {
        name: 'Al Wusta',
      },
      {
        name: 'Az Zahirah',
      },
      {
        name: 'Janub al Batinah',
      },
      {
        name: 'Janub ash Sharqiyah',
      },
      {
        name: 'Masqat',
      },
      {
        name: 'Musandam',
      },
      {
        name: 'Shamal al Batinah',
      },
      {
        name: 'Shamal ash Sharqiyah',
      },
      {
        name: 'Zufar',
      },
    ],
  },
  {
    name: 'Pakistan',
    regions: [
      {
        name: 'Āzād Kashmīr',
      },
      {
        name: 'Balōchistān',
      },
      {
        name: 'Gilgit-Baltistān',
      },
      {
        name: 'Islāmābād',
      },
      {
        name: 'Khaībar Pakhtūnkhwās',
      },
      {
        name: 'Punjāb',
      },
      {
        name: 'Sindh',
      },
      {
        name: 'Federally Administered Tribal Areas',
      },
    ],
  },
  {
    name: 'Palau',
    regions: [
      {
        name: 'Aimeliik',
      },
      {
        name: 'Airai',
      },
      {
        name: 'Angaur',
      },
      {
        name: 'Hatobohei',
      },
      {
        name: 'Kayangel',
      },
      {
        name: 'Koror',
      },
      {
        name: 'Melekeok',
      },
      {
        name: 'Ngaraard',
      },
      {
        name: 'Ngarchelong',
      },
      {
        name: 'Ngardmau',
      },
      {
        name: 'Ngatpang',
      },
      {
        name: 'Ngchesar',
      },
      {
        name: 'Ngeremlengui',
      },
      {
        name: 'Ngiwal',
      },
      {
        name: 'Peleliu',
      },
      {
        name: 'Sonsoral',
      },
    ],
  },
  {
    name: 'Palestine, State of',
    regions: [
      {
        name: 'Ak Khalīl',
      },
      {
        name: 'Al Quds',
      },
      {
        name: 'Arīḩā wal Aghwār',
      },
      {
        name: 'Bayt Laḩm',
      },
      {
        name: 'Dayr al Balaḩ',
      },
      {
        name: 'Ghazzah',
      },
      {
        name: 'Janīn',
      },
      {
        name: 'Khān Yūnis',
      },
      {
        name: 'Nāblus',
      },
      {
        name: 'Qalqīyah',
      },
      {
        name: 'Rafaḩ',
      },
      {
        name: 'Rām Allāh wal Bīrah',
      },
      {
        name: 'Salfīt',
      },
      {
        name: 'Shamāl Ghazzah',
      },
      {
        name: 'Ţūbās',
      },
      {
        name: 'Ţūlkarm',
      },
    ],
  },
  {
    name: 'Panama',
    regions: [
      {
        name: 'Bocas del Toro',
      },
      {
        name: 'Chiriquí',
      },
      {
        name: 'Coclé',
      },
      {
        name: 'Colón',
      },
      {
        name: 'Darién',
      },
      {
        name: 'Emberá',
      },
      {
        name: 'Herrera',
      },
      {
        name: 'Kuna Yala',
      },
      {
        name: 'Los Santos',
      },
      {
        name: 'Ngäbe-Buglé',
      },
      {
        name: 'Panamá',
      },
      {
        name: 'Panamá Oeste',
      },
      {
        name: 'Veraguas',
      },
    ],
  },
  {
    name: 'Papua New Guinea',
    regions: [
      {
        name: 'Bougainville',
      },
      {
        name: 'Central',
      },
      {
        name: 'Chimbu',
      },
      {
        name: 'East New Britain',
      },
      {
        name: 'East Sepik',
      },
      {
        name: 'Eastern Highlands',
      },
      {
        name: 'Enga',
      },
      {
        name: 'Gulf',
      },
      {
        name: 'Hela',
      },
      {
        name: 'Jiwaka',
      },
      {
        name: 'Madang',
      },
      {
        name: 'Manus',
      },
      {
        name: 'Milne Bay',
      },
      {
        name: 'Morobe',
      },
      {
        name: 'Port Moresby',
      },
      {
        name: 'New Ireland',
      },
      {
        name: 'Northern',
      },
      {
        name: 'Southern Highlands',
      },
      {
        name: 'West New Britain',
      },
      {
        name: 'West Sepik',
      },
      {
        name: 'Western',
      },
      {
        name: 'Western Highlands',
      },
    ],
  },
  {
    name: 'Paraguay',
    regions: [
      {
        name: 'Alto Paraguay',
      },
      {
        name: 'Alto Parana',
      },
      {
        name: 'Amambay',
      },
      {
        name: 'Asuncion',
      },
      {
        name: 'Caaguazu',
      },
      {
        name: 'Caazapa',
      },
      {
        name: 'Canindeyu',
      },
      {
        name: 'Central',
      },
      {
        name: 'Concepcion',
      },
      {
        name: 'Cordillera',
      },
      {
        name: 'Boqueron',
      },
      {
        name: 'Guaira',
      },
      {
        name: 'Itapua',
      },
      {
        name: 'Misiones',
      },
      {
        name: 'Neembucu',
      },
      {
        name: 'Paraguari',
      },
      {
        name: 'Presidente Hayes',
      },
      {
        name: 'San Pedro',
      },
    ],
  },
  {
    name: 'Peru',
    regions: [
      {
        name: 'Amazonas',
      },
      {
        name: 'Ancash',
      },
      {
        name: 'Apurimac',
      },
      {
        name: 'Arequipa',
      },
      {
        name: 'Ayacucho',
      },
      {
        name: 'Cajamarca',
      },
      {
        name: 'Callao',
      },
      {
        name: 'Cusco',
      },
      {
        name: 'Huancavelica',
      },
      {
        name: 'Huanuco',
      },
      {
        name: 'Ica',
      },
      {
        name: 'Junin',
      },
      {
        name: 'La Libertad',
      },
      {
        name: 'Lambayeque',
      },
      {
        name: 'Lima',
      },
      {
        name: 'Loreto',
      },
      {
        name: 'Madre de Dios',
      },
      {
        name: 'Moquegua',
      },
      {
        name: 'Municipalidad Metropolitana de Lima',
      },
      {
        name: 'Pasco',
      },
      {
        name: 'Piura',
      },
      {
        name: 'Puno',
      },
      {
        name: 'San Martin',
      },
      {
        name: 'Tacna',
      },
      {
        name: 'Tumbes',
      },
      {
        name: 'Ucayali',
      },
    ],
  },
  {
    name: 'Philippines',
    regions: [
      {
        name: 'Abra',
      },
      {
        name: 'Agusan del Norte',
      },
      {
        name: 'Agusan del Sur',
      },
      {
        name: 'Aklan',
      },
      {
        name: 'Albay',
      },
      {
        name: 'Antique',
      },
      {
        name: 'Apayao',
      },
      {
        name: 'Aurora',
      },
      {
        name: 'Basilan',
      },
      {
        name: 'Bataan',
      },
      {
        name: 'Batanes',
      },
      {
        name: 'Batangas',
      },
      {
        name: 'Benguet',
      },
      {
        name: 'Biliran',
      },
      {
        name: 'Bohol',
      },
      {
        name: 'Bukidnon',
      },
      {
        name: 'Bulacan',
      },
      {
        name: 'Cagayan',
      },
      {
        name: 'Camarines Norte',
      },
      {
        name: 'Camarines Sur',
      },
      {
        name: 'Camiguin',
      },
      {
        name: 'Capiz',
      },
      {
        name: 'Catanduanes',
      },
      {
        name: 'Cavite',
      },
      {
        name: 'Cebu',
      },
      {
        name: 'Cotabato',
      },
      {
        name: 'Davao del Norte',
      },
      {
        name: 'Davao del Sur',
      },
      {
        name: 'Davao Occidental',
      },
      {
        name: 'Davao Oriental',
      },
      {
        name: 'Davao de Oro',
      },
      {
        name: 'Dinagat Islands',
      },
      {
        name: 'Eastern Samar',
      },
      {
        name: 'Guimaras',
      },
      {
        name: 'Ifugao',
      },
      {
        name: 'Ilocos Norte',
      },
      {
        name: 'Ilocos Sur',
      },
      {
        name: 'Iloilo',
      },
      {
        name: 'Isabela',
      },
      {
        name: 'Kalinga',
      },
      {
        name: 'La Union',
      },
      {
        name: 'Laguna',
      },
      {
        name: 'Lanao del Norte',
      },
      {
        name: 'Lanao del Sur',
      },
      {
        name: 'Leyte',
      },
      {
        name: 'Maguindanao',
      },
      {
        name: 'Marinduque',
      },
      {
        name: 'Masbate',
      },
      {
        name: 'Metro Manila',
      },
      {
        name: 'Mindoro Occidental',
      },
      {
        name: 'Mindoro Oriental',
      },
      {
        name: 'Misamis Occidental',
      },
      {
        name: 'Misamis Oriental',
      },
      {
        name: 'Mountain Province',
      },
      {
        name: 'Negros Occidental',
      },
      {
        name: 'Negros Oriental',
      },
      {
        name: 'Northern Samar',
      },
      {
        name: 'Nueva Ecija',
      },
      {
        name: 'Nueva Vizcaya',
      },
      {
        name: 'Palawan',
      },
      {
        name: 'Pampanga',
      },
      {
        name: 'Pangasinan',
      },
      {
        name: 'Quezon',
      },
      {
        name: 'Quirino',
      },
      {
        name: 'Rizal',
      },
      {
        name: 'Romblon',
      },
      {
        name: 'Samar',
      },
      {
        name: 'Sarangani',
      },
      {
        name: 'Siquijor',
      },
      {
        name: 'Sorsogon',
      },
      {
        name: 'South Cotabato',
      },
      {
        name: 'Southern Leyte',
      },
      {
        name: 'Sultan Kudarat',
      },
      {
        name: 'Sulu',
      },
      {
        name: 'Surigao del Norte',
      },
      {
        name: 'Surigao del Sur',
      },
      {
        name: 'Tarlac',
      },
      {
        name: 'Tawi-Tawi',
      },
      {
        name: 'Zambales',
      },
      {
        name: 'Zamboanga del Norte',
      },
      {
        name: 'Zamboanga del Sur',
      },
      {
        name: 'Zamboanga Sibugay',
      },
    ],
  },
  {
    name: 'Pitcairn',
    regions: [
      {
        name: 'Pitcairn Islands',
      },
    ],
  },
  {
    name: 'Poland',
    regions: [
      {
        name: 'Dolnośląskie',
      },
      {
        name: 'Kujawsko-pomorskie',
      },
      {
        name: 'Łódzkie',
      },
      {
        name: 'Lubelskie',
      },
      {
        name: 'Lubuskie',
      },
      {
        name: 'Małopolskie',
      },
      {
        name: 'Mazowieckie',
      },
      {
        name: 'Opolskie',
      },
      {
        name: 'Podkarpackie',
      },
      {
        name: 'Podlaskie',
      },
      {
        name: 'Pomorskie',
      },
      {
        name: 'Śląskie',
      },
      {
        name: 'Świętokrzyskie',
      },
      {
        name: 'Warmińsko-mazurskie',
      },
      {
        name: 'Wielkopolskie',
      },
      {
        name: 'Zachodniopomorskie',
      },
    ],
  },
  {
    name: 'Portugal',
    regions: [
      {
        name: 'Açores',
      },
      {
        name: 'Aveiro',
      },
      {
        name: 'Beja',
      },
      {
        name: 'Braga',
      },
      {
        name: 'Bragança',
      },
      {
        name: 'Castelo Branco',
      },
      {
        name: 'Coimbra',
      },
      {
        name: 'Évora',
      },
      {
        name: 'Faro',
      },
      {
        name: 'Guarda',
      },
      {
        name: 'Leiria',
      },
      {
        name: 'Lisboa',
      },
      {
        name: 'Madeira',
      },
      {
        name: 'Portalegre',
      },
      {
        name: 'Porto',
      },
      {
        name: 'Santarém',
      },
      {
        name: 'Setúbal',
      },
      {
        name: 'Viana do Castelo',
      },
      {
        name: 'Vila Real',
      },
      {
        name: 'Viseu',
      },
    ],
  },
  {
    name: 'Puerto Rico',
    regions: [
      {
        name: 'Adjuntas',
      },
      {
        name: 'Aguada',
      },
      {
        name: 'Aguadilla',
      },
      {
        name: 'Aguas Buenas',
      },
      {
        name: 'Aibonito',
      },
      {
        name: 'Anasco',
      },
      {
        name: 'Arecibo',
      },
      {
        name: 'Arroyo',
      },
      {
        name: 'Barceloneta',
      },
      {
        name: 'Barranquitas',
      },
      {
        name: 'Bayamon',
      },
      {
        name: 'Cabo Rojo',
      },
      {
        name: 'Caguas',
      },
      {
        name: 'Camuy',
      },
      {
        name: 'Canovanas',
      },
      {
        name: 'Carolina',
      },
      {
        name: 'Cat',
      },
      {
        name: 'Ceiba',
      },
      {
        name: 'Ciales',
      },
      {
        name: 'Cidra',
      },
      {
        name: 'Coamo',
      },
      {
        name: 'Comerio',
      },
      {
        name: 'Corozal',
      },
      {
        name: 'Culebra',
      },
      {
        name: 'Dorado',
      },
      {
        name: 'Fajardo',
      },
      {
        name: 'Florida',
      },
      {
        name: 'Guanica',
      },
      {
        name: 'Guayama',
      },
      {
        name: 'Guayanilla',
      },
      {
        name: 'Guaynabo',
      },
      {
        name: 'Gurabo',
      },
      {
        name: 'Hatillo',
      },
      {
        name: 'Hormigueros',
      },
      {
        name: 'Humacao',
      },
      {
        name: 'Isabe',
      },
      {
        name: 'Juana Diaz',
      },
      {
        name: 'Juncos',
      },
      {
        name: 'Lajas',
      },
      {
        name: 'Lares',
      },
      {
        name: 'Las Marias',
      },
      {
        name: 'Las oiza',
      },
      {
        name: 'Luquillo',
      },
      {
        name: 'Manati',
      },
      {
        name: 'Maricao',
      },
      {
        name: 'Maunabo',
      },
      {
        name: 'Mayaguez',
      },
      {
        name: 'Moca',
      },
      {
        name: 'Morovis',
      },
      {
        name: 'Naguabo',
      },
      {
        name: 'Naranjito',
      },
      {
        name: 'Orocovis',
      },
      {
        name: 'Patillas',
      },
      {
        name: 'Penuelas',
      },
      {
        name: 'Ponce',
      },
      {
        name: 'Quebradillas',
      },
      {
        name: 'Rincon',
      },
      {
        name: 'Rio Grande',
      },
      {
        name: 'Sabana linas',
      },
      {
        name: 'San German',
      },
      {
        name: 'San Juan',
      },
      {
        name: 'San Lorenzo',
      },
      {
        name: 'San Sebastian',
      },
      {
        name: 'Santa Isabel',
      },
      {
        name: 'Toa Alta',
      },
      {
        name: 'Toa Baja',
      },
      {
        name: 'Trujillo Alto',
      },
      {
        name: 'Utuado',
      },
      {
        name: 'Vega Alta',
      },
      {
        name: 'Vega ues',
      },
      {
        name: 'Villalba',
      },
      {
        name: 'Yabucoa',
      },
      {
        name: 'Yauco',
      },
    ],
  },
  {
    name: 'Qatar',
    regions: [
      {
        name: 'Ad Dawḩah',
      },
      {
        name: 'Al Khawr wa adh Dhakhīrah',
      },
      {
        name: 'Al Wakrah',
      },
      {
        name: 'Ar Rayyān',
      },
      {
        name: 'Ash Shamāl',
      },
      {
        name: 'Az̧ Za̧`āyin',
      },
      {
        name: 'Umm Şalāl',
      },
    ],
  },
  {
    name: 'Réunion',
    regions: [
      {
        name: 'Réunion',
      },
    ],
  },
  {
    name: 'Romania',
    regions: [
      {
        name: 'Alba',
      },
      {
        name: 'Arad',
      },
      {
        name: 'Arges',
      },
      {
        name: 'Bacau',
      },
      {
        name: 'Bihor',
      },
      {
        name: 'Bistrita-Nasaud',
      },
      {
        name: 'Botosani',
      },
      {
        name: 'Braila',
      },
      {
        name: 'Brasov',
      },
      {
        name: 'Iifov',
      },
      {
        name: 'Buzau',
      },
      {
        name: 'Calarasi',
      },
      {
        name: 'Caras-Severin',
      },
      {
        name: 'Cluj',
      },
      {
        name: 'Constanta',
      },
      {
        name: 'Covasna',
      },
      {
        name: 'Dambovita',
      },
      {
        name: 'Dolj',
      },
      {
        name: 'Galati',
      },
      {
        name: 'Giurgiu',
      },
      {
        name: 'Gorj',
      },
      {
        name: 'Harghita',
      },
      {
        name: 'Hunedoara',
      },
      {
        name: 'Ialomita',
      },
      {
        name: 'Iasi',
      },
      {
        name: 'Maramures',
      },
      {
        name: 'Mehedinti',
      },
      {
        name: 'Mures',
      },
      {
        name: 'Neamt',
      },
      {
        name: 'Olt',
      },
      {
        name: 'Prahova',
      },
      {
        name: 'Salaj',
      },
      {
        name: 'Satu Mare',
      },
      {
        name: 'Sibiu',
      },
      {
        name: 'Suceava',
      },
      {
        name: 'Teleorman',
      },
      {
        name: 'Timis',
      },
      {
        name: 'Tulcea',
      },
      {
        name: 'Valcea',
      },
      {
        name: 'Vaslui',
      },
      {
        name: 'Vrancea',
      },
    ],
  },
  {
    name: 'Russian Federation',
    regions: [
      {
        name: 'Republic of Adygea',
      },
      {
        name: 'Republic of Altai (Gorno-Altaysk)',
      },
      {
        name: 'Altai Krai',
      },
      {
        name: 'Amur Oblast',
      },
      {
        name: 'Arkhangelsk Oblast',
      },
      {
        name: 'Astrakhan Oblast',
      },
      {
        name: 'Republic of Bashkortostan',
      },
      {
        name: 'Belgorod Oblast',
      },
      {
        name: 'Bryansk Oblast',
      },
      {
        name: 'Republic of Buryatia',
      },
      {
        name: 'Chechen Republic',
      },
      {
        name: 'Chelyabinsk Oblast',
      },
      {
        name: 'Chukotka Autonomous Okrug',
      },
      {
        name: 'Chuvash Republic',
      },
      {
        name: 'Republic of Dagestan',
      },
      {
        name: 'Republic of Ingushetia',
      },
      {
        name: 'Irkutsk Oblast',
      },
      {
        name: 'Ivanovo Oblast',
      },
      {
        name: 'Jewish Autonomous Oblast',
      },
      {
        name: 'Kabardino-Balkar Republic',
      },
      {
        name: 'Kaliningrad Oblast',
      },
      {
        name: 'Republic of Kalmykia',
      },
      {
        name: 'Kaluga Oblast',
      },
      {
        name: 'Kamchatka Krai',
      },
      {
        name: 'Karachay-Cherkess Republic',
      },
      {
        name: 'Republic of Karelia',
      },
      {
        name: 'Khabarovsk Krai',
      },
      {
        name: 'Republic of Khakassia',
      },
      {
        name: 'Khanty-Mansi Autonomous Okrug - Yugra',
      },
      {
        name: 'Kemerovo Oblast',
      },
      {
        name: 'Kirov Oblast',
      },
      {
        name: 'Komi Republic',
      },
      {
        name: 'Kostroma Oblast',
      },
      {
        name: 'Krasnodar Krai',
      },
      {
        name: 'Krasnoyarsk Krai',
      },
      {
        name: 'Kurgan Oblast',
      },
      {
        name: 'Kursk Oblast',
      },
      {
        name: 'Leningrad Oblast',
      },
      {
        name: 'Lipetsk Oblast',
      },
      {
        name: 'Magadan Oblast',
      },
      {
        name: 'Mari El Republic',
      },
      {
        name: 'Republic of Mordovia',
      },
      {
        name: 'Moscow Oblast',
      },
      {
        name: 'Moscow',
      },
      {
        name: 'Murmansk Oblast',
      },
      {
        name: 'Nenets Autonomous Okrug',
      },
      {
        name: 'Nizhny Novgorod Oblast',
      },
      {
        name: 'Novgorod Oblast',
      },
      {
        name: 'Novosibirsk Oblast',
      },
      {
        name: 'Omsk Oblast',
      },
      {
        name: 'Orenburg Oblast',
      },
      {
        name: 'Oryol Oblast',
      },
      {
        name: 'Penza Oblast',
      },
      {
        name: 'Perm Krai',
      },
      {
        name: 'Primorsky Krai',
      },
      {
        name: 'Pskov Oblast',
      },
      {
        name: 'Rostov Oblast',
      },
      {
        name: 'Ryazan Oblast',
      },
      {
        name: 'Saint Petersburg',
      },
      {
        name: 'Sakha (Yakutia) Republic',
      },
      {
        name: 'Sakhalin Oblast',
      },
      {
        name: 'Samara Oblast',
      },
      {
        name: 'Saratov Oblast',
      },
      {
        name: 'Republic of North Ossetia-Alania',
      },
      {
        name: 'Smolensk Oblast',
      },
      {
        name: 'Stavropol Krai',
      },
      {
        name: 'Sverdlovsk Oblast',
      },
      {
        name: 'Tambov Oblast',
      },
      {
        name: 'Republic of Tatarstan',
      },
      {
        name: 'Tomsk Oblast',
      },
      {
        name: 'Tuva Republic',
      },
      {
        name: 'Tula Oblast',
      },
      {
        name: 'Tver Oblast',
      },
      {
        name: 'Tyumen Oblast',
      },
      {
        name: 'Udmurt Republic',
      },
      {
        name: 'Ulyanovsk Oblast',
      },
      {
        name: 'Vladimir Oblast',
      },
      {
        name: 'Volgograd Oblast',
      },
      {
        name: 'Vologda Oblast',
      },
      {
        name: 'Voronezh Oblast',
      },
      {
        name: 'Yamalo-Nenets Autonomous Okrug',
      },
      {
        name: 'Yaroslavl Oblast',
      },
      {
        name: 'Zabaykalsky Krai',
      },
    ],
  },
  {
    name: 'Rwanda',
    regions: [
      {
        name: 'Kigali',
      },
      {
        name: 'Eastern',
      },
      {
        name: 'Northern',
      },
      {
        name: 'Western',
      },
      {
        name: 'Southern',
      },
    ],
  },
  {
    name: 'Saint Barthélemy',
    regions: [
      {
        name: 'Au Vent',
      },
      {
        name: 'Sous le Vent',
      },
    ],
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    regions: [
      {
        name: 'Ascension',
      },
      {
        name: 'Saint Helena',
      },
      {
        name: 'Tristan da Cunha',
      },
    ],
  },
  {
    name: 'Saint Kitts and Nevis',
    regions: [
      {
        name: 'Saint Kitts',
      },
      {
        name: 'Nevis',
      },
    ],
  },
  {
    name: 'Saint Lucia',
    regions: [
      {
        name: 'Anse-la-Raye',
      },
      {
        name: 'Canaries',
      },
      {
        name: 'Castries',
      },
      {
        name: 'Choiseul',
      },
      {
        name: 'Dennery',
      },
      {
        name: 'Gros Islet',
      },
      {
        name: 'Laborie',
      },
      {
        name: 'Micoud',
      },
      {
        name: 'Soufriere',
      },
      {
        name: 'Vieux Fort',
      },
    ],
  },
  {
    name: 'Saint Martin',
    regions: [
      {
        name: 'Saint Martin',
      },
    ],
  },
  {
    name: 'Saint Pierre and Miquelon',
    regions: [
      {
        name: 'Miquelon',
      },
      {
        name: 'Saint Pierre',
      },
    ],
  },
  {
    name: 'Saint Vincent and the Grenadines',
    regions: [
      {
        name: 'Charlotte',
      },
      {
        name: 'Grenadines',
      },
      {
        name: 'Saint Andrew',
      },
      {
        name: 'Saint David',
      },
      {
        name: 'Saint George',
      },
      {
        name: 'Saint Patrick',
      },
    ],
  },
  {
    name: 'Samoa',
    regions: [
      {
        name: "A'ana",
      },
      {
        name: 'Aiga-i-le-Tai',
      },
      {
        name: 'Atua',
      },
      {
        name: "Fa'asaleleaga",
      },
      {
        name: "Gaga'emauga",
      },
      {
        name: 'Gagaifomauga',
      },
      {
        name: 'Palauli',
      },
      {
        name: "Satupa'itea",
      },
      {
        name: 'Tuamasaga',
      },
      {
        name: "Va'a-o-Fonoti",
      },
      {
        name: 'Vaisigano',
      },
    ],
  },
  {
    name: 'San Marino',
    regions: [
      {
        name: 'Acquaviva',
      },
      {
        name: 'Borgo Maggiore',
      },
      {
        name: 'Chiesanuova',
      },
      {
        name: 'Domagnano',
      },
      {
        name: 'Faetano',
      },
      {
        name: 'Fiorentino',
      },
      {
        name: 'Montegiardino',
      },
      {
        name: 'San Marino',
      },
      {
        name: 'Serravalle',
      },
    ],
  },
  {
    name: 'Sao Tome and Principe',
    regions: [
      {
        name: 'Principe',
      },
      {
        name: 'Sao Tome',
      },
    ],
  },
  {
    name: 'Saudi Arabia',
    regions: [
      {
        name: "'Asir",
      },
      {
        name: 'Al Bahah',
      },
      {
        name: 'Al Hudud ash Shamaliyah',
      },
      {
        name: 'Al Jawf',
      },
      {
        name: 'Al Madinah al Munawwarah',
      },
      {
        name: 'Al Qasim',
      },
      {
        name: 'Ar Riyad',
      },
      {
        name: 'Ash Sharqiyah',
      },
      {
        name: "Ha'il",
      },
      {
        name: 'Jazan',
      },
      {
        name: 'Makkah al Mukarramah',
      },
      {
        name: 'Najran',
      },
      {
        name: 'Tabuk',
      },
    ],
  },
  {
    name: 'Senegal',
    regions: [
      {
        name: 'Dakar',
      },
      {
        name: 'Diourbel',
      },
      {
        name: 'Fatick',
      },
      {
        name: 'Kaffrine',
      },
      {
        name: 'Kaolack',
      },
      {
        name: 'Kedougou',
      },
      {
        name: 'Kolda',
      },
      {
        name: 'Louga',
      },
      {
        name: 'Matam',
      },
      {
        name: 'Saint-Louis',
      },
      {
        name: 'Sedhiou',
      },
      {
        name: 'Tambacounda',
      },
      {
        name: 'Thies',
      },
      {
        name: 'Ziguinchor',
      },
    ],
  },
  {
    name: 'Serbia',
    regions: [
      {
        name: 'Beograd (Belgrade)',
      },
      {
        name: 'Borski',
      },
      {
        name: 'Braničevski',
      },
      {
        name: 'Jablanički',
      },
      {
        name: 'Južnobački',
      },
      {
        name: 'Južnobanatski',
      },
      {
        name: 'Kolubarski',
      },
      {
        name: 'Kosovski',
      },
      {
        name: 'Kosovsko-Mitrovački',
      },
      {
        name: 'Kosovsko-Pomoravski',
      },
      {
        name: 'Mačvanski',
      },
      {
        name: 'Moravički',
      },
      {
        name: 'Nišavski',
      },
      {
        name: 'Pčinjski',
      },
      {
        name: 'Pećki',
      },
      {
        name: 'Pirotski',
      },
      {
        name: 'Podunavski',
      },
      {
        name: 'Pomoravski',
      },
      {
        name: 'Prizrenski',
      },
      {
        name: 'Rasinski',
      },
      {
        name: 'Raški',
      },
      {
        name: 'Severnobački',
      },
      {
        name: 'Severnobanatski',
      },
      {
        name: 'Srednjebanatski',
      },
      {
        name: 'Sremski',
      },
      {
        name: 'Šumadijski',
      },
      {
        name: 'Toplički',
      },
      {
        name: 'Zaječarski',
      },
      {
        name: 'Zapadnobački',
      },
      {
        name: 'Zlatiborski',
      },
    ],
  },
  {
    name: 'Seychelles',
    regions: [
      {
        name: 'Anse aux Pins',
      },
      {
        name: 'Anse Boileau',
      },
      {
        name: 'Anse Etoile',
      },
      {
        name: 'Anse Royale',
      },
      {
        name: 'Anu Cap',
      },
      {
        name: 'Baie Lazare',
      },
      {
        name: 'Baie Sainte Anne',
      },
      {
        name: 'Beau Vallon',
      },
      {
        name: 'Bel Air',
      },
      {
        name: 'Bel Ombre',
      },
      {
        name: 'Cascade',
      },
      {
        name: 'Glacis',
      },
      {
        name: "Grand'Anse Mahe",
      },
      {
        name: "Grand'Anse Praslin",
      },
      {
        name: 'La Digue',
      },
      {
        name: 'La Riviere Anglaise',
      },
      {
        name: 'Les Mamelles',
      },
      {
        name: 'Mont Buxton',
      },
      {
        name: 'Mont Fleuri',
      },
      {
        name: 'Plaisance',
      },
      {
        name: 'Pointe La Rue',
      },
      {
        name: 'Port Glaud',
      },
      {
        name: 'Roche Caiman',
      },
      {
        name: 'Saint Louis',
      },
      {
        name: 'Takamaka',
      },
    ],
  },
  {
    name: 'Sierra Leone',
    regions: [
      {
        name: 'Eastern',
      },
      {
        name: 'Northern',
      },
      {
        name: 'Southern',
      },
      {
        name: 'Western',
      },
    ],
  },
  {
    name: 'Singapore',
    regions: [
      {
        name: 'Central Singapore',
      },
      {
        name: 'North East',
      },
      {
        name: 'North West',
      },
      {
        name: 'South East',
      },
      {
        name: 'South West',
      },
    ],
  },
  {
    name: 'Sint Maarten (Dutch part)',
    regions: [
      {
        name: 'Sint Maarten',
      },
    ],
  },
  {
    name: 'Slovakia',
    regions: [
      {
        name: 'Banskobystricky',
      },
      {
        name: 'Bratislavsky',
      },
      {
        name: 'Kosicky',
      },
      {
        name: 'Nitriansky',
      },
      {
        name: 'Presovsky',
      },
      {
        name: 'Trenciansky',
      },
      {
        name: 'Trnavsky',
      },
      {
        name: 'Zilinsky',
      },
    ],
  },
  {
    name: 'Slovenia',
    regions: [
      {
        name: 'Ajdovscina',
      },
      {
        name: 'Apace',
      },
      {
        name: 'Beltinci',
      },
      {
        name: 'Benedikt',
      },
      {
        name: 'Bistrica ob Sotli',
      },
      {
        name: 'Bled',
      },
      {
        name: 'Bloke',
      },
      {
        name: 'Bohinj',
      },
      {
        name: 'Borovnica',
      },
      {
        name: 'Bovec',
      },
      {
        name: 'Braslovce',
      },
      {
        name: 'Brda',
      },
      {
        name: 'Brezice',
      },
      {
        name: 'Brezovica',
      },
      {
        name: 'Cankova',
      },
      {
        name: 'Celje',
      },
      {
        name: 'Cerklje na Gorenjskem',
      },
      {
        name: 'Cerknica',
      },
      {
        name: 'Cerkno',
      },
      {
        name: 'Cerkvenjak',
      },
      {
        name: 'Cirkulane',
      },
      {
        name: 'Crensovci',
      },
      {
        name: 'Crna na Koroskem',
      },
      {
        name: 'Crnomelj',
      },
      {
        name: 'Destrnik',
      },
      {
        name: 'Divaca',
      },
      {
        name: 'Dobje',
      },
      {
        name: 'Dobrepolje',
      },
      {
        name: 'Dobrna',
      },
      {
        name: 'Dobrova-Polhov Gradec',
      },
      {
        name: 'Dobrovnik',
      },
      {
        name: 'Dol pri Ljubljani',
      },
      {
        name: 'Dolenjske Toplice',
      },
      {
        name: 'Domzale',
      },
      {
        name: 'Dornava',
      },
      {
        name: 'Dravograd',
      },
      {
        name: 'Duplek',
      },
      {
        name: 'Gorenja Vas-Poljane',
      },
      {
        name: 'Gorisnica',
      },
      {
        name: 'Gorje',
      },
      {
        name: 'Gornja Radgona',
      },
      {
        name: 'Gornji Grad',
      },
      {
        name: 'Gornji Petrovci',
      },
      {
        name: 'Grad',
      },
      {
        name: 'Grosuplje',
      },
      {
        name: 'Hajdina',
      },
      {
        name: 'Hoce-Slivnica',
      },
      {
        name: 'Hodos',
      },
      {
        name: 'Horjul',
      },
      {
        name: 'Hrastnik',
      },
      {
        name: 'Hrpelje-Kozina',
      },
      {
        name: 'Idrija',
      },
      {
        name: 'Ig',
      },
      {
        name: 'Ilirska Bistrica',
      },
      {
        name: 'Ivancna Gorica',
      },
      {
        name: 'Izola',
      },
      {
        name: 'Jesenice',
      },
      {
        name: 'Jursinci',
      },
      {
        name: 'Kamnik',
      },
      {
        name: 'Kanal',
      },
      {
        name: 'Kidricevo',
      },
      {
        name: 'Kobarid',
      },
      {
        name: 'Kobilje',
      },
      {
        name: 'Kocevje',
      },
      {
        name: 'Komen',
      },
      {
        name: 'Komenda',
      },
      {
        name: 'Koper',
      },
      {
        name: 'Kodanjevica na Krki',
      },
      {
        name: 'Kostel',
      },
      {
        name: 'Kozje',
      },
      {
        name: 'Kranj',
      },
      {
        name: 'Kranjska Gora',
      },
      {
        name: 'Krizevci',
      },
      {
        name: 'Krsko',
      },
      {
        name: 'Kungota',
      },
      {
        name: 'Kuzma',
      },
      {
        name: 'Lasko',
      },
      {
        name: 'Lenart',
      },
      {
        name: 'Lendava',
      },
      {
        name: 'Litija',
      },
      {
        name: 'Ljubljana',
      },
      {
        name: 'Ljubno',
      },
      {
        name: 'Ljutomer',
      },
      {
        name: 'Log-Dragomer',
      },
      {
        name: 'Logatec',
      },
      {
        name: 'Loska Dolina',
      },
      {
        name: 'Loski Potok',
      },
      {
        name: 'Lovrenc na Pohorju',
      },
      {
        name: 'Lukovica',
      },
      {
        name: 'Luce',
      },
      {
        name: 'Majsperk',
      },
      {
        name: 'Makole',
      },
      {
        name: 'Maribor',
      },
      {
        name: 'Markovci',
      },
      {
        name: 'Medvode',
      },
      {
        name: 'Menges',
      },
      {
        name: 'Metlika',
      },
      {
        name: 'Mezica',
      },
      {
        name: 'Miklavz na Dravskem Polju',
      },
      {
        name: 'Miren-Kostanjevica',
      },
      {
        name: 'Mirna',
      },
      {
        name: 'Mirna Pec',
      },
      {
        name: 'Mislinja',
      },
      {
        name: 'Mokronog-Trebelno',
      },
      {
        name: 'Moravce',
      },
      {
        name: 'Moravske Toplice',
      },
      {
        name: 'Mozirje',
      },
      {
        name: 'Murska Sobota',
      },
      {
        name: 'Naklo',
      },
      {
        name: 'Nazarje',
      },
      {
        name: 'Nova Gorica',
      },
      {
        name: 'Novo Mesto',
      },
      {
        name: 'Odranci',
      },
      {
        name: 'Ormoz',
      },
      {
        name: 'Osilnica',
      },
      {
        name: 'Pesnica',
      },
      {
        name: 'Piran',
      },
      {
        name: 'Pivka',
      },
      {
        name: 'Podcetrtek',
      },
      {
        name: 'Podlehnik',
      },
      {
        name: 'Podvelka',
      },
      {
        name: 'Poljcane',
      },
      {
        name: 'Postojna',
      },
      {
        name: 'Prebold',
      },
      {
        name: 'Preddvor',
      },
      {
        name: 'Prevalje',
      },
      {
        name: 'Ptuj',
      },
      {
        name: 'Race-Fram',
      },
      {
        name: 'Radece',
      },
      {
        name: 'Radenci',
      },
      {
        name: 'Radlje ob Dravi',
      },
      {
        name: 'Radovljica',
      },
      {
        name: 'Ravne na Koroskem',
      },
      {
        name: 'Razkrizje',
      },
      {
        name: 'Recica ob Savinji',
      },
      {
        name: 'Rence-Vogrsko',
      },
      {
        name: 'Ribnica',
      },
      {
        name: 'Ribnica na Poboriu',
      },
      {
        name: 'Rogaska Slatina',
      },
      {
        name: 'Rogasovci',
      },
      {
        name: 'Rogatec',
      },
      {
        name: 'Ruse',
      },
      {
        name: 'Salovci',
      },
      {
        name: 'Selnica ob Dravi',
      },
      {
        name: 'Semic',
      },
      {
        name: 'Sempeter-Vrtojba',
      },
      {
        name: 'Sencur',
      },
      {
        name: 'Sentilj',
      },
      {
        name: 'Sentjernej',
      },
      {
        name: 'Sentjur',
      },
      {
        name: 'Sentrupert',
      },
      {
        name: 'Sevnica',
      },
      {
        name: 'Sezana',
      },
      {
        name: 'Skocjan',
      },
      {
        name: 'Skofja Loka',
      },
      {
        name: 'Skofljica',
      },
      {
        name: 'Slovenj Gradec',
      },
      {
        name: 'Slovenska Bistrica',
      },
      {
        name: 'Slovenske Konjice',
      },
      {
        name: 'Smarje pri elsah',
      },
      {
        name: 'Smarjeske Toplice',
      },
      {
        name: 'Smartno ob Paki',
      },
      {
        name: 'Smartno pri Litiji',
      },
      {
        name: 'Sodrazica',
      },
      {
        name: 'Solcava',
      },
      {
        name: 'Sostanj',
      },
      {
        name: 'Sredisce ob Dravi',
      },
      {
        name: 'Starse',
      },
      {
        name: 'Store',
      },
      {
        name: 'Straza',
      },
      {
        name: 'Sveta Ana',
      },
      {
        name: 'Sveta Trojica v Slovenskih Goricah',
      },
      {
        name: 'Sveta Andraz v Slovenskih Goricah',
      },
      {
        name: 'Sveti Jurij',
      },
      {
        name: 'Sveti Jurij v Slovenskih Goricah',
      },
      {
        name: 'Sveti Tomaz',
      },
      {
        name: 'Tabor',
      },
      {
        name: 'Tisina',
      },
      {
        name: 'Tolmin',
      },
      {
        name: 'Trbovlje',
      },
      {
        name: 'Trebnje',
      },
      {
        name: 'Trnovska Vas',
      },
      {
        name: 'Trzin',
      },
      {
        name: 'Trzic',
      },
      {
        name: 'Turnisce',
      },
      {
        name: 'Velenje',
      },
      {
        name: 'Velika Polana',
      },
      {
        name: 'Velike Lasce',
      },
      {
        name: 'Verzej',
      },
      {
        name: 'Videm',
      },
      {
        name: 'Vipava',
      },
      {
        name: 'Vitanje',
      },
      {
        name: 'Vodice',
      },
      {
        name: 'Vojnik',
      },
      {
        name: 'Vransko',
      },
      {
        name: 'Vrhnika',
      },
      {
        name: 'Vuzenica',
      },
      {
        name: 'Zagorje ob Savi',
      },
      {
        name: 'Zavrc',
      },
      {
        name: 'Zrece',
      },
      {
        name: 'Zalec',
      },
      {
        name: 'Zelezniki',
      },
      {
        name: 'Zetale',
      },
      {
        name: 'Ziri',
      },
      {
        name: 'Zirovnica',
      },
      {
        name: 'Zuzemberk',
      },
    ],
  },
  {
    name: 'Solomon Islands',
    regions: [
      {
        name: 'Central',
      },
      {
        name: 'Choiseul',
      },
      {
        name: 'Guadalcanal',
      },
      {
        name: 'Honiara',
      },
      {
        name: 'Isabel',
      },
      {
        name: 'Makira-Ulawa',
      },
      {
        name: 'Malaita',
      },
      {
        name: 'Rennell and Bellona',
      },
      {
        name: 'Temotu',
      },
      {
        name: 'Western',
      },
    ],
  },
  {
    name: 'Somalia',
    regions: [
      {
        name: 'Awdal',
      },
      {
        name: 'Bakool',
      },
      {
        name: 'Banaadir',
      },
      {
        name: 'Bari',
      },
      {
        name: 'Bay',
      },
      {
        name: 'Galguduud',
      },
      {
        name: 'Gedo',
      },
      {
        name: 'Hiiraan',
      },
      {
        name: 'Jubbada Dhexe',
      },
      {
        name: 'Jubbada Hoose',
      },
      {
        name: 'Mudug',
      },
      {
        name: 'Nugaal',
      },
      {
        name: 'Sanaag',
      },
      {
        name: 'Shabeellaha Dhexe',
      },
      {
        name: 'Shabeellaha Hoose',
      },
      {
        name: 'Sool',
      },
      {
        name: 'Togdheer',
      },
      {
        name: 'Woqooyi Galbeed',
      },
    ],
  },
  {
    name: 'South Africa',
    regions: [
      {
        name: 'Eastern Cape',
      },
      {
        name: 'Free State',
      },
      {
        name: 'Gauteng',
      },
      {
        name: 'KwaZulu-Natal',
      },
      {
        name: 'Limpopo',
      },
      {
        name: 'Mpumalanga',
      },
      {
        name: 'Northern Cape',
      },
      {
        name: 'North West',
      },
      {
        name: 'Western Cape',
      },
    ],
  },
  {
    name: 'South Georgia and South Sandwich Islands',
    regions: [
      {
        name: 'Bird Island',
      },
      {
        name: 'Bristol Island',
      },
      {
        name: 'Clerke Rocks',
      },
      {
        name: 'Montagu Island',
      },
      {
        name: 'Saunders Island',
      },
      {
        name: 'South Georgia',
      },
      {
        name: 'Southern Thule',
      },
      {
        name: 'Traversay Islands',
      },
    ],
  },
  {
    name: 'South Sudan',
    regions: [
      {
        name: 'Central Equatoria',
      },
      {
        name: 'Eastern Equatoria',
      },
      {
        name: 'Jonglei',
      },
      {
        name: 'Lakes',
      },
      {
        name: 'Northern Bahr el Ghazal',
      },
      {
        name: 'Unity',
      },
      {
        name: 'Upper Nile',
      },
      {
        name: 'Warrap',
      },
      {
        name: 'Western Bahr el Ghazal',
      },
      {
        name: 'Western Equatoria',
      },
    ],
  },
  {
    name: 'Spain',
    regions: [
      {
        name: 'Albacete',
      },
      {
        name: 'Alicante',
      },
      {
        name: 'Almería',
      },
      {
        name: 'Araba/Álava',
      },
      {
        name: 'Asturias',
      },
      {
        name: 'Ávila',
      },
      {
        name: 'Badajoz',
      },
      {
        name: 'Barcelona',
      },
      {
        name: 'Bizkaia',
      },
      {
        name: 'Burgos',
      },
      {
        name: 'Cáceres',
      },
      {
        name: 'Cádiz',
      },
      {
        name: 'Cantabria',
      },
      {
        name: 'Castellón/Castelló',
      },
      {
        name: 'Ceuta',
      },
      {
        name: 'Ciudad Real',
      },
      {
        name: 'Córdoba',
      },
      {
        name: 'A Coruña',
      },
      {
        name: 'Cuenca',
      },
      {
        name: 'Gipuzkoa',
      },
      {
        name: 'Girona',
      },
      {
        name: 'Granada',
      },
      {
        name: 'Guadalajara',
      },
      {
        name: 'Huelva',
      },
      {
        name: 'Huesca',
      },
      {
        name: 'Illes Balears',
      },
      {
        name: 'Jaén',
      },
      {
        name: 'León',
      },
      {
        name: 'Lleida',
      },
      {
        name: 'Lugo',
      },
      {
        name: 'Madrid',
      },
      {
        name: 'Málaga',
      },
      {
        name: 'Melilla',
      },
      {
        name: 'Murcia',
      },
      {
        name: 'Navarra/Nafarroa',
      },
      {
        name: 'Ourense',
      },
      {
        name: 'Palencia',
      },
      {
        name: 'Las Palmas',
      },
      {
        name: 'Pontevedra',
      },
      {
        name: 'La Rioja',
      },
      {
        name: 'Salamanca',
      },
      {
        name: 'Santa Cruz de Tenerife',
      },
      {
        name: 'Segovia',
      },
      {
        name: 'Sevilla',
      },
      {
        name: 'Soria',
      },
      {
        name: 'Tarragona',
      },
      {
        name: 'Teruel',
      },
      {
        name: 'Toledo',
      },
      {
        name: 'Valencia/València',
      },
      {
        name: 'Valladolid',
      },
      {
        name: 'Zamora',
      },
      {
        name: 'Zaragoza',
      },
    ],
  },
  {
    name: 'Sri Lanka',
    regions: [
      {
        name: 'Basnahira',
      },
      {
        name: 'Dakunu',
      },
      {
        name: 'Madhyama',
      },
      {
        name: 'Naegenahira',
      },
      {
        name: 'Sabaragamuwa',
      },
      {
        name: 'Uturu',
      },
      {
        name: 'Uturumaeda',
      },
      {
        name: 'Vayamba',
      },
      {
        name: 'Uva',
      },
    ],
  },
  {
    name: 'Sudan',
    regions: [
      {
        name: 'Al Bahr al Ahmar',
      },
      {
        name: 'Al Jazirah',
      },
      {
        name: 'Al Khartum',
      },
      {
        name: 'Al Qadarif',
      },
      {
        name: 'An Nil al Abyad',
      },
      {
        name: 'An Nil al Azraq',
      },
      {
        name: 'Ash Shamaliyah',
      },
      {
        name: 'Gharb Darfur',
      },
      {
        name: 'Gharb Kurdufan',
      },
      {
        name: 'Janub Darfur',
      },
      {
        name: 'Janub Kurdufan',
      },
      {
        name: 'Kassala',
      },
      {
        name: 'Nahr an Nil',
      },
      {
        name: 'Shamal Darfur',
      },
      {
        name: 'Sharq Darfur',
      },
      {
        name: 'Shiamal Kurdufan',
      },
      {
        name: 'Sinnar',
      },
      {
        name: 'Wasat Darfur Zalinjay',
      },
    ],
  },
  {
    name: 'Suriname',
    regions: [
      {
        name: 'Brokopondo',
      },
      {
        name: 'Commewijne',
      },
      {
        name: 'Coronie',
      },
      {
        name: 'Marowijne',
      },
      {
        name: 'Nickerie',
      },
      {
        name: 'Para',
      },
      {
        name: 'Paramaribo',
      },
      {
        name: 'Saramacca',
      },
      {
        name: 'Sipaliwini',
      },
      {
        name: 'Wanica',
      },
    ],
  },
  {
    name: 'Swaziland',
    regions: [
      {
        name: 'Hhohho',
      },
      {
        name: 'Lubombo',
      },
      {
        name: 'Manzini',
      },
      {
        name: 'Shiselweni',
      },
    ],
  },
  {
    name: 'Sweden',
    regions: [
      {
        name: 'Blekinge',
      },
      {
        name: 'Dalarna',
      },
      {
        name: 'Gävleborg',
      },
      {
        name: 'Gotland',
      },
      {
        name: 'Halland',
      },
      {
        name: 'Jämtland',
      },
      {
        name: 'Jönköping',
      },
      {
        name: 'Kalmar',
      },
      {
        name: 'Kronoberg',
      },
      {
        name: 'Norrbotten',
      },
      {
        name: 'Örebro',
      },
      {
        name: 'Östergötland',
      },
      {
        name: 'Skåne',
      },
      {
        name: 'Södermanland',
      },
      {
        name: 'Stockholm',
      },
      {
        name: 'Uppsala',
      },
      {
        name: 'Värmland',
      },
      {
        name: 'Västerbotten',
      },
      {
        name: 'Västernorrland',
      },
      {
        name: 'Västmanland',
      },
      {
        name: 'Västra Götaland',
      },
    ],
  },
  {
    name: 'Switzerland',
    regions: [
      {
        name: 'Aargau',
      },
      {
        name: 'Appenzell Ausserrhoden',
      },
      {
        name: 'Appenzell Innerhoden',
      },
      {
        name: 'Basel-Landschaft',
      },
      {
        name: 'Basel-Stadt',
      },
      {
        name: 'Bern',
      },
      {
        name: 'Fribourg',
      },
      {
        name: 'Genève',
      },
      {
        name: 'Glarus',
      },
      {
        name: 'Graubünden',
      },
      {
        name: 'Jura',
      },
      {
        name: 'Luzern',
      },
      {
        name: 'Neuchâtel',
      },
      {
        name: 'Nidwalden',
      },
      {
        name: 'Obwalden',
      },
      {
        name: 'Sankt Gallen',
      },
      {
        name: 'Schaffhausen',
      },
      {
        name: 'Schwyz',
      },
      {
        name: 'Solothurn',
      },
      {
        name: 'Thurgau',
      },
      {
        name: 'Ticino',
      },
      {
        name: 'Uri',
      },
      {
        name: 'Valais',
      },
      {
        name: 'Vaud',
      },
      {
        name: 'Zug',
      },
      {
        name: 'Zürich',
      },
    ],
  },
  {
    name: 'Syrian Arab Republic',
    regions: [
      {
        name: 'Al Hasakah',
      },
      {
        name: 'Al Ladhiqiyah',
      },
      {
        name: 'Al Qunaytirah',
      },
      {
        name: 'Ar Raqqah',
      },
      {
        name: "As Suwayda'",
      },
      {
        name: "Dar'a",
      },
      {
        name: 'Dayr az Zawr',
      },
      {
        name: 'Dimashq',
      },
      {
        name: 'Halab',
      },
      {
        name: 'Hamah',
      },
      {
        name: 'Hims',
      },
      {
        name: 'Idlib',
      },
      {
        name: 'Rif Dimashq',
      },
      {
        name: 'Tartus',
      },
    ],
  },
  {
    name: 'Taiwan',
    regions: [
      {
        name: 'Changhua',
      },
      {
        name: 'Chiayi',
      },
      {
        name: 'Hsinchu',
      },
      {
        name: 'Hualien',
      },
      {
        name: 'Kaohsiung',
      },
      {
        name: 'Keelung',
      },
      {
        name: 'Kinmen',
      },
      {
        name: 'Lienchiang',
      },
      {
        name: 'Miaoli',
      },
      {
        name: 'Nantou',
      },
      {
        name: 'Penghu',
      },
      {
        name: 'New Taipei',
      },
      {
        name: 'Pingtung',
      },
      {
        name: 'Taichung',
      },
      {
        name: 'Tainan',
      },
      {
        name: 'Taipei',
      },
      {
        name: 'Taitung',
      },
      {
        name: 'Taoyuan',
      },
      {
        name: 'Yilan',
      },
      {
        name: 'Yunlin',
      },
    ],
  },
  {
    name: 'Tajikistan',
    regions: [
      {
        name: 'Dushanbe',
      },
      {
        name: 'Kŭhistoni Badakhshon',
      },
      {
        name: 'Khatlon',
      },
      {
        name: 'Sughd',
      },
    ],
  },
  {
    name: 'Tanzania, United Republic of',
    regions: [
      {
        name: 'Arusha',
      },
      {
        name: 'Coast',
      },
      {
        name: 'Dar es Salaam',
      },
      {
        name: 'Dodoma',
      },
      {
        name: 'Iringa',
      },
      {
        name: 'Kagera',
      },
      {
        name: 'Kigoma',
      },
      {
        name: 'Kilimanjaro',
      },
      {
        name: 'Lindi',
      },
      {
        name: 'Manyara',
      },
      {
        name: 'Mara',
      },
      {
        name: 'Mbeya',
      },
      {
        name: 'Morogoro',
      },
      {
        name: 'Mtwara',
      },
      {
        name: 'Mwanza',
      },
      {
        name: 'Pemba North',
      },
      {
        name: 'Pemba South',
      },
      {
        name: 'Rukwa',
      },
      {
        name: 'Ruvuma',
      },
      {
        name: 'Shinyanga',
      },
      {
        name: 'Singida',
      },
      {
        name: 'Tabora',
      },
      {
        name: 'Tanga',
      },
      {
        name: 'Zanzibar North',
      },
      {
        name: 'Zanzibar Central/South',
      },
      {
        name: 'Zanzibar Urban/West',
      },
    ],
  },
  {
    name: 'Thailand',
    regions: [
      {
        name: 'Amnat Charoen',
      },
      {
        name: 'Ang Thong',
      },
      {
        name: 'Bueng Kan',
      },
      {
        name: 'Buri Ram',
      },
      {
        name: 'Chachoengsao',
      },
      {
        name: 'Chai Nat',
      },
      {
        name: 'Chaiyaphum',
      },
      {
        name: 'Chanthaburi',
      },
      {
        name: 'Chiang Mai',
      },
      {
        name: 'Chiang Rai',
      },
      {
        name: 'Chon Buri',
      },
      {
        name: 'Chumphon',
      },
      {
        name: 'Kalasin',
      },
      {
        name: 'Kamphaeng Phet',
      },
      {
        name: 'Kanchanaburi',
      },
      {
        name: 'Khon Kaen',
      },
      {
        name: 'Krabi',
      },
      {
        name: 'Krung Thep Mahanakhon (Bangkok)',
      },
      {
        name: 'Lampang',
      },
      {
        name: 'Lamphun',
      },
      {
        name: 'Loei',
      },
      {
        name: 'Lop Buri',
      },
      {
        name: 'Mae Hong Son',
      },
      {
        name: 'Maha Sarakham',
      },
      {
        name: 'Mukdahan',
      },
      {
        name: 'Nakhon Nayok',
      },
      {
        name: 'Nakhon Phathom',
      },
      {
        name: 'Nakhon Phanom',
      },
      {
        name: 'Nakhon Ratchasima',
      },
      {
        name: 'Nakhon Sawan',
      },
      {
        name: 'Nakhon Si Thammarat',
      },
      {
        name: 'Nan',
      },
      {
        name: 'Narathiwat',
      },
      {
        name: 'Nong Bua Lam Phu',
      },
      {
        name: 'Nong Khai',
      },
      {
        name: 'Nonthaburi',
      },
      {
        name: 'Pathum Thani',
      },
      {
        name: 'Pattani',
      },
      {
        name: 'Phangnga',
      },
      {
        name: 'Phatthalung',
      },
      {
        name: 'Phayao',
      },
      {
        name: 'Phetchabun',
      },
      {
        name: 'Phetchaburi',
      },
      {
        name: 'Phichit',
      },
      {
        name: 'Phitsanulok',
      },
      {
        name: 'Phra Nakhon Si Ayutthaya',
      },
      {
        name: 'Phrae',
      },
      {
        name: 'Phuket',
      },
      {
        name: 'Prachin Buri',
      },
      {
        name: 'Prachuap Khiri Khan',
      },
      {
        name: 'Ranong',
      },
      {
        name: 'Ratchaburi',
      },
      {
        name: 'Rayong',
      },
      {
        name: 'Roi Et',
      },
      {
        name: 'Sa Kaeo',
      },
      {
        name: 'Sakon Nakhon',
      },
      {
        name: 'Samut Prakan',
      },
      {
        name: 'Samut Sakhon',
      },
      {
        name: 'Samut Songkhram',
      },
      {
        name: 'Saraburi',
      },
      {
        name: 'Satun',
      },
      {
        name: 'Sing Buri',
      },
      {
        name: 'Si Sa ket',
      },
      {
        name: 'Songkhla',
      },
      {
        name: 'Sukhothai',
      },
      {
        name: 'Suphan Buri',
      },
      {
        name: 'Surat Thani',
      },
      {
        name: 'Surin',
      },
      {
        name: 'Tak',
      },
      {
        name: 'Trang',
      },
      {
        name: 'Trat',
      },
      {
        name: 'Ubon Ratchathani',
      },
      {
        name: 'Udon Thani',
      },
      {
        name: 'Uthai Thani',
      },
      {
        name: 'Uttaradit',
      },
      {
        name: 'Yala',
      },
      {
        name: 'Yasothon',
      },
    ],
  },
  {
    name: 'Timor-Leste',
    regions: [
      {
        name: 'Aileu',
      },
      {
        name: 'Ainaro',
      },
      {
        name: 'Baucau',
      },
      {
        name: 'Bobonaro',
      },
      {
        name: 'Cova Lima',
      },
      {
        name: 'Dili',
      },
      {
        name: 'Ermera',
      },
      {
        name: 'Lautem',
      },
      {
        name: 'Liquica',
      },
      {
        name: 'Manatuto',
      },
      {
        name: 'Manufahi',
      },
      {
        name: 'Oecussi',
      },
      {
        name: 'Viqueque',
      },
    ],
  },
  {
    name: 'Togo',
    regions: [
      {
        name: 'Centre',
      },
      {
        name: 'Kara',
      },
      {
        name: 'Maritime',
      },
      {
        name: 'Plateaux',
      },
      {
        name: 'Savannes',
      },
    ],
  },
  {
    name: 'Tokelau',
    regions: [
      {
        name: 'Atafu',
      },
      {
        name: 'Fakaofo',
      },
      {
        name: 'Nukunonu',
      },
    ],
  },
  {
    name: 'Tonga',
    regions: [
      {
        name: "'Eua",
      },
      {
        name: "Ha'apai",
      },
      {
        name: 'Niuas',
      },
      {
        name: 'Tongatapu',
      },
      {
        name: "Vava'u",
      },
    ],
  },
  {
    name: 'Trinidad and Tobago',
    regions: [
      {
        name: 'Arima',
      },
      {
        name: 'Chaguanas',
      },
      {
        name: 'Couva-Tabaquite-Talparo',
      },
      {
        name: 'Diefo Martin',
      },
      {
        name: 'Mayaro-Rio Claro',
      },
      {
        name: 'Penal-Debe',
      },
      {
        name: 'Point Fortin',
      },
      {
        name: 'Port-of-Spain',
      },
      {
        name: 'Princes Town',
      },
      {
        name: 'San Fernando',
      },
      {
        name: 'San Juan-Laventille',
      },
      {
        name: 'Sangre Grande',
      },
      {
        name: 'Siparia',
      },
      {
        name: 'Tobago',
      },
      {
        name: 'Tunapuna-Piarco',
      },
    ],
  },
  {
    name: 'Tunisia',
    regions: [
      {
        name: 'Ariana',
      },
      {
        name: 'Beja',
      },
      {
        name: 'Ben Arous',
      },
      {
        name: 'Bizerte',
      },
      {
        name: 'Gabes',
      },
      {
        name: 'Gafsa',
      },
      {
        name: 'Jendouba',
      },
      {
        name: 'Kairouan',
      },
      {
        name: 'Kasserine',
      },
      {
        name: 'Kebili',
      },
      {
        name: 'Kef',
      },
      {
        name: 'Mahdia',
      },
      {
        name: 'Medenine',
      },
      {
        name: 'Monastir',
      },
      {
        name: 'Nabeul',
      },
      {
        name: 'Sfax',
      },
      {
        name: 'Sidi Bouzid',
      },
      {
        name: 'Siliana',
      },
      {
        name: 'Sousse',
      },
      {
        name: 'Tataouine',
      },
      {
        name: 'Tozeur',
      },
      {
        name: 'Tunis',
      },
      {
        name: 'Zaghouan',
      },
    ],
  },
  {
    name: 'Turkey',
    regions: [
      {
        name: 'Adana',
      },
      {
        name: 'Adiyaman',
      },
      {
        name: 'Afyonkarahisar',
      },
      {
        name: 'Agri',
      },
      {
        name: 'Aksaray',
      },
      {
        name: 'Amasya',
      },
      {
        name: 'Ankara',
      },
      {
        name: 'Antalya',
      },
      {
        name: 'Ardahan',
      },
      {
        name: 'Artvin',
      },
      {
        name: 'Aydin',
      },
      {
        name: 'Balikesir',
      },
      {
        name: 'Bartin',
      },
      {
        name: 'Batman',
      },
      {
        name: 'Bayburt',
      },
      {
        name: 'Bilecik',
      },
      {
        name: 'Bingol',
      },
      {
        name: 'Bitlis',
      },
      {
        name: 'Bolu',
      },
      {
        name: 'Burdur',
      },
      {
        name: 'Bursa',
      },
      {
        name: 'Canakkale',
      },
      {
        name: 'Cankiri',
      },
      {
        name: 'Corum',
      },
      {
        name: 'Denizli',
      },
      {
        name: 'Diyarbakir',
      },
      {
        name: 'Duzce',
      },
      {
        name: 'Edirne',
      },
      {
        name: 'Elazig',
      },
      {
        name: 'Erzincan',
      },
      {
        name: 'Erzurum',
      },
      {
        name: 'Eskisehir',
      },
      {
        name: 'Gaziantep',
      },
      {
        name: 'Giresun',
      },
      {
        name: 'Gumushane',
      },
      {
        name: 'Hakkari',
      },
      {
        name: 'Hatay',
      },
      {
        name: 'Igdir',
      },
      {
        name: 'Isparta',
      },
      {
        name: 'Istanbul',
      },
      {
        name: 'Izmir',
      },
      {
        name: 'Kahramanmaras',
      },
      {
        name: 'Karabuk',
      },
      {
        name: 'Karaman',
      },
      {
        name: 'Kars',
      },
      {
        name: 'Kastamonu',
      },
      {
        name: 'Kayseri',
      },
      {
        name: 'Kilis',
      },
      {
        name: 'Kirikkale',
      },
      {
        name: 'Kirklareli',
      },
      {
        name: 'Kirsehir',
      },
      {
        name: 'Kocaeli',
      },
      {
        name: 'Konya',
      },
      {
        name: 'Kutahya',
      },
      {
        name: 'Malatya',
      },
      {
        name: 'Manisa',
      },
      {
        name: 'Mardin',
      },
      {
        name: 'Mersin',
      },
      {
        name: 'Mugla',
      },
      {
        name: 'Mus',
      },
      {
        name: 'Nevsehir',
      },
      {
        name: 'Nigde',
      },
      {
        name: 'Ordu',
      },
      {
        name: 'Osmaniye',
      },
      {
        name: 'Rize',
      },
      {
        name: 'Sakarya',
      },
      {
        name: 'Samsun',
      },
      {
        name: 'Sanliurfa',
      },
      {
        name: 'Siirt',
      },
      {
        name: 'Sinop',
      },
      {
        name: 'Sirnak',
      },
      {
        name: 'Sivas',
      },
      {
        name: 'Tekirdag',
      },
      {
        name: 'Tokat',
      },
      {
        name: 'Trabzon',
      },
      {
        name: 'Tunceli',
      },
      {
        name: 'Usak',
      },
      {
        name: 'Van',
      },
      {
        name: 'Yalova',
      },
      {
        name: 'Yozgat',
      },
      {
        name: 'Zonguldak',
      },
    ],
  },
  {
    name: 'Turkmenistan',
    regions: [
      {
        name: 'Ahal',
      },
      {
        name: 'Asgabat',
      },
      {
        name: 'Balkan',
      },
      {
        name: 'Dashoguz',
      },
      {
        name: 'Lebap',
      },
      {
        name: 'Mary',
      },
    ],
  },
  {
    name: 'Turks and Caicos Islands',
    regions: [
      {
        name: 'Turks and Caicos Islands',
      },
    ],
  },
  {
    name: 'Tuvalu',
    regions: [
      {
        name: 'Funafuti',
      },
      {
        name: 'Nanumanga',
      },
      {
        name: 'Nanumea',
      },
      {
        name: 'Niutao',
      },
      {
        name: 'Nui',
      },
      {
        name: 'Nukufetau',
      },
      {
        name: 'Nukulaelae',
      },
      {
        name: 'Vaitupu',
      },
    ],
  },
  {
    name: 'Uganda',
    regions: [
      {
        name: 'Abim',
      },
      {
        name: 'Adjumani',
      },
      {
        name: 'Amolatar',
      },
      {
        name: 'Amuria',
      },
      {
        name: 'Amuru',
      },
      {
        name: 'Apac',
      },
      {
        name: 'Arua',
      },
      {
        name: 'Budaka',
      },
      {
        name: 'Bududa',
      },
      {
        name: 'Bugiri',
      },
      {
        name: 'Bukedea',
      },
      {
        name: 'Bukwa',
      },
      {
        name: 'Buliisa',
      },
      {
        name: 'Bundibugyo',
      },
      {
        name: 'Bushenyi',
      },
      {
        name: 'Busia',
      },
      {
        name: 'Butaleja',
      },
      {
        name: 'Dokolo',
      },
      {
        name: 'Gulu',
      },
      {
        name: 'Hoima',
      },
      {
        name: 'Ibanda',
      },
      {
        name: 'Iganga',
      },
      {
        name: 'Isingiro',
      },
      {
        name: 'Jinja',
      },
      {
        name: 'Kaabong',
      },
      {
        name: 'Kabale',
      },
      {
        name: 'Kabarole',
      },
      {
        name: 'Kaberamaido',
      },
      {
        name: 'Kalangala',
      },
      {
        name: 'Kaliro',
      },
      {
        name: 'Kampala',
      },
      {
        name: 'Kamuli',
      },
      {
        name: 'Kamwenge',
      },
      {
        name: 'Kanungu',
      },
      {
        name: 'Kapchorwa',
      },
      {
        name: 'Kasese',
      },
      {
        name: 'Katakwi',
      },
      {
        name: 'Kayunga',
      },
      {
        name: 'Kibaale',
      },
      {
        name: 'Kiboga',
      },
      {
        name: 'Kiruhura',
      },
      {
        name: 'Kisoro',
      },
      {
        name: 'Kitgum',
      },
      {
        name: 'Koboko',
      },
      {
        name: 'Kotido',
      },
      {
        name: 'Kumi',
      },
      {
        name: 'Kyenjojo',
      },
      {
        name: 'Lira',
      },
      {
        name: 'Luwero',
      },
      {
        name: 'Lyantonde',
      },
      {
        name: 'Manafwa',
      },
      {
        name: 'Maracha',
      },
      {
        name: 'Masaka',
      },
      {
        name: 'Masindi',
      },
      {
        name: 'Mayuge',
      },
      {
        name: 'Mbale',
      },
      {
        name: 'Mbarara',
      },
      {
        name: 'Mityana',
      },
      {
        name: 'Moroto',
      },
      {
        name: 'Moyo',
      },
      {
        name: 'Mpigi',
      },
      {
        name: 'Mubende',
      },
      {
        name: 'Mukono',
      },
      {
        name: 'Nakapiripirit',
      },
      {
        name: 'Nakaseke',
      },
      {
        name: 'Nakasongola',
      },
      {
        name: 'Namutumba',
      },
      {
        name: 'Nebbi',
      },
      {
        name: 'Ntungamo',
      },
      {
        name: 'Oyam',
      },
      {
        name: 'Pader',
      },
      {
        name: 'Pallisa',
      },
      {
        name: 'Rakai',
      },
      {
        name: 'Rukungiri',
      },
      {
        name: 'Sembabule',
      },
      {
        name: 'Sironko',
      },
      {
        name: 'Soroti',
      },
      {
        name: 'Tororo',
      },
      {
        name: 'Wakiso',
      },
      {
        name: 'Yumbe',
      },
    ],
  },
  {
    name: 'Ukraine',
    regions: [
      {
        name: 'Cherkaska oblast',
      },
      {
        name: 'Chernihivska oblast',
      },
      {
        name: 'Chernivetska oblast',
      },
      {
        name: 'Dnipropetrovska oblast',
      },
      {
        name: 'Donetska oblast',
      },
      {
        name: 'Ivano-Frankivska oblast',
      },
      {
        name: 'Kharkivska oblast',
      },
      {
        name: 'Khersonska oblast',
      },
      {
        name: 'Khmelnytska oblast',
      },
      {
        name: 'Kyivska oblast',
      },
      {
        name: 'Kirovohradska oblast',
      },
      {
        name: 'Luhanska oblast',
      },
      {
        name: 'Lvivska oblast',
      },
      {
        name: 'Mykolaivska oblast',
      },
      {
        name: 'Odeska oblast',
      },
      {
        name: 'Poltavska oblast',
      },
      {
        name: 'Rivnenska oblast',
      },
      {
        name: 'Sumska oblast',
      },
      {
        name: 'Ternopilska oblast',
      },
      {
        name: 'Vinnytska oblast',
      },
      {
        name: 'Volynska oblast',
      },
      {
        name: 'Zakarpatska oblast',
      },
      {
        name: 'Zaporizka oblast',
      },
      {
        name: 'Zhytomyrska oblast',
      },
      {
        name: 'Avtonomna Respublika Krym',
      },
      {
        name: 'Kyiv',
      },
      {
        name: 'Sevastopol',
      },
    ],
  },
  {
    name: 'United Arab Emirates',
    regions: [
      {
        name: 'Abu Dhabi',
      },
      {
        name: 'Ajman',
      },
      {
        name: 'Dubai',
      },
      {
        name: 'Fujairah',
      },
      {
        name: 'Ras al Khaimah',
      },
      {
        name: 'Sharjah',
      },
      {
        name: 'Umm Al Quwain',
      },
    ],
  },
  {
    name: 'United Kingdom',
    regions: [
      {
        name: 'Aberdeen City',
      },
      {
        name: 'Aberdeenshire',
      },
      {
        name: 'Angus',
      },
      {
        name: 'Antrim and Newtownabbey',
      },
      {
        name: 'Ards and North Down',
      },
      {
        name: 'Argyll and Bute',
      },
      {
        name: 'Armagh, Banbridge and Craigavon',
      },
      {
        name: 'Barking and Dagenham',
      },
      {
        name: 'Barnet',
      },
      {
        name: 'Barnsley',
      },
      {
        name: 'Bath and North East Somerset',
      },
      {
        name: 'Bedford',
      },
      {
        name: 'Belfast',
      },
      {
        name: 'Bexley',
      },
      {
        name: 'Birmingham',
      },
      {
        name: 'Blackburn with Darwen',
      },
      {
        name: 'Blackpool',
      },
      {
        name: 'Blaenau Gwent',
      },
      {
        name: 'Bolton',
      },
      {
        name: 'Bournemouth',
      },
      {
        name: 'Bracknell Forest',
      },
      {
        name: 'Bradford',
      },
      {
        name: 'Brent',
      },
      {
        name: 'Bridgend',
      },
      {
        name: 'Brighton and Hove',
      },
      {
        name: 'Bristol, City of',
      },
      {
        name: 'Bromley',
      },
      {
        name: 'Buckinghamshire',
      },
      {
        name: 'Bury',
      },
      {
        name: 'Caerphilly',
      },
      {
        name: 'Calderdale',
      },
      {
        name: 'Cambridgeshire',
      },
      {
        name: 'Camden',
      },
      {
        name: 'Cardiff',
      },
      {
        name: 'Carmarthenshire',
      },
      {
        name: 'Causeway Coast and Glens',
      },
      {
        name: 'Central Bedfordshire',
      },
      {
        name: 'Ceredigion',
      },
      {
        name: 'Cheshire East',
      },
      {
        name: 'Cheshire West and Chester',
      },
      {
        name: 'Clackmannanshire',
      },
      {
        name: 'Conwy',
      },
      {
        name: 'Cornwall',
      },
      {
        name: 'Coventry',
      },
      {
        name: 'Croydon',
      },
      {
        name: 'Cumbria',
      },
      {
        name: 'Darlington',
      },
      {
        name: 'Denbighshire',
      },
      {
        name: 'Derby',
      },
      {
        name: 'Derbyshire',
      },
      {
        name: 'Derry and Strabane',
      },
      {
        name: 'Devon',
      },
      {
        name: 'Doncaster',
      },
      {
        name: 'Dorset',
      },
      {
        name: 'Dudley',
      },
      {
        name: 'Dumfries and Galloway',
      },
      {
        name: 'Dundee City',
      },
      {
        name: 'Durham County',
      },
      {
        name: 'Ealing',
      },
      {
        name: 'East Ayrshire',
      },
      {
        name: 'East Dunbartonshire',
      },
      {
        name: 'East Lothian',
      },
      {
        name: 'East Renfrewshire',
      },
      {
        name: 'East Riding of Yorkshire',
      },
      {
        name: 'East Sussex',
      },
      {
        name: 'Edinburgh, City of',
      },
      {
        name: 'Eilean Siar',
      },
      {
        name: 'Enfield',
      },
      {
        name: 'Essex',
      },
      {
        name: 'Falkirk',
      },
      {
        name: 'Fermanagh and Omagh',
      },
      {
        name: 'Fife',
      },
      {
        name: 'Flintshire',
      },
      {
        name: 'Gateshead',
      },
      {
        name: 'Glasgow City',
      },
      {
        name: 'Gloucestershire',
      },
      {
        name: 'Greenwich',
      },
      {
        name: 'Gwynedd',
      },
      {
        name: 'Hackney',
      },
      {
        name: 'Halton',
      },
      {
        name: 'Hammersmith and Fulham',
      },
      {
        name: 'Hampshire',
      },
      {
        name: 'Haringey',
      },
      {
        name: 'Harrow',
      },
      {
        name: 'Hartlepool',
      },
      {
        name: 'Havering',
      },
      {
        name: 'Herefordshire',
      },
      {
        name: 'Hertfordshire',
      },
      {
        name: 'Highland',
      },
      {
        name: 'Hillingdon',
      },
      {
        name: 'Hounslow',
      },
      {
        name: 'Inverclyde',
      },
      {
        name: 'Isle of Anglesey',
      },
      {
        name: 'Isle of Wight',
      },
      {
        name: 'Isles of Scilly',
      },
      {
        name: 'Islington',
      },
      {
        name: 'Kensington and Chelsea',
      },
      {
        name: 'Kent',
      },
      {
        name: 'Kingston upon Hull',
      },
      {
        name: 'Kingston upon Thames',
      },
      {
        name: 'Kirklees',
      },
      {
        name: 'Knowsley',
      },
      {
        name: 'Lambeth',
      },
      {
        name: 'Lancashire',
      },
      {
        name: 'Leeds',
      },
      {
        name: 'Leicester',
      },
      {
        name: 'Leicestershire',
      },
      {
        name: 'Lewisham',
      },
      {
        name: 'Lincolnshire',
      },
      {
        name: 'Lisburn and Castlereagh',
      },
      {
        name: 'Liverpool',
      },
      {
        name: 'London, City of',
      },
      {
        name: 'Luton',
      },
      {
        name: 'Manchester',
      },
      {
        name: 'Medway',
      },
      {
        name: 'Merthyr Tydfil',
      },
      {
        name: 'Merton',
      },
      {
        name: 'Mid and East Antrim',
      },
      {
        name: 'Mid Ulster',
      },
      {
        name: 'Middlesbrough',
      },
      {
        name: 'Midlothian',
      },
      {
        name: 'Milton Keynes',
      },
      {
        name: 'Monmouthshire',
      },
      {
        name: 'Moray',
      },
      {
        name: 'Neath Port Talbot',
      },
      {
        name: 'Newcastle upon Tyne',
      },
      {
        name: 'Newham',
      },
      {
        name: 'Newport',
      },
      {
        name: 'Newry, Mourne and Down',
      },
      {
        name: 'Norfolk',
      },
      {
        name: 'North Ayrshire',
      },
      {
        name: 'North East Lincolnshire',
      },
      {
        name: 'North Lanarkshire',
      },
      {
        name: 'North Lincolnshire',
      },
      {
        name: 'North Somerset',
      },
      {
        name: 'North Tyneside',
      },
      {
        name: 'North Yorkshire',
      },
      {
        name: 'Northamptonshire',
      },
      {
        name: 'Northumberland',
      },
      {
        name: 'Nottingham',
      },
      {
        name: 'Nottinghamshire',
      },
      {
        name: 'Oldham',
      },
      {
        name: 'Orkney Islands',
      },
      {
        name: 'Oxfordshire',
      },
      {
        name: 'Pembrokeshire',
      },
      {
        name: 'Perth and Kinross',
      },
      {
        name: 'Peterborough',
      },
      {
        name: 'Plymouth',
      },
      {
        name: 'Poole',
      },
      {
        name: 'Portsmouth',
      },
      {
        name: 'Powys',
      },
      {
        name: 'Reading',
      },
      {
        name: 'Redbridge',
      },
      {
        name: 'Redcar and Cleveland',
      },
      {
        name: 'Renfrewshire',
      },
      {
        name: 'Rhondda, Cynon, Taff',
      },
      {
        name: 'Richmond upon Thames',
      },
      {
        name: 'Rochdale',
      },
      {
        name: 'Rotherham',
      },
      {
        name: 'Rutland',
      },
      {
        name: 'St. Helens',
      },
      {
        name: 'Salford',
      },
      {
        name: 'Sandwell',
      },
      {
        name: 'Scottish Borders, The',
      },
      {
        name: 'Sefton',
      },
      {
        name: 'Sheffield',
      },
      {
        name: 'Shetland Islands',
      },
      {
        name: 'Shropshire',
      },
      {
        name: 'Slough',
      },
      {
        name: 'Solihull',
      },
      {
        name: 'Somerset',
      },
      {
        name: 'South Ayrshire',
      },
      {
        name: 'South Gloucestershire',
      },
      {
        name: 'South Lanarkshire',
      },
      {
        name: 'South Tyneside',
      },
      {
        name: 'Southampton',
      },
      {
        name: 'Southend-on-Sea',
      },
      {
        name: 'Southwark',
      },
      {
        name: 'Staffordshire',
      },
      {
        name: 'Stirling',
      },
      {
        name: 'Stockport',
      },
      {
        name: 'Stockton-on-Tees',
      },
      {
        name: 'Stoke-on-Trent',
      },
      {
        name: 'Suffolk',
      },
      {
        name: 'Sunderland',
      },
      {
        name: 'Surrey',
      },
      {
        name: 'Sutton',
      },
      {
        name: 'Swansea',
      },
      {
        name: 'Swindon',
      },
      {
        name: 'Tameside',
      },
      {
        name: 'Telford and Wrekin',
      },
      {
        name: 'Thurrock',
      },
      {
        name: 'Torbay',
      },
      {
        name: 'Torfaen',
      },
      {
        name: 'Tower Hamlets',
      },
      {
        name: 'Trafford',
      },
      {
        name: 'Vale of Glamorgan, The',
      },
      {
        name: 'Wakefield',
      },
      {
        name: 'Walsall',
      },
      {
        name: 'Waltham Forest',
      },
      {
        name: 'Wandsworth',
      },
      {
        name: 'Warrington',
      },
      {
        name: 'Warwickshire',
      },
      {
        name: 'West Berkshire',
      },
      {
        name: 'West Dunbartonshire',
      },
      {
        name: 'West Lothian',
      },
      {
        name: 'West Sussex',
      },
      {
        name: 'Westminster',
      },
      {
        name: 'Wigan',
      },
      {
        name: 'Wiltshire',
      },
      {
        name: 'Windsor and Maidenhead',
      },
      {
        name: 'Wirral',
      },
      {
        name: 'Wokingham',
      },
      {
        name: 'Wolverhampton',
      },
      {
        name: 'Worcestershire',
      },
      {
        name: 'Wrexham',
      },
      {
        name: 'York',
      },
    ],
  },
  {
    name: 'United States',
    regions: [
      {
        name: 'Alabama',
      },
      {
        name: 'Alaska',
      },
      {
        name: 'American Samoa',
      },
      {
        name: 'Arizona',
      },
      {
        name: 'Arkansas',
      },
      {
        name: 'California',
      },
      {
        name: 'Colorado',
      },
      {
        name: 'Connecticut',
      },
      {
        name: 'Delaware',
      },
      {
        name: 'District of Columbia',
      },
      {
        name: 'Micronesia',
      },
      {
        name: 'Florida',
      },
      {
        name: 'Georgia',
      },
      {
        name: 'Guam',
      },
      {
        name: 'Hawaii',
      },
      {
        name: 'Idaho',
      },
      {
        name: 'Illinois',
      },
      {
        name: 'Indiana',
      },
      {
        name: 'Iowa',
      },
      {
        name: 'Kansas',
      },
      {
        name: 'Kentucky',
      },
      {
        name: 'Louisiana',
      },
      {
        name: 'Maine',
      },
      {
        name: 'Marshall Islands',
      },
      {
        name: 'Maryland',
      },
      {
        name: 'Massachusetts',
      },
      {
        name: 'Michigan',
      },
      {
        name: 'Minnesota',
      },
      {
        name: 'Mississippi',
      },
      {
        name: 'Missouri',
      },
      {
        name: 'Montana',
      },
      {
        name: 'Nebraska',
      },
      {
        name: 'Nevada',
      },
      {
        name: 'New Hampshire',
      },
      {
        name: 'New Jersey',
      },
      {
        name: 'New Mexico',
      },
      {
        name: 'New York',
      },
      {
        name: 'North Carolina',
      },
      {
        name: 'North Dakota',
      },
      {
        name: 'Northern Mariana Islands',
      },
      {
        name: 'Ohio',
      },
      {
        name: 'Oklahoma',
      },
      {
        name: 'Oregon',
      },
      {
        name: 'Palau',
      },
      {
        name: 'Pennsylvania',
      },
      {
        name: 'Puerto Rico',
      },
      {
        name: 'Rhode Island',
      },
      {
        name: 'South Carolina',
      },
      {
        name: 'South Dakota',
      },
      {
        name: 'Tennessee',
      },
      {
        name: 'Texas',
      },
      {
        name: 'Utah',
      },
      {
        name: 'Vermont',
      },
      {
        name: 'Virgin Islands',
      },
      {
        name: 'Virginia',
      },
      {
        name: 'Washington',
      },
      {
        name: 'West Virginia',
      },
      {
        name: 'Wisconsin',
      },
      {
        name: 'Wyoming',
      },
      {
        name: 'Armed Forces Americas',
      },
      {
        name: 'Armed Forces Europe, Canada, Africa and Middle East',
      },
      {
        name: 'Armed Forces Pacific',
      },
    ],
  },
  {
    name: 'United States Minor Outlying Islands',
    regions: [
      {
        name: 'Baker Island',
      },
      {
        name: 'Howland Island',
      },
      {
        name: 'Jarvis Island',
      },
      {
        name: 'Johnston Atoll',
      },
      {
        name: 'Kingman Reef',
      },
      {
        name: 'Midway Islands',
      },
      {
        name: 'Navassa Island',
      },
      {
        name: 'Palmyra Atoll',
      },
      {
        name: 'Wake Island',
      },
      {
        name: 'Bajo Nuevo Bank',
      },
      {
        name: 'Serranilla Bank',
      },
    ],
  },
  {
    name: 'Uruguay',
    regions: [
      {
        name: 'Artigas',
      },
      {
        name: 'Canelones',
      },
      {
        name: 'Cerro Largo',
      },
      {
        name: 'Colonia',
      },
      {
        name: 'Durazno',
      },
      {
        name: 'Flores',
      },
      {
        name: 'Florida',
      },
      {
        name: 'Lavalleja',
      },
      {
        name: 'Maldonado',
      },
      {
        name: 'Montevideo',
      },
      {
        name: 'Paysandú',
      },
      {
        name: 'Río Negro',
      },
      {
        name: 'Rivera',
      },
      {
        name: 'Rocha',
      },
      {
        name: 'Salto',
      },
      {
        name: 'San José',
      },
      {
        name: 'Soriano',
      },
      {
        name: 'Tacuarembó',
      },
      {
        name: 'Treinta y Tres',
      },
    ],
  },
  {
    name: 'Uzbekistan',
    regions: [
      {
        name: 'Toshkent shahri',
      },
      {
        name: 'Andijon',
      },
      {
        name: 'Buxoro',
      },
      {
        name: 'Farg‘ona',
      },
      {
        name: 'Jizzax',
      },
      {
        name: 'Namangan',
      },
      {
        name: 'Navoiy',
      },
      {
        name: 'Qashqadaryo (Qarshi)',
      },
      {
        name: 'Samarqand',
      },
      {
        name: 'Sirdaryo (Guliston)',
      },
      {
        name: 'Surxondaryo (Termiz)',
      },
      {
        name: 'Toshkent wiloyati',
      },
      {
        name: 'Xorazm (Urganch)',
      },
      {
        name: 'Qoraqalpog‘iston Respublikasi (Nukus)',
      },
    ],
  },
  {
    name: 'Vanuatu',
    regions: [
      {
        name: 'Malampa',
      },
      {
        name: 'Pénama',
      },
      {
        name: 'Sanma',
      },
      {
        name: 'Shéfa',
      },
      {
        name: 'Taféa',
      },
      {
        name: 'Torba',
      },
    ],
  },
  {
    name: 'Venezuela, Bolivarian Republic of',
    regions: [
      {
        name: 'Dependencias Federales',
      },
      {
        name: 'Distrito Federal',
      },
      {
        name: 'Amazonas',
      },
      {
        name: 'Anzoátegui',
      },
      {
        name: 'Apure',
      },
      {
        name: 'Aragua',
      },
      {
        name: 'Barinas',
      },
      {
        name: 'Bolívar',
      },
      {
        name: 'Carabobo',
      },
      {
        name: 'Cojedes',
      },
      {
        name: 'Delta Amacuro',
      },
      {
        name: 'Falcón',
      },
      {
        name: 'Guárico',
      },
      {
        name: 'Lara',
      },
      {
        name: 'Mérida',
      },
      {
        name: 'Miranda',
      },
      {
        name: 'Monagas',
      },
      {
        name: 'Nueva Esparta',
      },
      {
        name: 'Portuguesa',
      },
      {
        name: 'Sucre',
      },
      {
        name: 'Táchira',
      },
      {
        name: 'Trujillo',
      },
      {
        name: 'Vargas',
      },
      {
        name: 'Yaracuy',
      },
      {
        name: 'Zulia',
      },
    ],
  },
  {
    name: 'Vietnam',
    regions: [
      {
        name: 'An Giang',
      },
      {
        name: 'Bà Rịa - Vũng Tàu',
      },
      {
        name: 'Bình Dương',
      },
      {
        name: 'Bình Phước',
      },
      {
        name: 'Bình Định',
      },
      {
        name: 'Bình Thuận',
      },
      {
        name: 'Bạc Liêu',
      },
      {
        name: 'Bắc Giang',
      },
      {
        name: 'Bắc Kạn',
      },
      {
        name: 'Bắc Ninh',
      },
      {
        name: 'Bến Tre',
      },
      {
        name: 'Cao Bằng',
      },
      {
        name: 'Cà Mau',
      },
      {
        name: 'Đắk Lắk',
      },
      {
        name: 'Đắk Nông',
      },
      {
        name: 'Điện Biên',
      },
      {
        name: 'Đồng Nai',
      },
      {
        name: 'Đồng Tháp',
      },
      {
        name: 'Gia Lai',
      },
      {
        name: 'Hà Giang',
      },
      {
        name: 'Hà Nam',
      },
      {
        name: 'Hà Tây',
      },
      {
        name: 'Hà Tĩnh',
      },
      {
        name: 'Hải Dương',
      },
      {
        name: 'Hậu Giang',
      },
      {
        name: 'Hòa Bình',
      },
      {
        name: 'Hưng Yên',
      },
      {
        name: 'Khánh Hòa',
      },
      {
        name: 'Kiên Giang',
      },
      {
        name: 'Kon Tum',
      },
      {
        name: 'Lai Châu',
      },
      {
        name: 'Lâm Đồng',
      },
      {
        name: 'Lạng Sơn',
      },
      {
        name: 'Lào Cai',
      },
      {
        name: 'Long An',
      },
      {
        name: 'Nam Định',
      },
      {
        name: 'Nghệ An',
      },
      {
        name: 'Ninh Bình',
      },
      {
        name: 'Ninh Thuận',
      },
      {
        name: 'Phú Thọ',
      },
      {
        name: 'Phú Yên',
      },
      {
        name: 'Quảng Bình',
      },
      {
        name: 'Quảng Nam',
      },
      {
        name: 'Quảng Ngãi',
      },
      {
        name: 'Quảng Ninh',
      },
      {
        name: 'Quảng Trị',
      },
      {
        name: 'Sóc Trăng',
      },
      {
        name: 'Sơn La',
      },
      {
        name: 'Tây Ninh',
      },
      {
        name: 'Thái Bình',
      },
      {
        name: 'Thái Nguyên',
      },
      {
        name: 'Thanh Hóa',
      },
      {
        name: 'Thừa Thiên–Huế',
      },
      {
        name: 'Tiền Giang',
      },
      {
        name: 'Trà Vinh',
      },
      {
        name: 'Tuyên Quang',
      },
      {
        name: 'Vĩnh Long',
      },
      {
        name: 'Vĩnh Phúc',
      },
      {
        name: 'Yên Bái',
      },
      {
        name: 'Cần Thơ',
      },
      {
        name: 'Đà Nẵng',
      },
      {
        name: 'Hà Nội',
      },
      {
        name: 'Hải Phòng',
      },
      {
        name: 'Hồ Chí Minh (Sài Gòn)',
      },
    ],
  },
  {
    name: 'Virgin Islands, British',
    regions: [
      {
        name: 'Anegada',
      },
      {
        name: 'Jost Van Dyke',
      },
      {
        name: 'Tortola',
      },
      {
        name: 'Virgin Gorda',
      },
    ],
  },
  {
    name: 'Virgin Islands, U.S.',
    regions: [
      {
        name: 'St. Thomas',
      },
      {
        name: 'St. John',
      },
      {
        name: 'St. Croix',
      },
    ],
  },
  {
    name: 'Wallis and Futuna',
    regions: [
      {
        name: 'Alo',
      },
      {
        name: 'Sigave',
      },
      {
        name: 'Wallis',
      },
    ],
  },
  {
    name: 'Western Sahara',
    regions: [
      {
        name: 'Es Smara',
      },
      {
        name: 'Boujdour',
      },
      {
        name: 'Laâyoune',
      },
      {
        name: 'Aousserd',
      },
      {
        name: 'Oued ed Dahab',
      },
    ],
  },
  {
    name: 'Yemen',
    regions: [
      {
        name: 'Abyān',
      },
      {
        name: "'Adan",
      },
      {
        name: "Aḑ Ḑāli'",
      },
      {
        name: "Al Bayḑā'",
      },
      {
        name: 'Al Ḩudaydah',
      },
      {
        name: 'Al Jawf',
      },
      {
        name: 'Al Mahrah',
      },
      {
        name: 'Al Maḩwīt',
      },
      {
        name: "'Amrān",
      },
      {
        name: 'Dhamār',
      },
      {
        name: 'Ḩaḑramawt',
      },
      {
        name: 'Ḩajjah',
      },
      {
        name: 'Ibb',
      },
      {
        name: 'Laḩij',
      },
      {
        name: "Ma'rib",
      },
      {
        name: 'Raymah',
      },
      {
        name: 'Şā‘dah',
      },
      {
        name: "Şan‘ā'",
      },
      {
        name: 'Shabwah',
      },
      {
        name: 'Tā‘izz',
      },
    ],
  },
  {
    name: 'Zambia',
    regions: [
      {
        name: 'Central',
      },
      {
        name: 'Copperbelt',
      },
      {
        name: 'Eastern',
      },
      {
        name: 'Luapula',
      },
      {
        name: 'Lusaka',
      },
      {
        name: 'Northern',
      },
      {
        name: 'North-Western',
      },
      {
        name: 'Southern',
      },
      {
        name: 'Western',
      },
    ],
  },
  {
    name: 'Zimbabwe',
    regions: [
      {
        name: 'Bulawayo',
      },
      {
        name: 'Harare',
      },
      {
        name: 'Manicaland',
      },
      {
        name: 'Mashonaland Central',
      },
      {
        name: 'Mashonaland East',
      },
      {
        name: 'Mashonaland West',
      },
      {
        name: 'Masvingo',
      },
      {
        name: 'Matabeleland North',
      },
      {
        name: 'Matabeleland South',
      },
      {
        name: 'Midlands',
      },
    ],
  },
]

export default countries
