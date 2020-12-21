exports.donasi = (id, BotName, tampilTanggal, tampilWaktu, instagram, whatsapp, kapanbotaktif) => {
	return `{ *MENU DONASI ${BotName}* }
  
  
TERIMA KASIH
*${id.split("@s.whatsapp.net")[0]}*
TELAH MEMBUKA MENU DONASI
 
📆 *${tampilTanggal}* 
🕰️ *${tampilWaktu}* 
(Waktu Server)

KALIAN BISA DONASI MENGGUNAKAN
   
*PULSA*: 081227560249
*OVO*: 081227560249
*DANA* : 081227560249

⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
 🏍🏍🏍🏍🏍🏍🏍🏍🏍🏍🏍
*Follow Me On Instagram*
${instagram}

👾whatsapp : ${whatsapp}

`
}
