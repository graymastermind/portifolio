def find_common_elements(lst1, lst2):
    common_elements = []
    for element in lst1:
        if element in lst2 and element not in common_elements:
            common_elements.append(element)
    return common_elements


lst1_raw = input("List 1: ")
lst2_raw = input("List 2: ")
lst1 = [int(x) for x in lst1_raw.split(" ")]
lst2 = [int(x) for x in lst2_raw.split(" ")]
common_elements = find_common_elements(lst1, lst2)
print(f"Output: {common_elements}")

