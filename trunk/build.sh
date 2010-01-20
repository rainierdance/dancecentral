TIMESTAMP=`date +%g.%m%d.%H%M`

TMP=tmp.xml
cat gadget_boiler_top.txt >$TMP
cat figures.html >>$TMP
cat gadget_boiler_bottom.txt >>$TMP
sed -e 's/IS_GADGET = false/IS_GADGET = true/g' $TMP | sed -e "s/var VERSION = .*$/var VERSION = \"$TIMESTAMP\";/g" | sed -e 's#HREF="#HREF="http://dancecentral.googlecode.com/svn/trunk/#' | sed -e 's#SRC="#SRC="http://dancecentral.googlecode.com/svn/trunk/#' > figures.xml

 rm $TMP
