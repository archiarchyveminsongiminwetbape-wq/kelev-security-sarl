import glob
import os
import re

base = 'src'
files = glob.glob(os.path.join(base, '**', '*.jsx'), recursive=True) + glob.glob(os.path.join(base, '**', '*.js'), recursive=True)
key_re = re.compile(r't\(\s*["\']([^"\']+)["\']\s*\)')
keys = set()
for f in files:
    text = open(f, 'r', encoding='utf8').read()
    for m in key_re.finditer(text):
        keys.add(m.group(1))

text = open('src/i18n/i18n.jsx', 'r', encoding='utf8').read()

def extract_block(text, marker):
    pattern = re.compile(re.escape(marker) + r'\s*:\s*\{', re.S)
    match = pattern.search(text)
    if not match:
        return None
    start = text.index('{', match.end() - 1)
    depth = 0
    for i in range(start, len(text)):
        if text[i] == '{':
            depth += 1
        elif text[i] == '}':
            depth -= 1
            if depth == 0:
                return text[start + 1:i]
    return None

match_fr = extract_block(text, 'fr')
match_en = extract_block(text, 'en')
if match_fr is None or match_en is None:
    raise SystemExit('Cannot parse i18n blocks')

pattern = re.compile(r"(['\"])(.*?)\1\s*:\s*(['\"])(.*?)\3\s*,?", re.S)

fr = {m.group(2): m.group(4) for m in pattern.finditer(match_fr)}
en = {m.group(2): m.group(4) for m in pattern.finditer(match_en)}

missing = []
for k in sorted(keys):
    if k not in fr:
        missing.append(f'fr:{k}')
    if k not in en:
        missing.append(f'en:{k}')

print('keys', len(keys))
print('missing', len(missing))
for m in missing:
    print(m)
