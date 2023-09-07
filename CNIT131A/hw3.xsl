<?xml version = "1.0" encoding = "UTF-8"?>
<!-- HW3 - XSLT. It was created by Chu-Cheng Li on 09/02/2023 -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">   
   <xsl:template match = "/"> 
      <html lang="en"> 
         <head>
            <title>List of Clients</title>
            <style>
               table,th,td
               {
                  border:1px; border-style: dotted; color:black;  
               }
               th
               {
                  background-color: lightblue;
               }
               p
               {
                  color: red;
               }
               .righttd
               {
                  text-align: right;
               }
            </style>
         </head>
         <body> 
            <h1>List of Clients</h1> 
            <table> 
               <tr> 
                  <th>Name</th> 
                  <th>Phone</th> 
                  <th>Email</th> 
                  <th>Account_Total</th> 
               </tr> 
               <xsl:for-each select="Accounts/Client"> 
                  <tr> 
                     <td><xsl:value-of select = "Name"/></td>
                     <td><xsl:value-of select = "Phone"/></td>
                     <td><xsl:value-of select = "E-mail"/></td>
                     <td class="righttd">
                        <xsl:choose>
                           <xsl:when test="Account_Total &lt;= 80000">
                              <p><b>&#36;<xsl:value-of select = "Account_Total"/></b></p>
                           </xsl:when>
                           <xsl:otherwise>
                              &#36;<xsl:value-of select = "Account_Total"/>
                           </xsl:otherwise>
                        </xsl:choose>                
                  </td>
                  </tr> 
               </xsl:for-each> 
            </table> 
         </body> 
      </html> 
   </xsl:template>  
</xsl:stylesheet>