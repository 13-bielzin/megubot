const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
┏━┅━┅┄⟞⟦✮⟧┄┄┉┉━┓
    ✪👾Tic 🐙Tac 👻Toe✪
┗━━┅┅┄⟞⟦✮⟧┄┄┉┉━┛

⊚► *NOME DO JOGADOR:*
 ۝🦈 ${pushname} 🦈۝ 
 
╔─━━━━━ ★ ━━━━━─╗
          *⚡Vitórias⚡*
╚─━━━━━ ★ ━━━━━─╝
┯━━━━━ ●●● ━━━━━┯
                      ${userWins}       
┷━━━━━ ●●● ━━━━━┷
╔─━━━━━ ★ ━━━━━─╗
         *🕷Derrotas🕷*
╚─━━━━━ ★ ━━━━━─╝
┯━━━━━ ●●● ━━━━━┯
                      ${userDefeats} 
┷━━━━━ ●●● ━━━━━┷
╔─━━━━━ ★ ━━━━━━─╗
          *🐍Empates🐍*
╚─━━━━━ ★ ━━━━━━─╝
┯━━━━━ ●●● ━━━━━┯
                       ${userTies}
┷━━━━━ ●●● ━━━━━┷
╔─━━━━━ ★ ━━━━━━─╗
            *✨Pontos✨*
╚─━━━━━ ★ ━━━━━━─╝
┯━━━━━ ●●● ━━━━━┯
                       ${userPoints}
┷━━━━━ ●●● ━━━━━┷
    `
}

exports.tttme = tttme
