# Usage: $0 data.csv ratetypesfile
input=$1
filter_ratetypes_extract=$2

if [ -z $input ] ; then
  echo "$0 data.csv filter_ratetypes_extract"
  exit
fi

data_past=data_past
output_carryover=output_carryover.csv

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

echo "Checking if there are unexpected data lines left..."
echo "----------"
wc -l r6.csv
echo "----------"
cat r6.csv
echo "----------"

rm r1.csv r2.csv r3.csv r4.csv r5.csv r6.csv

###################################
# for real

if [ -z $filter_ratetypes_extract ] ; then
  echo "$0 $1 filter_rateypes_extract"
  exit
fi

# remove trailing spaces
sed  's/ *,/,/g' $input > $input.cleanup

grep -f $filter_ratetypes_extract $input.cleanup > $data_past.types.csv
grep -v -f $filter_ratetypes_extract $input.cleanup > tmp.csv

# remove empty lines
sed '/^[\s]*$/d' filter_clear_accounts >acct.tmp
sed 's/,Simeon Stoynov,/,Simeon Stoynov,Private,/g' acct.tmp > clear_accounts

# append to the past data for accounts that have no overdue
grep -f clear_accounts tmp.csv > $data_past.clear.csv

# remainder should be kept in current data
grep -v -f clear_accounts tmp.csv > $output_carryover

rm tmp.csv $input.cleanup acct.tmp

echo 'Exiting...'
