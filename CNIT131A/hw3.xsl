<?xml version = "1.0" encoding = "UTF-8"?>
<!-- HW3 - XSLT. It was created by Chu-Cheng Li on 09/02/2023 -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">   
   <xsl:template match = "/"> 
      <html> 
         <body> 
            <h1>List of Clients</h1> 
            <table border = "1"> 
               <tr bgcolor = "lightblue"> 
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
                     <td align="right">
                        <xsl:choose>
                           <xsl:when test="Account_Total &lt;= 80000">
                              <font color="red"><b>&#36;<xsl:value-of select = "Account_Total"/></b></font>
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