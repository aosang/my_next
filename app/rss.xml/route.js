// app/rss.xml/route.js
export const GET = (request) => {
  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
<?xml-stylesheet type="text/xsl" href="/rss.xsl"?>
  <rss version="2.0">
  
  <channel>
    <title>Next.js Documentation</title>
    <link>https://nextjs.org/docs</link>
    <description>The React Framework for the Web</description>
  </channel>
  </rss>`, {
    headers: {
      'Content-Type': 'application/xml',
    }
  })
}
