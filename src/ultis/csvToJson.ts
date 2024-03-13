import fs from 'fs'
import csv from 'csv-parser'

// Hàm convert từ .csv sang .json
async function csvToJson(input: string): Promise<string | undefined> {
  try {
    const jsonArray: any[] = []
    await new Promise<void>((resolve, reject) => {
      fs.createReadStream(input)
        .pipe(csv())
        .on('data', (row) => {
          jsonArray.push(row)
        })
        .on('end', () => {
          resolve()
        })
        .on('error', (error) => {
          reject(error)
        })
    })
    return JSON.stringify(jsonArray, null, 4)
  } catch (e) {
    console.log(e)
  }
}

export default csvToJson
