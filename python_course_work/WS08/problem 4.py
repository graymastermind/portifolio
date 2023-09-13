def merge_descending(list1, list2):
    list1.sort(reverse=True)
    list2.sort(reverse=True)
    merged_list = []
    while list1 and list2:
        if list1[0] >= list2[0]:
            merged_list.append(list1.pop(0))
        else:
            merged_list.append(list2.pop(0))
    merged_list.extend(list1)
    merged_list.extend(list2)
    return merged_list

if __name__ == '__main__':
    list1 = input('List 1: ').split()
    list2 = input('List 2: ').split()
    list1 = [int(x) for x in list1]
    list2 = [int(x) for x in list2]
    result = merge_descending(list1, list2)
    print(result)
