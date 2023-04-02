// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  totalSubscribers: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  function generateRandom(maxLimit = 100000) {
    let rand = Math.random() * maxLimit;
    console.log(rand); // say 99.81321410836433

    rand = Math.floor(rand); // 99
    return rand;
  }
  let n = generateRandom(); // 43

  res.status(200).json({ totalSubscribers: n })
}
