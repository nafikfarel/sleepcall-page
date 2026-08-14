export const appConfig = {
  recipientLabel: "Kamu",
  maxNameLength: 10,
  whatsappNumber: "6287864059569",
  musicUrl: "https://feeldreams.github.io/vibescorona.mp3",

  copy: {
    giftHint: "Klik Kadonya!",
    nameTitle: "Masukin Nama Kamu",
    nameError: "Nama tidak boleh kosong atau lebih dari 10 karakter, ya!",
    greeting: (name) => `Hai, ${name}!`,
    choiceTitle: (name) => `${name} Pilih Tombol yang Mana?`,
    choiceText: "Ayo, jangan ragu-ragu",
    leftChoice: "Kiri",
    rightChoice: "Kanan",
    resultLead: "Kalo kamu pilih",
    resultText: "berarti malam ini kita SleepCall ya !",
    confirmChoiceTitle: (name, choice) => `${name} yakin pilih tombol ${choice}?`,
    confirmChoiceText: "Atau mau ganti aja nih?",
    confirmYes: "Yakin",
    confirmChange: "Ganti",
    okTitle: "Oke!",
    okChosenTitle: (choice) => `Oke, memilih ${choice}!`,
    changedChoiceText: "Sama aja sih, tapi sleepcallnya harus lebih lama ya",
    continueText: "Sekarang lihat ini ya",
    mainMessage: "Good Night ya! Ayo kita sleepcall, hehe",
    secondaryMessage: "Jangan lupa kirim balasannya ke WhatsApp aku",
    replyButton: "💌 Balas",
    whatsappIntro: "OK!",
    whatsappNotice: "Kirim pesan ke WhatsApp aku, ya!",
    whatsappMessage: (name) => `Iyaa *${name}* mau kok kita sleepcall! ><`
  },

  assets: {
    wallpaper: "/assets/wp9.jpg",
    gift: "/assets/kadoin.png",
    stickerDefault: "/assets/gumush.gif",
    flower: "/assets/bunga.gif",
    hide: "/assets/ngumpet.gif",
    brownPanda: "/assets/pandacoklat.gif",
    yellowPanda: "/assets/pandakuning.gif",
    thinking: "/assets/mikir.gif",
    cute: "/assets/pusn.gif",
    yay: "/assets/weee.gif"
  }
};
