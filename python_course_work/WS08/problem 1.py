def rotate_list(lst):
    initial_lst = lst.copy()
    print(lst)
    n = len(lst)
    for i in range(n):
        lst.append(lst.pop(0))
        print(lst)
        if lst == initial_lst and i == n-1:
            break


input_str = input("Input a list: ")
lst = [int(x) for x in input_str.split(",")]
rotate_list(lst)
