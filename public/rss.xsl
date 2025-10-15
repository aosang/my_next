<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>

<xsl:template match="/rss">
  <html>
    <head>
      <title><xsl:value-of select="channel/title"/> - RSS Feed</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f5f5;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 10px;
          margin-bottom: 30px;
        }
        .header h1 {
          margin: 0 0 10px 0;
          font-size: 2em;
        }
        .header p {
          margin: 5px 0;
          opacity: 0.9;
        }
        .header a {
          color: white;
          text-decoration: none;
          border-bottom: 1px dotted rgba(255,255,255,0.5);
        }
        .info {
          background: #fff3cd;
          border-left: 4px solid #ffc107;
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 4px;
        }
        .item {
          background: white;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .item h2 {
          margin-top: 0;
          color: #333;
        }
        .item a {
          color: #667eea;
          text-decoration: none;
        }
        .item a:hover {
          text-decoration: underline;
        }
        .item .date {
          color: #666;
          font-size: 0.9em;
          margin-bottom: 10px;
        }
        .item .description {
          color: #444;
          line-height: 1.6;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>📡 <xsl:value-of select="channel/title"/></h1>
        <p><strong>Link:</strong> <a href="{channel/link}"><xsl:value-of select="channel/link"/></a></p>
        <p><xsl:value-of select="channel/description"/></p>
      </div>
      
      <div class="info">
        <strong>ℹ️ This is an RSS feed.</strong> You can subscribe to it using an RSS reader like Feedly, Inoreader, or NetNewsWire.
      </div>
      
      <xsl:for-each select="channel/item">
        <div class="item">
          <h2>
            <a href="{link}">
              <xsl:value-of select="title"/>
            </a>
          </h2>
          <xsl:if test="pubDate">
            <div class="date">
              📅 <xsl:value-of select="pubDate"/>
            </div>
          </xsl:if>
          <div class="description">
            <xsl:value-of select="description" disable-output-escaping="yes"/>
          </div>
        </div>
      </xsl:for-each>
    </body>
  </html>
</xsl:template>

</xsl:stylesheet>

