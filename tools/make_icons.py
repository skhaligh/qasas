"""Draws the app icon (gold eight-pointed star on lapis) as PNG files, no dependencies."""
import zlib, struct, os, math
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BG, GOLD = (20, 33, 61), (230, 180, 80)
def star(x, y, r): return (abs(x) <= r and abs(y) <= r) or (abs(x) + abs(y) <= r * math.sqrt(2))
def colour(x, y):
    if star(x, y, 0.15): return GOLD
    if star(x, y, 0.27): return BG
    if star(x, y, 0.40): return GOLD
    return BG
def png(n, path, ss=3):
    rows = []
    for j in range(n):
        row = bytearray([0])
        for i in range(n):
            acc = [0, 0, 0]
            for a in range(ss):
                for b in range(ss):
                    c = colour((i + (a + 0.5) / ss) / n - 0.5, (j + (b + 0.5) / ss) / n - 0.5)
                    for k in range(3): acc[k] += c[k]
            row += bytes(v // (ss * ss) for v in acc)
        rows.append(bytes(row))
    def chunk(t, d): return struct.pack('>I', len(d)) + t + d + struct.pack('>I', zlib.crc32(t + d) & 0xffffffff)
    data = b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', n, n, 8, 2, 0, 0, 0)) + chunk(b'IDAT', zlib.compress(b''.join(rows), 9)) + chunk(b'IEND', b'')
    open(path, 'wb').write(data)
for n in (180, 192, 512): png(n, os.path.join(root, 'icons', f'icon-{n}.png'))
print('icons done')
