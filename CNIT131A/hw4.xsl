<?xml version = "1.0" encoding = "UTF-8"?>
<!--HW4 - XPath, XSL-FO by Chu-Cheng Li on 09/16/2023 -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
   <xsl:template match = "/">
      <html lang="en"> 
         <head>
            <meta name="description" content=" XML, JSON, XSLT, HTML5."></meta>
            <title>ABC Financial Startup company</title>
            <style>
            .financialup {
               display: block;
               margin-left: auto;
               margin-right: auto;
               width:230px;
               height:142px;
            }
            </style>
         </head>
         <body> 
            <h1>ABC Financial Startup company</h1>
               <img src="financialstartup.jpg" alt="Financial Up Picture" class="financialup">
               </img>
            <p>We are a very young financial manager company and we are proud of our clients.</p>
            <p>We have started with 1 client a little bit more than 10 years ago and now we have <xsl:value-of select="count(Accounts/Client)"/>  clients.</p>
            <p>These are our clients: <xsl:apply-templates select="Accounts/Client"></xsl:apply-templates></p>
            <p> <xsl:value-of select="count(Accounts/Client/Years[. &gt;= 7])"/> of our clients are with us for more than 7 years!</p>

         </body> 
      </html> 
   </xsl:template>
   <xsl:template match="Client">
         <xsl:choose>
            <xsl:when test="position()=last()">
               and <xsl:value-of select = "Name/First"/>&#160;<xsl:value-of select = "Name/Last"/>.
            </xsl:when>
            <xsl:otherwise>
               <xsl:value-of select = "Name/First"/>&#160;<xsl:value-of select = "Name/Last"/>,
            </xsl:otherwise>
         </xsl:choose> 
   </xsl:template>  
</xsl:stylesheet>

