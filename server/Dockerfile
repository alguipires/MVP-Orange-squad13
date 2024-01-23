# Definir a imagem base que será usada
FROM node:16.14-alpine

# Definir o diretório de trabalho para a aplicação
WORKDIR /app-server

# Copiar o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos para o diretório de trabalho
COPY . .

# Expor a porta do server
EXPOSE 3001

# Iniciar o server

ENTRYPOINT [ "npm", "run" ]

CMD ["dev"]