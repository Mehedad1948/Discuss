import { NextRequest, NextResponse } from "next/server";

import { promisify } from 'util';
import fs from 'fs';

const readFileAsync = promisify(fs.readFile);


export async function GET(request: NextRequest, res: NextResponse) {
  console.log('called');
  const answer = {
    data: 'answer'
  }


    const file = await readFileAsync('public/dashboard/index.html', 'utf-8');
    // res.status(200).send(file);


    return new NextResponse(file, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  }
  
  