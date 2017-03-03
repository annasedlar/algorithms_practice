# The Fibonacci sequence is defined by the recurrence relation:
# Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
# Hence the first 12 terms will be:
# F1 = 1
# F2 = 1
# F3 = 2
# F4 = 3
# F5 = 5
# F6 = 8
# F7 = 13
# F8 = 21
# F9 = 34
# F10 = 55
# F11 = 89
# F12 = 144
# list_of_sums = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597]; 
# The 12th term, F12, is the first term to contain three digits.
# What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

list_of_sums = [0, 1, 1, 2, 3, 5,8, 13, 21, 34, 55, 89, 144]; 

def fibonacci(list):
  index_of_last_number = list_of_sums[-1];
  # print index_of_last_number;
  
  index_of_second_to_last_number = list_of_sums[-2];
  # print index_of_second_to_last_number;
  
  num_to_add = (index_of_last_number+ index_of_second_to_last_number)
  
  list_of_sums.append(num_to_add);
  # print list_of_sums;
  # print list_of_sums[-1];

fibonacci(list_of_sums);

def newFunc(digits):
# find index of first term to contain 4 digits
# check length of last index in length. if not == digits, call fibonacci until it is:
  print len(str(list_of_sums[-1]))
  while len(str(list_of_sums[-1])) < digits:
      fibonacci(list_of_sums)
      print list_of_sums
      print len(list_of_sums)
      print "The index of the first term in the Fibonacci sequence to contain " + str(digits) + " digits is: " + str(len(list_of_sums))
newFunc(7);


# 1000 digit according to Rob: 1346269 (IT"S WRONG)
