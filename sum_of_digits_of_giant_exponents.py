# 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
# What is the sum of the digits of the number 2^1000?

x = 2**1000 
print x;
y = str(x); 
print type(y);
# print len(y);
sum_digits = 0;
for digits in y:
  sum_digits += int(digits);
print sum_digits;