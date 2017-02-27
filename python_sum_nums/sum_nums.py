with open('numbers.txt') as file:
    file_contents_as_list = file.readlines()

# numbers.txt has a bunch of random numbers and the goal of this challenge is to sum all the digits of all the numbers
# to come up with the final result.You can open a file and read its contents using the "open" keyword.
# By default, readlines will put the filelines into a list. The below code will do the trick.
# For information on "with" see this article.

number_list = file_contents_as_list; 
# print len(numbers)

to_sum_list = []
total_sum = 0;
new_num = 0;
num = 0
print number_list
for number in number_list:
	new_num = number.replace("/n", "")
	print new_num
	print type(new_num)
	while num < len(new_num):
	# for num in range(0, len(new_num)):
		if new_num[num] == "0" or '1' or '2' or '3' or '4' or '5' or '6' or '7' or '8' or '9':
			to_sum_list.append(num)
print to_sum_list
print type(to_sum_list)
numbz = sum(to_sum_list)
print numbz


# Andy's solution below
# with open('numbers.txt') as file:
#     file_contents_as_list = file.readlines();

# numbers = file_contents_as_list;
# total_sum = 0;

# for number in numbers:
#     list_num = int(number);
#     list = [int(digit) for digit in str(list_num)]
#     num_sum = 0;
#     for i in list:
#         num_sum += i;
#     print num_sum;
#     total_sum += num_sum;
# print total_sum;


