const help = (pushname, tampilJam, tampilHari, tampilUcapan, sender, patt, getLevelingLevel, getLevelingXp, prefix) => {
	return `
╭━════════════════════⊷
┃༜╭───────────────────
┃༜│⬩𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝖼̧𝗈̃𝖾𝗌 𝖽𝗈 𝗎𝗌𝗎𝖺́𝗋𝗂𝗈
┃༜│⪧ *Nome:* ${pushname}
┃༜│⪧ *Zap: Wa.me/${sender.split('@')[0]}*
┃༜│⪧ *Level: ${getLevelingLevel(sender)}*
┃༜│⪧ *Xp: ${getLevelingXp(sender)}*
┃༜│⪧ *Patente: ${patt}*
┃༜╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃༜╭───────────────────
┃༜│⬩ 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝖼̧𝗈̃𝖾𝗌 𝖽𝗈 𝖻𝗈𝗍
┃༜│⪧ *Nome: PINGUIM - BOT*
┃༜│⪧ *Dono: Pinguim e Lari*
┃༜│⪧ *Contato: ${prefix}owner*
┃༜│⪧ *Status: Online*
┃༜│⪧ *Prefix* 「 ${prefix} 」
┃༜│⪧ *${tampilJam}*
┃༜╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃༜╭────「  Figurinhαs 」─────
┃༜│➢ *${prefix}f ou ${prefix}figu*
┃༜│➥ *${prefix}st*
┃༜│➢ *${prefix}swm* Texto|Texto
┃༜│➥ *${prefix}figupreso* ou *${prefix}preso* 
┃༜│➢ *${prefix}arma*
┃༜│➥ *${prefix}procurado* 
┃༜│➢ *${prefix}figuc* ou *${prefix}circulo* 
┃༜│➥ *${prefix}figupet*
┃༜│➢ *${prefix}toimg* 
┃༜│➥ *${prefix}togif* 
┃༜│➢ *${prefix}attp* 
┃༜│➥ *${prefix}dado2*
┃༜│➢ *${prefix}cc* 
┃༜╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃༜╭────「  Αdmins 」──────
┃༜│➥ *${prefix}antilink 「1/0」*
┃༜│➢ *${prefix}antifake 「1/0」*
┃༜│➥ *${prefix}grupo*
┃༜│➢ *${prefix}linkgp*
┃༜│➥ *${prefix}marcar*
┃༜│➢ *${prefix}marcar2*
┃༜│➥ *${prefix}marcar3*
┃༜│➢ *${prefix}add [desativado]*
┃༜│➥ *${prefix}banir 「@」*
┃༜│➢ *${prefix}promover 「@」*
┃༜│➥ *${prefix}rebaixar*
┃༜│➢ *${prefix}admins*
┃༜│➥ *${prefix}bemvindo 「1/0」*
┃༜│➢ *${prefix}leveling 「on/off」*
┃༜│➥ *${prefix}grupoinfo*
┃༜│➢ *${prefix}setdesc*
┃༜│➥ *${prefix}nomegp*
┃༜╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃༜╭────「 Plαys 」────────
┃༜│➢ *${prefix}play*
┃༜│➥ *${prefix}tomp3* 
┃༜│➢ *${prefix}estourar*
┃༜│➥ *${prefix}robot*
┃༜│➢ *${prefix}bass*
┃༜│➥ *${prefix}fast*
┃༜│➢ *${prefix}gemuk*
┃༜│➥ *${prefix}esquilo*
┃༜│➢ *${prefix}slow*
┃༜│➥ *${prefix}nightcore*
┃༜╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃༜╭───「  Ferrαmentαs 」────
┃༜│➢ *${prefix}wame*
┃༜│➥ *${prefix}pucep [ cep ]*
┃༜│➢ *${prefix}tts [ ts ]* 
┃༜│➥ *${prefix}ts*
┃༜│➢ *${prefix}contar*
┃༜│➥ *${prefix}ler*
┃༜│➢ *${prefix}gerarnick [ nick ]*
┃༜│➥ *${prefix}ddd [11]*
┃༜│➢ *${prefix}online*
┃༜╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃༜╭────「  Jogos 」───────
┃༜│➥ *${prefix}ttthelp*
┃༜│➢ *${prefix}sn*
┃༜│➥ *${prefix}casal*
┃༜│➢ *${prefix}abraço「@」*
┃༜│➥ *${prefix}gadometro*
┃༜│➢ *${prefix}gostosas*
┃༜│➥ *${prefix}gay*
┃༜│➢ *${prefix}rankgay*
┃༜│➥ *${prefix}rankfeios*
┃༜│➢ *${prefix}rankcaco*
┃༜│➥ *${prefix}cassino*
┃༜│➢ *${prefix}top5 [ texto ]*
┃༜│➥ *${prefix}chance [ texto ]*
┃༜│➢ *${prefix}rr*
┃༜│➥ *${prefix}ppt*
┃༜╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃༜╭────「  Premiuns 」─────
┃༜│➢ *${prefix}metodos*
┃༜│➥ *${prefix}pack18*
┃༜│➢ *${prefix}dado*
┃༜│➥ *${prefix}cekvip*
┃༜│➢ *${prefix}delete*
┃༜│➥ *${prefix}modapk*
┃༜│➢ *${prefix}qrcode*
┃༜│➥ *${prefix}chentai*
┃༜│➢ *${prefix}gpessoa*
┃༜│➥ *${prefix}destrava*
┃༜│➢ *${prefix}cassinovip*
┃༜│➥ *${prefix}rename* Texto|Texto
┃༜╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃༜╭─────「  Dono 」───────
┃༜│➢ *${prefix}bc*
┃༜│➥ *${prefix}bloquear*
┃༜│➢ *${prefix}desbloquear* 
┃༜│➥ *${prefix}limpar*
┃༜│➢ *${prefix}setprefix*
┃༜│➥ *${prefix}hidetag*
┃༜│➢ *${prefix}supertag*
┃༜│➥ *${prefix}figutag*
┃༜│➢ *${prefix}addvip*
┃༜│➥ *${prefix}delvip*
┃༜╰───────────────────
╰━════════════════════⊷
`
}

exports.help = help
