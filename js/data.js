// Family tree data structure
const familyData = {
    generation1: {
        arbaaz: {
            id: "arbaaz",
            name: "Arbaaz",
            nickname: "Baaje Baba",
            displayName: "Arbaaz (Baaje Baba)",
            gender: "male",
            children: ["musaahib", "khairaati", "bakkas"]
        }
    },
    generation2: {
        musaahib: {
            id: "musaahib",
            name: "Musaahib baba",
            displayName: "Musaahib baba",
            gender: "male",
            parent: "arbaaz",
            children: ["jaan_ali", "sher_ali", "karaamat_ali", "musaahib_daughter1"]
        },
        khairaati: {
            id: "khairaati",
            name: "Khairaati",
            displayName: "Khairaati",
            gender: "male",
            parent: "arbaaz",
            children: ["sher_muhammad", "akbar_ali", "asghar_ali"]
        },
        bakkas: {
            id: "bakkas",
            name: "Bakkas",
            displayName: "Bakkas",
            gender: "male",
            parent: "arbaaz",
            children: ["badhkaan"]
        }
    },
    generation3: {
        jaan_ali: {
            id: "jaan_ali",
            name: "Jaan Ali",
            displayName: "Jaan Ali",
            gender: "male",
            parent: "musaahib",
            children: ["habibullah", "zayfullah", "jauhar_ali", "jaan_ali_daughter1"]
        },
        sher_ali: {
            id: "sher_ali",
            name: "Sher Ali",
            displayName: "Sher Ali",
            gender: "male",
            parent: "musaahib",
            children: ["chikaaru", "qurbaan_ali"]
        },
        karaamat_ali: {
            id: "karaamat_ali",
            name: "Karaamat Ali",
            nickname: "Lagghaade baba",
            displayName: "Karaamat Ali (Lagghaade baba)",
            gender: "male",
            parent: "musaahib",
            children: ["sadar_ali", "rahamullah", "ghareebullah", "haidar_ali", "ateemullah", "naseer_muhammad", 
                      "karaamat_daughter1", "ujaari", "karaamat_daughter3", "karaamat_daughter4", "saafiyah", "karaamat_daughter6"]
        },
        musaahib_daughter1: {
            id: "musaahib_daughter1",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "musaahib",
            children: []
        },
        sher_muhammad: {
            id: "sher_muhammad",
            name: "Sher Muhammad",
            displayName: "Sher Muhammad",
            gender: "male",
            parent: "khairaati",
            children: ["noor_muhammad", "zahoor_muhammad", "jamaal_muhammad", "kamaal_muhammad", "sher_muhammad_daughter1", "najmun"]
        },
        akbar_ali: {
            id: "akbar_ali",
            name: "Akbar Ali",
            displayName: "Akbar Ali",
            gender: "male",
            parent: "khairaati",
            children: ["dost_muhammad", "haajrah"]
        },
        asghar_ali: {
            id: "asghar_ali",
            name: "Asghar Ali",
            displayName: "Asghar Ali",
            gender: "male",
            parent: "khairaati",
            children: ["deen_muhammad", "khairun_nisa", "mazharun_nisa"]
        },
        badhkaan: {
            id: "badhkaan",
            name: "Badhkaan",
            displayName: "Badhkaan",
            gender: "male",
            parent: "bakkas",
            children: ["shameem", "manne", "bhallu", "baanke", "baano"]
        }
    },
    generation4: {
        habibullah: {
            id: "habibullah",
            name: "Habibullah",
            displayName: "Habibullah",
            gender: "male",
            parent: "jaan_ali",
            children: ["muhammad_umar", "muhammad_saeed", "zahid_husayn", "bunna", "jhinkaani", "shajrun", "mani", "shah_jahan"]
        },
        zayfullah: {
            id: "zayfullah",
            name: "Zayfullah",
            nickname: "Bappa",
            displayName: "Zayfullah (Bappa)",
            gender: "male",
            parent: "jaan_ali",
            children: ["samad_ali", "ali_ahmad", "rafeeq_ahmad_babbu", "khaleequn", "motka", "maitun", "jaitun"]
        },
        jauhar_ali: {
            id: "jauhar_ali",
            name: "Jauhar Ali",
            displayName: "Jauhar Ali",
            gender: "male",
            parent: "jaan_ali",
            children: ["muhammad_raees", "rashid_husayn", "sadiq_husayn", "phool_jahan", "nazir_husayn", "shamshad_husayn"]
        },
        jaan_ali_daughter1: {
            id: "jaan_ali_daughter1",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "jaan_ali",
            children: []
        },
        chikaaru: {
            id: "chikaaru",
            name: "Chikaaru",
            displayName: "Chikaaru",
            gender: "male",
            parent: "sher_ali",
            children: ["karam_husayn"]
        },
        qurbaan_ali: {
            id: "qurbaan_ali",
            name: "Qurbaan Ali",
            displayName: "Qurbaan Ali",
            gender: "male",
            parent: "sher_ali",
            children: ["kausar_ali", "mubarak_ali", "sayfuddin"]
        },
        sadar_ali: {
            id: "sadar_ali",
            name: "Sadar Ali",
            displayName: "Sadar Ali",
            gender: "male",
            parent: "karaamat_ali",
            children: ["muhammad_razzaq", "muhammad_ismail", "farhaad_husayn", "zaynab", "zareena", "haseena"]
        },
        rahamullah: {
            id: "rahamullah",
            name: "Rahamullah",
            displayName: "Rahamullah",
            gender: "male",
            parent: "karaamat_ali",
            children: ["israar_ahmad", "iftekhaar_ahmad", "ishtiaaq_ahmad", "rahamullah_daughter1"]
        },
        ghareebullah: {
            id: "ghareebullah",
            name: "Ghareebullah",
            nickname: "Bawaali",
            displayName: "Ghareebullah (Bawaali)",
            gender: "male",
            parent: "karaamat_ali",
            children: ["muhammad_idrees", "ameerullah", "jugga", "bhunnan", "kaula", "taraabun"]
        },
        haidar_ali: {
            id: "haidar_ali",
            name: "Haidar Ali",
            displayName: "Haidar Ali",
            gender: "male",
            parent: "karaamat_ali",
            children: ["akhlaaq_ahmad", "iqbaal_ahmad", "ahsaan_ahmad"]
        },
        ateemullah: {
            id: "ateemullah",
            name: "Ateemullah",
            nickname: "Khan Sahab",
            displayName: "Ateemullah (Khan Sahab)",
            gender: "male",
            parent: "karaamat_ali",
            children: ["aftaab_ahmad", "rafeeq_ahmad_indiya", "babuli", "behni"]
        },
        naseer_muhammad: {
            id: "naseer_muhammad",
            name: "Naseer Muhammad",
            displayName: "Naseer Muhammad",
            isHaaji: true,
            gender: "male",
            parent: "karaamat_ali",
            children: ["baadshah", "akhtarun", "shaakirun", "kumkum", "rukhsaar"]
        },
        karaamat_daughter1: {
            id: "karaamat_daughter1",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "karaamat_ali",
            children: []
        },
        ujaari: {
            id: "ujaari",
            name: "Ujaari",
            displayName: "Ujaari",
            gender: "female",
            parent: "karaamat_ali",
            children: []
        },
        karaamat_daughter3: {
            id: "karaamat_daughter3",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "karaamat_ali",
            children: []
        },
        karaamat_daughter4: {
            id: "karaamat_daughter4",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "karaamat_ali",
            children: []
        },
        saafiyah: {
            id: "saafiyah",
            name: "Saafiyah",
            displayName: "Saafiyah",
            gender: "female",
            parent: "karaamat_ali",
            children: []
        },
        karaamat_daughter6: {
            id: "karaamat_daughter6",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "karaamat_ali",
            children: []
        },
        noor_muhammad: {
            id: "noor_muhammad",
            name: "Noor Muhammad",
            displayName: "Noor Muhammad",
            gender: "male",
            parent: "sher_muhammad",
            children: ["karam_husayn_kallu", "irshaad_husayn", "ikraam_husayn", "shehzaad_husayn", "shabeena"]
        },
        zahoor_muhammad: {
            id: "zahoor_muhammad",
            name: "Zahoor Muhammad",
            displayName: "Zahoor Muhammad",
            gender: "male",
            parent: "sher_muhammad",
            children: ["muhammad_saleem", "muhammad_kaleem", "shaadaab_anjum", "sanno"]
        },
        jamaal_muhammad: {
            id: "jamaal_muhammad",
            name: "Jamaal Muhammad",
            displayName: "Jamaal Muhammad",
            gender: "male",
            parent: "sher_muhammad",
            children: ["jameel_ahmad", "raees_ahmad", "nisaar_ahmad", "munni", "gudiya", "laado"]
        },
        kamaal_muhammad: {
            id: "kamaal_muhammad",
            name: "Kamaal Muhammad",
            displayName: "Kamaal Muhammad",
            gender: "male",
            parent: "sher_muhammad",
            children: ["muhammad_ashraf", "muhammad_arshad", "nahid_sultana", "raziya_sultana", "naiyyar_sultana"]
        },
        sher_muhammad_daughter1: {
            id: "sher_muhammad_daughter1",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "sher_muhammad",
            children: []
        },
        najmun: {
            id: "najmun",
            name: "Najmun",
            displayName: "Najmun",
            gender: "female",
            parent: "sher_muhammad",
            children: []
        },
        dost_muhammad: {
            id: "dost_muhammad",
            name: "Dost Muhammad",
            displayName: "Dost Muhammad",
            gender: "male",
            parent: "akbar_ali",
            children: ["ashfaaq_muhammad", "shafaak_ahmad", "firoz_ahmad", "muhammad_farooq", "muhammad_hadees", "najma"]
        },
        haajrah: {
            id: "haajrah",
            name: "Haajrah",
            displayName: "Haajrah",
            gender: "female",
            parent: "akbar_ali",
            children: []
        },
        deen_muhammad: {
            id: "deen_muhammad",
            name: "Deen Muhammad",
            displayName: "Deen Muhammad",
            gender: "male",
            parent: "asghar_ali",
            children: ["azeez_ahmad", "aijaaz_ahmad", "armaan_ahmad", "aaliyah", "deen_muhammad_daughter2", "shakeela"]
        },
        khairun_nisa: {
            id: "khairun_nisa",
            name: "Khairun Nisa",
            displayName: "Khairun Nisa",
            gender: "female",
            parent: "asghar_ali",
            children: []
        },
        mazharun_nisa: {
            id: "mazharun_nisa",
            name: "Mazharun Nisa",
            displayName: "Mazharun Nisa",
            gender: "female",
            parent: "asghar_ali",
            children: []
        },
        shameem: {
            id: "shameem",
            name: "Shameem",
            displayName: "Shameem",
            gender: "male",
            parent: "badhkaan",
            children: []
        },
        manne: {
            id: "manne",
            name: "Manne",
            displayName: "Manne",
            gender: "male",
            parent: "badhkaan",
            children: []
        },
        bhallu: {
            id: "bhallu",
            name: "Bhallu",
            displayName: "Bhallu",
            gender: "male",
            parent: "badhkaan",
            children: ["sameer", "bhallu_son2", "bhallu_daughter1"]
        },
        baanke: {
            id: "baanke",
            name: "Baanke",
            displayName: "Baanke",
            gender: "male",
            parent: "badhkaan",
            children: []
        },
        baano: {
            id: "baano",
            name: "Baano",
            displayName: "Baano",
            gender: "female",
            parent: "badhkaan",
            children: []
        }
    },
    generation5: {
        // Kids of Habibullah
        muhammad_umar: {
            id: "muhammad_umar",
            name: "Muhammad Umar",
            displayName: "Muhammad Umar",
            gender: "male",
            parent: "habibullah",
            children: []
        },
        muhammad_saeed: {
            id: "muhammad_saeed",
            name: "Muhammad Saeed",
            displayName: "Muhammad Saeed",
            gender: "male",
            parent: "habibullah",
            children: []
        },
        zahid_husayn: {
            id: "zahid_husayn",
            name: "Zahid Husayn",
            displayName: "Zahid Husayn",
            gender: "male",
            parent: "habibullah",
            children: []
        },
        bunna: {
            id: "bunna",
            name: "Bunna",
            displayName: "Bunna",
            gender: "female",
            parent: "habibullah",
            children: []
        },
        jhinkaani: {
            id: "jhinkaani",
            name: "Jhinkaani",
            displayName: "Jhinkaani",
            gender: "female",
            parent: "habibullah",
            children: []
        },
        shajrun: {
            id: "shajrun",
            name: "Shajrun",
            displayName: "Shajrun",
            gender: "female",
            parent: "habibullah",
            children: []
        },
        mani: {
            id: "mani",
            name: "Mani",
            displayName: "Mani",
            gender: "female",
            parent: "habibullah",
            children: []
        },
        shah_jahan: {
            id: "shah_jahan",
            name: "Shah Jahan",
            displayName: "Shah Jahan",
            gender: "female",
            parent: "habibullah",
            children: []
        },

        // Kids of Zayfullah (Bappa)
        samad_ali: {
            id: "samad_ali",
            name: "Samad Ali",
            displayName: "Samad Ali",
            gender: "male",
            parent: "zayfullah",
            children: []
        },
        ali_ahmad: {
            id: "ali_ahmad",
            name: "Ali Ahmad",
            nickname: "Balla",
            displayName: "Ali Ahmad (Balla)",
            gender: "male",
            parent: "zayfullah",
            children: []
        },
        rafeeq_ahmad_babbu: {
            id: "rafeeq_ahmad_babbu",
            name: "Rafeeq Ahmad",
            nickname: "Babbu",
            displayName: "Rafeeq Ahmad (Babbu)",
            gender: "male",
            parent: "zayfullah",
            children: []
        },
        khaleequn: {
            id: "khaleequn",
            name: "Khaleequn",
            displayName: "Khaleequn",
            gender: "female",
            parent: "zayfullah",
            children: []
        },
        motka: {
            id: "motka",
            name: "Motka",
            displayName: "Motka",
            gender: "female",
            parent: "zayfullah",
            children: []
        },
        maitun: {
            id: "maitun",
            name: "Maitun",
            displayName: "Maitun",
            gender: "female",
            parent: "zayfullah",
            children: []
        },
        jaitun: {
            id: "jaitun",
            name: "Jaitun",
            displayName: "Jaitun",
            gender: "female",
            parent: "zayfullah",
            children: []
        },

        // Kids of Jauhar Ali
        muhammad_raees: {
            id: "muhammad_raees",
            name: "Muhammad Raees",
            displayName: "Muhammad Raees",
            isHaaji: true,
            gender: "male",
            parent: "jauhar_ali",
            children: []
        },
        rashid_husayn: {
            id: "rashid_husayn",
            name: "Rashid Husayn",
            displayName: "Rashid Husayn",
            gender: "male",
            parent: "jauhar_ali",
            children: []
        },
        sadiq_husayn: {
            id: "sadiq_husayn",
            name: "Sadiq Husayn",
            displayName: "Sadiq Husayn",
            gender: "male",
            parent: "jauhar_ali",
            children: []
        },
        phool_jahan: {
            id: "phool_jahan",
            name: "Phool-jahan",
            displayName: "Phool-jahan",
            gender: "female",
            parent: "jauhar_ali",
            children: []
        },
        nazir_husayn: {
            id: "nazir_husayn",
            name: "Nazir Husayn",
            displayName: "Nazir Husayn",
            gender: "male",
            parent: "jauhar_ali",
            children: []
        },
        shamshad_husayn: {
            id: "shamshad_husayn",
            name: "Shamshad Husayn",
            displayName: "Shamshad Husayn",
            gender: "male",
            parent: "jauhar_ali",
            children: []
        },

        // Kids of Chikaaru
        karam_husayn: {
            id: "karam_husayn",
            name: "Karam Husayn",
            displayName: "Karam Husayn",
            gender: "male",
            parent: "chikaaru",
            children: []
        },

        // Kids of Qurbaan Ali
        kausar_ali: {
            id: "kausar_ali",
            name: "Kausar Ali",
            displayName: "Kausar Ali",
            gender: "male",
            parent: "qurbaan_ali",
            children: []
        },
        mubarak_ali: {
            id: "mubarak_ali",
            name: "Mubarak Ali",
            displayName: "Mubarak Ali",
            gender: "male",
            parent: "qurbaan_ali",
            children: []
        },
        sayfuddin: {
            id: "sayfuddin",
            name: "Sayfuddin",
            displayName: "Sayfuddin",
            gender: "male",
            parent: "qurbaan_ali",
            children: []
        },

        // Kids of Sadar Ali
        muhammad_razzaq: {
            id: "muhammad_razzaq",
            name: "Muhammad Razzaq",
            displayName: "Muhammad Razzaq",
            gender: "male",
            parent: "sadar_ali",
            children: []
        },
        muhammad_ismail: {
            id: "muhammad_ismail",
            name: "Muhammad Ismail",
            displayName: "Muhammad Ismail",
            gender: "male",
            parent: "sadar_ali",
            children: []
        },
        farhaad_husayn: {
            id: "farhaad_husayn",
            name: "Farhaad Husayn",
            displayName: "Farhaad Husayn",
            gender: "male",
            parent: "sadar_ali",
            children: []
        },
        zaynab: {
            id: "zaynab",
            name: "Zaynab",
            displayName: "Zaynab",
            gender: "female",
            parent: "sadar_ali",
            children: []
        },
        zareena: {
            id: "zareena",
            name: "Zareena",
            displayName: "Zareena",
            gender: "female",
            parent: "sadar_ali",
            children: []
        },
        haseena: {
            id: "haseena",
            name: "Haseena",
            displayName: "Haseena",
            gender: "female",
            parent: "sadar_ali",
            children: []
        },

        // Kids of Rahamullah
        israar_ahmad: {
            id: "israar_ahmad",
            name: "Israar Ahmad",
            displayName: "Israar Ahmad",
            gender: "male",
            parent: "rahamullah",
            children: []
        },
        iftekhaar_ahmad: {
            id: "iftekhaar_ahmad",
            name: "Iftekhaar Ahmad",
            nickname: "guddu",
            displayName: "Iftekhaar Ahmad (guddu)",
            gender: "male",
            parent: "rahamullah",
            children: []
        },
        ishtiaaq_ahmad: {
            id: "ishtiaaq_ahmad",
            name: "Ishtiaaq Ahmad",
            nickname: "munna",
            displayName: "Ishtiaaq Ahmad (munna)",
            gender: "male",
            parent: "rahamullah",
            children: []
        },
        rahamullah_daughter1: {
            id: "rahamullah_daughter1",
            name: "Daughter",
            displayName: "Daughter [unnamed]",
            gender: "female",
            parent: "rahamullah",
            children: []
        },

        // Kids of Ghareebullah (Bawaali)
        muhammad_idrees: {
            id: "muhammad_idrees",
            name: "Muhammad Idrees",
            displayName: "Muhammad Idrees",
            gender: "male",
            parent: "ghareebullah",
            children: []
        },
        ameerullah: {
            id: "ameerullah",
            name: "Ameerullah",
            displayName: "Ameerullah",
            gender: "male",
            parent: "ghareebullah",
            children: []
        },
        jugga: {
            id: "jugga",
            name: "Jugga",
            displayName: "Jugga",
            gender: "female",
            parent: "ghareebullah",
            children: []
        },
        bhunnan: {
            id: "bhunnan",
            name: "Bhunnan",
            displayName: "Bhunnan",
            gender: "female",
            parent: "ghareebullah",
            children: []
        },
        kaula: {
            id: "kaula",
            name: "Kaula",
            displayName: "Kaula",
            gender: "female",
            parent: "ghareebullah",
            children: []
        },
        taraabun: {
            id: "taraabun",
            name: "Taraabun",
            displayName: "Taraabun",
            gender: "female",
            parent: "ghareebullah",
            children: []
        },

        // Kids of Haidar Ali
        akhlaaq_ahmad: {
            id: "akhlaaq_ahmad",
            name: "Akhlaaq Ahmad",
            displayName: "Akhlaaq Ahmad",
            gender: "male",
            parent: "haidar_ali",
            children: []
        },
        iqbaal_ahmad: {
            id: "iqbaal_ahmad",
            name: "Iqbaal Ahmad",
            displayName: "Iqbaal Ahmad",
            gender: "male",
            parent: "haidar_ali",
            children: []
        },
        ahsaan_ahmad: {
            id: "ahsaan_ahmad",
            name: "Ahsaan Ahmad",
            displayName: "Ahsaan Ahmad",
            gender: "male",
            parent: "haidar_ali",
            children: []
        },

        // Kids of Ateemullah (Khan Sahab)
        aftaab_ahmad: {
            id: "aftaab_ahmad",
            name: "Aftaab Ahmad",
            displayName: "Aftaab Ahmad",
            gender: "male",
            parent: "ateemullah",
            children: []
        },
        rafeeq_ahmad_indiya: {
            id: "rafeeq_ahmad_indiya",
            name: "Rafeeq Ahmad",
            nickname: "Indiya",
            displayName: "Rafeeq Ahmad (Indiya)",
            gender: "male",
            parent: "ateemullah",
            children: []
        },
        babuli: {
            id: "babuli",
            name: "Babuli",
            displayName: "Babuli",
            gender: "female",
            parent: "ateemullah",
            children: []
        },
        behni: {
            id: "behni",
            name: "Behni",
            displayName: "Behni",
            gender: "female",
            parent: "ateemullah",
            children: []
        },

        // Kids of Naseer Muhammad (Haaji Sahab)
        baadshah: {
            id: "baadshah",
            name: "Baadshah",
            displayName: "Baadshah",
            gender: "male",
            parent: "naseer_muhammad",
            children: []
        },
        akhtarun: {
            id: "akhtarun",
            name: "Akhtarun",
            displayName: "Akhtarun",
            gender: "female",
            parent: "naseer_muhammad",
            children: []
        },
        shaakirun: {
            id: "shaakirun",
            name: "Shaakirun",
            displayName: "Shaakirun",
            gender: "female",
            parent: "naseer_muhammad",
            children: []
        },
        kumkum: {
            id: "kumkum",
            name: "Kumkum",
            displayName: "Kumkum",
            gender: "female",
            parent: "naseer_muhammad",
            children: []
        },
        rukhsaar: {
            id: "rukhsaar",
            name: "Rukhsaar",
            displayName: "Rukhsaar",
            gender: "female",
            parent: "naseer_muhammad",
            children: []
        },

        // Kids of Noor Muhammad
        karam_husayn_kallu: {
            id: "karam_husayn_kallu",
            name: "Karam Husayn",
            nickname: "Kallu",
            displayName: "Karam Husayn (Kallu)",
            gender: "male",
            parent: "noor_muhammad",
            children: []
        },
        irshaad_husayn: {
            id: "irshaad_husayn",
            name: "Irshaad Husayn",
            displayName: "Irshaad Husayn",
            gender: "male",
            parent: "noor_muhammad",
            children: []
        },
        ikraam_husayn: {
            id: "ikraam_husayn",
            name: "Ikraam Husayn",
            displayName: "Ikraam Husayn",
            gender: "male",
            parent: "noor_muhammad",
            children: []
        },
        shehzaad_husayn: {
            id: "shehzaad_husayn",
            name: "Shehzaad Husayn",
            displayName: "Shehzaad Husayn",
            gender: "male",
            parent: "noor_muhammad",
            children: []
        },
        shabeena: {
            id: "shabeena",
            name: "Shabeena",
            displayName: "Shabeena",
            gender: "female",
            parent: "noor_muhammad",
            children: []
        },

        // Kids of Zahoor Muhammad
        muhammad_saleem: {
            id: "muhammad_saleem",
            name: "Muhammad Saleem",
            nickname: "Bablu",
            displayName: "Muhammad Saleem (Bablu)",
            gender: "male",
            parent: "zahoor_muhammad",
            children: []
        },
        muhammad_kaleem: {
            id: "muhammad_kaleem",
            name: "Muhammad Kaleem",
            nickname: "Dablu",
            displayName: "Muhammad Kaleem (Dablu)",
            gender: "male",
            parent: "zahoor_muhammad",
            children: []
        },
        shaadaab_anjum: {
            id: "shaadaab_anjum",
            name: "Shaadaab Anjum",
            nickname: "Sabbo",
            displayName: "Shaadaab Anjum/Sabbo",
            gender: "female",
            parent: "zahoor_muhammad",
            children: []
        },
        sanno: {
            id: "sanno",
            name: "Sanno",
            displayName: "Sanno",
            gender: "female",
            parent: "zahoor_muhammad",
            children: []
        },

        // Kids of Jamaal Muhammad
        jameel_ahmad: {
            id: "jameel_ahmad",
            name: "Jameel Ahmad",
            displayName: "Jameel Ahmad",
            gender: "male",
            parent: "jamaal_muhammad",
            children: []
        },
        raees_ahmad: {
            id: "raees_ahmad",
            name: "Raees Ahmad",
            displayName: "Raees Ahmad",
            gender: "male",
            parent: "jamaal_muhammad",
            children: []
        },
        nisaar_ahmad: {
            id: "nisaar_ahmad",
            name: "Nisaar Ahmad",
            displayName: "Nisaar Ahmad",
            gender: "male",
            parent: "jamaal_muhammad",
            children: []
        },
        munni: {
            id: "munni",
            name: "Munni",
            displayName: "Munni",
            gender: "female",
            parent: "jamaal_muhammad",
            children: []
        },
        gudiya: {
            id: "gudiya",
            name: "Gudiya",
            displayName: "Gudiya",
            gender: "female",
            parent: "jamaal_muhammad",
            children: []
        },
        laado: {
            id: "laado",
            name: "Laado",
            displayName: "Laado",
            gender: "female",
            parent: "jamaal_muhammad",
            children: []
        },

        // Kids of Kamaal Muhammad
        muhammad_ashraf: {
            id: "muhammad_ashraf",
            name: "Muhammad Ashraf",
            displayName: "Muhammad Ashraf",
            gender: "male",
            parent: "kamaal_muhammad",
            children: []
        },
        muhammad_arshad: {
            id: "muhammad_arshad",
            name: "Muhammad Arshad",
            displayName: "Muhammad Arshad",
            gender: "male",
            parent: "kamaal_muhammad",
            children: []
        },
        nahid_sultana: {
            id: "nahid_sultana",
            name: "Nahid Sultana",
            nickname: "Tamanna",
            displayName: "Nahid Sultana/Tamanna",
            gender: "female",
            parent: "kamaal_muhammad",
            children: []
        },
        raziya_sultana: {
            id: "raziya_sultana",
            name: "Raziya Sultana",
            nickname: "Babli",
            displayName: "Raziya Sultana/Babli",
            gender: "female",
            parent: "kamaal_muhammad",
            children: []
        },
        naiyyar_sultana: {
            id: "naiyyar_sultana",
            name: "Naiyyar Sultana",
            displayName: "Naiyyar Sultana",
            gender: "female",
            parent: "kamaal_muhammad",
            children: []
        },

        // Kids of Dost Muhammad
        ashfaaq_muhammad: {
            id: "ashfaaq_muhammad",
            name: "Ashfaaq Muhammad",
            nickname: "Khat-khat",
            displayName: "Ashfaaq Muhammad (Khat-khat)",
            gender: "male",
            parent: "dost_muhammad",
            children: []
        },
        shafaak_ahmad: {
            id: "shafaak_ahmad",
            name: "Shafaak Ahmad",
            nickname: "Nikki",
            displayName: "Shafaak Ahmad (Nikki)",
            gender: "male",
            parent: "dost_muhammad",
            children: []
        },
        firoz_ahmad: {
            id: "firoz_ahmad",
            name: "Firoz Ahmad",
            displayName: "Firoz Ahmad",
            gender: "male",
            parent: "dost_muhammad",
            children: []
        },
        muhammad_farooq: {
            id: "muhammad_farooq",
            name: "Muhammad Farooq",
            nickname: "Megghu",
            displayName: "Muhammad Farooq (Megghu)",
            gender: "male",
            parent: "dost_muhammad",
            children: []
        },
        muhammad_hadees: {
            id: "muhammad_hadees",
            name: "Muhammad Hadees",
            nickname: "Saddar",
            displayName: "Muhammad Hadees (Saddar)",
            gender: "male",
            parent: "dost_muhammad",
            children: []
        },
        najma: {
            id: "najma",
            name: "Najma",
            displayName: "Najma",
            gender: "female",
            parent: "dost_muhammad",
            children: []
        },

        // Kids of Deen Muhammad
        azeez_ahmad: {
            id: "azeez_ahmad",
            name: "Azeez Ahmad",
            displayName: "Azeez Ahmad",
            gender: "male",
            parent: "deen_muhammad",
            children: []
        },
        aijaaz_ahmad: {
            id: "aijaaz_ahmad",
            name: "Aijaaz Ahmad",
            displayName: "Aijaaz Ahmad",
            gender: "male",
            parent: "deen_muhammad",
            children: []
        },
        armaan_ahmad: {
            id: "armaan_ahmad",
            name: "Armaan Ahmad",
            displayName: "Armaan Ahmad",
            gender: "male",
            parent: "deen_muhammad",
            children: []
        },
        aaliyah: {
            id: "aaliyah",
            name: "Aaliyah",
            displayName: "Aaliyah",
            gender: "female",
            parent: "deen_muhammad",
            children: []
        },
        deen_muhammad_daughter2: {
            id: "deen_muhammad_daughter2",
            name: "Daughter",
            displayName: "Daughter [unnamed]",
            gender: "female",
            parent: "deen_muhammad",
            children: []
        },
        shakeela: {
            id: "shakeela",
            name: "Shakeela",
            displayName: "Shakeela",
            gender: "female",
            parent: "deen_muhammad",
            children: []
        },

        // Kids of Bhallu
        sameer: {
            id: "sameer",
            name: "Sameer",
            displayName: "Sameer",
            gender: "male",
            parent: "bhallu",
            children: []
        },
        bhallu_son2: {
            id: "bhallu_son2",
            name: "Son",
            displayName: "Son [unnamed]",
            gender: "male",
            parent: "bhallu",
            children: []
        },
        bhallu_daughter1: {
            id: "bhallu_daughter1",
            name: "Daughter",
            displayName: "Daughter [unnamed]",
            gender: "female",
            parent: "bhallu",
            children: []
        }
    }
};