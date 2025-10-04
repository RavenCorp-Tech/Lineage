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
            children: []
        },
        zayfullah: {
            id: "zayfullah",
            name: "Zayfullah",
            nickname: "Bappa",
            displayName: "Zayfullah (Bappa)",
            gender: "male",
            parent: "jaan_ali",
            children: []
        },
        jauhar_ali: {
            id: "jauhar_ali",
            name: "Jauhar Ali",
            displayName: "Jauhar Ali",
            gender: "male",
            parent: "jaan_ali",
            children: []
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
            children: []
        },
        qurbaan_ali: {
            id: "qurbaan_ali",
            name: "Qurbaan Ali",
            displayName: "Qurbaan Ali",
            gender: "male",
            parent: "sher_ali",
            children: []
        },
        sadar_ali: {
            id: "sadar_ali",
            name: "Sadar Ali",
            displayName: "Sadar Ali",
            gender: "male",
            parent: "karaamat_ali",
            children: []
        },
        rahamullah: {
            id: "rahamullah",
            name: "Rahamullah",
            displayName: "Rahamullah",
            gender: "male",
            parent: "karaamat_ali",
            children: []
        },
        ghareebullah: {
            id: "ghareebullah",
            name: "Ghareebullah",
            nickname: "Bawaali",
            displayName: "Ghareebullah (Bawaali)",
            gender: "male",
            parent: "karaamat_ali",
            children: []
        },
        haidar_ali: {
            id: "haidar_ali",
            name: "Haidar Ali",
            displayName: "Haidar Ali",
            gender: "male",
            parent: "karaamat_ali",
            children: []
        },
        ateemullah: {
            id: "ateemullah",
            name: "Ateemullah",
            nickname: "Khan Sahab",
            displayName: "Ateemullah (Khan Sahab)",
            gender: "male",
            parent: "karaamat_ali",
            children: []
        },
        naseer_muhammad: {
            id: "naseer_muhammad",
            name: "Naseer Muhammad",
            displayName: "Naseer Muhammad",
            isHaaji: true,
            gender: "male",
            parent: "karaamat_ali",
            children: []
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
            children: []
        },
        zahoor_muhammad: {
            id: "zahoor_muhammad",
            name: "Zahoor Muhammad",
            displayName: "Zahoor Muhammad",
            gender: "male",
            parent: "sher_muhammad",
            children: []
        },
        jamaal_muhammad: {
            id: "jamaal_muhammad",
            name: "Jamaal Muhammad",
            displayName: "Jamaal Muhammad",
            gender: "male",
            parent: "sher_muhammad",
            children: []
        },
        kamaal_muhammad: {
            id: "kamaal_muhammad",
            name: "Kamaal Muhammad",
            displayName: "Kamaal Muhammad",
            gender: "male",
            parent: "sher_muhammad",
            children: []
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
            children: []
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
            children: []
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
            children: []
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
    }
};