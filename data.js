const juegos = [
    {
      titulo: "The Legend of Zelda: Breath of the Wild",
      plataforma: "Nintendo Switch",
      genero: "Acción y aventura",
      desarrollador: "Nintendo",
      puntuacion: 97,
      imagen: "https://i.ytimg.com/vi/3jHK-t9WS_Y/maxresdefault.jpg",
      id: "the legend of zelda: breath of the wild"
    },
    {
      titulo: "Red Dead Redemption 2",
      plataforma: "PlayStation 4, Xbox One",
      genero: "Acción y aventura",
      desarrollador: "Rockstar Games",
      puntuacion: 97,
      imagen: "https://compass-ssl.xbox.com/assets/64/02/6402981a-9446-46d8-8289-e370f3158746.jpg?n=Red-Dead-Redemption-II_GLP-Page-Hero-1084_1920x1080.jpg",
      id: "red dead redemption 2"
    },
    {
      titulo: "God of War",
      plataforma: "PlayStation 4",
      genero: "Acción y aventura",
      desarrollador: "Santa Monica Studio",
      puntuacion: 94,
      imagen: "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/k1laGX3Ita2N6Jlb7BbkHYAr.png",
      id: "god of war"
    },
    {
      titulo: "Super Mario Odyssey",
      plataforma: "Nintendo Switch",
      genero: "Plataformas",
      desarrollador: "Nintendo",
      puntuacion: 97,
      imagen: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5",
      id: "super mario odyssey"
    },
    {
      titulo: "Persona 5 Royal",
      plataforma: "PlayStation 4",
      genero: "Rol",
      desarrollador: "Atlus",
      puntuacion: 95,
      imagen: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_Persona5Royal_image1600w.jpg",
      id: "persona 5 royal"
    },
    {
      titulo: "Hades",
      plataforma: "Nintendo Switch, PC",
      genero: "Acción y roguelike",
      desarrollador: "Supergiant Games",
      puntuacion: 93,
      imagen: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Hades_image1600w.png",
      id: "hades"
    },
    {
      titulo: "The Last of Us Part II",
      plataforma: "PlayStation 4",
      genero: "Acción y aventura",
      desarrollador: "Naughty Dog",
      puntuacion: 93,
      imagen: "https://www.irrompibles.net/irrwp/wp-content/uploads/2020/05/TLOUPII_Destacada.jpg",
      id: "the last of us part ii"
    },
    {
      titulo: "Animal Crossing: New Horizons",
      plataforma: "Nintendo Switch",
      genero: "Simulación",
      desarrollador: "Nintendo",
      puntuacion: 90,
      imagen: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a",
      id: "animal crossing: new horizons"
    },
    {
      titulo: "Final Fantasy VII Remake",
      plataforma: "PlayStation 4",
      genero: "Rol",
      desarrollador: "Square Enix",
      puntuacion: 88,
      imagen: "https://cdn1.epicgames.com/offer/6f43ab8025ad42d18510aa91e9eb688b/EGS_FINALFANTASYVIIREMAKEINTERGRADE_SquareEnix_S1_2560x1440-85f829541a833442eaace75d02e0f07d",
      id: "final fantasy vii remake"
    },
    {
      titulo: "Demon's Souls",
      plataforma: "PlayStation 5",
      genero: "Acción y aventura",
      desarrollador: "Bluepoint Games",
      puntuacion: 92,
      imagen: "https://example.com/demons-souls.jpg",
      id: "demon's souls"
    },
    {
      titulo: "Resident Evil Village",
      plataforma: "PlayStation 5, Xbox Series X/S, PC",
      genero: "Survival horror",
      desarrollador: "Capcom",
      puntuacion: 84,
      imagen: "https://example.com/resident-evil-village.jpg",
      id: "resident evil village"
    },
    {
      titulo: "Cyberpunk 2077",
      plataforma: "PlayStation 4, Xbox One, PC",
      genero: "Rol y acción",
      desarrollador: "CD Projekt",
      puntuacion: 80,
      imagen: "https://example.com/cyberpunk-2077.jpg",
      id: "cyberpunk 2077"
    },
    {
      titulo: "Ghost of Tsushima",
      plataforma: "PlayStation 4",
      genero: "Acción y aventura",
      desarrollador: "Sucker Punch",
      puntuacion: 83,
      imagen: "https://example.com/ghost-of-tsushima.jpg",
      id: "ghost of tsushima"
    },
    {
      titulo: "Sekiro: Shadows Die Twice",
      plataforma: "PlayStation 4, Xbox One, PC",
      genero: "Acción y aventura",
      desarrollador: "FromSoftware",
      puntuacion: 91,
      imagen: "https://example.com/sekiro-shadows-die-twice.jpg",
      id: "sekiro: shadows die twice"
    },
    {
        titulo: "Final Fantasy XIV: Shadowbringers",
        plataforma: "PlayStation 4, PC",
        genero: "Rol multijugador en línea",
        desarrollador: "Square Enix",
        puntuacion: 91,
        imagen: "https://example.com/final-fantasy-xiv-shadowbringers.jpg",
        id: "final fantasy xiv: shadowbringers"
      },
      {
        titulo: "Ori and the Will of the Wisps",
        plataforma: "Xbox One, PC",
        genero: "Plataformas y aventura",
        desarrollador: "Moon Studios",
        puntuacion: 90,
        imagen: "https://example.com/ori-and-the-will-of-the-wisps.jpg",
        id: "ori and the will of the wisps"
      },
      {
        titulo: "Mortal Kombat 11",
        plataforma: "PlayStation 4, Xbox One, Nintendo Switch, PC",
        genero: "Lucha",
        desarrollador: "NetherRealm Studios",
        puntuacion: 85,
        imagen: "https://example.com/mortal-kombat-11.jpg",
        id: "mortal kombat 11"
      },
      {
        titulo: "Marvel's Spider-Man: Miles Morales",
        plataforma: "PlayStation 4, PlayStation 5",
        genero: "Acción y aventura",
        desarrollador: "Insomniac Games",
        puntuacion: 85,
        imagen: "https://example.com/spider-man-miles-morales.jpg",
        id: "marvel's spider-man: miles morales"
      },
      {
        titulo: "Call of Duty: Modern Warfare",
        plataforma: "PlayStation 4, Xbox One, PC",
        genero: "Disparos en primera persona",
        desarrollador: "Infinity Ward",
        puntuacion: 82,
        imagen: "https://example.com/call-of-duty-modern-warfare.jpg",
        id: "call of duty: modern warfare"
      },
      {
        titulo: "Assassin's Creed Valhalla",
        plataforma: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, PC",
        genero: "Acción y aventura",
        desarrollador: "Ubisoft",
        puntuacion: 82,
        imagen: "https://example.com/assassins-creed-valhalla.jpg",
        id: "assassin's creed valhalla"
      },
      {
        titulo: "The Outer Worlds",
        plataforma: "PlayStation 4, Xbox One, Nintendo Switch, PC",
        genero: "Rol y disparos",
        desarrollador: "Obsidian Entertainment",
        puntuacion: 82,
        imagen: "https://example.com/the-outer-worlds.jpg",
        id: "the outer worlds"
      }
    
  ];

    module.exports = juegos