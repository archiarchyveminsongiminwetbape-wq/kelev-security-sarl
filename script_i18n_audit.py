import glob, re, os
base='src'
files = glob.glob(os.path.join(base, '**', '*.jsx'), recursive=True) + glob.glob(os.path.join(base, '**', '*.js'), recursive=True)
key_re = re.compile(r"t\(\s*['\"]([^'\"]+)['\"]\s*\)")
keys = set()
for f in files:
    text = open(f, 'r', encoding='utf8').read()
    for m in key_re.finditer(text):
        keys.add(m.group(1))
text = open('src/i18n/i18n.jsx', 'r', encoding='utf8').read()
match_fr = re.search(r'fr:\s*\{(.*?)\n\s*\}.*,?\n\s*en:\s*\{', text, re.S)
match_en = re.search(r'en:\s*\{(.*?)\n\s*\}\s*\}\s*$', text, re.S)
if not match_fr or not match_en:
    raise SystemExit('Cannot parse i18n blocks')

def parse_block(block):
    out = {}
    for m in re.finditer(r"['\"]([^'\"]+)['\"]\s*:\s*['\"]((?:\\.|[^'\\"\n])*)['\"]\s*,?", block):
        out[m.group(1)] = m.group(2)
    return out
fr = parse_block(match_fr.group(1))
en = parse_block(match_en.group(1))
missing = []
for k in sorted(keys):
    if k not in fr: missing.append(f'fr:{k}')
    if k not in en: missing.append(f'en:{k}')
print('keys', len(keys))
print('missing', len(missing))
for m in missing:
    print(m)
