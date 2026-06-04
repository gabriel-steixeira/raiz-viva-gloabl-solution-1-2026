import os
from PIL import Image

def main():
    input_path = "public/images/map-brazil.jpg"
    output_path = "public/images/map-brazil.png"
    
    if not os.path.exists(input_path):
        print(f"Erro: {input_path} nao encontrado.")
        return
        
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    newData = []
    
    for item in datas:
        # Se for muito escuro (fundo preto do JPEG), torna transparente (alpha = 0)
        if item[0] < 20 and item[1] < 20 and item[2] < 20:
            newData.append((0, 0, 0, 0))
        else:
            # Mantém o pixel original
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Sucesso: imagem salva em {output_path}")

if __name__ == "__main__":
    main()
