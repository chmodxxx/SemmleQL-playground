<HTML>

<TITLE>Welcome!</TITLE>
Hi

<SCRIPT>
var pos=document.URL.indexOf("name=")+5;
document.write(document.URL.substring(pos,document.URL.length));
</SCRIPT>

<BR>
Welcome to our system

…

</HTML>
<script>
   document.write("<b>Current URL</b> : " + document.baseURI);
</script>
<b>Current URL:</b> <span id="contentholder"></span>
<script>
document.getElementById("contentholder").textContent = document.baseURI;    
</script>
