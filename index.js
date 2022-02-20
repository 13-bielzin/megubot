//Olá! meu nome é Gustavo, sou o criador do bot. Espero que goste do bot. 

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { cmdadd } = require('./lib/totalcmd.js')
const { imunes } = require('./src/imunes')
const { membrocm } = require('./src/membrocm')
const { utils } = require('./src/utils')
const { help } = require('./src/help')
const {menuadm} = require('./src/menuadm')
const {menufig} = require('./src/menufig')
const {menuaudio} = require('./src/menuaudio')
const { modapk } = require('./src/modapk')
const { menuvip } = require('./src/menuvip')
const { jogos } = require('./src/jogos')
const { códigos } = require('./src/códigos')
const { dono } = require('./src/dono')
const { logos } = require('./src/logos')
const { ferramentas } = require('./src/ferramentas')
const { destrava } = require('./src/destrava')
const { menu2 } = require('./src/menu2')
const { destrava2 } = require('./src/destrava')
const { gpessoa } = require('./src/gpessoa')
const { chentai } = require('./src/chentai')
const { gcpf } = require('./src/gcpf')
const { regras } = require('./src/regras')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const { TobzApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const { validmove, setGame } = require("tictactoe");
const loli = new lolis()
const { webp2gifFile } = require("./lib/gif.js")
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const premium = JSON.parse(fs.readFileSync('./database/vip.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const apivhtear = 'apivhtear';
const apibarbar = 'apibarbar';
const tobzkey = 'apitobz';
const BotName = 'Pinguim bot'; 
const instagram = 'http://www.instagram.com/'; 
const aktif = '08:00 - 22:00';
const { ptbr } = require('./mess')
const { addMetadata } = require('./lib/exif.js')

/**************************************/
const vcard = 'BEGIN:VCARD\n' // Apenas mude o nome e o número para não dar erro.
            + 'VERSION:3.0\n' 
            + 'FN:meu criador\n' // criador
            + 'ORG: Lonlt;\n' // nome do bot
            + 'TEL;type=CELL;type=VOICE;waid=556191823084:+55 61 9182-3084\n' //Nomor whatsapp kamu
            + 'END:VCARD'
const vcard2 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN: meu numero\n' // criador
            + 'ORG: MeguminiBot;\n' // nome do bot
            + 'TEL;type=CELL;type=VOICE;waid=556182048839:+55 61 8204-8839\n' //Nomor whatsapp kamu
            + 'END:VCARD'
/**************************************/

prefix = '.'
blocked = []
limitawal = '999999999'
cr = '*Lonly*'
antidel = true
fromMe = false
banChats = false

/**MAIS FUNÇÕES**/
const totalcmd = JSON.parse(fs.readFileSync('./data/totalcmd.json'))[0].totalcmd

/*********** ARQUIVOS DO BOT ***********/
const comandost = totalcmd
const { metodos } = require('./src/metodos')
const { pack18 } = require('./src/pack18')
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
/*************** FIM ***************/

//_TIC-TAC-TOE By: Resen
const { addLimit, getLimit } = require('./database/lib/limit.js')// LIMITADOR, AGRADECIMENTOS: IRIS(kill), Resen
const daily = JSON.parse(fs.readFileSync('./database/data/diario.json'))
const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
const infos = JSON.parse(fs.readFileSync('./database/data/settings.json'))
const { addTTTId, addTTTwin,addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js') //JOGO DA VELHA,AGRADECIMENTOS: Resen
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json'));
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
///_ END TIC-TAC-TOE CONFIG by: Resen

/********** FUNÇÕES ***************/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }        

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
                
        
                const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        
                const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Conectando qr code quase lá...')
	})
	client.on('open', () => {
		success('2', 'Prontinho mano🐤')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if(antifake.includes(anu.jid)) {
	const mdata = await client.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					client.sendMessage(mdata.id, ' ⛹️⛹️ números estrangeiros não são permitidos neste grupo, consulte um Administrador👋🏌️', MessageType.text)
					setTimeout(async function () {
						client.groupRemove(mdata.id, [num])
					}, 1000)
				}
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
try {
		pporang9 = await client.getProfilePicture(`${num.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang9 = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const pinguu = await getBuffer(pporang9)
gambar = pinguu
mhan = await client.prepareMessage(mdata.id, gambar, MessageType.image, {thumbnail: null, contextInfo: {"mentionedJid": [num]}})
gbutsan = [
  {buttonId: '🛍️ Menu', buttonText: {displayText: '🛍️ Menu'}, type: 1}]
gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: `Olá @${num.split("@")[0]} espero que goste do grupo ❤️`,
    footerText: `© _Pinguim_`,
    buttons: gbutsan,
    headerType: 4
}
await client.sendMessage(mdata.id, gbuttonan, MessageType.buttonsMessage)
client.sendMessage(mdata.id, `Fala alguma coisa, @${num.split('@')[0]} 🐧❄️`, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				suis = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${num.split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: suis, thumbnail: null, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'promote') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `⚠️ *PROMOVER DETECTADO* 🖐️🕵️‍♀️\n\n*Novo Admin:* @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, thumbnail: null, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `⚠️ *REBAIXAR DETECTADO* 🖐️🕵️‍♀️\n\n*Perdeu Admin:* @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, thumbnail: null, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	
/********** ANTI LIGAÇÃO *************/

	client.on("CB:action,,call", async json => {
    const callerId = json[2][0][1].from;
    console.log(json);
    //if (setting.responder.call.status){
    client.sendMessage(
      callerId,
      "Meu dono não gosta que me liguem. Você será bloqueado! 🐤",
      MessageType.text
    );
    setTimeout( () => {
   client.blockUser(callerId, "add");
}, 2000) // 1000  // Block user
    //}
  });
/**************************************/
client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	client.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return             
            mek = mek.messages.all()[0]              
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return       
            if (mek.key.fromMe && fromMe === true) return
			global.prefix
			global.blocked
			const antibot = mek.isBaileys
			const content = JSON.stringify(mek.message)
			const speed = require('performance-now');
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
			const listRM = (type === 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
			body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId: (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			example = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
            const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
            const cmdstk = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('base64') : ""
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const conts = mek.key.fromMe ? client.user.jid : client.contacts[mek.sender]
			const c = args.join(' ')
			const argss = body.split(/ +/g)
			const isCmd = body.startsWith(prefix)
			const dfrply = fs.readFileSync('./loli.jpg')

mess = {
			    
				wait: '❬❗❭ Espera mano',
				success: '️❬ ✔ ❭ Sucesso 🖤',
				levelon: '❬ ✔ ❭ *leveling* *ativado*',
				leveloff: ' ❬ X ❭  *leveling* *desativado*',
				levelnoton: '❬ X ❭ *leveling não ativado*',
				erro: '*error* 0 °-°',
				error: {
				stick: '*Bem, falhe, tente novamente ^_^*',
				Iv: '*Desculpe o link não é válido☹️*'
				},
				only: {
					group: '[❗] Este comando só pode ser usado em grupos! ❌',
					premium: '[❗] ESTE PEDIDO É SÓ PARA *USUÁRIOS PREMIUMS*',
					benned: 'Você para está banido do bot, por favor, contate o proprietário para retirar seu ban',
					ownerG: '[❗] Pinguim? Este é um recurso especial para o Pinguim❌',
					ownerB: '[❗] Pinguim? Este é um recurso especial para o Pinguim ❌',
					admin: '[❗] Este comando só pode ser usado por administradores do grupo! ❌',
					Badmin: '[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
				}
			}
			
			const botNumber = client.user.jid
			const ownerNumber = ["556191823084@s.whatsapp.net"]
			const adminbotnumber = ["556191823084@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const cassino = ['ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 2 ─═─ 3*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 3 ─═─ 1*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 2 ─═─ 1*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 3 ─═─ 2*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 1 ─═─ 3*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 1 ─═─ 2*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 1 ─═─ 1*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 2 ─═─ 2*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 3 ─═─ 3*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*']
			const sender = isGroup ? mek.participant : mek.key.remoteJid
		    const pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const groupId = isGroup ? groupMetadata.jid : ''
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : true
            const isAntiLink = isGroup ? antilink.includes(from) : false
            const isAntiFake = isGroup ? antifake.includes(from) : false
	    	const isAnime = isGroup ? anime.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPremium = premium.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const isBanned = ban.includes(sender)
			const totalchat = await client.chats.all()
			
	/******** PUXAR FOTO DO CATÁLOGO ***********/
			try {
		pporang = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://ighteede.sirv.com/me2.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		try {
		pporang2 = await client.getProfilePicture(from)
		      } catch {
		pporang2 = 'https://ighteede.sirv.com/me2.jpg'
		      }
		const ofrply2 = await getBuffer(pporang2)
		try {
		pporang3 = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang3 = 'https://ighteede.sirv.com/me2.jpg'
		      }
		const pingu = await getBuffer(pporang3)
	/************************************************/
	
	// FUNCTION DE TEMPO 
			const sekarang = new Date().getTime();
			var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = 'Meia-noite 🌑'; break;
                case 01: waktoo = 'De manhã cedo 🌑'; break;
                case 02: waktoo = 'De manhã cedo 🌒'; break;
                case 03: waktoo = 'De manhã cedo 🌓'; break;
                case 04: waktoo = 'Alvorecer 🌔'; break;
                case 05: waktoo = 'Alvorecer 🌔'; break;
                case 06: waktoo = 'Bom dia 🌕'; break;
                case 07: waktoo = 'Bom dia 🌕'; break;
                case 08: waktoo = 'Bom dia 🌕'; break;
                case 09: waktoo = 'Bom dia 🌕'; break;
                case 10: waktoo = 'Bom dia 🌕'; break;
                case 11: waktoo = 'Boa dia 🌕'; break;
                case 12: waktoo = 'Boa tarde ☀️'; break;
                case 13: waktoo = 'Boa tarde ☀️'; break;
                case 14: waktoo = 'Boa tarde ☀️'; break;
                case 15: waktoo = 'Boa tarde 🌕'; break;
                case 16: waktoo = 'Boa tarde 🌕'; break;
                case 17: waktoo = 'Boa tarde 🌖'; break;
                case 18: waktoo = 'Boa noite 🌘'; break;
                case 19: waktoo = 'Boa noite 🌑'; break;
                case 20: waktoo = 'Boa noite 🌑'; break;
                case 21: waktoo = 'Boa noite 🌑'; break;
                case 22: waktoo = 'Boa noite 🌑'; break;
                case 23: waktoo = 'Boa noite 🌑'; break;
            }
            var tampilUcapan = '' + waktoo;
            //FUNCTION DE HORARIO REPLY
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 00: waktoonyabro = `Boa noite ${pushname}🌙`; break;
                case 01: waktoonyabro = `Boa noite ${pushname}🌙`; break;
                case 02: waktoonyabro = `Boa noite ${pushname}🌙`; break;
                case 03: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 04: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 05: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 06: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 07: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 08: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 09: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 10: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 11: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
                case 12: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
                case 13: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
                case 14: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
                case 15: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
                case 16: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
                case 17: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
                case 18: waktoonyabro = `Boa noite ${pushname}🌙`; break;
                case 19: waktoonyabro = `Boa noite ${pushname}🌙`; break;
                case 20: waktoonyabro = `Boa noite ${pushname}🌙`; break;
                case 21: waktoonyabro = `Boa noite ${pushname}🌙`; break;
                case 22: waktoonyabro = `Boa noite ${pushname}🌙`; break;
                case 23: waktoonyabro = `Boa noite ${pushname}🌙`; break;
            }
            var ucapanFakereply = '' + waktoonyabro;
            var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 00: hari = 'Domigo'; break;
                case 01: hari = 'Segunda-feira'; break;
                case 02: hari = 'terça'; break;
                case 03: hari = 'quarta-feira'; break;
                case 04: hari = 'quinta-feira'; break;
                case 05: hari = 'sexta-feira'; break;
                case 06: hari = 'sábado'; break;
            }
            switch(bulan1) {
                case 00: bulan1 = 'Janeiro'; break;
                case 01: bulan1 = 'fevereiro'; break;
                case 02: bulan1 = 'Março'; break;
                case 03: bulan1 = 'abril'; break;
                case 04: bulan1 = 'Maio'; break;
                case 05: bulan1 = 'Junho'; break;
                case 06: bulan1 = 'julho'; break;
                case 07: bulan1 = 'agosto'; break;
                case 08: bulan1 = 'setembro'; break;
                case 09: bulan1 = 'Outubro'; break;
                case 10: bulan1 = 'novembro'; break;
                case 11: bulan1 = 'dezembro'; break;
            }
            var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
            var tampilJam = 'Horário' + ': ' + jam + ':' + menit + ':' + detik;
            // FIM DA FUNCTION

//MEUS VERIFICADO 👀
            const nay1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${ucapanFakereply}`, 'jpegThumbnail': fs.readFileSync('lib/logo.jpeg')} } }				
			const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg') }, 'title': `${ucapanFakereply}`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
			const ctt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${ucapanFakereply}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanFakereply},;;;\nFN:${ucapanFakereply},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')}}}
			const gay = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: "Feito", seconds: 999, gifPlayback: true, caption: `${ucapanFakereply}`, jpegThumbnail: fs.readFileSync('me.jpg')} } }
			const gay1 = { key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { videoMessage: { title: "Feito", seconds: 999, gifPlayback: true, caption: `${ucapanFakereply}`, jpegThumbnail: fs.readFileSync('me.jpg')} } }
			const may = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `ℙ𝕀ℕ𝔾𝕌𝕀𝕄 𝔹𝕆𝕋 𝕆𝔽ℂ😈`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',  forwardingScore: 508, isForwarded: true,'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')} } }
			const coin = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg') }, 'title': `${ucapanFakereply}`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
			const say ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "status@broadcast"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`lib/botlogo.jpeg`), surface: 200, message: `⊳ Comado: ${prefix}${command}\n⊳ ${tampilJam}`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
			const say4 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": '6283136505591-1614953337@g.us'  }, "message": {orderMessage: {itemCount: 10,status: 200, surface: 200, message: `⊳ Grupo: ${groupName}`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
			const say3 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "status@broadcast"  }, "message": {orderMessage: {itemCount: 10,status: 200, surface: 200, message: `⊳ Grupo: ${groupName}`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
			const say2 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "status@broadcast"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`kk/sticker/botlogo.webp`), surface: 200, message: `BEM VINDO AO MENU.`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
			const say1 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6283136505591-1614953337@g.us"  }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: fs.readFileSync(`lib/botlogo.jpeg`), surface: 200, message: `⊳ Comado: ${prefix}${command}\n⊳ ${tampilJam}`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
			const sayi ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6283136505591-1614953337@g.us"  }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: pingu, surface: 200, message: `⊳ ${tampilJam}\n⊳ Prefix:「 ${prefix} 」`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
			const gp = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "556181496039-1626545222@g.us","inviteCode": "PINGUIM BOT","groupName": "ℙ𝕀ℕ𝔾𝕌𝕀𝕄", "caption": `ℙ𝕀ℕ𝔾𝕌𝕀𝕄`, 'jpegThumbnail': fs.readFileSync(`lib/logo.jpeg`)}}}
			const gp2 = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "556181496039-1626545222@g.us","inviteCode": "PINGUIM BOT","groupName": "ℙ𝕀ℕ𝔾𝕌𝕀𝕄", "caption": `ℙ𝕀ℕ𝔾𝕌𝕀𝕄`, 'jpegThumbnail': pingu}}}
			const say5 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}\n❦  ${prefix}${command}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;client,;;;\nFN:client,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`lib/logo.jpeg`), thumbnail:fs.readFileSync(`lib/logo.jpeg`),sendEphemeral: true}}}
			const svid = {
	 key: { 
	      participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "status@broadcast"} : {})
	       },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`, 
                 'seconds': '1', 
                 'caption': `${tampilUcapan}`,
                 'jpegThumbnail': fs.readFileSync('./me.jpg')
                        }
                       }
	                  }
	const saud = {
	 key: { 
	      participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "status@broadcast"} : {})
	       },
	 message: { 
                 "audioMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`, 
                 'seconds': '1', 
                 'caption': `${tampilUcapan}`,
                 'jpegThumbnail': fs.readFileSync('./me.jpg')
                        }
                       }
	                  }
	const coin2 = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./me.jpg`)
					},
					"title": `${pushname}`,
					"description": "ngab",
					"currencyCode": "IDR",
					"priceAmount1000": "50000.0000000",
					"retailerId": "Self Bot",
					"productImageCount": 0
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./me.jpg')
        }}}
        const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilHari}`, 
                    jpegThumbnail: fs.readFileSync('./fotos/me8.jpg')
                          }
                        }
                      }
                      const floc= {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    title: '${pushname}', 
                    jpegThumbnail: fs.readFileSync('./fotos/me8.jpg')
                          }
                        }
                      }
        const fakevn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "10",
                 "ptt": "true"
                        }
	                  } 
                     } 
                     const view = {
key:{ fromMe: false, participant:'0@s.whatsapp.net',
}, 
"message": {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AuUQdkmfstqxEnJ3KOzmdlf5MMw3_5RIAK9bYsHLRIKw.enc",
"mimetype": "image/jpeg",
"fileSha256": "jEzgQNqi5+q92rv1Th5K8b3NEvSPQB0J7BmbRPx0HiM=",
"fileLength": "51447",
"height": 1000,
"width": 473,
"mediaKey": "IQgt/PfjOT0XHbhpZ/gDyPNNrm7U5/kSu53ciy3yIG0=",
"fileEncSha256": "W7GvAYfAlL9k+BV9f8DnrTFs9Dc6AElklFc2TgYProg=",
"directPath": "/v/t62.7118-24/32386816_958811167996836_8219158230940333191_n.enc?ccb=11-4&oh=d684c6546ecdb68b186f82c60e99b79d&oe=614C1D0B",
"mediaKeyTimestamp": "1629852836",
"jpegThumbnail": "/9j/4AAQSiiokZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAIgMBIgACEQEDEQH/xAAvAAEAAwEBAAAAAAAAAAAAAAAAAQIFAwQBAQEBAQEAAAAAAAAAAAAAAAABBAID/9oADAMBAAIQAxAAAAD11wp0c7s4Ct5gisx08LzXgqB053JrEAC9OhFZqAaEmqAQD//EACEQAAIABQUBAQAAAAAAAAAAAAABAhARFFISEyFRYiBh/9oACAEBAAE/AKoccPZVFUVXZrjyZuR5M3I8mbkeTNceT+kUqOFGn9+OOhqepFZoojgckcDnYvMs3kWPosfRY+z/xAAZEQACAwEAAAAAAAAAAAAAAAAAEwJRYTD/2gAIAQIBAT8Abg7B2clwoXChcKP/xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAEDAQE/AH//2Q==",
"scansSidecar": "W5GqyCt/SB+HZRNuz5wBlyCNIxCF/Xg+edurupMjWrtQhMwyu7LmTQ==",
"scanLengths": [
3667,
19378,
12342,
16060
],
"midQualityFileSha256": "gUeM8GWF23VMvVy8gvF7vzVsWiDnK2GVI1zO3mpLF9s=",
"viewOnce": true
}}}
//FIM DOS VERIFICADOS 

/************** BOTÕES **************/

///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
client.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await client.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Butão Localização
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const replyinvisiveltag = async function(from, text){
let anu = await client.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
client.sendMessage(from, text, 'extendedTextMessage', {quoted: mek, contextInfo: {"mentionedJid": ane}})
}
/**********************************/

// CONTEXTINFO
        const fotothumb = {text: 'oi', sendEphemeral: true,"externalAdReply": {"title": `⚠️ NÃO CLIQUE AQUI!!! 🖐️`,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": pingu, "sourceUrl": `oi https://api.whatsapp.com/send?phone=553892564417&text=Eu%20não%20resisti%20🖐️😔`},mentionedJid:[sender]
        }
        const fotothumb3 = {text: 'oi', sendEphemeral: true,"externalAdReply": {"title": `⚠️ NÃO CLIQUE AQUI!!! 🖐️`,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": pingu, "sourceUrl": `oi https://api.whatsapp.com/send?phone=553892564417&text=Eu%20não%20resisti%20🖐️😔`},mentionedJid:[sender]
        }
        const fotothumb2 = {text: 'oi', sendEphemeral: true,"externalAdReply": {"title": `PINGUIM BOT`,"body": "Entra logo no grupo mlk","previewType": "PHOTO","thumbnailUrl": "","thumbnail": pingu, "sourceUrl":`https://chat.whatsapp.com/CaZ8OlmI59gCKizmlXqqay`},mentionedJid:[sender]
        }
        const ytinfo = {text: 'oi',"forwardingScore": 1000000000,isForwarded: true,sendEphemeral: true,"externalAdReply": { "title": `bom... eu n sei de nd`,"body": `${tampilHari}` ,"mediaType": 2,"previewType": 2,"thumbnail": fs.readFileSync('./fotos/menu7.jpg'), "mediaUrl": `https://youtu.be/987xxygqOB4`},mentionedJid:[sender]}                         
//FIM CONTEXTINFO

const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
			client.sendMessage(from, teks, text,  { quoted: mek, thumbnail: dfrply, sendEphemeral: true})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image,  {quoted: nay1, contextInfo: {"mentionedJid": [sender], forwardingScore: 1000, isForwarded: true }})
		    }
			const sendMess = (hehe, teks) => {
				client.sendMessage(from, teks, text,  {quoted: say1, contextInfo: {"mentionedJid": [sender], forwardingScore: 1000, isForwarded: true }})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const getGroup = async function(totalchat){
	let grup = []
	let a = []
	let b = []
	for (c of totalchat){
		a.push(c.jid)
	}
	for (d of a){
		if (d && d.includes('g.us')){
			b.push(d)
		}
	}
	for (e of b){
		let ingfo = await client.groupMetadata(e)
		grup.push(ingfo)
	}
	return grup
}

/*--------------------[ Tictactoe jogo Function ]--------------------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("why");
          if (
               budy.toLowerCase() == "aceitar" ||
               budy.toLowerCase() == "Aceitar" ||
               budy.toLowerCase() == "aceita"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`O jogo já começou antes!`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

`;
                    client.sendMessage(from, chatAccept, MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [
                                   boardnow.X + "@s.whatsapp.net",
                                   boardnow.O + "@s.whatsapp.net",
                              ],
                         },
                    });
               } else {
                    client.sendMessage(
                         from,
                         `『❗』 Esta é uma opção apenas para o @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          } else if (
               budy.toLowerCase() == "recusar" ||
               budy.toLowerCase() == "Recusar" ||
               budy.toLowerCase() == "RECUSAR"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`O jogo já começou!`);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    client.sendMessage(
                         from,
                         `@${boardnow.X} *_Infelizmente seu oponente não aceito o desafio ❌😕_*`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.X + "@s.whatsapp.net"],
                         },
                    }
                    );
               } else {
                    client.sendMessage(
                         from,
                         `『❗』 Esta é uma opção apenas para o @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          }
     }

     if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
          if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
          if (
               (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
               sender.replace("@s.whatsapp.net", "")
          )
               return;
          const moving = validmove(Number(budy), `${from}`);
          const matrix = moving._matrix;
          if (moving.isWin) {
               if (moving.winner == "SERI") {
                    const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`
                    reply(chatEqual);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    return;
               }
           //    const dinherowin = Math.ceil(Math.random() * 5000)
               const winnerJID = moving.winner == "O" ? moving.O : moving.X;
               const looseJID = moving.winner == "O" ? moving.X : moving.O;
               const limWin = Math.floor(Math.random() * 20) + 10;
               const limLoose = Math.floor(Math.random() * 10) + 5;
               const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
            //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
            //addKoinUser(winnerJID + "@s.whatsapp.net", dinherowin)           
               client.sendMessage(from, chatWon, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.winner == "O" ?
                                   moving.O + "@s.whatsapp.net" :
                                   moving.X + "@s.whatsapp.net",
                         ],
                    },
               });
setTimeout( () => {
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
}, 50000) //5 minutos
                reply(`_*🥳Parabéns @${winnerJID} Você ganhou +${dinherowin} de dinheiro por ter ganhado o jogo da velha🎉...*_`)      
               fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
          } else {
               const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}


     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

obs: jogo está em beta
`;
               client.sendMessage(from, chatMove, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.X + "@s.whatsapp.net",
                              moving.O + "@s.whatsapp.net",
                         ],
                    },
               });
          }
     }
     //_FUCTION PATENTE
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {
patt = 'Bronze  I🥉'
} else if (nivelAtual === 2) {
patt = 'Bronze II🥉'
} else if (nivelAtual === 3) {
patt = 'Bronze  III🥉'
} else if (nivelAtual === 4) {
patt = 'Bronze  IV🥉'
} else if (nivelAtual === 5) {
patt = 'Bronze  V🥉'
} else if (nivelAtual === 6) {
patt = 'Prata I🥈'
} else if (nivelAtual === 7) {
patt = 'Prata II🥈'
} else if (nivelAtual === 8) {
patt = 'Prata III🥈'
} else if (nivelAtual === 9) {
patt = 'Prata IV🥈'
} else if (nivelAtual === 10) {
patt = 'Prata V🥈'
} else if (nivelAtual === 11) {
patt = 'Ouro I🥇'
} else if (nivelAtual === 12) {
patt = 'Ouro II🥇'
} else if (nivelAtual === 13) {
patt = 'Ouro III🥇'
} else if (nivelAtual === 14) {
patt = 'Ouro IV🥇'
} else if (nivelAtual === 15) {
patt = 'Ouro V🥇'
} else if (nivelAtual === 16) {
patt = 'Campeão I🏆'
} else if (nivelAtual === 17) {
patt = 'Campeão II🏆'
} else if (nivelAtual === 18) {
patt = 'Campeão III🏆'
} else if (nivelAtual === 19) {
patt = 'Campeão IV🏆'
} else if (nivelAtual === 20) {
patt = 'Campeão V🏆'
} else if (nivelAtual === 21) {
patt = 'Diamante I 💎'
} else if (nivelAtual === 22) {
patt = 'Diamante II 💎'
} else if (nivelAtual === 23) {
patt = 'Diamante III 💎'
} else if (nivelAtual === 24) {
patt = 'Diamante IV 💎'
} else if (nivelAtual === 25) {
patt = 'Diamante V 💎'
} else if (nivelAtual === 26) {
patt = 'Mestre I 🐂'
} else if (nivelAtual === 27) {
patt = 'Mestre II 🐂'
} else if (nivelAtual === 28) {
patt = 'Mestre III 🐂'
} else if (nivelAtual === 29) {
patt = 'Mestre IV 🐂'
} else if (nivelAtual === 30) {
patt = 'Mestre V 🐂'
} else if (nivelAtual === 31) {
patt = 'Mítico I 🔮'
} else if (nivelAtual === 32) {
patt = 'Mítico II 🔮'
} else if (nivelAtual === 33) {
patt = 'Mítico III 🔮'
} else if (nivelAtual === 34) {
patt = 'Mítico IV 🔮'
} else if (nivelAtual === 35) {
patt = 'Mítico V 🔮'
} else if (nivelAtual === 36) {
patt = 'God I🕴'
} else if (nivelAtual === 37) {
patt = 'God II🕴'
} else if (nivelAtual === 38) {
patt = 'God III🕴'
} else if (nivelAtual === 39) {
patt = 'God IV🕴'
} else if (nivelAtual === 40) {
patt = 'God V🕴'
} else if (nivelAtual >= 41) {
patt = '🛐Grande Mestre🛐'
}
// FIM 

//function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`   ╾╾╾╾❖LEVEL UP❖╾╾╾╾  \n\n  ╭╼╾╼╾╼╾╼╾╼╾╼╾╼\n  ║‣ *Número:* *${sender.split("@")[0]}*  \n  ├╼╾╼╾╼╾╼╾╼╾╼╾╼\n  ║‣ *XP*: *${getLevelingXp(sender)}*\n  ├╼╾╼╾╼╾╼╾╼╾╼╾╼\n  ║‣ *Level*: *${getLevel} -> ${getLevelingLevel(sender)}*\n  ├╼╾╼╾╼╾╼╾╼╾╼╾╼\n  ║‣ *Patente:* ${patt}\n  ╰╼╾╼╾╼╾╼╾╼╾╼╾╼\n\n  ╾╾╾╾❖LEVEL UP❖╾╾╾╾  `)
                }
            } catch (err) {
                console.error(err)
            }
        }

//eval EXECUTAR COMANDOS 
if (budy.startsWith('>')){
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
//client.sendMessage(from, JSON.stringify(eval(body.slice(6))). text) // SO SE QUISER
} catch (err) {
m = String(err)
await reply(m)
}
}
if (budy.startsWith('=>')){
if (!isOwner) return reply('somente meu criador')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}
if (body.startsWith('$')) {
if (!q && !isOwner) return enviar('somente meu criador')
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
//FIM 
// ANTILINK
	if (budy.includes("https://t.me/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*link detectado* ${sender.split("@")[0]} *você será expulso deste grupo* `)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("adeus")
		}, 0)
	}
	       if (budy.includes("wa.me")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(frtobiPresence.composing)
		if (messagesC.includes("#itobidmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*link detectado* ${sender.split("@")[0]} *você será expulso deste grupo* `)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("adeus")
		}, 0)
	}
	       if (budy.includes("://wa.me/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*link detectado* ${sender.split("@")[0]} *você será expulso deste grupo* `)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("adeus")
		}, 0)
	}
	              if (budy.includes("https://vm.tiktok.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*link detectado* ${sender.split("@")[0]} *você será expulso deste grupo* `)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("adeus")
		}, 0)
	}
	        if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*link detectado* ${sender.split("@")[0]} *você será expulso deste grupo* `)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("adeus")
		}, 0)
	}
	if (budy.includes(".com")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*link detectado* ${sender.split("@")[0]} *você será expulso deste grupo* `)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("adeus")
		}, 0)
	}
		              if (budy.includes("https://s.kwai.app/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*link detectado* ${sender.split("@")[0]} *você será expulso deste grupo* `)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("adeus")
		}, 0)
	}
	if (budy.includes("https://")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*link detectado* ${sender.split("@")[0]} *você será expulso deste grupo* `)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("adeus")
		}, 0)
	}
	// FIM DO ANTILINK 
	
	// CATÁLOGO

if (antibot === true) return
		const catalogo = (teks) => {
             res = client.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 10, "message": teks, "footerText": "*_© Dcode Denpa_*", "thumbnail": ofrply, "surface": 'CATALOG'}}, {quoted: freply})
             client.relayWAMessage(res)
        }
        if (antibot === true) return
		const catalogo2 = (teks) => {
             res = client.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 10, "message": teks, "footerText": "*_© Dcode Denpa_*", "thumbnail": ofrply2, "surface": 'CATALOG'}}, {quoted: freply})
             client.relayWAMessage(res)
        }
        
      //  FIM DO CATÁLOGO
if (budy === `${prefix}`) return

if (budy === `${prefix + prefix}`) return

if (budy === `${prefix + prefix + prefix}`) return

        if ((budy === "+")) {
        	reply(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await client.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join('Pinguim')
		            satu = typeof anu[1] !== 'undefined' ? anu[1] : `Pinguim`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `Bot`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, client, nay1, from)
}

if (budy.match('Pinguim')) {
			const figu = ["1","2","1","3","4","5","9","6","7","8"]
fiu = figu[Math.floor(Math.random() * figu.length)]
figs = fs.readFileSync('./figs/'+fiu+'.webp')
client.sendMessage(from, figs, sticker, {quoted: mek})
}
if (budy.match('PINGUIM')) {
			const figu = ["1","2","1","3","4","5","9","6","7","8"]
fiu = figu[Math.floor(Math.random() * figu.length)]
figs = fs.readFileSync('./figs/'+fiu+'.webp')
client.sendMessage(from, figs, sticker, {quoted: mek})
} 
 
// AUTO RESPOSTA 
if (messagesC.includes("canta")){
const menus = ["google","pozeday","canto"]
pingu = menus[Math.floor(Math.random() * menus.length)]
menu = fs.readFileSync('./assets/'+pingu+'.mp3')
client.sendMessage(from, menu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if ((budy === "Ban") || (budy === "BAN") || (budy === "ban")) {
client.updatePresence(from, Presence.composing)
reply("ban ban ban ban")
}
if (messagesC.includes("Gay")){
client.updatePresence(from, Presence.composing)
reply("*Somos* 🙈")
}
if (messagesC.includes("gay")){
client.updatePresence(from, Presence.composing)
reply("*Somos* 🙈")
}
if (budy.match('cringe')) {
if(!mek.key.fromMe){
result = fs.readFileSync(`./assets/cringe.webp`)
client.sendMessage(from, result, sticker, { quoted: mek })
}}
if (budy.match('Cringe')) {
if(!mek.key.fromMe){
result = fs.readFileSync(`./assets/cringe.webp`)
client.sendMessage(from, result, sticker, { quoted: mek })
}}
if ((budy === "Não") || (budy === "não") || (budy === "NÃO")) {
result = fs.readFileSync(`./assets/sim.webp`)
client.sendMessage(from, result, sticker, {quoted: mek })
}
if ((budy === "Fofa") || (budy === "fofa")) {
result = fs.readFileSync(`./assets/loli.webp`)
client.sendMessage(from, result, sticker, {quoted: mek })
}
if ((budy === "Fofo") || (budy === "fofo")) {
result = fs.readFileSync(`./assets/loli.webp`)
client.sendMessage(from, result, sticker, {quoted: mek })
}
//FIM

// BOT VIZUALIZA AS MENSAGENS
	client.chatRead(from)
       // TIPOS DE MENSAGENS
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'do mano', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Message'), 'do mano', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'do mano', color(sender.split('@')[0]), 'no', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Message'), 'do mano', color(sender.split('@')[0]), 'no', color(groupName), 'args :', color(args.length))
			if (!mek.key.fromMe && !isOwner && banChats === true) return 
			if (isCmd && isBanned) {
            return console.log(color('[BAN] Ignorando comando', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
			switch(command) {
				
 /************* CMDS DO DONO ************/
case 'ping':
const timestampi = speed();
const latensyi = speed() - timestampi
if (isOwner) return reply(`Pong! 🏓 Velocidade: ${latensyi.toFixed(4)} Segundos`)
else {
reply(`*Sai random!* 😑 Velocidade: ${latensyi.toFixed(4)} Segundos `)
}
break
case 'exe':
client.updatePresence(from, Presence.composing) 
if (!isOwner) return reply("apenas meu dono")
const cmd = body.slice(4)
exec(cmd, (err, stdout) => {
if(err) return client.sendMessage(from, "Comando inexistente", text, {quoted: say})
if (stdout) {
client.sendMessage(from, stdout, text, {quoted: say})
}
})
break
case 'ban':
case 'bloquear':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*Este comando só pode ser usado pelo Pinguim*  😎🤙')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e você não poderá mais usar comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break
case 'unban':
case 'desbloquear':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*Este comando só pode ser usado pelo Pinguim* 😎🤙 ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]}foi desbloqueado e você pode reutilizar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break
case 'addvip':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*Este comando só pode ser usado pelo Pinguim* 😎🤙')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./database/vip.json', JSON.stringify(premium))
vip = `✅@${mentioned[0].split('@')[0]} Você virou Vip no Pinguim bot✅`
mentions(`${vip}`, mentioned, true)   
break
case 'delvip':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*Este comando só pode ser usado pelo  Pinguim* 😎🤙')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.splice(`${mentioned}`)
fs.writeFileSync('./database/vip.json', JSON.stringify(premium))
vip = `❎@${mentioned[0].split('@')[0]} Você deixou de ser um membro Vip do Pinguim bot❎`
mentions(`${vip}`, mentioned, true)   
break
case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que já foram enviadas`)
				if (!isOwner) return reply(mess.only.ownerB)
				enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(enmedia)
				await client.updateProfilePicture(botNumber, media)
				reply('Obrigado pelo novo perfil😗')
				break 
case 'bloqueados':
				teks = 'Esta é a lista de números bloqueados :\n'
				for (let block of blocked) {
				teks += `~> @${block.split('@')[0]}\n`
				}
				teks += `Total : ${blocked.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
				break
case 'setnomebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					reply(`O nome do bot foi alterado com sucesso para : ${name}`)
					break
case 'clonar':
				    if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
					pp = await client.getProfilePicture(id)
					buffer = await getBuffer(pp)
					client.updateProfilePicture(botNumber, buffer)
					mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
					reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
					}
					break   
case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`O prefixo foi alterado com sucesso para : ${prefix}`)
					break
case 'clearchat':
case 'limpar':
if (!isOwner) return reply(ownerB(ownerName))
anu = await client.chats.all()
list_chat = await client.chats.all()
for (let chat of list_chat) {
client.modifyChat(chat.jid, "delete", {includeStarred: false})
}
reply("Chat limpo")
break
case 'bc':
					if (!isOwner) return reply('Quem é Você? Você não é meu dono 😂')
					if (args.length < 1) return reply('Cadê o texto?')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					buff = await client.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					client.sendMessage(_.jid, buff, image, {caption: `*[ 🧸TRANSMIÇÃO DE AVISO🧸 ]*\n\n${body.slice(4)}`})
					}
					reply('Transmissão enviada com sucesso')
					} else {
					for (let _ of anu) {
					sendButMessage(
_.jid,
`「 ™️ *TRANSMISSÃO* ™️ 」\n\n${body.slice(4)}`,
`Caso não queira participar das Transmissões, fale com o meu criador para que ele possa te tirar.`,
[
{
buttonId: `Criador ❄️`,
buttonText: {
displayText: `Criador ❄️`,
},
type: 1,
},
{
buttonId: `Menu 🛍️'`,
buttonText: {
displayText: `Menu 🛍️`,
},
type: 1,
},
]
);
}
reply('Transmissão enviada com sucesso')
}
break
case 'boc':
if (!isOwner) return reply(ptbr.ownerB())
const aMimirMp3 = fs.readFileSync('./assets/princesinhasofia.mp3')
const aMimirSt = fs.readFileSync('./assets/safadezas.webp')
for (let _ of groupMembers) {
client.sendMessage(_.jid, aMimirMp3, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
client.sendMessage(_.jid, aMimirSt, sticker)
}
break
case 'bcstiik':
if (!isOwner) return 
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of groupMembers) {
client.sendMessage(_.jid, bc, sticker)
}
reply('Pronto🐤')
}
break
case 'boc2':
if (!isOwner) return reply(ptbr.ownerB())
anu = await client.chats.all()
const bodiaMp4 = fs.readFileSync('./assets/bomdia.mp4')
for (let _ of groupMembers) {
client.sendMessage(_.jid, bodiaMp4, MessageType.video, {mimetype: 'video/mp4', ptt: true})
}
break
case 'totm':
					client.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Cadê o texto?')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					anu = await client.chats.all()
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await client.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					client.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(5)}`})
					}
					reply(`A tm foi feita com sucesso\n _*${body.slice(5)}*_`)
					} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await client.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					client.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(5)}`})
					}
					reply(`A tm foi feita com sucesso\n _*${body.slice(5)}*_`)
					} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await client.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					client.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(5)}` })
					}
					reply(`A tm foi feita com sucesso\n _*${body.slice(5)}*_`)
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `${body.slice(5)}`)
					}
					reply(`A tm foi feita com sucesso\n _*${body.slice(5)}*_`)
					}
					break
case 'viewonce':
case 'view':
	if (isMedia && !mek.message.videoMessage || isQuotedImage) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	buff = await client.downloadMediaMessage(encmedia)				
	client.sendMessage(from, buff, image, { viewOnce:true, caption: `${c}`})			
	} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
	const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	buff = await client.downloadMediaMessage(encmedia)				
    client.sendMessage(from, buff, video, { viewOnce:true, caption: `${c}`})						
	}
break
case 'bcfig':
case 'bcsticker':
case 'bcstik':
if (!isOwner) return 
anu = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, bc, sticker)
}
reply('Pronto🐤')
}
break
case 'bcimg':
if (!isOwner) return 
anu = await client.chats.all()
if (isMedia && !mek.message.imageMessage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, bc, image, {sendEphemeral: true})
}
reply('Pronto🐤')
}
break
case 'reiniciar':
if (!isOwner) return reply("quem é tu mano")
npm = `npm start`
reply('Reiniciando em alguns segundos...')       
exec(npm, (err, stdout) => {
if(err) return client.sendMessage(from, "Erro", text, {quoted: mek})
if (stdout) {
client.sendMessage(from, stdout, text, {quoted: mek})
} 
})
break
case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Quem é Você?')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "ℙ𝕀ℕ𝔾𝕌𝕀𝕄 𝔹𝕆𝕋 𝕆𝔽ℂ😈", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
					break
case 'hidetag10':   
				    if (!isGroup) return reply(`[❗] *Olá ${pushname} este comando e apenas para grupos`)
					if (!isOwner) return reply(`Esse Comando é somente para meu criador 🐤`)
					var value = body.slice(10)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)					 
					client.sendMessage(from, options, text)					 
					client.sendMessage(from, options, text)					 
					client.sendMessage(from, options, text)					 
					client.sendMessage(from, options, text)					 
					client.sendMessage(from, options, text)					 
					client.sendMessage(from, options, text)					 
					client.sendMessage(from, options, text)					 
					client.sendMessage(from, options, text)					 
					client.sendMessage(from, options, text)					 
					break    
case 'regras':
if (!isOwner) return reply('Você não é meu dono🐤')
client.updatePresence(from, Presence.composing)
if (!isGroup) return reply('*[❗] Apenas em grupos❌*')
aviso  = `⚠️ 𝐈𝐍𝐏𝐎𝐑𝐓𝐀𝐍𝐓𝐄 ⚠️\n\n⚠️ 𝐍𝐚̃𝐨 𝐟𝐥𝐨𝐨𝐝𝐞 𝐬𝐞𝐧𝐚̃𝐨 𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐨𝐝𝐞𝐦 𝐜𝐚𝐢𝐫!\n\n⚠️ 𝐒𝐞 𝐟𝐚𝐥𝐡𝐚𝐫, 𝐨 𝐬𝐞𝐫𝐯𝐢𝐝𝐨𝐫 𝐜𝐚𝐢𝐮 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐫𝐢𝐚𝐦𝐞𝐧𝐭𝐞.\n\n⚠️ 𝐄𝐦 𝐭𝐞𝐬𝐭𝐞𝐬. 𝐄𝐧𝐭ã𝐨 𝐩𝐨𝐝𝐞 𝐜𝐚𝐢𝐫, 𝐨𝐮 𝐟𝐢𝐜𝐚𝐫 𝐨𝐟𝐟.\n\n⚠️ 𝐀𝐥𝐠𝐮𝐧𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐨𝐝𝐞𝐦 𝐝𝐞𝐦𝐨𝐫𝐚𝐫.`
group = await client.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: aviso,
contextInfo: {
mentionedJid: jids
},
quoted: mek
}
await client.sendMessage(from, options, text, {quoted: gp})
break
case 'supertag':
case 'tag':
if (!isOwner) return reply(mess.only.ownerB)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
                        } else if ((isMedia && !mek.message.documentMessage || isQuotedDocument) && args.length == 0) {
            encmedia = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'document/file',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`[❗] responder imagem/adesivo/áudio/vídeo com a legenda ${prefix}supertag para marcar`)
        }
        break
case 'figutag':
if (!isOwner) return reply(mess.only.ownerB)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : view
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: view
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*[❗] MARQUE A FIGURINHA 😐*`)
            }
break
case 'leave':
case 'sair':
                  if (!isGroup) return reply(mess.only.group)
                  if (isOwner) {
                  client.groupLeave(from)
                  } else {
                  reply("Você não é meu dono")
                  }
break
case 'kickall':
					if (!isOwner) return reply('Apenas meu dono🤹‍♀️')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `** ${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
break
case 'modo':
if (!isOwner) return reply('Vc não é meu pai 🐤')
const cart4 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6283136505591-1614953337@g.us"  }, "message": {orderMessage: {itemCount: 13,status: 200, thumbnail: fs.readFileSync(`./fotos/me9.jpg`), surface: 200, message: `⊳ ${tampilJam}\n⊳ Prefix:「 ${prefix} 」`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
pin = `Número de αdmins: ${groupAdmins.length}\nNúmero de membros: ${groupMembers.length}`
                let pinggu = client.prepareMessageFromContent(from, {
					"listMessage": {
						"title": `Olá @${sender.split("@")[0]} 🐋❄️\n${pin}`,
						"description": `Modo Privado ou Público.`,
						"buttonText": "SELECIONE",
						"footerText": `© _Pinguim_`,
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "◉ Self",
								"rows": [
									{
										"title": "Privado 🔐",
										"rowId": "selff1"
									}
								]
							},
							{
								"title": "◉ Public",
								"rows": [
									{
										"title": "Público 🔓",
										"rowId": "publicc1"
									}
								]
							}
						]
					}
				},
			{quoted: cart4, contextInfo: {"mentionedJid": [sender]}}
		)
		client.relayWAMessage(pinggu, {waitForAck: true})
break
case 'public':
case 'publico':
if (!isOwner) return
if (banChats === false) return
uptime = process.uptime()
anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `0@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 publico 」\n*${kyun(uptime)}*`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')}}}}
banChats = false
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m PUBLICO \x1b[1;37m]', color('O modo publico foi ativado agora todos pode usar os cmd do bot', 'yellow'))
client.sendMessage(from, `「 *MODO-PUBLICO* 」`, text,anu)
break
case 'self':
case 'privado':
if (!isOwner) return
if (banChats === true) return
uptime = process.uptime()
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m PRIVADO \x1b[1;37m]', color('Modo privado foi ativado agora so você pode usar os cmd', 'yellow'))
anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `0@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 privado 」\n*${kyun(uptime)}*`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')}}}}
banChats = true
client.sendMessage(from, `「 *MODO-PRIVADO* 」`, text,anu)
break
/************* ADMINS *************/
case 'setnome':
                   if (!isGroup) return reply(mess.only.group)
			       if (!isGroupAdmins) return reply(mess.only.admin)
			       if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   client.groupUpdateSubject(from, `${body.slice(9)}`)
                   client.sendMessage(from, 'Sucesso, alterou o nome do grupo', text, {quoted: mek})
break
case 'setfoto':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterou com sucesso o ícone do Grupo')
                    break			
case 'setdesc':
			    	 if (!isGroup) return reply(mess.only.group)
				     if (!isGroupAdmins) return reply(mess.only.admin)
			   	  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				     client.groupUpdateDescription(from, `${body.slice(9)}`)
				     client.sendMessage(from, 'Descrição alterada com sucesso', text, {quoted: mek})
break
case 'bemvindo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('Já esta ativo.')
				    welkom.push(from)
					fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
				    reply('Ativou com sucesso o recurso de boas-vindas neste grupo 😉️')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
				   fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
					reply('Desativou com sucesso o recurso de boas-vindas neste grupo 😡️')
					} else {
					reply('1 para ativar, 0 para desativar, lerdão vc em KAKKKK')
					}
break
case 'leveling':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('🐤')
					if (args[0] === 'on') {
                    if (isLevelingOn) return reply('*O comando de level já estava ativo*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
					} else if (args[0] === 'off') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
					} else {
					reply(' Use .leveling on para ativar e .leveling off para desativar')
					}
break
case 'antifake':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
				    if (isAntiFake) return reply('Ja esta ativo')
				    antifake.push(from)
				    fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
					reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
					antifake.splice(from, 1)
					fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
					reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
					reply('1 para ativar, 0 para desativar')
					}
					} catch {
					reply('Deu erro, tente novamente :/')
					}
break
case 'antilink':  
                    if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
					if (!isGroupAdmins) return reply(`_VOCÊ NÃO É ADMINISTRADOR DO GRUPO_`)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('*SELECIONE 1/0*')
					if (Number(args[0]) === 1) {
					if (isAntiLink) return reply('*JÁ ESTÁ ATIVO!!!*')
					antilink.push(from)
					fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
					reply('*[❗] ATIVADO ANTILINK*')
					reply('*[❗] ATENÇÃO QUALQUER MEMBRO DO GRUPO QUE ENVIAR ALGUM TIPO DE LINK SERÁ BANIDO AUTOMÁTICAMENTE DO GRUPO⚠️*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
					reply('*[❗] DESATIVADO ANTILINK*')
					} else {
					reply(`*SELECIONE 1/0*`)
					}
					break
case 'closegc':
case 'fechar':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\n *apenas administrador* quem pode enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
case 'abrir':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo  *GRUPO ABERTO PELO ADMINISTRADOR* @${sender.split("@s.whatsapp.net")[0]}\nAGORA TODOS PODEM ENVIAR MENSAGENS`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					client.sendMessage(from, text, {quoted: mek})
					reply(open)  
					break
case 'grupo':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const cart ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6283136505591-1614953337@g.us"  }, "message": {orderMessage: {itemCount: 13,status: 200, thumbnail: fs.readFileSync(`./fotos/me9.jpg`), surface: 200, message: `⊳ ${tampilJam}\n⊳ Prefix:「 ${prefix} 」`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
pin = `Número de αdmins: ${groupAdmins.length}\nNúmero de membros: ${groupMembers.length}`
                let pingu = client.prepareMessageFromContent(from, {
					"listMessage": {
						"title": `Olá @${sender.split("@")[0]} 🐋❄️\n${pin}`,
						"description": `Grupo: ${groupName}\nAbrir ou Fechar o Grupo.`,
						"buttonText": "SELECIONE",
						"footerText": `© _Pinguim_`,
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "◉ Open",
								"rows": [
									{
										"title": "Abrir Grupo 🔓",
										"rowId": "abrir1"
									}
								]
							},
							{
								"title": "◉ Close",
								"rows": [
									{
										"title": "Fechar Grupo 🔐",
										"rowId": "fechar2"
									}
								]
							}
						]
					}
				},
			{quoted: cart, contextInfo: {"mentionedJid": [sender]}}
		)
		client.relayWAMessage(pingu, {waitForAck: true})
break
case 'gp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
buttons = [{
                    "buttonId": `Abrir 🔓`,
                    "buttonText": {
                        "displayText": "Abrir 🔓"
                    },
                    "type": "RESPONSE"
                     },{
                    "buttonId": `Fechar 🔐`,
                    "buttonText": {
                        "displayText": "Fechar 🔐"
                        },
                    "type": "RESPONSE"
                    }]
buttonsMessage = { contentText: `_Olá Ademiro_ @${sender.split("@")[0]}\n\nSelecione para abrir, ou fechar o grupo👩‍💻`,
footerText: '© _Pinguim_',
buttons,headerType: 1}
prep = await client.prepareMessageFromContent(from, { buttonsMessage }, {contextInfo: {"mentionedJid": [sender]}})
client.relayWAMessage(prep)
break
case 'linkgp':
                  if (!isGroup) return reply(mess.only.group)
                  if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   linkgc = await client.groupInviteCode(from)
                   reply('https://chat.whatsapp.com/'+linkgc)
break
case 'banir':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = 'Alvo removido com sucesso :\n'
				    for (let _ of mentioned) {
					teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					client.groupRemove(from, mentioned)
					} else {
					mentions(`Alvo removido com sucesso  : @${mentioned[0].split('@')[0]}`, mentioned, true)
					client.groupRemove(from, mentioned)
					}
break
case 'kick': 
case 'k':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
client.sendMessage("Alvo removido com sucesso")
break
//case 'tempban'://BY SAYO
if (args[1]=="segundos") {var timer = args[0]+"000"
} else if (args[1]=="minuto") {var timer = args[0]+"0000"
} else if (args[1]=="hora") {var timer = args[0]+"00000"
} else {return reply("*selecionar:*\nsegundos\nminuto\nhora")}
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.sayo> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
reply(`[❗] tempo de ban : ${args[0]} ${args[1]}`)
setTimeout( () => {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupAdd(from, [exe1])			
}, timer)
break
//case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você quer adicionar um gênio?')
					if (args[0].startsWith('08')) return reply('Use o código do país, man')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					client.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					reply('Falha ao adicionar destino, talvez porque é privado')
					}
break
case 'promover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = 'Berhasil Promote\n'
					for (let _ of mentioned) {
					teks += `@${_.split('@')[0]}\n`
					}
					mentions(from, mentioned, true)
					client.groupRemove(from, mentioned)
					} else {
					mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
					client.groupMakeAdmin(from, mentioned)
					}
break
				case 'rebaixar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = 'Berhasil Demote\n'
					for (let _ of mentioned) {
					teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					client.groupRemove(from, mentioned)
					} else {
					mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
					client.groupDemoteAdmin(from, mentioned)
					}
break
case 'demote': //Grupo
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupDemoteAdmin(from, M_exe)
} else {
client.groupDemoteAdmin(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupDemoteAdmin(from, [exe1])
}
reply("Ok. Chefe esse cara perdeu o adm!")
break
case 'promote': //Grupo
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupMakeAdmin(from, M_exe)
} else {
client.groupMakeAdmin(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupMakeAdmin(from, [exe1])
}
reply("Ok. Chefe esse cara agora é admin!")
break
case 'notif':
if (!isGroupAdmins) return reply(mess.only.admin)
client.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if(args.length < 1) return client.reply('escreva algo como aviso')
aviso  = `Aviso de: @${sender.split("@")[0]}\n\nAviso: ${body.slice(7)}`
group = await client.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: aviso,
contextInfo: {
mentionedJid: jids
},
quoted: mek
}
await client.sendMessage(from, options, text, {contextInfo: fotothumb, sendEphemeral: true})
break
case 'marcar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `*#* @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
break
case 'marcar2':
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
reply(teks)
break
case 'marcar3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
break
case 'marcar4':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
					members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
break
// FIM 
//_FIGURINHAS/STICKER
case 'figu':
				case 'fig':
				case 'f':
				case 'sticker':
				case 'stiker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {contextInfo :fotothumb, sendEphemeral: true})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falhou, no momento da conversão ${tipe} para o adesivo`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								client.sendMessage(from, fs.readFileSync(ranw), sticker, {contextInfo :fotothumb, sendEphemeral: true})
							})
						})
					
					} else {
						reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
					}
					break

case 'st':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Pinguim', 'Bot')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(mess.wait())
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer1 = fs.readFileSync(rano)
client.sendMessage(from, buffer1, sticker, {contextInfo :fotothumb, sendEphemeral: true})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply('❬❗❭ Espera mano')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('KratosBOT', 'KratosDev')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer2 = fs.readFileSync(rano)
client.sendMessage(from, buffer2, sticker, {contextInfo :fotothumb, sendEphemeral: true})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break
case 'procurado':
case 'figuprocurado':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : may
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/procurado?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: may
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
                   
case 'figuwasted':
case 'wasted':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : may
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/wasted?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: may
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
                    
case 'arma':
case 'figuarma':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : may
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: may
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
case 'drip':
case 'figudrip':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : may
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/dripp?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: may
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
case 'figuinvert':
case 'invert':
case 'figuinvertida':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : may
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/invert?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: may
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
                    
case 'preso':
case 'figupreso':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : may
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/jail?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: may
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
case 'shit':
case 'figushit':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : may
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/shit?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: may
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break

case 'triggered':
case 'figuger':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : may
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: may
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
case 'figupet':               
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : may
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: may
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
case 'figuc':
                case 'circulo':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay1
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/circle?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: nay1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
case 'swm':
case 'stickerwm':
reply (mess.wait)
const fgif = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: "Feito", seconds: 999, gifPlayback: true, caption: "ℙ𝕀ℕ𝔾𝕌𝕀𝕄 𝔹𝕆𝕋 𝕆𝔽ℂ😈", jpegThumbnail: fs.readFileSync('me.jpg')} } }
const { convertSticker } = require('./plugins2/swm.js')
			        if (type === 'imageMessage' || isQuotedImage){
                    var kls = body.slice(5)
                    var pack = kls.split('|')[0]
                    var author = kls.split('|')[1]
                    const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    const dlfile = await client.downloadMediaMessage(getbuff)
                    const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
                    var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
                    var imageBuffer = new Buffer.from(mantap, 'base64');
                    client.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: fgif})
                    } else {
                    reply('Formato incorreto marque uma imagem!')
                    }
break
case 'hash': 
if (!isQuotedSticker) return reply("Marque um sticker")
const encmeds9 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const mediastick = await client.downloadMediaMessage(encmeds9)
var crypto = require('crypto')
hash = crypto.createHash('sha256').update(mediastick).digest('base64');
console.log(hash)
reply(hash)
break
case 'togif': // by lindow
if (!isQuotedSticker) return reply('{ ❗ } *Marque a figurinha*')
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
reply(mess.wait)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break
case 'toimg':
if (!isQuotedSticker) return reply('{ ❗ } *Marque a figurinha*')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter adesivos em imagens ❌')
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer , image, {quoted: nay1, caption: ">//<"})					
fs.unlinkSync(ran)
})
break
case 'attp':
reply(mess.wait)
if (args.length < 1) return reply(`Coloque o texto _\n\n*Exemplo ${prefix}attp pinguim*`)
url = encodeURI(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
attp2 = await getBuffer(url)
client.sendMessage(from, attp2, sticker, {contextInfo :fotothumb3})		    	
break
case 'attp2':	//@Kratos æ„›	
reply(mess.wait)
if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: nay1})
break	
case 'attp3': //@Kratos æ„›	
reply(mess.wait)
if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: nay1})
break	
case 'attp4': //@Kratos æ„›
reply(mess.wait)
if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: nay1})
break	
case 'attp5':	//@Kratos æ„›
reply(mess.wait)
if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: nay1})
break
case 'attp6':	//@Kratos æ„›
reply(mess.wait)	
if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: nay1})
break	 
// FIM 
//FERRAMENTAS 
case 'wa.me':
case 'wame':
                 client.updatePresence(from, Presence.composing) 
                 options = {
                 text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n\n*PINGUIM NO CONTROLE🐊🚩*`,
                 contextInfo: { mentionedJid: [sender] }
                 }
                 client.sendMessage(from, options, text, { quoted: nay1 } )
break
case 'contar':
if (args.length == 0) return reply( '0 caracteres, pois obviamente não há texto😀')
const count = body.slice(8).length
if (count === 1) {
reply(`O texto possui ${count} caractere.`)
} else if (count > 1) {
reply(`O texto possui ${count} caracteres.`)
}
break
case 'tourl':
var imgbbUploader = require('imgbb-uploader')	
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
owgi = await client.downloadAndSaveMediaMessage(ted)
tels = body.slice(7)
anu = await imgbbUploader("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `Seu link amigo: 🐤\n\n${anu.display_url} `	  
client.sendMessage(from, teks, text, {quoted: nay1})
} else {
reply('marque uma foto')
}
break
case 'ler':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					const media = await client.downloadAndSaveMediaMessage(encmedia)
					reply(mess.wait)
					await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
					.then(teks => {
					reply(teks.trim())
					fs.unlinkSync(media)
					})
					.catch(err => {
					reply(err.message)
					fs.unlinkSync(media)
					})
					} else {
					reply('Só uma foto mano')
					}
break
case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
						client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
						reply(err)
						})
					    } else {
						reply('Só uma foto mano')
					    }
break
case 'tts':
					if (args.length < 1) return client.sendMessage(from, 'Qual é o código da linguagem, tio?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cadê o texto tio', text, {quoted: mek})
					dtt = body.slice(7)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('A maior parte do texto é merda')
					: gtts.save(ranm, dtt, function() {
					exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
					fs.unlinkSync(ranm)
					buff = fs.readFileSync(rano)
					if (err) return reply('falha:(')
					client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
					fs.unlinkSync(rano)
						})
					})
break
case 'plaquinha':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 25) return reply('O texto é longo, até 25 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ta na mão 😈'})
					break
case 'pmake':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ta na mão 😈'})
break
case 'pmake2':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://ighteede.sirv.com/pack%20plaquinha%20%2B18%20BY%20sombrio/pack%20plaquinha%20%2B18%20BY%20sombrio/Screenshot_2021-04-10-22-59-23-1.png?text.0.text=${teks}&text.0.position.x=-36%25&text.0.position.y=-39%25&text.0.size=23&text.0.color=000000&text.0.opacity=54&text.0.font.family=Shadows%20Into%20Light`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Toma ai 😈💅 '})
break
case 'anime':
					reply('*Espere um pouquinho onichan*')
                    client.updatePresence(from, Presence.composing)
                    am = ["anime tumblr",
                        "wallpaper anime hd",
                        "anime aestethic",
                        "anime hd"
                    ]
                    nk = am[Math.floor(Math.random() * am.length)]
                    data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                    method: 'get'
                    })
                    n = JSON.parse(JSON.stringify(data));
                    nimek = n[Math.floor(Math.random() * n.length)];
                    pok = await getBuffer(nimek)
                    client.sendMessage(from, pok, image, {
                     quoted: mek,
                    caption: `*Aqui está onichan* ❤️`
                    })
break
case 'ddd':
if (args.length < 1) return reply('BOT PRECISA DE ALGUM DDD DE UM NÚMERO')
luc4rio1 = body.slice(5)
luc4rio2 = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/internacional?ddd=${luc4rio1}`, {method: 'get'})
if (luc4rio2.Erro) return reply('DDD não encontrado , forneça um ddd brasileiro válido')
luc4rio3 = 
` *BEM VINDO AO MENU DE CONSULTA*\n\n               〘 INFORMAÇÕES 〙\n\n
➢〘 *CIDADES* 〙 : ${luc4rio2.Cidades}
➢〘 *ESTADO* 〙 : ${luc4rio2.Estado}
〘 ${luc4rio2.Mensagem} 〙\n\nNÃO É POSSÍVEL PUXA CONSULTA DE TELEFONE\n\nBY : Raidux`
client.sendMessage(from, luc4rio3, text, {contextInfo :fotothumb, quoted: freply})
break
case 'gerarnick': //@Kratos 愛     		
teks = body.slice(10)
send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=brizaloka&text=${teks}`)
teks = `NICKS GERADOS COM SUCESSO!🐤
🍙Primeiro ${send.random_1} 
🍙Segundo ${send.random_2} 
🍙Terceiro ${send.random_3} 
🍙Quarto ${send.random_4} 
🍙Quinto ${send.random_5}
 
         👾EXTRAS👾
 👾${send.squares}
 👾${send.inverted_squares}
 👾${send.italic}
 👾${send.bold}
 👾${send.future_alien}
 👾${send.asian_1}
 👾${send.asian_2}
 👾${send.squiggle}
 👾${send.squiggle_2}
 👾${send.squiggle_3}
 👾${send.squiggle_4}
 👾${send.neon}
 
 
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
    
    ©pinguim
 `
client.sendMessage(from, teks, text, {quoted: nay1})
break	     	
case 'nickff': //@client ♡
client.updatePresence(from, Presence.composing) 
sup = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
teks = '=================\n'
for (let i of sup.result) {
teks += `*Nick* : ${i}\n=================\n`
 }
reply(teks.trim())
break   			 		     
case 'pucep':
 //@Kratos 
 if (args.length < 1) return reply('Cadê O Cep')
cep = body.slice(6)
send = await fetchJson(`http://brizas-api.herokuapp.com/consulta/cep?apikey=brizaloka&cep=${cep}`)
teks = `
        
CEP ${send.resultado.cep} 
RUA ${send.resultado.logradouro} 
BAIRRO ${send.resultado.bairro} 
Cidade ${send.resultado.localidade} 
Estado ${send.resultado.uf}  
DDD ${send.resultado.ddd}   
                    
 `
client.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('kk/sticker/botlogo.webp')}}}})
break
case 'tagme':
const tagme = {
text: `@${sender.split("@")[0]} 🧙‍♂️`,
contextInfo: {mentionedJid: [sender]
}
}
client.sendMessage(from, tagme, text,{quoted: say})
break
// FIM
//_EFEITO NIGHTCORE PARA AUDIO         
case 'nightcore':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   
//_EFEITO SLOW PARA AUDIO
case 'slow':
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await client.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
//_EFEITO ESQUILO PARA AUDIO
case 'esquilo':
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await client.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
//_EFEITO GIGANTE PARA AUDIO	
case 'gemuk':
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await client.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
//_DEIXA O AUDIO RÁPIDO
case 'fast':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':       
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=50 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'robot':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
client.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: mek})
fs.unlinkSync(ran)
})
break
//FIM DOS COMANDOS DE ÁUDIO
// BAIXAR VÍDEO E ÁUDIO
case 'play':   
				if (args.length < 1) return reply(`Exemplo : ${prefix}play Peppa pig`)	
				apykeybysayo = 'Skillerofc'  //CONSIGA SUA KEY NESSE SITE = https://api.zeks.xyz/api
				reply(mess.wait) 				 
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=${apykeybysayo}&q=${body.slice(5)}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `[ 🧸INFORMAÇÕES DO ÁUDIO 🧸]\n\n‣ Título: ${anu.result.title}\n‣ Fonte: ${anu.result.source}\n‣ Tamanho: ${anu.result.size}\nlink: ${anu.result.url_audio}`
				//infomp3 = `❦ 𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚\n❗MUSÍCA ENCONTRADA\n[❗] enviando sua música aguarde...`				
			    buffer = await getBuffer(`https://api-exteam.herokuapp.com/api/card-spotify?titulo=${encodeURIComponent(anu.result.title)}&author=${encodeURIComponent(anu.result.source)}&album=PINGUIM-BOT&capa=${anu.result.thumbnail}`)
				client.sendMessage(from, buffer, image, {contextInfo: fotothumb, sendEphemeral: true, thumbnail: fs.readFileSync('./fotos/me3.jpg'), caption: infomp3})
                msc = await getBuffer(anu.result.url_audio)				
				client.sendMessage(from, msc, audio, {mimetype: 'audio/mp4', filename: `pinguim-bot.mp3`, quoted: gp, sendEphemeral: true})
break
case 'ytmp4':
reply(ptbr.wait())
play = body.slice(7)
try {
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=apivinz&q=${play}`)
if (anu.error) return reply(anu.error)
infomp3 = `INFORMAÇÕES DO VÍDEO\n\n‣ Título: ${anu.result.title}\n‣ Fonte: ${anu.result.source}\n‣ Tamanho: ${anu.result.size}\nlink: ${anu.result.url_video}`
buffer = await getBuffer(anu.result.thumbnail)
lagu = await getBuffer(anu.result.url_video)
client.sendMessage(from, buffer, image, {
quoted: mek, contextInfo: fotothumb, sendEphemeral: true, thumbnail: null, caption: infomp3
})
client.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek, thumbnail: null, sendEphemeral: true
}) 
} catch {
reply(ptbr.erro())
}
break
// FIM 
//GRUPO 
case 'grupoinfo':
                    client.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(mess.only.group)
                    ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			        buffer = await getBuffer(ppUrl)
		            client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`})
                    break
case 'infogc':
				client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
				try {
				ppimg = await client.getProfilePicture(from)
				} catch {
				ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
				let buf = await getBuffer(ppimg)
				teks = (args.length > 1) ? body.slice(8).trim() : ''
				teks += `*Nome do grupo :* ${groupName}\n*Descrição :* ${groupDesc}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de membros :* ${groupMembers.length}`
				no = 0
				for (let admon of groupAdmins) {
				no += 1
				teks += `[${no.toString()}]`
				}
				client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
break
case 'getpic':                    
if (args.length < 1) return 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Pronto chefe')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
pp = await client.getProfilePicture(mentioned)
buffer = await getBuffer(pp)
client.sendMessage(from, buffer, image, {quoted: nay1, thumbnail: fs.readFileSync('./fotos/me3.jpg')})
break
case 'admins':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
break
case 'getgrup': 
                    case 'getgroup': 
                    case 'getg':
                    case 'gruplist':
                    case 'listgrup':
                    case 'grouplist':
                    case 'listgroup':
			        ingfo = await getGroup(totalchat)
				    let txt = `*Lista dos grupos*\nNúmero de Grupos: ${ingfo.length}\n\n`
				    for (let i = 0; i < ingfo.length; i++){
					txt += `Nome do grupo : ${ingfo[i].subject}\nID : ${ingfo[i].id}\nFeito : ${moment(`${ingfo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\nNúmero de participantes : ${ingfo[i].participants.length}\n\n`
				    }
				    reply(txt)
break
case 'chat':
			if (args[0].startsWith('08')) return reply('Coloque o código do país 55 🇧🇷')
            if (args[0].startsWith('+55')) return reply('Coloque o código do país só pode +55 🇧🇷')
			if (args.length < 1) return reply(`Use assim ${p +command} 55xnxx|texto`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            client.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Mensagem enviada com sucesso:\n"${org}", para o(a) @${nomor}`)
break 
case 'donogp':
case 'ownergroup':
client.updatePresence(from, Presence.composing) 
options = {
text: `Dono do grupo: @${from.split("-")[0]}`,
contextInfo: { mentionedJid: [from]}}
client.sendMessage(from, options, text, { quoted: mek } )
break
case 'online':
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
client.sendMessage(from, '*SIM, EU VI VC ONLINE 😉*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: nay1,
contextInfo: { mentionedJid: online }
})
break
case 'request':  
                    if (args.length < 1) return reply(`mau request apa kak??\n${p}request *nama fitur*`)
                    const cet1 = body.slice(9)
                    if (cet1.length > 300) return client.sendMessage(from, 'Desculpe, o texto é muito longo, o máximo e de 300 caracteres', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": cr} } } })
                    var nomor = mek.participant
                    const cet2 = `*[ SUGERIR COMANDOS ]*\nA PARTIR DE ${pushname} \nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\nCmd : ${cet1}`
                    var optionsp = {
                    text: cet2,
                    contextInfo: {mentionedJid: [nomor]},
                    } 
                    client.sendMessage(`0@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*SUGESTÃO DE COMANDOS*`} } } })
                    client.sendMessage(`5511977922484@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*SUGESTÃO DE COMANDOS*`} } } })                                    
                    reply(`*OBRIGADO PELA SUGESTÃO* 😊`)
break
case 'criador':
if (!mek.key.fromMe && !isOwner) return
buff = fs.readFileSync('./loli.jpg')
imeu = await client.prepareMessage('0@s.whatsapp.net', buff, image, {thumbnail: fs.readFileSync('./fotos/menu7.jpg')})
imeg = imeu.message.imageMessage
res = await client.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `Criador`,
"description": `Clique logo abaixo para você falar com ele`,
"currencyCode": "BRL",
"priceAmount1000": "100",
"productImageCount": 1
},
"businessOwnerJid": "5511977922484@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:mek, contextInfo:{}}) 
client.relayWAMessage(res)
break
//FIM 
//_JOGOS DIVERSÃO
case 'level': //Jogos
if (!isGroup) return reply('*[❗] Apenas em grupos bro❌*')
if (!isLevelingOn) return reply(mess.levelnoton)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(mess.erro)
const requiredXp = 20 * Math.pow(userLevel, 2) + 150 * userLevel + 1000
levela =
`  ╾╾╾╾❖ LEVEL ❖╾╾╾╾

╭╼╾╼╾╼╾╼╾╼╾╼╾╼
║‣ Nome: @${sender.split("@")[0]}
├╼╾╼╾╼╾╼╾╼╾╼╾╼
║‣ XP: ${userXp}/${requiredXp}
├╼╾╼╾╼╾╼╾╼╾╼╾╼
║‣ Level: ${userLevel}
├╼╾╼╾╼╾╼╾╼╾╼╾╼
║‣ Patente: ${patt}
╰╼╾╼╾╼╾╼╾╼╾╼╾╼

  ╾╾╾╾❖ LEVEL ❖╾╾╾╾`     
client.sendMessage(from, levela, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break
case 'addxp': 
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Foi adicionado ${args[1]} em xp para @${mentioned[0].split('@')[0]}`
mentions(`${susp}`, mentioned, true)
addLevelingXp(pru, Number(args[1]))                     
break
case 'cassinovip':
					random = cassino[Math.floor(Math.random() * (cassino.length))]
					reply(`${random}`)
					break
case 'cassino':
		const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍒',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nInformações : Se você pegar 3 iguais significa que você ganhou\n\nExemplo : 🍌 : 🍌 : 🍌<=====`
            reply(yow)
	            break
case 'pombinhos':
case 'casal':
if (!isGroup) return reply(mess.only.group)
						membr = []
						const suamae11 = groupMembers
						const suamae21 = groupMembers
						const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
						const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
						var shipted1 = ["1%", `10%`, `20%`, `40%`, `50%`, `60%`, `80%`, `90%`, `100%`, `99999%`]
						const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
						teks = `*Hmmm.... Shippo os dois 💟💟*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
						membr.push(teupai11.jid)
						membr.push(teupai21.jid)
						mentions(teks, membr, true)
break
case 'gostosas':
if (!isGroup) return reply(mess.only.group)
                        member = []
                        const p1 = groupMembers
                        const p2 = groupMembers
                        const p3 = groupMembers
                        const p4 = groupMembers
                        const p5 = groupMembers
                        const o1 = p1[Math.floor(Math.random() * p1.length)]
                        const o2 = p2[Math.floor(Math.random() * p2.length)]
                        const o3 = p3[Math.floor(Math.random() * p3.length)]
                        const o4 = p4[Math.floor(Math.random() * p4.length)]
                        const o5 = p5[Math.floor(Math.random() * p5.length)]
                        teks = `
                  Paradas!🤚🤚\n\n1=🤚🤭@${o1.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.jid.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
                        member.push(o1.jid)
                        member.push(o2.jid)
                        member.push(o3.jid)
                        member.push(o4.jid)
                        member.push(o5.jid)
                        mentions(teks, member, true)
break 
case "ppt":
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(ptbr.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é do Pinguim🐧"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate 🤝"
}
reply(`Pinguim jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break
case 'rankfeios':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🤓Rank dos mais feios \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤓❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankcaco':
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🐒 Rank dos camacos\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍🐒❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgay':
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🏳️‍🌈Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rr':
                    rate = body.slice(1)
                    ratee = ["Tac... Não disparou","Tac... Não disparou, ainda...","Tac💥 Disparou e você morreu","Tac💥Disparou mas a bala pegou de raspão","A arma falhou","Tac... Por pouco que não dispara...","Tac... A arma estava descarregada"]
                    const cu = ratee[Math.floor(Math.random() * ratee.length)]
                    client.sendMessage(from, ''+ cu+'', text, { quoted: mek })
break
case 'dado2':
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
client.sendMessage(from, dador, sticker, {quoted: mek})
break
case 'cc':
case 'caracoroa':
const cara = fs.readFileSync('./database/cara/cara.webp');
const coroa = fs.readFileSync('./database/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
reply(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./database/cara/'+fej+'.webp')
client.sendMessage(from, cararoa, sticker, {quoted: mek})
break
case 'morte':
case 'death':
nome = body.slice(7)
idde = ["30","76","90","72","83","73","83","74","92","100","94","48","37","53","63"]
idade = idde[Math.floor(Math.random() * (idde.length))]
morte = `Pessoas com este nome: ${nome} \nTendem a morrer aos ${idade} anos de idade.`
reply(morte)
break
case 'sn':
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return client.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O Pinguim é um baiano preguiçoso?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break
case 'gadometro':
case 'gado':
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
reply(hisil) 
break
case 'abraço':
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `Que fofo... Você deu um abraço😍 bem apertado no(a) @${mentioned[0].split('@')[0]} 🤗`
mentions(`${yhb}`, mentioned, true)
break
case 'tapa':
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Que fofo... @${sender.split('@')[0]} deu um tapa na raba da @${mentioned[0].split('@')[0]} 🔥`, 
tobizz = fs.readFileSync('./src/tapa.mp4')
client.sendMessage(from, tobizz, MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp, contextInfo: {mentionedJid: [sender]}})
break
case 'dado':    
if (!isPremium) return reply(mess.only.premium)
kapankah = body.slice(1)
const elu =['1','2','3','4','5','6']
const ule = elu[Math.floor(Math.random() * elu.length)]
client.sendMessage(from, ule, text, { quoted: mek })
break
case 'membrocm':
client.sendMessage(from, membrocm(prefix, sender), text, {quoted: mek})
break                
case 'top5':
try{
if(!isGroup) return reply(ptbr.group())
d = []
top1 = body.slice(5)
teks = `️‍🏆Top 5${top1}🏆:\n`
for(i = 0; i < 5; i++) { 
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break
case 'chance':
client.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return client.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do Pinguim ser um trouxa`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
client.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break
case 'jogodavelha':
case'velha':
					reply('Lembre-se ao terminar uma partida , use o comando .resetavelha , para poder iniciar outro jogo.')
						if(!isGroup) return enviar('comando apenas para grupos')
                    if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
                         const boardnow = setGame(`${from}`);
                         const matrix = boardnow._matrix;
                         const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
     [❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}
     
     Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
     
          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
     
     `;
                         client.sendMessage(from, chatMove, MessageType.text, {
                              quoted: say1,
                              contextInfo: {
                                   mentionedJid: [
                                        boardnow.X + "@s.whatsapp.net",
                                        boardnow.O + "@s.whatsapp.net",
                                   ],
                              },
                         });
                         return;
                    }
                    if (argss.length === 1)
                         return reply(
                              `*⟅❗⟆ Jogue com Alguém!!!!*
*para inicar a partida : ${p + command} @membro do gp*`
                         );
                    const boardnow = setGame(`${from}`);
                    console.log(`Start Tictactore ${boardnow.session}`);
                    boardnow.status = false;
                    boardnow.X = sender.replace("@s.whatsapp.net", "");
                    boardnow.O = argss[1].replace("@", "");
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
     @${sender.replace(
                         "@s.whatsapp.net",
                         ""
                    )} _está te desafiando para uma partida de jogo da velha..._
     
     _[ ${argss[1]} ] Use *『aceitar』* para aceitar ou *『recusar』* para não aceitar..._
     `;
                    client.sendMessage(from, strChat, MessageType.text, {
                         quoted: say1,
                         contextInfo: {
                              mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
                         },
                    });
                 
                    break
                      case  'resetavelha':
                      case 'reseta':
                    if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {

                         fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");

                         reply(`Jogo da velha resetado com sucesso nesse grupo!`);

                    } else {

                         reply(`Não a nenhuma sessão em andamento...`);

                    }

                    break
				//_JOGO DA VELHA By: Resen
//INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
case 'ttt':
const limitrl = getLimit(sender, daily)
if (!isGroup) {
reply(mess.only.group)
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
reply('Opa! Deixe seus abigos jogarem também, tente novamente em 8 minutos.')
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
client.sendMessage(from,`*O jogo começou* 🚩`, text, {quoted: freply})
client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text, {quoted: say})
client.sendMessage(from,`Caso não saiba como jogar digite: ${prefix}ttthelp`, text, {quoted: freply})
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break

case 'ttthelp':
client.sendMessage(from, ttthelp(prefix), text, {quoted: say})
break

case 'tttme':
if (!isGroup) return reply(ptbr.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted: say})
break

case 'tttrank':
if (!isGroup) return reply(ptbr.group())
//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await client.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: say})
}
break

case 'coord' :
tttset.playertest = sender
if (!isGroup) {
reply('*Apenas em grupos 🐤*')
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
client.sendMessage(from, `??🎉 VITÓRIA DO PINGUIM-BOT 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO PINGUIM-BOT 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
case 'giftcard':			
if (isGroup) return reply(`Você só pode resgatar no pv do bot`)
if (args.length == 0) return reply(`Cadê o código?!`,)
if (args[0] == '157321' || args[0] == '5262626' || args[0] == 'clientbotv6' || args[0] == 'sayoz') {
reply('*Codigo resgatado!!*\n\nVocê ganhou:\n5000 dinheiro!')
addKoinUser(sender, 5000)
} else {
reply(`*CÓDIGO INVALIDO!*\n\nFale com meu criador para ele te dar um codigo ilimitado`)
}
break
//FIM 
//MENUS 
case 'help':
case 'menu':
gambar = fs.readFileSync('./fotos/me8.jpg')
mhan = await client.prepareMessage(from, gambar, MessageType.image, {thumbnail: fs.readFileSync('./fotos/me7.jpg'), contextInfo: fotothumb})
gbutsan = [
{buttonId: '⋮☰ Comandos', buttonText: {displayText: '⋮☰ Comandos'}, type: 1},
{buttonId: 'Info ✓', buttonText: {displayText: 'Info ✓'}, type: 1}]
gbuttonan = {
imageMessage: mhan.message.imageMessage,
contentText: `Olá @${sender.split("@")[0]} 🐋❄️\nPara ver minha lista de comandos é só clicar no botão abaixo.`,
footerText: `© _Pinguim_\n_caso não apareça os botões  use: .comandos_`,
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
break
case 'comandos':
const getLevel = getLevelingLevel(sender)
const getXp = getLevelingXp(sender)
const menus = ["gunterabraço","gunters","gunterovo","gunter1","gunter2"]
men = menus[Math.floor(Math.random() * menus.length)]
menu = fs.readFileSync('./menu/'+men+'.mp4')
client.sendMessage(from, menu, MessageType.video, {quoted: fdocs, mimetype: 'video/gif', ptt:true, quoted: fdocs, thumbnail: fs.readFileSync('./fotos/me3.jpg'), sendEphemeral: true, caption: help(pushname, tampilJam, tampilHari, tampilUcapan, sender, patt, getLevelingLevel, getLevelingXp, prefix) })
//client.sendMessage(from, `${ucapanFakereply}\n*Você esta usando o Pinguim - Bot*\n*Hora: ${tampilJam}*\n*Data: ${tampilHari}*`, text, {quoted: gp})                    
break
case 'premiumlist':
teks = '╭────*「 *PREMIUM USER 👑* 」\n'
for (let V of premium) {
teks += `│+  @${V.split('@')[0]}\n`
}
teks += `│+ Total : ${premium.length}\n╰──────*「 *PINGUIM BOT* 」*────`
client.sendMessage(from, teks.trim(), extendedText, {quoted: view, contextInfo: {"mentionedJid": premium}})
break
case 'menufig':
client.sendMessage(from, menufig(prefix) , text, {quoted: mek, contextInfo :fotothumb, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝕄𝕖𝕟𝕦 𝕕𝕖 𝕗𝕚𝕘𝕦𝕣𝕚𝕟𝕙𝕒𝕤 💌", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
break
case 'ferramentas':
client.sendMessage(from, ferramentas(prefix) , text, {quoted: mek, contextInfo :fotothumb, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝔽𝕖𝕣𝕣𝕒𝕞𝕖𝕟𝕥𝕒𝕤 🛠️", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
break
case 'ts':
client.sendMessage(from, códigos(prefix) , text, { quoted: may })
break
case 'dono':
client.sendMessage(from, dono(prefix) , text, {quoted: mek, contextInfo :fotothumb, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝕄𝕖𝕟𝕦 𝕕𝕠 𝔻𝕠𝕟𝕠 👑", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
break
case 'jogos':
client.sendMessage(from, jogos(prefix) , text, {quoted: mek, contextInfo :fotothumb, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝕄𝕖𝕟𝕦 ℙ𝕒𝕣𝕒 𝕫𝕠𝕒𝕣 😎", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
break
case 'imagens':
client.sendMessage(from, imagens(prefix) , text, {quoted: mek, contextInfo :fotothumb, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝕄𝕖𝕟?? 𝕕?? 𝕀𝕞𝕒𝕘𝕖𝕟𝕤 📷", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
break
case 'menuvip':
client.sendMessage(from, menuvip(prefix) , text, {quoted: mek, contextInfo :fotothumb, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝕄𝕖𝕟𝕦 𝕕𝕠𝕤 𝕍𝕚𝕡𝕤 💎", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
break
case 'menuadm':
client.sendMessage(from, menuadm(prefix) , text, {quoted: mek, contextInfo :fotothumb3, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝕄𝕖𝕟𝕦 𝕕𝕠𝕤 𝔸𝕕𝕞𝕚𝕟𝕤 🧙‍♂️", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
break
case 'menuaudio':
client.sendMessage(from, menuaudio(prefix) , text, {quoted: mek, contextInfo :fotothumb, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝕄𝕖𝕟𝕦 𝕡𝕒𝕣𝕒 𝔸𝕦𝕕𝕚𝕠𝕤 🎶", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
break
//FIM
//PREMIUNS 
case 'metodos':
client.sendMessage(from, metodos(prefix, sender), text, {contextInfo :fotothumb, quoted: mek})
break
case 'chentai':
if (!isPremium) return reply(mess.only.premium)
client.sendMessage(from, chentai(prefix, sender), text, {contextInfo :fotothumb, quoted: mek})
break
case 'pack18':
if (!isPremium) return reply(mess.only.premium)
client.sendMessage(from, pack18(prefix, sender), text, {contextInfo :fotothumb, quoted: mek})
break
case 'destravas':
case 'destrava':
if (!isPremium) return reply(mess.only.premium)
client.sendMessage(from, destrava(prefix, sender), text, {quoted: mek})
client.sendMessage(from, destrava(prefix, sender), text, {quoted: mek})
client.sendMessage(from, destrava(prefix, sender), text, {quoted: mek})
client.sendMessage(from, destrava(prefix, sender), text, {quoted: mek})
client.sendMessage(from, destrava(prefix, sender), text, {quoted: mek})
client.sendMessage(from, destrava(prefix, sender), text, {quoted: mek})
break
case 'gpessoa':
if (!isPremium) return reply(mess.only.premium)
client.sendMessage(from, gpessoa(prefix, sender), text, {contextInfo :fotothumb, quoted: mek})
break
case 'modapk':
if (!isPremium) return reply(mess.only.premium)
client.sendMessage(from, modapk(prefix), text, {contextInfo :fotothumb, quoted: mek })
break
case 'delete':
case 'del':
case 'd':  
if (!isPremium) return reply(mess.only.premium)
client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'qrcode':
        			if (!isPremium) return reply(mess.only.premium)
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: mek})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, bufferr, image, {quoted: mek})
break
case  'roubar':
case 'rename':
if (!isPremium) return reply(mess.only.premium)
		    		if (!isQuotedSticker) return reply('Apenas figurinhas mano')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await client.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `YT`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `Kratos`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, client, nay1, from)
break
//FIM
default: 
if ((budy === "ajuda") || (budy === "bot") || (budy === "Bot") || (budy === "Ajuda")) {
gambar = fs.readFileSync('./fotos/me2.jpg')
mhan = await client.prepareMessage(from, gambar, MessageType.image, {quoted: freply, thumbnail: fs.readFileSync('./fotos/me3.jpg'), contextInfo: {"mentionedJid": [sender]}})
gbutsan = [
  {buttonId: 'Regras 👮‍♀', buttonText: {displayText: 'Regras 👮‍♀'}, type: 1},
  {buttonId: 'Meu dono ✓', buttonText: {displayText: 'Meu dono ✓'}, type: 1}]
gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: `Olá @${sender.split("@")[0]}`,
    footerText: `© _Pinguim_\n_caso não apareça os botões, utilize o comando .menu_`,
    buttons: gbutsan,
    headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
}
if (example === 'Regras 👮‍♀') {
buttons = [{
                    "buttonId": `Eu li , e concordo com os termos 🤹‍♀️`,
                    "buttonText": {
                        "displayText": "Eu li , e concordo com os termos 🤹‍♀️"
                    },
                    "type": "RESPONSE"
                    }]
buttonsMessage = { contentText: `⚠️ 𝐈𝐍𝐏𝐎𝐑𝐓𝐀𝐍𝐓𝐄 ⚠️\n\n_Olá_ @${sender.split("@")[0]}\n\n⚠️ 𝐍𝐚̃𝐨 𝐟𝐥𝐨𝐨𝐝𝐞 𝐬𝐞𝐧𝐚̃𝐨 𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐨𝐝𝐞𝐦 𝐜𝐚𝐢𝐫!\n\n⚠️ 𝐒𝐞 𝐟𝐚𝐥𝐡𝐚𝐫, 𝐨 𝐬𝐞𝐫𝐯𝐢𝐝𝐨𝐫 𝐜𝐚𝐢𝐮 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐫𝐢𝐚𝐦𝐞𝐧𝐭𝐞.\n\n⚠️ 𝐄𝐦 𝐭𝐞𝐬𝐭𝐞𝐬. 𝐄𝐧𝐭ã𝐨 𝐩𝐨𝐝𝐞 𝐜𝐚𝐢𝐫, 𝐨𝐮 𝐟𝐢𝐜𝐚?? 𝐨𝐟𝐟.\n\n⚠️ 𝐀𝐥𝐠𝐮𝐧𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐨𝐝𝐞𝐦 𝐝𝐞𝐦𝐨𝐫𝐚𝐫.`,
footerText: '© _Pinguim_',
buttons,headerType: 1}
prep = await client.prepareMessageFromContent(from, { buttonsMessage }, {contextInfo: {"mentionedJid": [sender]}})
client.relayWAMessage(prep)
}
if (example === 'Eu li , e concordo com os termos 🤹‍♀️') {
client.sendMessage(from, `_Aproveite o bot_ 🤹‍♀️`, text, {quoted: nay1, contextInfo: {"mentionedJid": [sender], forwardingScore: 1000, isForwarded: true }})
}
if (example === 'Eu li , e concordo com os termos 🤹‍♀️') {
const getLevel = getLevelingLevel(sender)
const getXp = getLevelingXp(sender)
const menus = ["gunterabraço","gunters","gunterovo","gunter1","gunter2"]
men = menus[Math.floor(Math.random() * menus.length)]
menu = fs.readFileSync('./menu/'+men+'.mp4')
client.sendMessage(from, menu, MessageType.video, {quoted: freply, mimetype: 'video/gif', ptt:true, quoted: freply, thumbnail: fs.readFileSync('./fotos/me3.jpg'), caption: help(pushname, tampilJam, tampilHari, tampilUcapan, sender, patt, getLevelingLevel, getLevelingXp, prefix) })
}
if (example === 'Ver umenu 🛍️') {
const getLevel = getLevelingLevel(sender)
const getXp = getLevelingXp(sender)
const menus = ["gunterabraço","gunters","gunterovo","gunter1","gunter2"]
men = menus[Math.floor(Math.random() * menus.length)]
meyunu = fs.readFileSync('./menu/'+men+'.mp4')
client.sendMessage(from, meyunu, MessageType.video, {quoted: fdocs, mimetype: 'video/gif', ptt:true, quoted: fdocs, thumbnail: fs.readFileSync('./me3.jpg'), sendEphemeral: true, caption: help(pushname, tampilJam, tampilHari, tampilUcapan, sender, patt, getLevelingLevel, getLevelingXp, prefix) })
}
if (example === '⋮☰ Comandos') {
const pinguim = `
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
┃༜│⪧ *Contato: ${prefix}criador*
┃༜│⪧ *Status: Online*
┃༜│⪧ *Prefix* 「 ${prefix} 」
┃༜│⪧ *N° de Chats: ${totalchat.length}*
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
┃༜│➥ *${prefix}play*
┃༜│➢ *${prefix}tomp3* 
┃༜│➥ *${prefix}estourar*
┃༜│➢ *${prefix}robot*
┃༜│➥ *${prefix}bass*
┃༜│➢ *${prefix}fast*
┃༜│➥ *${prefix}gemuk*
┃༜│➢ *${prefix}esquilo*
┃༜│➥ *${prefix}slow*
┃༜│➢ *${prefix}nightcore*
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
gambar = fs.readFileSync('./fotos/me2.jpg')
mhan = await client.prepareMessage(from, gambar, MessageType.image, {quoted: freply, thumbnail: fs.readFileSync('./fotos/me3.jpg')})
gbutsan = [
  {buttonId: 'Criador ❄️', buttonText: {displayText: 'Criador ❄️'}, type: 1}]
gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: `${pinguim}`,
    footerText: `© _Pinguim_`,
    buttons: gbutsan,
    headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
}
if (example === '🛍️ Menu') {
const pinguium = `
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
┃༜│⪧ *Contato: ${prefix}criador*
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
┃༜│➥ *${prefix}play*
┃༜│➢ *${prefix}tomp3* 
┃༜│➥ *${prefix}estourar*
┃༜│➢ *${prefix}robot*
┃༜│➥ *${prefix}bass*
┃༜│➢ *${prefix}fast*
┃༜│➥ *${prefix}gemuk*
┃༜│➢ *${prefix}esquilo*
┃༜│➥ *${prefix}slow*
┃༜│➢ *${prefix}nightcore*
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
gambar = fs.readFileSync('./fotos/me2.jpg')
mhan = await client.prepareMessage(from, gambar, MessageType.image, {quoted: freply, thumbnail: fs.readFileSync('./fotos/me3.jpg')})
gbutsan = [
  {buttonId: 'Criador ❄️', buttonText: {displayText: 'Criador ❄️'}, type: 1}]
gbuuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: `${pinguium}`,
    footerText: `© _Pinguim_`,
    buttons: gbutsan,
    headerType: 4
}
await client.sendMessage(from, gbuuttonan, MessageType.buttonsMessage)
}
if (example === 'Ver menu 🛍️') {
const pinguiim = `
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
┃༜│⪧ *Contato: ${prefix}criador*
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
┃༜│➥ *${prefix}play*
┃༜│➢ *${prefix}tomp3* 
┃༜│➥ *${prefix}estourar*
┃༜│➢ *${prefix}robot*
┃༜│➥ *${prefix}bass*
┃༜│➢ *${prefix}fast*
┃༜│➥ *${prefix}gemuk*
┃༜│➢ *${prefix}esquilo*
┃༜│➥ *${prefix}slow*
┃༜│➢ *${prefix}nightcore*
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
gambar = fs.readFileSync('./fotos/me2.jpg')
mhan = await client.prepareMessage(from, gambar, MessageType.image, {quoted: freply, thumbnail: fs.readFileSync('./fotos/me3.jpg')})
gbutsan = [
  {buttonId: 'Criador ❄️', buttonText: {displayText: 'Criador ❄️'}, type: 1}]
gbuttoonan = {
imageMessage: mhan.message.imageMessage,
    contentText: `${pinguiim}`,
    footerText: `© _Pinguim_`,
    buttons: gbutsan,
    headerType: 4
}
await client.sendMessage(from, gbuttoonan, MessageType.buttonsMessage)
}
if (example === 'Criador ❄️') {
if (!mek.key.fromMe && !isOwner) return
buff = fs.readFileSync('./loli.jpg')
imeu = await client.prepareMessage('0@s.whatsapp.net', buff, image, {thumbnail: fs.readFileSync('./fotos/menu7.jpg')})
imeg = imeu.message.imageMessage
res = await client.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `Criador`,
"description": `Clique logo abaixo para você falar com ele`,
"currencyCode": "BRL",
"priceAmount1000": "100",
"productImageCount": 1
},
"businessOwnerJid": "5511977922484@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:mek, contextInfo:{}}) 
client.relayWAMessage(res)
}

if (listRM.includes("menuuuu")){
const pinguimm = `
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
┃༜│⪧ *Contato: ${prefix}criador*
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
gambar = fs.readFileSync('./fotos/me8.jpg')
mhan = await client.prepareMessage(from, gambar, MessageType.image, {contextInfo :fotothumb2, thumbnail: fs.readFileSync('./fotos/me7.jpg')})
gbutsan = [
  {buttonId: 'Criador ❄️', buttonText: {displayText: 'Criador ❄️'}, type: 1}]
gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: `${pinguimm}`,
    footerText: `© _Pinguim_`,
    buttons: gbutsan,
    headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
}
if (example === 'Abrir 🔓') {
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
text: `*GRUPO ABERTO PELO ADMINISTRADOR* @${sender.split("@s.whatsapp.net")[0]}\nAGORA TODOS PODEM ENVIAR MENSAGENS`,
contextInfo: { mentionedJid: [sender] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false)
reply(open)  
}
if (example === 'Fechar 🔐') {
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant
const close = {
text: `*GRUPO FECHADO PELO ADMINISTRADOR* @${nomor.split("@s.whatsapp.net")[0]}\n*APENAS ADMINISTRADORES* QUEM PODEM ENVIAR MENSAGENS`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
}

if (listRM.includes("abrir1")){
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
text: `*GRUPO ABERTO PELO ADMINISTRADOR* @${sender.split("@s.whatsapp.net")[0]}\nAGORA TODOS PODEM ENVIAR MENSAGENS`,
contextInfo: { mentionedJid: [sender] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false)
reply(open)  
}
if (listRM.includes("fechar2")){
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant
const close = {
text: `*GRUPO FECHADO PELO ADMINISTRADOR* @${nomor.split("@s.whatsapp.net")[0]}\n*APENAS ADMINISTRADORES* QUEM PODEM ENVIAR MENSAGENS`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
}
if (listRM.includes("publicc1")){
 if (!isOwner) return reply('Vc n é meu pai 🐤')
if (banChats === false) return
uptime = process.uptime()
anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `0@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 publico 」\n*${kyun(uptime)}*`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')}}}}
banChats = false
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m PUBLICO \x1b[1;37m]', color('O modo publico foi ativado agora todos pode usar os cmd do bot', 'yellow'))
client.sendMessage(from, `「 *MODO-PUBLICO* 」`, text,anu)
}
if (listRM.includes("selff1")){
if (!isOwner) return reply('Vc n é meu pai 🐤')
if (banChats === true) return
uptime = process.uptime()
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m PRIVADO \x1b[1;37m]', color('Modo privado foi ativado agora so você pode usar os cmd', 'yellow'))
anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `0@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 privado 」\n*${kyun(uptime)}*`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')}}}}
banChats = true
client.sendMessage(from, `「 *MODO-PRIVADO* 」`, text,anu)
}
if (example === "Info ✓") {
	const cart2 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6283136505591-1614953337@g.us"  }, "message": {orderMessage: {itemCount: 13,status: 200, thumbnail: fs.readFileSync(`./fotos/me9.jpg`), surface: 200, message: `⊳ ${tampilJam}\n⊳ Prefix:「 ${prefix} 」`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const pinguim2 = `╭━═════════════════⊷
┃༜╭────────────────
┃༜│⬩ 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝖼̧𝗈̃𝖾𝗌 𝖽𝗈 𝖻𝗈𝗍
┃༜│⪧ *Nome: PINGUIM - BOT*
┃༜│⪧ *Dono: lonly*
┃༜│⪧ *Contato: ${prefix}criador*
┃༜│⪧ *Status: Online*
┃༜│⪧ *Prefix* 「 ${prefix} 」
┃༜│⪧ *${tampilJam}*
┃༜╰────────────────
╰━═════════════════⊷`
                let pii = client.prepareMessageFromContent(from, {
					"listMessage": {
						"title": ` Olá @${sender.split("@")[0]} 🐋❄️`,
						"description": `${pinguim2}`,
						"buttonText": "NADA AQUI",
						"footerText": `© _Pinguim_`,
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "◉ Menu",
								"rows": [
									{
										"title": "Menu",
										"description": "Lista de comandos.",
										"rowId": "menuuuu"
									}
								]
							},
							{
								"title": "◉ Menuvip",
								"rows": [
									{
										"title": "Menu Vip",
										"description": "Menu só para usuários vips.",
										"rowId": "menuuuvip"
									}
								]
							},
							{
								"title": "◉ Dono",
								"rows": [
									{
										"title": "Dono",
										"description": "Menu de comandos que só o dono pode usar.",
										"rowId": "donooo"
									}
								]
							},
							{
								"title": "◉ Menu Adm",
								"rows": [
									{
										"title": "Menu Adm",
										"description": "Menu para os administradores do grupo.",
										"rowId": "menuuuadm"
									}
								]
							},
							{
								"title": "◉ Menu Fig",
								"rows": [
									{
										"title": "Menu Fig",
										"description": "Menu para fazer figurinhas.",
										"rowId": "menuuufig"
									}
								]
							},
							{
								"title": "◉ Jogos",
								"rows": [
									{
										"title": "Jogos",
										"description": "Menu para interagir.",
										"rowId": "jogosss"
									}
								]
							}
						]
					}
				},
			{quoted: cart2, contextInfo: {"mentionedJid": [sender]}}
		)
		client.relayWAMessage(pii, {waitForAck: true})
                }
//MENUSSS
if (listRM.includes("donooo")){
		client.sendMessage(from, dono(prefix) , text, {quoted: mek, contextInfo :fotothumb, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "??𝕖𝕟𝕦 𝕕𝕠 𝔻𝕠𝕟𝕠 👑", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                }
if (listRM.includes("jogosss")){
		client.sendMessage(from, jogos(prefix) , text, {quoted: mek, contextInfo :fotothumb, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝕄𝕖𝕟𝕦 ℙ𝕒𝕣𝕒 𝕫𝕠𝕒𝕣 😎", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                }
if (listRM.includes("menuuufig")){
		client.sendMessage(from, menufig(prefix) , text, {quoted: mek, contextInfo :fotothumb, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝕄𝕖𝕟𝕦 𝕕𝕖 𝕗𝕚𝕘𝕦𝕣𝕚𝕟𝕙𝕒𝕤 💌", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                }
if (listRM.includes("menuuu2")){
					wew = fs.readFileSync('./assets/foto5.png')
					client.sendMessage(from, wew, image , {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: say, thumbnail: fs.readFileSync('./fotos/me3.jpg'), caption: menu2(pushname, prefix) })
					}
if (listRM.includes("menuuuadm")){
		client.sendMessage(from, menuadm(prefix) , text, {quoted: mek, contextInfo :fotothumb3, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝕄𝕖𝕟𝕦 𝕕𝕠𝕤 𝔸𝕕𝕞𝕚𝕟𝕤 🧙‍♂️", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
              }
if (listRM.includes("menuuuvip")){
		client.sendMessage(from, menuvip(prefix) , text, {quoted: mek, contextInfo :fotothumb, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝕄𝕖𝕟𝕦 𝕕𝕠𝕤 𝕍𝕚𝕡𝕤 💎", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                }
//MENUSSS
if (body == `${prefix}${command}`) {
buttons = [{
                    "buttonId": `Ver menu 🛍️`,
                    "buttonText": {
                        "displayText": "Ver menu 🛍️"
                    },
                    "type": "RESPONSE"
                    }]
buttonsMessage = { contentText: `        ────────────────\nOlá @${sender.split("@")[0]}!!\nO comando: ${prefix}${command} não existe\n\nMano cê tem doença?😑\nSe não está no ${prefix}menu é porq não tem.\n        ────────────────`,
footerText: '© _Pinguim_',
buttons,headerType: 1}
prep = await client.prepareMessageFromContent(from, { buttonsMessage }, {contextInfo: {"mentionedJid": [sender]}})
client.relayWAMessage(prep)
}
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})
}
starts()

// E FIM 😏🔥
                   
                           
