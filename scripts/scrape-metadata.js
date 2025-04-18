// scripts/scrape-metadata.js
import fs from 'fs'
import ogs from 'open-graph-scraper'
import axios from 'axios'

const recursos = [
  { id:1, type:'article', link:'https://revistapesquisa.fapesp.br/consorcio-mapeia-desigualdade-de-genero-na-ciencia-em-16-paises-e-propoe-acoes/' },
  { id:2, type:'article', link:'https://www.gender-sti.org/liedi-bernucci-usp-women-in-leadership-2021/' },
  { id:3, type:'podcast', link:'https://revistapesquisa.fapesp.br/janina-onuki/' }
]

async function fetchDateFallback(url) {
  try {
    const html = (await axios.get(url)).data
    // Procura "Publicado on‑line em   6 mar 2024"
    const m = html.match(/Publicado\s+on[-–]line\s+em\s+([0-9]{1,2}\s+\w+\s+[0-9]{4})/i)
    if (m && m[1]) {
      // Converte "6 mar 2024" para ISO
      const parts = m[1].split(' ')
      const day   = parts[0].padStart(2,'0')
      const month = { jan:'01', fev:'02', mar:'03', abr:'04', mai:'05', jun:'06',
                      jul:'07', ago:'08', set:'09', out:'10', nov:'11', dez:'12' }[parts[1].toLowerCase()]
      const year  = parts[2]
      if (month) return `${year}-${month}-${day}`
    }
  } catch(e) {
    console.warn(`Fallback date failed for ${url}: ${e.message}`)
  }
  return ''
}

async function scrape() {
  const results = []
  for (const item of recursos) {
    let meta = {}
    try {
      const { result, error } = await ogs({ url: item.link, timeout: 10000 })
      if (error) throw new Error(error)
      meta = {
        id: item.id,
        type: item.type,
        link: item.link,
        title:       result.ogTitle     || result.twitterTitle     || '',
        description: result.ogDescription|| result.twitterDescription|| '',
        image:       result.ogImage?.url || result.twitterImage?.url || '',
        author:      result.twitterCreator || result.author || '',
        date:        result.articlePublishedTime
                   || result.ogReleaseDate
                   || result.date
                   || ''
      }
      // se ainda não tiver data, usa fallback
      if (!meta.date) {
        meta.date = await fetchDateFallback(item.link)
      }
    } catch (e) {
      console.warn(`Erro ao raspar ${item.link}:`, e.message)
      meta = { id:item.id, link:item.link, type:item.type, title:'(erro)', description:'', image:'', author:'', date:'' }
    }
    results.push(meta)
  }
  fs.writeFileSync('src/data/recursos.json', JSON.stringify(results, null, 2))
  console.log('✨ Metadados salvos em src/data/recursos.json')
}

scrape().catch(e => {
  console.error('Erro no scraping:', e)
  process.exit(1)
})
