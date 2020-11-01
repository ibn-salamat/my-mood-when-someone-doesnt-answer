const app = new Vue({
  el: "#app",
  data() {
    return {
      musicsList: [music_1, music_2, music_3, music_4, music_5, music_6],
      receiver: {
        email: "sharbat_nm",
        name: "Sharbat🍉",
        avatarURL:
          "https://instagram.fala5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/71780110_365418301031153_3756607928723832832_n.jpg?_nc_ht=instagram.fala5-1.fna.fbcdn.net&_nc_ohc=WbxivdkDP0MAX-l3K-l&oh=1bbac01dc2e0bc476152d7dad21bd672&oe=5FC9296A",
      },
      moods: [
        {
          thought:
            "Напишу-ка ей, спрошу как у нее дела. Может у нее есть что сказать))",
          music: music_1,
          title: "😇",
          action() {},
          patient: 100,
        },
        {
          thought: "Она занята наверное, поэтому не отвечает))",
          music: music_2,
          title: "😅",
          action() {},
          patient: 100,
        },
        {
          thought: "прочитала, значит не занята)",
          music: music_3,
          title: "😊",
          action() {},
          patient: 100,
        },
        {
          thought: "........",
          music: music_4,
          title: "🙁",
          action() {},
          patient: 100,
        },
        {
          thought: "зачем вообще писал?:((",
          music: music_5,
          title: "😓",
          action() {},
          patient: 100,
        },
        {
          thought: "грустно",
          music: music_6,
          title: "💔",
          action() {},
          patient: 100,
        },
      ],
      messages: [
        {
          title: "Привет",
        },
        {
          title: "Не привет?)",
        },
        {
          title: "Как дела?",
        },
        {
          title: "Почему не отвечаешь??",
        },
        {
          title: "хммм",
        },
        {
          title: "ладно пока",
        },
      ],
      index: 0,
      dialog: [],
      textMessage: "",
      currentMood: null,
      currentMessage: null,
      seen: false,
      lastMessage: false,
      disclaimer: true,
      modalState: false
    };
  },
  methods: {
    start(){
      this.$data.disclaimer = false
      this.updateIndex();
    },
    sendMessage() {
      if (!this.$data.textMessage.trim()) return;

      if (
        this.$data.messages.indexOf(this.$data.currentMessage) !==
        this.$data.messages.length - 1
      ) {
        this.$data.dialog.push({
          id: Number(new Date()),
          text: this.$data.textMessage,
          seen: false,
        });
        this.$data.index++;
        this.updateIndex();
        this.$data.textMessage = "";
        this.$data.seen = false;

        setTimeout(() => {
          this.$data.seen = true;
        }, 2000);
      } else {
        this.$data.dialog.push({
          id: Number(new Date()),
          text: this.$data.textMessage,
          seen: false,
        });
        this.$data.textMessage = "";
        this.$data.lastMessage = true;

        let opacity = 100;
        let intervalId = setInterval(() => {
          document.querySelector(".messages").style.opacity = `${opacity}%`;
          opacity--;

          if (opacity < 0) {
            clearInterval(intervalId);
            this.$data.modalState = true
            setTimeout(() => {
              document.querySelector(".modal").classList.add("active")
            }, 1000);
          }
        }, 50);
      }
    },
    updateIndex() {
      this.$data.currentMood = this.$data.moods[this.$data.index];
      this.$data.currentMessage = this.$data.messages[this.$data.index];
      this.$data.musicsList.forEach((el) => {
        el.pause();
      });
      this.$data.currentMood.music.play();
    },
  },
});
