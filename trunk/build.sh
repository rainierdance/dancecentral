TIMESTAMP=`date +%g.%m%d.%H%M`
TMP=tmp.xml; cat gadget_boiler_top.txt >$TMP; cat figures.html >>$TMP; cat gadget_boiler_bottom.txt >>$TMP; sed -e 's/IS_GADGET = false/IS_GADGET = true/g' $TMP | sed -e "s/var VERSION = .*$/var VERSION = \"$TIMESTAMP\";/g" >figures.xml; rm $TMP
