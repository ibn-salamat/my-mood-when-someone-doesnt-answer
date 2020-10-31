btn.addEventListener("click", () => {
  music.play();
  music.volume = 0.7;
});

const app = new Vue({
  el: "#app",
  data() {
    return {
      receiver: {
        name: "sharbat_nm",
        avatarURL:
          "https://instagram.fala5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/71780110_365418301031153_3756607928723832832_n.jpg?_nc_ht=instagram.fala5-1.fna.fbcdn.net&_nc_ohc=WbxivdkDP0MAX-l3K-l&oh=1bbac01dc2e0bc476152d7dad21bd672&oe=5FC9296A",
      },
      moods: [
        {
          thought: "Напишу-ка ей, спрошу как у нее дела",
          music: "",
          title: "😇",
          action() {},
          patient: 100,
        },
      ],
      messages: [
        {
          title: "Привет",
        },
        {
          title: "??",
        },
        {
          title: "Не привет?",
        },
      ],
      textMessage: "",
      currentMood: null,
    };
  },
  created() {
    this.$data.currentMood = this.$data.moods[0];
    console.log(this.$data.currentMood);
  },
});
