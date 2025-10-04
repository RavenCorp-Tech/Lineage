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
            children: ["muhammad_rasheed", "jahanaara", "ghulaab_jahan", "naseem_jahan", "aleemun", "saleemun", "hakeemun"]
        },
        muhammad_saeed: {
            id: "muhammad_saeed",
            name: "Muhammad Saeed",
            displayName: "Muhammad Saeed",
            gender: "male",
            parent: "habibullah",
            children: ["nazar_e_aalam", "qamar_hasan", "najrun_nisa", "mehrun_nisa", "azeezun_nisa"]
        },
        zahid_husayn: {
            id: "zahid_husayn",
            name: "Zahid Husayn",
            displayName: "Zahid Husayn",
            gender: "male",
            parent: "habibullah",
            children: ["muhammad_afsar", "mini", "taufeeq", "muhammad_ilyaas", "gulzaar_ahmad", "dolly", "noorus_saba"]
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
            children: ["shabnam", "tabassum"]
        },
        ali_ahmad: {
            id: "ali_ahmad",
            name: "Ali Ahmad",
            nickname: "Balla",
            displayName: "Ali Ahmad (Balla)",
            gender: "male",
            parent: "zayfullah",
            children: ["imraan_ahmad_qaadri"]
        },
        rafeeq_ahmad_babbu: {
            id: "rafeeq_ahmad_babbu",
            name: "Rafeeq Ahmad",
            nickname: "Babbu",
            displayName: "Rafeeq Ahmad (Babbu)",
            gender: "male",
            parent: "zayfullah",
            children: ["abraar_ahmad", "rinku_ahmad", "saddaam_ahmad", "shabaana"]
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
            children: ["fatimah_khatoon", "muhammad_husayn", "ruqayyah_khatoon"]
        },
        rashid_husayn: {
            id: "rashid_husayn",
            name: "Rashid Husayn",
            displayName: "Rashid Husayn",
            gender: "male",
            parent: "jauhar_ali",
            children: ["suhayl_ahmad", "zubayr_ahmad", "tufayl_ahmad", "naadira_khatoon", "noor_saman"]
        },
        sadiq_husayn: {
            id: "sadiq_husayn",
            name: "Sadiq Husayn",
            displayName: "Sadiq Husayn",
            gender: "male",
            parent: "jauhar_ali",
            children: ["muhammad_asif", "mehroz", "muhammad_talib"]
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
            children: ["muhammad_kaif", "tahseen_ali"]
        },
        shamshad_husayn: {
            id: "shamshad_husayn",
            name: "Shamshad Husayn",
            displayName: "Shamshad Husayn",
            gender: "male",
            parent: "jauhar_ali",
            children: ["adil_hasan", "nayla_ali"]
        },

        // Kids of Chikaaru
        karam_husayn: {
            id: "karam_husayn",
            name: "Karam Husayn",
            displayName: "Karam Husayn",
            gender: "male",
            parent: "chikaaru",
            children: ["subhraati"]
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
            children: ["suttur", "puttur", "huttur", "israar_daughter"]
        },
        iftekhaar_ahmad: {
            id: "iftekhaar_ahmad",
            name: "Iftekhaar Ahmad",
            nickname: "guddu",
            displayName: "Iftekhaar Ahmad (guddu)",
            gender: "male",
            parent: "rahamullah",
            children: ["iftekhaar_son"]
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
            children: ["gudiya_idrees", "yasmine", "naazmeen", "chaandni", "adnan_ahmad"]
        },
        ameerullah: {
            id: "ameerullah",
            name: "Ameerullah",
            displayName: "Ameerullah",
            gender: "male",
            parent: "ghareebullah",
            children: ["ameerun", "jhabbi", "ameerullah_daughter", "mainuddin_ahmad"]
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
            children: ["izhaar_ahmad", "abdur_rahmaan", "saba", "alfi"]
        },
        iqbaal_ahmad: {
            id: "iqbaal_ahmad",
            name: "Iqbaal Ahmad",
            displayName: "Iqbaal Ahmad",
            gender: "male",
            parent: "haidar_ali",
            children: ["neha", "henna", "anas_ahmad"]
        },
        ahsaan_ahmad: {
            id: "ahsaan_ahmad",
            name: "Ahsaan Ahmad",
            displayName: "Ahsaan Ahmad",
            gender: "male",
            parent: "haidar_ali",
            children: ["nida", "jishan_ahmad", "sumayyah"]
        },

        // Kids of Ateemullah (Khan Sahab)
        aftaab_ahmad: {
            id: "aftaab_ahmad",
            name: "Aftaab Ahmad",
            displayName: "Aftaab Ahmad",
            gender: "male",
            parent: "ateemullah",
            children: ["nagma", "altaf_ahmad", "afaque_ahmad", "rosey"]
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
            children: ["baadshah_son", "baadshah_daughter"]
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
            children: ["akhtar_husayn", "bhola", "athar_husayn", "ramazan_husayn", "asma", "kallu_daughter2", "kallu_daughter3", "kallu_daughter4", "kallu_daughter5"]
        },
        irshaad_husayn: {
            id: "irshaad_husayn",
            name: "Irshaad Husayn",
            displayName: "Irshaad Husayn",
            gender: "male",
            parent: "noor_muhammad",
            children: ["irfaan_ahmad", "rizwaan_ahmad", "nasreen", "gulsfishan"]
        },
        ikraam_husayn: {
            id: "ikraam_husayn",
            name: "Ikraam Husayn",
            displayName: "Ikraam Husayn",
            gender: "male",
            parent: "noor_muhammad",
            children: ["ikraar_husayn", "iltaaf_husayn", "ruby"]
        },
        shehzaad_husayn: {
            id: "shehzaad_husayn",
            name: "Shehzaad Husayn",
            displayName: "Shehzaad Husayn",
            gender: "male",
            parent: "noor_muhammad",
            children: ["shehzaad_son1", "aman", "shehzaad_son3"]
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
            children: ["saleem_son", "saleem_daughter"]
        },
        muhammad_kaleem: {
            id: "muhammad_kaleem",
            name: "Muhammad Kaleem",
            nickname: "Dablu",
            displayName: "Muhammad Kaleem (Dablu)",
            gender: "male",
            parent: "zahoor_muhammad",
            children: ["nikhat", "kaleem_son"]
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
            children: ["shakeel_ahmad", "aqeel_ahmad", "azeem_ahmad", "jameel_daughter1", "naaz", "jameel_daughter3"]
        },
        raees_ahmad: {
            id: "raees_ahmad",
            name: "Raees Ahmad",
            displayName: "Raees Ahmad",
            gender: "male",
            parent: "jamaal_muhammad",
            children: ["anees_ahmad", "shoayb_ahmad"]
        },
        nisaar_ahmad: {
            id: "nisaar_ahmad",
            name: "Nisaar Ahmad",
            displayName: "Nisaar Ahmad",
            gender: "male",
            parent: "jamaal_muhammad",
            children: ["nisaar_daughter1", "shadaab_ahmad", "nisaar_daughter3", "nisaar_daughter4"]
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
            children: ["aayra"]
        },
        muhammad_arshad: {
            id: "muhammad_arshad",
            name: "Muhammad Arshad",
            displayName: "Muhammad Arshad",
            gender: "male",
            parent: "kamaal_muhammad",
            children: ["aalaa", "afshaan", "azkaar"]
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
            children: ["najeem_ahmad", "naseem_ahmad", "munauwwar_ahmad", "sayyad_ahmad", "saadiq_ahmad"]
        },
        shafaak_ahmad: {
            id: "shafaak_ahmad",
            name: "Shafaak Ahmad",
            nickname: "Nikki",
            displayName: "Shafaak Ahmad (Nikki)",
            gender: "male",
            parent: "dost_muhammad",
            children: ["salman_ahmad", "rizwaan_ahmad_nikki", "rubina", "shafaak_daughter2"]
        },
        firoz_ahmad: {
            id: "firoz_ahmad",
            name: "Firoz Ahmad",
            displayName: "Firoz Ahmad",
            gender: "male",
            parent: "dost_muhammad",
            children: ["afroz_ahmad", "firoz_daughter2", "firoz_daughter3"]
        },
        muhammad_farooq: {
            id: "muhammad_farooq",
            name: "Muhammad Farooq",
            nickname: "Megghu",
            displayName: "Muhammad Farooq (Megghu)",
            gender: "male",
            parent: "dost_muhammad",
            children: ["ahil_ahmad", "altamash_ahmad", "farooq_daughters"]
        },
        muhammad_hadees: {
            id: "muhammad_hadees",
            name: "Muhammad Hadees",
            nickname: "Saddar",
            displayName: "Muhammad Hadees (Saddar)",
            gender: "male",
            parent: "dost_muhammad",
            children: ["rehan_ahmad", "farhan_ahmad"]
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
            children: ["atif_ahmad", "sahil_ahmad", "azeez_daughter1", "azeez_daughter2"]
        },
        aijaaz_ahmad: {
            id: "aijaaz_ahmad",
            name: "Aijaaz Ahmad",
            displayName: "Aijaaz Ahmad",
            gender: "male",
            parent: "deen_muhammad",
            children: ["aiman_ahmad", "aijaaz_daughter"]
        },
        armaan_ahmad: {
            id: "armaan_ahmad",
            name: "Armaan Ahmad",
            displayName: "Armaan Ahmad",
            gender: "male",
            parent: "deen_muhammad",
            children: ["anas_armaan", "armaan_son2"]
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
    },
    
    generation6: {
        // Children of Muhammad Umar
        muhammad_rasheed: {
            id: "muhammad_rasheed",
            name: "Muhammad Rasheed",
            displayName: "Muhammad Rasheed",
            gender: "male",
            parent: "muhammad_umar",
            children: []
        },
        jahanaara: {
            id: "jahanaara",
            name: "Jahanaara",
            displayName: "Jahanaara",
            gender: "female",
            parent: "muhammad_umar",
            children: []
        },
        ghulaab_jahan: {
            id: "ghulaab_jahan",
            name: "Ghulaab Jahan",
            displayName: "Ghulaab Jahan",
            gender: "female",
            parent: "muhammad_umar",
            children: []
        },
        naseem_jahan: {
            id: "naseem_jahan",
            name: "Naseem Jahan",
            displayName: "Naseem Jahan",
            gender: "female",
            parent: "muhammad_umar",
            children: []
        },
        aleemun: {
            id: "aleemun",
            name: "Aleemun",
            displayName: "Aleemun",
            gender: "female",
            parent: "muhammad_umar",
            children: []
        },
        saleemun: {
            id: "saleemun",
            name: "Saleemun",
            displayName: "Saleemun",
            gender: "female",
            parent: "muhammad_umar",
            children: []
        },
        hakeemun: {
            id: "hakeemun",
            name: "Hakeemun",
            displayName: "Hakeemun",
            gender: "female",
            parent: "muhammad_umar",
            children: []
        },

        // Children of Muhammad Saeed
        nazar_e_aalam: {
            id: "nazar_e_aalam",
            name: "Nazar-e-Aalam",
            displayName: "Nazar-e-Aalam",
            gender: "male",
            parent: "muhammad_saeed",
            children: []
        },
        qamar_hasan: {
            id: "qamar_hasan",
            name: "Qamar Hasan",
            displayName: "Qamar Hasan",
            gender: "male",
            parent: "muhammad_saeed",
            children: []
        },
        najrun_nisa: {
            id: "najrun_nisa",
            name: "Najrun Nisa",
            displayName: "Najrun Nisa",
            gender: "female",
            parent: "muhammad_saeed",
            children: []
        },
        mehrun_nisa: {
            id: "mehrun_nisa",
            name: "Mehrun Nisa",
            displayName: "Mehrun Nisa",
            gender: "female",
            parent: "muhammad_saeed",
            children: []
        },
        azeezun_nisa: {
            id: "azeezun_nisa",
            name: "Azeezun Nisa",
            displayName: "Azeezun Nisa",
            gender: "female",
            parent: "muhammad_saeed",
            children: []
        },

        // Children of Zahid Husayn
        muhammad_afsar: {
            id: "muhammad_afsar",
            name: "Muhammad Afsar",
            displayName: "Muhammad Afsar",
            gender: "male",
            parent: "zahid_husayn",
            children: []
        },
        mini: {
            id: "mini",
            name: "Mini",
            displayName: "Mini",
            gender: "female",
            parent: "zahid_husayn",
            children: []
        },
        taufeeq: {
            id: "taufeeq",
            name: "Taufeeq",
            displayName: "Taufeeq",
            gender: "male",
            parent: "zahid_husayn",
            children: []
        },
        muhammad_ilyaas: {
            id: "muhammad_ilyaas",
            name: "Muhammad Ilyaas",
            displayName: "Muhammad Ilyaas",
            gender: "male",
            parent: "zahid_husayn",
            children: []
        },
        gulzaar_ahmad: {
            id: "gulzaar_ahmad",
            name: "Gulzaar Ahmad",
            displayName: "Gulzaar Ahmad",
            gender: "male",
            parent: "zahid_husayn",
            children: []
        },
        dolly: {
            id: "dolly",
            name: "Dolly",
            displayName: "Dolly",
            gender: "female",
            parent: "zahid_husayn",
            children: []
        },
        noorus_saba: {
            id: "noorus_saba",
            name: "Noorus Saba",
            displayName: "Noorus Saba",
            gender: "female",
            parent: "zahid_husayn",
            children: []
        },

        // Children of Samad Ali
        shabnam: {
            id: "shabnam",
            name: "Shabnam",
            displayName: "Shabnam",
            gender: "female",
            parent: "samad_ali",
            children: []
        },
        tabassum: {
            id: "tabassum",
            name: "Tabassum",
            displayName: "Tabassum",
            gender: "female",
            parent: "samad_ali",
            children: []
        },

        // Children of Ali Ahmad (Balla)
        imraan_ahmad_qaadri: {
            id: "imraan_ahmad_qaadri",
            name: "Imraan Ahmad",
            nickname: "Qaadri",
            displayName: "Imraan Ahmad (Qaadri)",
            gender: "male",
            parent: "ali_ahmad",
            children: []
        },

        // Children of Rafeeq Ahmad (Babbu)
        abraar_ahmad: {
            id: "abraar_ahmad",
            name: "Abraar Ahmad",
            displayName: "Abraar Ahmad",
            gender: "male",
            parent: "rafeeq_ahmad_babbu",
            children: []
        },
        rinku_ahmad: {
            id: "rinku_ahmad",
            name: "Rinku Ahmad",
            displayName: "Rinku Ahmad",
            gender: "male",
            parent: "rafeeq_ahmad_babbu",
            children: []
        },
        saddaam_ahmad: {
            id: "saddaam_ahmad",
            name: "Saddaam Ahmad",
            displayName: "Saddaam Ahmad",
            gender: "male",
            parent: "rafeeq_ahmad_babbu",
            children: []
        },
        shabaana: {
            id: "shabaana",
            name: "Shabaana",
            displayName: "Shabaana",
            gender: "female",
            parent: "rafeeq_ahmad_babbu",
            children: []
        },

        // Children of Muhammad Raees (Haaji)
        fatimah_khatoon: {
            id: "fatimah_khatoon",
            name: "Fatimah Khatoon",
            displayName: "Fatimah Khatoon",
            gender: "female",
            parent: "muhammad_raees",
            children: []
        },
        muhammad_husayn: {
            id: "muhammad_husayn",
            name: "Muhammad Husayn",
            displayName: "Muhammad Husayn",
            gender: "male",
            parent: "muhammad_raees",
            children: []
        },
        ruqayyah_khatoon: {
            id: "ruqayyah_khatoon",
            name: "Ruqayyah Khatoon",
            displayName: "Ruqayyah Khatoon",
            gender: "female",
            parent: "muhammad_raees",
            children: []
        },

        // Children of Rashid Husayn
        suhayl_ahmad: {
            id: "suhayl_ahmad",
            name: "Suhayl Ahmad",
            displayName: "Suhayl Ahmad",
            gender: "male",
            parent: "rashid_husayn",
            children: []
        },
        zubayr_ahmad: {
            id: "zubayr_ahmad",
            name: "Zubayr Ahmad",
            displayName: "Zubayr Ahmad",
            gender: "male",
            parent: "rashid_husayn",
            children: []
        },
        tufayl_ahmad: {
            id: "tufayl_ahmad",
            name: "Tufayl Ahmad",
            displayName: "Tufayl Ahmad",
            gender: "male",
            parent: "rashid_husayn",
            children: []
        },
        naadira_khatoon: {
            id: "naadira_khatoon",
            name: "Naadira Khatoon",
            displayName: "Naadira Khatoon",
            gender: "female",
            parent: "rashid_husayn",
            children: []
        },
        noor_saman: {
            id: "noor_saman",
            name: "Noor Saman",
            displayName: "Noor Saman",
            gender: "female",
            parent: "rashid_husayn",
            children: []
        },

        // Children of Sadiq Husayn
        muhammad_asif: {
            id: "muhammad_asif",
            name: "Muhammad Asif",
            displayName: "Muhammad Asif",
            gender: "male",
            parent: "sadiq_husayn",
            children: []
        },
        mehroz: {
            id: "mehroz",
            name: "Mehroz",
            displayName: "Mehroz",
            gender: "male",
            parent: "sadiq_husayn",
            children: []
        },
        muhammad_talib: {
            id: "muhammad_talib",
            name: "Muhammad Talib",
            displayName: "Muhammad Talib",
            gender: "male",
            parent: "sadiq_husayn",
            children: []
        },

        // Children of Nazir Husayn
        muhammad_kaif: {
            id: "muhammad_kaif",
            name: "Muhammad Kaif",
            displayName: "Muhammad Kaif",
            gender: "male",
            parent: "nazir_husayn",
            children: []
        },
        tahseen_ali: {
            id: "tahseen_ali",
            name: "Tahseen Ali",
            displayName: "Tahseen Ali",
            gender: "male",
            parent: "nazir_husayn",
            children: []
        },

        // Children of Shamshad Husayn
        adil_hasan: {
            id: "adil_hasan",
            name: "Adil Hasan",
            displayName: "Adil Hasan",
            gender: "male",
            parent: "shamshad_husayn",
            children: []
        },
        nayla_ali: {
            id: "nayla_ali",
            name: "Nayla Ali",
            displayName: "Nayla Ali",
            gender: "female",
            parent: "shamshad_husayn",
            children: []
        },

        // Children of Karam Husayn
        subhraati: {
            id: "subhraati",
            name: "Subhraati",
            displayName: "Subhraati",
            gender: "female",
            parent: "karam_husayn",
            children: []
        },

        // Children of Israar Ahmad
        suttur: {
            id: "suttur",
            name: "Suttur",
            displayName: "Suttur",
            gender: "male",
            parent: "israar_ahmad",
            children: []
        },
        puttur: {
            id: "puttur",
            name: "Puttur",
            displayName: "Puttur",
            gender: "male",
            parent: "israar_ahmad",
            children: []
        },
        huttur: {
            id: "huttur",
            name: "Huttur",
            displayName: "Huttur",
            gender: "male",
            parent: "israar_ahmad",
            children: []
        },
        israar_daughter: {
            id: "israar_daughter",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "israar_ahmad",
            children: []
        },

        // Children of Iftekhaar Ahmad (guddu)
        iftekhaar_son: {
            id: "iftekhaar_son",
            name: "Son",
            displayName: "Son [Unnamed]",
            gender: "male",
            parent: "iftekhaar_ahmad",
            children: []
        },

        // Children of Muhammad Idrees
        gudiya_idrees: {
            id: "gudiya_idrees",
            name: "Gudiya",
            displayName: "Gudiya",
            gender: "female",
            parent: "muhammad_idrees",
            children: []
        },
        yasmine: {
            id: "yasmine",
            name: "Yasmine",
            displayName: "Yasmine",
            gender: "female",
            parent: "muhammad_idrees",
            children: []
        },
        naazmeen: {
            id: "naazmeen",
            name: "Naazmeen",
            displayName: "Naazmeen",
            gender: "female",
            parent: "muhammad_idrees",
            children: []
        },
        chaandni: {
            id: "chaandni",
            name: "Chaandni",
            displayName: "Chaandni",
            gender: "female",
            parent: "muhammad_idrees",
            children: []
        },
        adnan_ahmad: {
            id: "adnan_ahmad",
            name: "Adnan Ahmad",
            displayName: "Adnan Ahmad",
            gender: "male",
            parent: "muhammad_idrees",
            children: []
        },

        // Children of Ameerullah
        ameerun: {
            id: "ameerun",
            name: "Ameerun",
            displayName: "Ameerun",
            gender: "female",
            parent: "ameerullah",
            children: []
        },
        jhabbi: {
            id: "jhabbi",
            name: "Jhabbi",
            displayName: "Jhabbi",
            gender: "female",
            parent: "ameerullah",
            children: []
        },
        ameerullah_daughter: {
            id: "ameerullah_daughter",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "ameerullah",
            children: []
        },
        mainuddin_ahmad: {
            id: "mainuddin_ahmad",
            name: "Mainuddin Ahmad",
            displayName: "Mainuddin Ahmad",
            gender: "male",
            parent: "ameerullah",
            children: []
        },

        // Children of Akhlaaq Ahmad
        izhaar_ahmad: {
            id: "izhaar_ahmad",
            name: "Izhaar Ahmad",
            displayName: "Izhaar Ahmad",
            gender: "male",
            parent: "akhlaaq_ahmad",
            children: []
        },
        abdur_rahmaan: {
            id: "abdur_rahmaan",
            name: "Abdur Rahmaan",
            displayName: "Abdur Rahmaan",
            gender: "male",
            parent: "akhlaaq_ahmad",
            children: []
        },
        saba: {
            id: "saba",
            name: "Saba",
            displayName: "Saba",
            gender: "female",
            parent: "akhlaaq_ahmad",
            children: []
        },
        alfi: {
            id: "alfi",
            name: "Alfi",
            displayName: "Alfi",
            gender: "female",
            parent: "akhlaaq_ahmad",
            children: []
        },

        // Children of Iqbaal Ahmad
        neha: {
            id: "neha",
            name: "Neha",
            displayName: "Neha",
            gender: "female",
            parent: "iqbaal_ahmad",
            children: []
        },
        henna: {
            id: "henna",
            name: "Henna",
            displayName: "Henna",
            gender: "female",
            parent: "iqbaal_ahmad",
            children: []
        },
        anas_ahmad: {
            id: "anas_ahmad",
            name: "Anas Ahmad",
            displayName: "Anas Ahmad",
            gender: "male",
            parent: "iqbaal_ahmad",
            children: []
        },

        // Children of Ahsaan Ahmad
        nida: {
            id: "nida",
            name: "Nida",
            displayName: "Nida",
            gender: "female",
            parent: "ahsaan_ahmad",
            children: []
        },
        jishan_ahmad: {
            id: "jishan_ahmad",
            name: "Jishan Ahmad",
            displayName: "Jishan Ahmad",
            gender: "male",
            parent: "ahsaan_ahmad",
            children: []
        },
        sumayyah: {
            id: "sumayyah",
            name: "Sumayyah",
            displayName: "Sumayyah",
            gender: "female",
            parent: "ahsaan_ahmad",
            children: []
        },

        // Children of Aftaab Ahmad
        nagma: {
            id: "nagma",
            name: "Nagma",
            displayName: "Nagma",
            gender: "female",
            parent: "aftaab_ahmad",
            children: []
        },
        altaf_ahmad: {
            id: "altaf_ahmad",
            name: "Altaf Ahmad",
            displayName: "Altaf Ahmad",
            gender: "male",
            parent: "aftaab_ahmad",
            children: []
        },
        afaque_ahmad: {
            id: "afaque_ahmad",
            name: "Afaque Ahmad",
            displayName: "Afaque Ahmad",
            gender: "male",
            parent: "aftaab_ahmad",
            children: []
        },
        rosey: {
            id: "rosey",
            name: "Rosey",
            displayName: "Rosey",
            gender: "female",
            parent: "aftaab_ahmad",
            children: []
        },

        // Children of Baadshah
        baadshah_son: {
            id: "baadshah_son",
            name: "Son",
            displayName: "Son [Unnamed]",
            gender: "male",
            parent: "baadshah",
            children: []
        },
        baadshah_daughter: {
            id: "baadshah_daughter",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "baadshah",
            children: []
        },

        // Children of Karam Husayn Kallu
        akhtar_husayn: {
            id: "akhtar_husayn",
            name: "Akhtar Husayn",
            displayName: "Akhtar Husayn",
            gender: "male",
            parent: "karam_husayn_kallu",
            children: []
        },
        bhola: {
            id: "bhola",
            name: "Bhola",
            displayName: "Bhola",
            gender: "male",
            parent: "karam_husayn_kallu",
            children: []
        },
        athar_husayn: {
            id: "athar_husayn",
            name: "Athar Husayn",
            displayName: "Athar Husayn",
            gender: "male",
            parent: "karam_husayn_kallu",
            children: []
        },
        ramazan_husayn: {
            id: "ramazan_husayn",
            name: "Ramazan Husayn",
            displayName: "Ramazan Husayn",
            gender: "male",
            parent: "karam_husayn_kallu",
            children: []
        },
        asma: {
            id: "asma",
            name: "Asma",
            displayName: "Asma",
            gender: "female",
            parent: "karam_husayn_kallu",
            children: []
        },
        kallu_daughter2: {
            id: "kallu_daughter2",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "karam_husayn_kallu",
            children: []
        },
        kallu_daughter3: {
            id: "kallu_daughter3",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "karam_husayn_kallu",
            children: []
        },
        kallu_daughter4: {
            id: "kallu_daughter4",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "karam_husayn_kallu",
            children: []
        },
        kallu_daughter5: {
            id: "kallu_daughter5",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "karam_husayn_kallu",
            children: []
        },

        // Children of Irshaad Husayn
        irfaan_ahmad: {
            id: "irfaan_ahmad",
            name: "Irfaan Ahmad",
            displayName: "Irfaan Ahmad",
            gender: "male",
            parent: "irshaad_husayn",
            children: []
        },
        rizwaan_ahmad: {
            id: "rizwaan_ahmad",
            name: "Rizwaan Ahmad",
            displayName: "Rizwaan Ahmad",
            gender: "male",
            parent: "irshaad_husayn",
            children: []
        },
        nasreen: {
            id: "nasreen",
            name: "Nasreen",
            displayName: "Nasreen",
            gender: "female",
            parent: "irshaad_husayn",
            children: []
        },
        gulsfishan: {
            id: "gulsfishan",
            name: "Gulsfishan",
            displayName: "Gulsfishan",
            gender: "female",
            parent: "irshaad_husayn",
            children: []
        },

        // Children of Ikraam Husayn
        ikraar_husayn: {
            id: "ikraar_husayn",
            name: "Ikraar Husayn",
            displayName: "Ikraar Husayn",
            gender: "male",
            parent: "ikraam_husayn",
            children: []
        },
        iltaaf_husayn: {
            id: "iltaaf_husayn",
            name: "Iltaaf Husayn",
            displayName: "Iltaaf Husayn",
            gender: "male",
            parent: "ikraam_husayn",
            children: []
        },
        ruby: {
            id: "ruby",
            name: "Ruby",
            displayName: "Ruby",
            gender: "female",
            parent: "ikraam_husayn",
            children: []
        },

        // Children of Shehzaad Husayn
        shehzaad_son1: {
            id: "shehzaad_son1",
            name: "Son",
            displayName: "Son [Unnamed]",
            gender: "male",
            parent: "shehzaad_husayn",
            children: []
        },
        aman: {
            id: "aman",
            name: "Aman",
            displayName: "Aman",
            gender: "female",
            parent: "shehzaad_husayn",
            children: []
        },
        shehzaad_son3: {
            id: "shehzaad_son3",
            name: "Son",
            displayName: "Son [Unnamed]",
            gender: "male",
            parent: "shehzaad_husayn",
            children: []
        },

        // Children of Muhammad Saleem (Bablu)
        saleem_son: {
            id: "saleem_son",
            name: "Son",
            displayName: "Son [Unnamed]",
            gender: "male",
            parent: "muhammad_saleem",
            children: []
        },
        saleem_daughter: {
            id: "saleem_daughter",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "muhammad_saleem",
            children: []
        },

        // Children of Muhammad Kaleem (Dablu)
        nikhat: {
            id: "nikhat",
            name: "Nikhat",
            displayName: "Nikhat",
            gender: "female",
            parent: "muhammad_kaleem",
            children: []
        },
        kaleem_son: {
            id: "kaleem_son",
            name: "Son",
            displayName: "Son [Unnamed]",
            gender: "male",
            parent: "muhammad_kaleem",
            children: []
        },

        // Children of Jameel Ahmad
        shakeel_ahmad: {
            id: "shakeel_ahmad",
            name: "Shakeel Ahmad",
            displayName: "Shakeel Ahmad",
            gender: "male",
            parent: "jameel_ahmad",
            children: []
        },
        aqeel_ahmad: {
            id: "aqeel_ahmad",
            name: "Aqeel Ahmad",
            displayName: "Aqeel Ahmad",
            gender: "male",
            parent: "jameel_ahmad",
            children: []
        },
        azeem_ahmad: {
            id: "azeem_ahmad",
            name: "Azeem Ahmad",
            displayName: "Azeem Ahmad",
            gender: "male",
            parent: "jameel_ahmad",
            children: []
        },
        jameel_daughter1: {
            id: "jameel_daughter1",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "jameel_ahmad",
            children: []
        },
        naaz: {
            id: "naaz",
            name: "Naaz",
            displayName: "Naaz",
            gender: "female",
            parent: "jameel_ahmad",
            children: []
        },
        jameel_daughter3: {
            id: "jameel_daughter3",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "jameel_ahmad",
            children: []
        },

        // Children of Raees Ahmad
        anees_ahmad: {
            id: "anees_ahmad",
            name: "Anees Ahmad",
            displayName: "Anees Ahmad",
            gender: "male",
            parent: "raees_ahmad",
            children: []
        },
        shoayb_ahmad: {
            id: "shoayb_ahmad",
            name: "Shoayb Ahmad",
            displayName: "Shoayb Ahmad",
            gender: "male",
            parent: "raees_ahmad",
            children: []
        },

        // Children of Nisaar Ahmad
        nisaar_daughter1: {
            id: "nisaar_daughter1",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "nisaar_ahmad",
            children: []
        },
        shadaab_ahmad: {
            id: "shadaab_ahmad",
            name: "Shadaab Ahmad",
            displayName: "Shadaab Ahmad",
            gender: "male",
            parent: "nisaar_ahmad",
            children: []
        },
        nisaar_daughter3: {
            id: "nisaar_daughter3",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "nisaar_ahmad",
            children: []
        },
        nisaar_daughter4: {
            id: "nisaar_daughter4",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "nisaar_ahmad",
            children: []
        },

        // Children of Muhammad Ashraf
        aayra: {
            id: "aayra",
            name: "Aayra",
            displayName: "Aayra",
            gender: "female",
            parent: "muhammad_ashraf",
            children: []
        },

        // Children of Muhammad Arshad
        aalaa: {
            id: "aalaa",
            name: "Aalaa",
            displayName: "Aalaa",
            gender: "female",
            parent: "muhammad_arshad",
            children: []
        },
        afshaan: {
            id: "afshaan",
            name: "Afshaan",
            displayName: "Afshaan",
            gender: "female",
            parent: "muhammad_arshad",
            children: []
        },
        azkaar: {
            id: "azkaar",
            name: "Azkaar",
            displayName: "Azkaar",
            gender: "male",
            parent: "muhammad_arshad",
            children: []
        },

        // Children of Ashfaaq Muhammad (Khat-khat)
        najeem_ahmad: {
            id: "najeem_ahmad",
            name: "Najeem Ahmad",
            displayName: "Najeem Ahmad",
            gender: "male",
            parent: "ashfaaq_muhammad",
            children: []
        },
        naseem_ahmad: {
            id: "naseem_ahmad",
            name: "Naseem Ahmad",
            displayName: "Naseem Ahmad",
            gender: "male",
            parent: "ashfaaq_muhammad",
            children: []
        },
        munauwwar_ahmad: {
            id: "munauwwar_ahmad",
            name: "Munauwwar Ahmad",
            displayName: "Munauwwar Ahmad",
            gender: "male",
            parent: "ashfaaq_muhammad",
            children: []
        },
        sayyad_ahmad: {
            id: "sayyad_ahmad",
            name: "Sayyad Ahmad",
            displayName: "Sayyad Ahmad",
            gender: "male",
            parent: "ashfaaq_muhammad",
            children: []
        },
        saadiq_ahmad: {
            id: "saadiq_ahmad",
            name: "Saadiq Ahmad",
            displayName: "Saadiq Ahmad",
            gender: "male",
            parent: "ashfaaq_muhammad",
            children: []
        },

        // Children of Shafaak Ahmad (Nikki)
        salman_ahmad: {
            id: "salman_ahmad",
            name: "Salman Ahmad",
            displayName: "Salman Ahmad",
            gender: "male",
            parent: "shafaak_ahmad",
            children: []
        },
        rizwaan_ahmad_nikki: {
            id: "rizwaan_ahmad_nikki",
            name: "Rizwaan Ahmad",
            displayName: "Rizwaan Ahmad",
            gender: "male",
            parent: "shafaak_ahmad",
            children: []
        },
        rubina: {
            id: "rubina",
            name: "Rubina",
            displayName: "Rubina",
            gender: "female",
            parent: "shafaak_ahmad",
            children: []
        },
        shafaak_daughter2: {
            id: "shafaak_daughter2",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "shafaak_ahmad",
            children: []
        },

        // Children of Firoz Ahmad
        afroz_ahmad: {
            id: "afroz_ahmad",
            name: "Afroz Ahmad",
            displayName: "Afroz Ahmad",
            gender: "male",
            parent: "firoz_ahmad",
            children: []
        },
        firoz_daughter2: {
            id: "firoz_daughter2",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "firoz_ahmad",
            children: []
        },
        firoz_daughter3: {
            id: "firoz_daughter3",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "firoz_ahmad",
            children: []
        },

        // Children of Muhammad Farooq (Megghu)
        ahil_ahmad: {
            id: "ahil_ahmad",
            name: "Ahil Ahmad",
            displayName: "Ahil Ahmad",
            gender: "male",
            parent: "muhammad_farooq",
            children: []
        },
        altamash_ahmad: {
            id: "altamash_ahmad",
            name: "Altamash Ahmad",
            displayName: "Altamash Ahmad",
            gender: "male",
            parent: "muhammad_farooq",
            children: []
        },
        farooq_daughters: {
            id: "farooq_daughters",
            name: "Daughters",
            displayName: "Daughters [Multiple]",
            gender: "female",
            parent: "muhammad_farooq",
            children: []
        },

        // Children of Muhammad Hadees (Saddar)
        rehan_ahmad: {
            id: "rehan_ahmad",
            name: "Rehan Ahmad",
            displayName: "Rehan Ahmad",
            gender: "male",
            parent: "muhammad_hadees",
            children: []
        },
        farhan_ahmad: {
            id: "farhan_ahmad",
            name: "Farhan Ahmad",
            displayName: "Farhan Ahmad",
            gender: "male",
            parent: "muhammad_hadees",
            children: []
        },

        // Children of Azeez Ahmad
        atif_ahmad: {
            id: "atif_ahmad",
            name: "Atif Ahmad",
            displayName: "Atif Ahmad",
            gender: "male",
            parent: "azeez_ahmad",
            children: []
        },
        sahil_ahmad: {
            id: "sahil_ahmad",
            name: "Sahil Ahmad",
            displayName: "Sahil Ahmad",
            gender: "male",
            parent: "azeez_ahmad",
            children: []
        },
        azeez_daughter1: {
            id: "azeez_daughter1",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "azeez_ahmad",
            children: []
        },
        azeez_daughter2: {
            id: "azeez_daughter2",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "azeez_ahmad",
            children: []
        },

        // Children of Aijaaz Ahmad
        aiman_ahmad: {
            id: "aiman_ahmad",
            name: "Aiman Ahmad",
            displayName: "Aiman Ahmad",
            gender: "male",
            parent: "aijaaz_ahmad",
            children: []
        },
        aijaaz_daughter: {
            id: "aijaaz_daughter",
            name: "Daughter",
            displayName: "Daughter [Unnamed]",
            gender: "female",
            parent: "aijaaz_ahmad",
            children: []
        },

        // Children of Armaan Ahmad
        anas_armaan: {
            id: "anas_armaan",
            name: "Anas",
            displayName: "Anas",
            gender: "male",
            parent: "armaan_ahmad",
            children: []
        },
        armaan_son2: {
            id: "armaan_son2",
            name: "Son",
            displayName: "Son [Unnamed]",
            gender: "male",
            parent: "armaan_ahmad",
            children: []
        }
    }
};