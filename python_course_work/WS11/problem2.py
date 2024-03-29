class DNS:
    def __init__(self):
        self._database = {}

    def update(self, domain_name, ip_address):
        self._database[domain_name] = ip_address

    def lookup(self, domain_name):
        return self._database.get(domain_name)


class BlacklistDNS(DNS):
    def __init__(self):
        super().__init__()
        self._blacklist = set()

    def add_to_blacklist(self, ip_address):
        self._blacklist.add(ip_address)

    def lookup(self, domain_name):
        ip_address = super().lookup(domain_name)
        if ip_address in self._blacklist:
            return None
        else:
            return ip_address


def test():
    dns = BlacklistDNS()
    while True:
        command = input("? ")
        parts = command.split()
        if len(parts) == 0:
            continue
        elif parts[0] == 'u' and len(parts) == 3:
            domain_name, ip_address = parts[1], parts[2]
            dns.update(domain_name, ip_address)
        elif parts[0] == 'b' and len(parts) == 2:
            ip_address = parts[1]
            dns.add_to_blacklist(ip_address)
        elif parts[0] == 'l' and len(parts) == 2:
            domain_name = parts[1]
            ip_address = dns.lookup(domain_name)
            if ip_address is not None:
                print(ip_address)
            else:
                print("None")
        elif parts[0] == 'q':
            break
        else:
            print("Bad command.")


if __name__ == '__main__':
    test()