def find_infected_members(filename):
    with open(filename, 'r') as file:
        infected_set = set()
        meeting_num = 0
        for line in file:
            meeting_num += 1
            attendees = line.strip().split()
            infected_present = False
            for i, attendee in enumerate(attendees):
                if attendee.endswith('*'):
                    infected_member = attendee[:-1]
                    if i != 0:
                        infected_set.add(attendees[i - 1])
                    if i != len(attendees) - 1:
                        infected_set.add(attendees[i + 1])
                    infected_set.add(infected_member)
                    infected_present = True
                    break
            if infected_present:
                infected_list = list(infected_set)
                infected_list.sort()
                print(f"{meeting_num}\t{' '.join(infected_list)}\t{len(infected_list)}")
            else:
                infected_list = list(infected_set)
                infected_list.sort()
                print(f"{meeting_num}\t{' '.join(infected_list)}\t{len(infected_list)}")

            infected_list = list(infected_set)
            infected_list.sort()

            new_infected = set()
            for attendee in attendees:
                if attendee in infected_set:
                    index = attendees.index(attendee)
                    if index != 0:
                        string = attendees[index - 1].replace("*", "")
                        new_infected.add(string)
                    if index != len(attendees) - 1:
                        string = attendees[index + 1].replace("*", "")
                        new_infected.add(string)
            infected_set.update(new_infected)


find_infected_members(filename=input("Enter file name: "))
