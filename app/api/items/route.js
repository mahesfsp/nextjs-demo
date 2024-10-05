export async function GET(req) {
   const type= req.nextUrl.searchParams.get('type');
   console.log(type); 
   return new Response('Test', {
        status: 200,
        headers: {
            'Content-Type': 'text/plain'
        }
    });
}


export async function POST() {
    return new Response('Test', {
        status: 200,
        headers: {
            'Content-Type': 'text/plain'
        }
    });
}