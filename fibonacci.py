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
# The 12th term, F12, is the first term to contain three digits.

# What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

keep_running = True
first_index = 1
second_index = 1

counter = 3
while keep_running:
    third_index = first_index + second_index
    result = len(str(third_index))
    if result >= 1000:
        keep_running = False;
        print "Fiboacci index is " + str(counter) + '\n'
    else:
        first_index += 1
    first_index = second_index
    second_index = third_index
    counter += 1