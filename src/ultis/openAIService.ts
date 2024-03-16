import { OpenAI } from 'openai'
import csvToJson from './csvToJson'
import convertStringToNumber from './convertNumber'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

interface Configuration {
  STT: string
  Price: string
  Vga: string
  Mainboard: string
  Ram: string
  SSD: string
  Cpu: string
}

async function openAIService(budget: number, prompt: string) {
  //Init price
  const price: number = budget

  //Get data
  const csvData: string | undefined = await csvToJson('./src/data/gearvn.csv')
  if (csvData) {
    // Nếu csvData không phải là undefined
    const data: Configuration[] = JSON.parse(csvData)
    const mappedData = data.map((item) => ({
      stt: item.STT,
      price: convertStringToNumber(item.Price),
      vga: item.Vga,
      main: item.Mainboard,
      ram: item.Ram,
      ssd: item.SSD,
      cpu: item.Cpu,
    }))
    //Filter data
    const filterData = mappedData.filter((x) => x.price <= budget + 500000)

    //Prompt
    const officePrompt = `
  Based on the data below, do not use any other data.  
  Recommend configuration with a budget equal or less than ${price} and 
  recommend configuration suitable for office use without VGA or GPU.
  Do not suggest 2 identical configurations, if they overlap, only suggest 1 configuration. Format all to JSON.

  JSON Output Example: 
    recommendation: [
        {
        CPU: "i3 12100F",
        Mainboard: "H610",
        Ram: "8GB",
        SSD: "256GB",
        VGA: "RX 6600"
      },
      {
        CPU: "i3 12100F",
        Mainboard: "H610",
        Ram: "8GB",
        SSD: "256GB",
        VGA: "RX 6600"
      },
      ...
    ],

  data: ${JSON.stringify(filterData)}

  Answer all for Vietnamese:`

    const gamingPrompt = `Based on the data below, do not use any other data.  
  Recommend configuration with a budget equal or less than ${price} and 
  recommend configuration suitable for gaming use VGA or GPU. Maximum 5 configurations prioritize the highest price.
  Do not suggest 2 identical configurations, if they overlap, only suggest 1 configuration. Format all to JSON.

  JSON Output Example: 
    recommendation: [
        {
        CPU: "i3 12100F",
        Mainboard: "H610",
        Ram: "8GB",
        SSD: "256GB",
        VGA: "RX 6600"
      },
      {
        CPU: "i3 12100F",
        Mainboard: "H610",
        Ram: "8GB",
        SSD: "256GB",
        VGA: "RX 6600"
      },
      ...
    ],

  data: ${JSON.stringify(filterData)}

  Answer:`

    //Completion
    const completion = await openai.completions.create({
      prompt: prompt.toLowerCase() === 'office' ? officePrompt : gamingPrompt,
      model: 'gpt-3.5-turbo-instruct',
      max_tokens: 2000,
      temperature: 0.7,
    })
    //console.log(completion.choices[0])
    return completion.choices[0]
  } else {
    console.error('CSV to Json returned undefined.')
  }
}

export default openAIService
