TIMESTAMP=`date +%g.%m%d.%H%M`

dirname=$1
if [ -z "$dirname" ]; then
  echo "Usage: $0 subdir_name_without slash"
  exit 1
fi

TMP=tmp.xml
cat $dirname/gadget_boiler_top.txt >$TMP
cat $dirname/index.html >>$TMP
cat $dirname/gadget_boiler_bottom.txt >>$TMP

# replace IS_GADGET, VERSION, URL
sed -e 's/IS_GADGET = false/IS_GADGET = true/g' $TMP | sed -e "s/var VERSION = .*$/var VERSION = \"$TIMESTAMP\";/g" | sed -e "s#HREF=\"#HREF=\"http://dancecentral.googlecode.com/svn/trunk/$dirname/#" | sed -e "s#SRC=\"#SRC=\"http://dancecentral.googlecode.com/svn/trunk/$dirname/#" > $dirname.xml

rm $TMP
