def dec2base(d,b):
    def digit(r):
        return chr(48 + r if (r<10) else 55 + r)

    d, r = d// b,d % b

    m = digit(r)
    while(d!=0):
        d, r = d // b, d % b
        m+= digit(r)

    return m[::-1]

print(dec2base(6563, 7))
