import os  
  
files = [  
    'app\\about\\page.tsx',  
    'app\\cart\\page.tsx',   
    'app\\contact\\page.tsx',  
    'app\\products\\page.tsx'  
]  
  
for filepath in files:  
    if os.path.exists(filepath):  
        with open(filepath, 'r', encoding='utf-8') as f:  
            content = f.read()  
        content = content.replace('<a href=\\\"/\\\">Home</a>', '<Link href=\\\"/\\\">Home</Link>')  
        content = content.replace('<a href=\\\"/products\\\">Products</a>', '<Link href=\\\"/products\\\">Products</Link>')  
        content = content.replace('<a href=\\\"/about\\\">About</a>', '<Link href=\\\"/about\\\">About</Link>')  
        content = content.replace('<a href=\\\"/contact\\\">Contact</a>', '<Link href=\\\"/contact\\\">Contact</Link>')  
        with open(filepath, 'w', encoding='utf-8') as f:  
            f.write(content)  
        print(f'Fixed: {filepath}') 
