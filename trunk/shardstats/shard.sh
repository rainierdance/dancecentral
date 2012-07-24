input=$1
output_past=output_past.csv
output_current=output_current.csv

echo "Working on $input..."

###################################
# testing r6.csv should be 0 lines

group=test_group.csv
payment=test_payment.csv
private=test_private.csv
practice=test_practice.csv
teach=test_teach.csv
youth=test_youth.csv

grep ',Practice,' $input >$practice
grep -v ',Practice,' $input >r1.csv

grep ',Teach,' $input >$teach
grep -v ',Teach,' r1.csv >r2.csv

grep ',Youth,' $input >$youth
grep -v ',Youth,' r2.csv >r3.csv

grep ',Payment,' $input >$payment
grep -v ',Payment,' r3.csv >r4.csv

grep ',Private,' $input >$private
grep -v ',Private,' r4.csv >r5.csv

grep ',Group,' $input >$group
grep -v ',Group,' r5.csv >r6.csv

###################################
# for real

# remove trailing spaces
sed  's/ *,/,/g' $input > $input.cleanup

grep -f filter_ratetypes_extract $input.cleanup > $output_past
grep -f filter_ratetypes_extract $input.cleanup > $output_past.1.test
grep -v -f filter_ratetypes_extract $input.cleanup > tmp.csv

grep -f filter_clear_accounts tmp.csv >> $output_past
grep -f filter_clear_accounts tmp.csv > $output_past.2.test
grep -v -f filter_clear_accounts tmp.csv > $output_current

rm tmp.csv

echo 'Exiting...'
