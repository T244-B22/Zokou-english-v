const { zokou } = require("../framework/zokou");

zokou({
    nomCom: "rules",
    categorie: "REGLES",
}, async (dest, zk, commandeOptions) => {
    const { ms } = commandeOptions;

    // Liste d'images à afficher
    const images = [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg",
    ];

    // Préparer les messages d'image
    const messages = images.map(url => ({
        image: { url: url },
        caption: "Voici une image",
    }));

    // Envoyer chaque image
    for (const message of messages) {
        await zk.sendMessage(dest, message, { quoted: ms });
    }
});